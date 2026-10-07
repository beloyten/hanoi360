"use client";

import { useMemo, useState } from "react";
import { CategoryFilter, toggleInSet } from "../shared/category/category-filter";
import { CategoryLayout } from "../shared/category/category-layout";
import { FilterBar } from "../shared/category/filter-bar";
import { VenueList } from "../vui-choi/venue-list";
import { CATEGORIES, VENUES, type VenueCategory } from "../vui-choi/venues";

const HERO = {
  title: "GIẢI TRÍ\nĐA DẠNG",
  gradientFrom: "#009B8C",
  gradientTo: "#004942",
  illustration: "/giai-tri/hero-illustration.svg",
  searchPlaceholder: "Tìm điểm vui chơi, giải trí...",
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

export function GiaiTriScreen() {
  const [active, setActive] = useState<Set<VenueCategory>>(new Set());

  const venues = useMemo(() => {
    if (active.size === 0) return VENUES;
    return VENUES.filter((venue) => active.has(venue.category));
  }, [active]);

  return (
    <CategoryLayout
      title="Giải trí"
      hero={HERO}
      filters={
        <>
          <FilterBar scope="giai-tri" chips={CHIPS} sheetSections={SHEET_SECTIONS} />
          <CategoryFilter items={CATEGORY_ITEMS} active={active} onToggle={(key) => setActive((prev) => toggleInSet(prev, key))} />
        </>
      }
    >
      <VenueList venues={venues} hrefPrefix="/giai-tri" />
    </CategoryLayout>
  );
}
