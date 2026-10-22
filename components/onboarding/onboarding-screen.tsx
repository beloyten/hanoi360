"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CheckIcon } from "./icons";
import { LogoAnimation } from "./logo-animation";

type Slide = {
  /** Client export (22/10): 1206x1980, the 402x660 web area of Safari on iPhone @3x, bottom shade baked in. */
  image: string;
  alt: string;
  heading: [string, string];
  subheading: string;
};

const SLIDES: Slide[] = [
  {
    image: "/onboarding/slide-1.webp",
    alt: "Hoàng hôn trên Hồ Tây với chùa Trấn Quốc",
    heading: ["Chào mừng", "đến với Hà Nội"],
    subheading: "Bắt đầu hành trình của bạn",
  },
  {
    image: "/onboarding/slide-2.webp",
    alt: "Một bát phở bò Hà Nội truyền thống",
    heading: ["Nếm vị", "của Hà Nội"],
    subheading: "Từ gánh phở sớm mai đến ly cà phê phố Cổ",
  },
  {
    image: "/onboarding/slide-3.webp",
    alt: "Khuê Văn Các tại Văn Miếu - Quốc Tử Giám",
    heading: ["Chạm vào", "ngàn năm văn hiến"],
    subheading: "Mỗi địa danh kể một câu chuyện",
  },
  {
    image: "/onboarding/slide-4.webp",
    alt: "Cầu Long Biên với dòng người qua lại",
    heading: ["Hoà vào", "nhịp sống phố thị"],
    subheading: "Nơi truyền thống và hiện đại cùng hiện diện",
  },
];

const DRAG_THRESHOLD = 60;
const WHEEL_THRESHOLD = 40;
const WHEEL_LOCK_MS = 550;
const SWIPE_CONFIRM_RATIO = 0.5;
const CIRCLE_SIZE = 54;
// Figma track: the pill starts 4px from the left edge, the target circle sits 5px from the right.
const TRACK_INSET = 4 + 5;
const MORPH_EASE = "cubic-bezier(0.22,1,0.36,1)";
const BOUNCE_EASE = "cubic-bezier(0.34,1.56,0.64,1)";
const EDGE_RESISTANCE = 0.35;

type RGBA = { r: number; g: number; b: number; a: number };

// Figma "Layout 1_welcome" (369:7574): dots #F2D79F / #9698AB; the pill is #AA6E00 and darkens to #805300 while
// pressed. Figma "done" (795:510996, client 22/10): the pill goes away and the circle turns #009B8C with a #00F2DB tick.
const DOT_INACTIVE: RGBA = { r: 150, g: 152, b: 171, a: 1 };
const DOT_ACTIVE: RGBA = { r: 242, g: 215, b: 159, a: 1 };
const PILL_COLOR = "#AA6E00";
const PILL_PRESSED = "#805300";
const DONE_CIRCLE = "#009B8C";
const DONE_TICK = "#00F2DB";

const clamp01 = (t: number) => Math.min(Math.max(t, 0), 1);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const mixRGBA = (from: RGBA, to: RGBA, t: number) => {
  const tt = clamp01(t);
  const r = Math.round(lerp(from.r, to.r, tt));
  const g = Math.round(lerp(from.g, to.g, tt));
  const b = Math.round(lerp(from.b, to.b, tt));
  const a = lerp(from.a, to.a, tt);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export function OnboardingScreen() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragTrackWidth, setDragTrackWidth] = useState(1);

  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const wheelLocked = useRef(false);
  const wheelAccum = useRef(0);

  const [pillOffset, setPillOffset] = useState(0);
  const [isPillDragging, setIsPillDragging] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [pillNaturalWidth, setPillNaturalWidth] = useState(0);
  const [pillTrackWidth, setPillTrackWidth] = useState(0);
  const pillTrackRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLButtonElement>(null);
  const pillDragStartX = useRef(0);
  const pillMoved = useRef(false);
  const pillCommitted = useRef(false);

  useLayoutEffect(() => {
    const measure = () => {
      if (pillRef.current) setPillNaturalWidth(pillRef.current.getBoundingClientRect().width);
      if (pillTrackRef.current) setPillTrackWidth(pillTrackRef.current.getBoundingClientRect().width);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const isLast = index === SLIDES.length - 1;

  useEffect(() => {
    if (isDragging) return;
    const id = setInterval(() => setIndex((prev) => (prev + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, [index, isDragging]);

  const goTo = (next: number) => {
    setIndex(Math.min(Math.max(next, 0), SLIDES.length - 1));
  };

  const finishOnboarding = () => {
    router.push("/home");
  };

  const handleNext = () => {
    if (isLast) {
      finishOnboarding();
    } else {
      goTo(index + 1);
    }
  };

  const handlePointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragStartX.current = event.clientX;
    setDragTrackWidth(trackRef.current?.offsetWidth || 1);
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    if (!isDragging) return;
    let delta = event.clientX - dragStartX.current;
    const atStart = index === 0 && delta > 0;
    const atEnd = index === SLIDES.length - 1 && delta < 0;
    if (atStart || atEnd) delta *= EDGE_RESISTANCE;
    setDragOffset(delta);
  };

  const endDrag = () => {
    if (!isDragging) return;
    const ratio = dragOffset / dragTrackWidth;
    if (ratio <= -0.12 || dragOffset <= -DRAG_THRESHOLD) {
      handleNext();
    } else if (ratio >= 0.12 || dragOffset >= DRAG_THRESHOLD) {
      goTo(index - 1);
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleWheel = (event: React.WheelEvent) => {
    const horizontal =
      Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : 0;
    if (!horizontal || wheelLocked.current) return;
    wheelAccum.current += horizontal;
    if (Math.abs(wheelAccum.current) < WHEEL_THRESHOLD) return;

    wheelLocked.current = true;
    if (wheelAccum.current > 0) {
      handleNext();
    } else {
      goTo(index - 1);
    }
    wheelAccum.current = 0;
    window.setTimeout(() => {
      wheelLocked.current = false;
    }, WHEEL_LOCK_MS);
  };

  const dragPercent = isDragging ? (dragOffset / dragTrackWidth) * 100 : 0;
  const continuousIndex = index - dragPercent / 100;

  const getSlotOffset = () => {
    const trackWidth = pillTrackRef.current?.offsetWidth || 0;
    return Math.max(trackWidth - CIRCLE_SIZE - TRACK_INSET, 0);
  };

  // Matches getSlotOffset(): the button's left edge travels exactly as far as its
  // final resting spot, so its right edge stays flush with the circle throughout the drag.
  const getDragMax = () => getSlotOffset();

  const getConfirmThreshold = () => Math.min(getDragMax() * SWIPE_CONFIRM_RATIO, 160);

  const commitPill = () => {
    if (pillCommitted.current) return;
    pillCommitted.current = true;
    setIsPillDragging(false);
    setPillOffset(getDragMax());
    window.setTimeout(() => {
      setPillOffset(getSlotOffset());
      setIsConfirmed(true);
    }, 300);
    window.setTimeout(finishOnboarding, 660);
  };

  const handlePillPointerDown = (event: React.PointerEvent) => {
    if (isConfirmed) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pillDragStartX.current = event.clientX;
    pillMoved.current = false;
    setIsPillDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePillPointerMove = (event: React.PointerEvent) => {
    if (!isPillDragging || isConfirmed) return;
    const delta = event.clientX - pillDragStartX.current;
    if (Math.abs(delta) > 4) pillMoved.current = true;
    const dragMax = getDragMax();
    setPillOffset(Math.min(Math.max(delta, 0), dragMax));
  };

  const handlePillPointerUp = () => {
    if (!isPillDragging || isConfirmed) return;
    setIsPillDragging(false);
    if (pillOffset >= getConfirmThreshold()) {
      commitPill();
    } else {
      setPillOffset(0);
    }
  };

  const handlePillClick = () => {
    if (pillMoved.current) {
      pillMoved.current = false;
      return;
    }
    commitPill();
  };

  const pillDragMax = Math.max(pillTrackWidth - CIRCLE_SIZE - TRACK_INSET, 0);
  const pillProgress = pillDragMax > 0 ? Math.min(Math.max(pillOffset / pillDragMax, 0), 1) : 0;
  const pillWidth =
    pillNaturalWidth > 0
      ? isConfirmed
        ? CIRCLE_SIZE
        : lerp(pillNaturalWidth, CIRCLE_SIZE, pillProgress)
      : undefined;

  return (
    <div className="relative h-svh max-h-dvh w-full overflow-hidden overscroll-none bg-black">
      <div
        ref={trackRef}
        className="flex h-full w-full touch-none select-none"
        style={{
          transform: `translateX(${-index * 100 + dragPercent}%)`,
          transition: isDragging ? "none" : "transform 500ms cubic-bezier(0.22,1,0.36,1)",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onWheel={handleWheel}
        onDragStart={(event) => event.preventDefault()}
      >
        {SLIDES.map((slide, i) => {
          const distance = Math.min(Math.abs(i - continuousIndex), 1);
          const scale = 1 - distance * 0.08;
          const opacity = 1 - distance * 0.35;
          return (
            <div
              key={slide.image}
              className="relative h-full w-full shrink-0"
              style={{
                transform: `scale(${scale})`,
                opacity,
                transition: isDragging
                  ? "none"
                  : "transform 500ms cubic-bezier(0.22,1,0.36,1), opacity 500ms cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              {/* Served as-is: next/image's 100vw width would upscale the cover crop on a portrait screen. */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                unoptimized
                priority={i === 0}
                draggable={false}
                className="object-cover"
              />
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end">
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 transition-opacity duration-300"
          style={{
            // Figma: 109px logo at y 97 of the 736px frame.
            top: "max(calc(97 / 736 * 100%), env(safe-area-inset-top))",
            opacity: index === 0 ? 1 : 0,
          }}
        >
          <LogoAnimation size={109} />
        </div>

        {/* Text stays pointer-transparent so swipes starting on it still reach the slide track. */}
        <div
          className="flex flex-col px-[25px]"
          style={{ paddingBottom: "max(32px, env(safe-area-inset-bottom))" }}
        >
          <h1 className="text-[36px] leading-[44px] font-bold text-[#EAEBF2]/90">
            <span className="block">{SLIDES[index].heading[0]}</span>
            <span className="block">{SLIDES[index].heading[1]}</span>
          </h1>
          <p className="mt-2 text-[15px] leading-[18px] text-[#EAEBF2]/90">{SLIDES[index].subheading}</p>

          <div className="pointer-events-auto mt-4 flex gap-1" role="tablist" aria-label="Điều hướng giới thiệu">
            {SLIDES.map((slide, i) => {
              const activeness = 1 - clamp01(Math.abs(continuousIndex - i));
              return (
                <button
                  key={slide.image}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Đi tới slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="h-1 w-5 rounded-[9px]"
                  style={{
                    backgroundColor: mixRGBA(DOT_INACTIVE, DOT_ACTIVE, activeness),
                    transition: isDragging ? "none" : "background-color 300ms",
                  }}
                />
              );
            })}
          </div>

          <div
            ref={pillTrackRef}
            className="pointer-events-auto relative mt-[45px] h-[62px] w-full rounded-[40px] select-none"
            style={{
              background: "linear-gradient(270deg, rgba(217, 217, 217, 0.45) 0%, rgba(0, 0, 0, 0) 100%)",
              backdropFilter: "blur(6.9px)",
              WebkitBackdropFilter: "blur(6.9px)",
            }}
          >
            <div
              className="pointer-events-none absolute top-1 right-[5px] flex size-13.5 items-center justify-center rounded-full transition-colors duration-200"
              style={{ backgroundColor: isConfirmed ? DONE_CIRCLE : "rgba(217,217,217,0.36)" }}
            >
              {isConfirmed ? (
                <span style={{ color: DONE_TICK }}>
                  <CheckIcon width={18} height={18} />
                </span>
              ) : (
                <Image src="/onboarding/chevron.svg" alt="" width={13} height={8} />
              )}
            </div>

            <button
              ref={pillRef}
              type="button"
              onPointerDown={handlePillPointerDown}
              onPointerMove={handlePillPointerMove}
              onPointerUp={handlePillPointerUp}
              onPointerCancel={handlePillPointerUp}
              onClick={handlePillClick}
              aria-label="Vuốt hoặc nhấn để khám phá ngay"
              className="absolute top-1 left-1 flex h-[54px] shrink-0 cursor-grab touch-none items-center justify-center overflow-hidden rounded-[43px] text-sm whitespace-nowrap text-[#f3ebd9] active:cursor-grabbing"
              style={{
                width: pillWidth,
                backgroundColor: isPillDragging ? PILL_PRESSED : PILL_COLOR,
                opacity: isConfirmed ? 0 : 1,
                transform: `translateX(${pillOffset}px) scale(${1 + pillProgress * 0.04})`,
                transition: isPillDragging
                  ? "background-color 80ms linear"
                  : `transform 320ms ${BOUNCE_EASE}, width 320ms ${MORPH_EASE}, background-color 200ms, opacity 200ms`,
              }}
            >
              <span
                className="shrink-0 px-4"
                style={{
                  opacity: isConfirmed ? 0 : Math.max(1 - pillProgress * 1.6, 0),
                  transition: isPillDragging ? "none" : "opacity 200ms",
                }}
              >
                {isLast ? "Bắt đầu" : "Khám phá ngay"}
              </span>
              <span
                className="absolute inset-0 flex items-center justify-center text-[#f3ebd9]"
                style={{
                  opacity: isConfirmed ? 1 : clamp01(pillProgress * 1.6),
                  transform: `scale(${isConfirmed ? 1 : 0.5 + clamp01(pillProgress * 1.6) * 0.5})`,
                  transition: isPillDragging ? "none" : "opacity 200ms, transform 200ms",
                }}
              >
                <CheckIcon width={18} height={18} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
