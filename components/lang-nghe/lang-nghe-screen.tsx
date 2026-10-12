"use client";

import { useMemo, useState } from "react";
import { CategoryFilter, toggleInSet } from "../shared/category/category-filter";
import { CategoryLayout } from "../shared/category/category-layout";
import { VillageList } from "./village-list";
import { CATEGORIES, VILLAGES, type VillageCategory } from "./villages";

const HERO = {
  title: "TINH HOA\nLÀNG NGHỀ",
  gradientFrom: "#DDB86B",
  gradientTo: "#AA6E00",
  illustration: { src: "/figma/hero-lang-nghe.png", width: 413, height: 171.3, hasTitle: true },
  searchPlaceholder: "Tìm địa điểm bạn muốn đến",
};

const CATEGORY_ITEMS = CATEGORIES.map(({ key, label, icon }) => ({ key, label, image: icon }));

export function LangNgheScreen() {
  const [active, setActive] = useState<Set<VillageCategory>>(new Set());

  const items = useMemo(() => {
    if (active.size === 0) return VILLAGES;
    return VILLAGES.filter((item) => active.has(item.category));
  }, [active]);

  return (
    <CategoryLayout
      title="Làng nghề"
      hero={HERO}
      // Figma Làng nghề has no chip row: the image filter sits right under the search bar.
      filters={
        <div className="pt-2">
          <CategoryFilter items={CATEGORY_ITEMS} active={active} onToggle={(key) => setActive((prev) => toggleInSet(prev, key))} />
        </div>
      }
    >
      <VillageList villages={items} />
    </CategoryLayout>
  );
}
