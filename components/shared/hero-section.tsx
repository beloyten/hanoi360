"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Hero, type HeroIllustration } from "./hero";
import { SearchBar } from "./search-bar";

type HeroSectionProps = {
  title: string;
  hideTitle?: boolean;
  gradientFrom: string;
  gradientTo: string;
  illustration?: HeroIllustration;
  searchPlaceholder: string;
  children?: ReactNode;
};

export function HeroSection({ title, hideTitle, gradientFrom, gradientTo, illustration, searchPlaceholder, children }: HeroSectionProps) {
  const [stuck, setStuck] = useState(false);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stickyRef.current;
    if (!el) return;
    const check = () => setStuck(el.getBoundingClientRect().top <= 88);
    check();
    document.addEventListener("scroll", check, true);
    window.addEventListener("resize", check);
    return () => {
      document.removeEventListener("scroll", check, true);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <>
      <Hero title={title} hideTitle={hideTitle} gradientFrom={gradientFrom} gradientTo={gradientTo} illustration={illustration} />
      <div ref={stickyRef} className={`sticky top-12 z-30 transition-colors duration-200 ${stuck ? "bg-[#F3F3F3]" : ""}`}>
        <SearchBar placeholder={searchPlaceholder} stuck={stuck} />
        {children}
      </div>
    </>
  );
}
