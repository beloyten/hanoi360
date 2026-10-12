"use client";

import { useState } from "react";
import { BottomNav } from "../home/bottom-nav";
import { TopBar } from "../shared/top-bar";
import { CategoryTabs } from "./category-tabs";
import { GuideList } from "./guide-list";
import { GUIDES } from "./guides";

export function CamNangScreen() {
  const [activeCategory, setActiveCategory] = useState<"itinerary" | "heritage" | "season" | "food">("itinerary");

  const filteredGuides = GUIDES.filter(guide => guide.category === activeCategory);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-white">
      <main
        className="h-full overflow-y-auto bg-[#E3E2E0]"
        style={{ paddingBottom: "calc(83px + env(safe-area-inset-bottom))" }}
      >
        <div className="sticky top-0 z-20 bg-white">
          {/* Figma "Top bar / Lưu" in Layout 2_Cẩm nang: 64px, centered #27314D title. */}
          <TopBar title="Cẩm nang du lịch Hà Nội" align="center" showBack={false} color="#27314D" height={64} />
          <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
          {/* Part of the sticky header so cards never touch the tabs while scrolling (Figma: list at y 9). */}
          <div className="h-[9px] bg-[#E3E2E0]" />
        </div>

        <GuideList guides={filteredGuides} />
      </main>

      <BottomNav />
    </div>
  );
}
