"use client";

import { useEffect, useState, type RefObject } from "react";
import { useRouter } from "next/navigation";
import { BackIcon } from "../../home/icons";

export function CategoryHeader({
  title,
  scrollContainerRef,
}: {
  title: string;
  scrollContainerRef: RefObject<HTMLElement | null>;
}) {
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
        <BackIcon className="h-6 w-6" />
      </button>
      <span className="text-base leading-6 font-semibold tracking-normal transition-colors duration-200" style={{ color: scrolled ? "#19264E" : "#ffffff" }}>
        {title}
      </span>
    </div>
  );
}
