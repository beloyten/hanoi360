"use client";

import { useEffect, useState, type RefObject } from "react";
import { TopBar } from "../top-bar";

export function CategoryHeader({
  title,
  scrollContainerRef,
}: {
  title: string;
  scrollContainerRef: RefObject<HTMLElement | null>;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 8);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [scrollContainerRef]);

  // Over the hero the bar is transparent with white content; once scrolled it takes the
  // Figma category state (#F3F3F3, #19264E). 48px keeps it flush with the sticky search bar (top-12).
  return (
    <TopBar
      title={title}
      tone={scrolled ? "dark" : "light"}
      background={scrolled ? "#F3F3F3" : "transparent"}
      height={48}
      className="fixed inset-x-0 top-0 z-40"
    />
  );
}
