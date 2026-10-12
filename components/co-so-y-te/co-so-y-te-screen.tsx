"use client";

import { useMemo, useState } from "react";
import { CategoryFilter, toggleInSet } from "../shared/category/category-filter";
import { CategoryLayout } from "../shared/category/category-layout";
import { FilterBar } from "../shared/category/filter-bar";
import { CATEGORIES, FACILITIES, type FacilityCategory } from "./facilities";
import { FacilityList } from "./facility-list";

const HERO = {
  title: "Y TẾ\nCHUYÊN\nNGHIỆP",
  hideTitle: true,
  gradientFrom: "#009B8C",
  gradientTo: "#004942",
  illustration: { src: "/figma/hero-co-so-y-te.png", width: 394, height: 172 },
  searchPlaceholder: "Tìm địa điểm bạn muốn đến",
};

const CHIPS = [
  { key: "500m", label: "<500m" },
  { key: "1000m", label: "<1000m" },
];

const SHEET_SECTIONS = [
  {
    title: "Lọc theo",
    options: [
      { key: "open-now", label: "Đang mở cửa" },
      { key: "24-7", label: "Trực cấp cứu 24/7" },
    ],
  },
];

const CATEGORY_ITEMS = CATEGORIES.map(({ key, label, icon }) => ({ key, label, image: icon }));

export function CoSoYTeScreen() {
  const [active, setActive] = useState<Set<FacilityCategory>>(new Set());

  const facilities = useMemo(() => {
    if (active.size === 0) return FACILITIES;
    return FACILITIES.filter((facility) => active.has(facility.category));
  }, [active]);

  return (
    <CategoryLayout
      title="Cơ sở y tế"
      hero={HERO}
      filters={
        <>
          <FilterBar scope="co-so-y-te" chips={CHIPS} sheetSections={SHEET_SECTIONS} />
          <CategoryFilter items={CATEGORY_ITEMS} active={active} onToggle={(key) => setActive((prev) => toggleInSet(prev, key))} />
        </>
      }
    >
      <FacilityList facilities={facilities} />
    </CategoryLayout>
  );
}
