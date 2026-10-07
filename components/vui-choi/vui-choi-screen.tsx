"use client";

import { useMemo, useState } from "react";
import { CategoryFilter, toggleInSet } from "../shared/category/category-filter";
import { CategoryLayout } from "../shared/category/category-layout";
import { FilterBar } from "../shared/category/filter-bar";
import { VenueList } from "./venue-list";
import { CATEGORIES, VENUES, type VenueCategory } from "./venues";

const HERO = {
  title: "TRẢI NGHIỆM\nVUI CHƠI\nHẤP DẪN",
  gradientFrom: "#009B8C",
  gradientTo: "#004942",
  illustration: { src: "/figma/hero-vui-choi.png", width: 396.3, height: 175.7, hasTitle: true },
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
      { key: "discount", label: "Có mã giảm giá" },
      { key: "under-12", label: "Dành cho trẻ em dưới 12 tuổi" },
      { key: "12-18", label: "Dành cho trẻ em 12 - 18 tuổi" },
      { key: "open-now", label: "Đang mở cửa" },
    ],
  },
];

const CATEGORY_ITEMS = CATEGORIES.map(({ key, label, icon }) => ({ key, label, image: icon }));

export function VuiChoiScreen() {
  const [active, setActive] = useState<Set<VenueCategory>>(new Set());

  const items = useMemo(() => {
    if (active.size === 0) return VENUES;
    return VENUES.filter((item) => active.has(item.category));
  }, [active]);

  return (
    <CategoryLayout
      title="Vui chơi"
      hero={HERO}
      filters={
        <>
          <FilterBar scope="vui-choi" chips={CHIPS} sheetSections={SHEET_SECTIONS} />
          <CategoryFilter items={CATEGORY_ITEMS} active={active} onToggle={(key) => setActive((prev) => toggleInSet(prev, key))} />
        </>
      }
    >
      <VenueList venues={items} />
    </CategoryLayout>
  );
}
