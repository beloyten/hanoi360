"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "/home/banner-1.png",
  "/home/banner-2.png",
  "/home/banner-3.png",
  "/home/banner-4.png",
  "/home/banner-5.png",
];

// Banner artwork -> event page (Figma "Banner sự kiện" section).
const HREFS: (string | null)[] = [
  "/trien-lam/workshop-hoa-gom",
  "/trien-lam/van-gogh",
  "/trien-lam/bien-do-tuong-lai",
  "/trien-lam/dong-chay-cua-lua",
  "/trien-lam/nha-hat-ke-chuyen",
];

const EASE = "cubic-bezier(0.45, 0, 0.15, 1)";
const TRANSITION = `transform 320ms ${EASE}, opacity 320ms ${EASE}`;

// Figma Home "Banner" (686:90000), 393x390: the focused card is a 303x378 frame (white 53% + blur)
// holding a 295x370 image; side cards are 196x245 images at y 62.5, centered ~218px left/right.
const CARD_W = 303;
const CARD_H = 378;
const SIDE_SCALE = 196 / CARD_W;
const SIDE_SHIFT_X = 218;
const SIDE_SHIFT_Y = 62.5 + 245 / 2 - CARD_H / 2;

export function Banner() {
  const router = useRouter();
  const [active, setActive] = useState(2);
  // Press feedback for the focused card (state, not :active, which iOS Safari skips without touch handlers).
  const [pressed, setPressed] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const didDrag = useRef(false);
  const count = IMAGES.length;

  const go = (dir: number) => setActive((prev) => (prev + dir + count) % count);

  useEffect(() => {
    const id = setInterval(() => setActive((prev) => (prev + 1) % count), 5000);
    return () => clearInterval(id);
  }, [active, count]);

  return (
    <div
      className="relative isolate h-[390px] w-full overflow-hidden"
      style={{ touchAction: "pan-y" }}
      onPointerDown={(e) => {
        dragStartX.current = e.clientX;
        didDrag.current = false;
      }}
      onPointerUp={(e) => {
        if (dragStartX.current === null) return;
        const dx = e.clientX - dragStartX.current;
        if (Math.abs(dx) > 40) {
          go(dx < 0 ? 1 : -1);
          didDrag.current = true;
        }
        dragStartX.current = null;
      }}
      onPointerCancel={() => {
        dragStartX.current = null;
      }}
    >
      <div
        className="pointer-events-none absolute top-0 left-0 h-[85px] w-full"
        style={{ background: "linear-gradient(rgb(170, 110, 1) 0%, rgb(141, 89, 0) 100%)" }}
      />

      {IMAGES.map((src, i) => {
        let offset = (((i - active) % count) + count) % count;
        if (offset > count / 2) offset -= count;
        const isActive = offset === 0;
        const distance = Math.abs(offset);

        return (
          <div
            key={src}
            className="absolute"
            style={{
              width: CARD_W,
              height: CARD_H,
              top: 0,
              left: "50%",
              marginLeft: -CARD_W / 2,
              transform: isActive
                ? "none"
                : `translate(${offset * SIDE_SHIFT_X}px, ${SIDE_SHIFT_Y}px) scale(${SIDE_SCALE})`,
              opacity: distance >= 2 ? 0 : 1,
              zIndex: 100 - distance * 10,
              transition: TRANSITION,
              pointerEvents: isActive ? "auto" : "none",
              cursor: isActive && HREFS[i] ? "pointer" : undefined,
            }}
            onPointerDown={() => isActive && HREFS[i] && setPressed(true)}
            onPointerUp={() => setPressed(false)}
            onPointerCancel={() => setPressed(false)}
            onPointerLeave={() => setPressed(false)}
            onClick={() => {
              if (didDrag.current) {
                didDrag.current = false;
                return;
              }
              if (isActive && HREFS[i]) router.push(HREFS[i]);
            }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.53)",
                backdropFilter: "blur(3.75px)",
                WebkitBackdropFilter: "blur(3.75px)",
                opacity: isActive ? 1 : 0,
                transition: TRANSITION,
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              draggable={false}
              src={src}
              className="pointer-events-none absolute object-cover select-none"
              style={{
                // 4px frame when focused; side cards are image-only with a 4px radius after scaling.
                inset: isActive ? 4 : 0,
                width: isActive ? CARD_W - 8 : CARD_W,
                height: isActive ? CARD_H - 8 : CARD_H,
                // Figma "Banner 5" (client 15/10 "có bo góc"): 8px radius inside the square frame.
                borderRadius: isActive ? 8 : 4 / SIDE_SCALE,
                transition: `inset 320ms ${EASE}, width 320ms ${EASE}, height 320ms ${EASE}, border-radius 320ms ${EASE}`,
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-white transition-opacity duration-100"
              style={{ opacity: isActive && pressed ? 0.3 : 0 }}
            />
          </div>
        );
      })}

      <div className="absolute bottom-0 left-1/2 z-[200] flex -translate-x-1/2 items-center gap-1">
        {IMAGES.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Đi tới banner ${i + 1}`}
            onClick={() => setActive(i)}
            className="h-1 w-3 rounded-[9px]"
            style={{
              backgroundColor: i === active ? "#AA6E00" : "#D4D4D3",
              transition: `background-color 320ms ${EASE}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
