"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { BackIcon } from "../home/icons";
import { BottomNav } from "../home/bottom-nav";
import { Hero } from "./hero";

function Header({ title, scrollContainerRef }: { title: string; scrollContainerRef: React.RefObject<HTMLDivElement | null> }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 8);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [scrollContainerRef]);

  const fg = scrolled ? "#252525" : "#ffffff";

  return (
    <div
      className="fixed inset-x-0 top-0 z-40 flex h-14 items-center gap-2 px-3 transition-colors duration-200"
      style={{
        backgroundColor: scrolled ? "#F3F3F3" : "transparent",
      }}
    >
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Quay lại"
        className="flex h-10 w-10 items-center justify-center transition-colors duration-200"
        style={{ color: fg }}
      >
        <BackIcon className="size-8" />
      </button>
      <span className="text-base leading-6 font-semibold tracking-normal transition-colors duration-200" style={{ color: scrolled ? "#19264E" : "#ffffff" }}>
        {title}
      </span>
    </div>
  );
}

export function CategoryPlaceholderScreen({
  title,
  heroTitle,
  gradientFrom,
  gradientTo,
}: {
  title: string;
  heroTitle: string;
  gradientFrom: string;
  gradientTo: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-white">
      <Header title={title} scrollContainerRef={scrollRef} />

      <main
        ref={scrollRef}
        className="h-full overflow-y-auto"
        style={{ paddingBottom: "calc(83px + env(safe-area-inset-bottom))" }}
      >
        <Hero title={heroTitle} gradientFrom={gradientFrom} gradientTo={gradientTo} />

        <div className="flex flex-col items-center gap-2 px-6 py-16 text-center">
          <p className="text-base font-semibold text-[#252525]">Nội dung đang được cập nhật</p>
          <p className="text-sm text-[#58585c]">Chúng tôi đang bổ sung thông tin và hình ảnh cho mục này. Quay lại sau nhé!</p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
