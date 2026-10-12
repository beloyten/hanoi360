"use client";

import { useRef, type ReactNode } from "react";
import { BottomNav } from "../../home/bottom-nav";
import type { HeroIllustration } from "../hero";
import { HeroSection } from "../hero-section";
import { CategoryHeader } from "./category-header";

export type CategoryHero = {
  title: string;
  hideTitle?: boolean;
  gradientFrom: string;
  gradientTo: string;
  illustration?: HeroIllustration;
  searchPlaceholder: string;
};

export function CategoryLayout({
  title,
  hero,
  filters,
  children,
}: {
  title: string;
  hero: CategoryHero;
  /** Rendered inside the sticky area under the search bar. */
  filters?: ReactNode;
  children: ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-white">
      <CategoryHeader title={title} scrollContainerRef={scrollRef} />

      <main
        ref={scrollRef}
        className="h-full overflow-y-auto"
        style={{
          paddingBottom: "calc(83px + env(safe-area-inset-bottom))",
          background: "linear-gradient(rgb(250, 248, 245) 0%, rgb(239, 236, 231) 100%)",
        }}
      >
        <HeroSection {...hero}>{filters}</HeroSection>
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
