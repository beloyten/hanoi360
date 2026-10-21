"use client";

import { useMemo, useState } from "react";
import { CategoryFilter, toggleInSet } from "../shared/category/category-filter";
import { CategoryLayout } from "../shared/category/category-layout";
import { FilterBar } from "../shared/category/filter-bar";
import { MuseumList } from "./museum-card";
import { CATEGORIES, MUSEUMS, type MuseumCategory } from "./museums";

const HERO = {
  title: "DẠO BƯỚC\nQUA KÝ ỨC",
  gradientFrom: "#009B8C",
  gradientTo: "#004942",
  illustration: { src: "/figma/hero-bao-tang.png", width: 394, height: 170, hasTitle: true },
  searchPlaceholder: "Tìm địa điểm bạn muốn đến",
};

const CHIPS = [
  { key: "500m", label: "<500m" },
  { key: "1000m", label: "<1000m" },
];

const SHEET_SECTIONS = [
  {
    title: "Loại bảo tàng",
    options: [
      { key: "culture-art", label: "Văn hoá nghệ thuật" },
      { key: "history-society", label: "Lịch sử xã hội" },
      { key: "military-security", label: "Quân sự an ninh" },
      { key: "natural-science", label: "Khoa học tự nhiên" },
    ],
  },
];

export function BaoTangScreen() {
  const [active, setActive] = useState<Set<MuseumCategory>>(new Set());

  const museums = useMemo(() => {
    if (active.size === 0) return MUSEUMS;
    return MUSEUMS.filter((museum) => active.has(museum.category));
  }, [active]);

  return (
    <CategoryLayout
      title="Bảo tàng"
      hero={HERO}
      filters={
        <>
          <FilterBar scope="bao-tang" chips={CHIPS} sheetSections={SHEET_SECTIONS} />
          <CategoryFilter items={CATEGORIES} active={active} onToggle={(key) => setActive((prev) => toggleInSet(prev, key))} />
        </>
      }
    >
      <MuseumList museums={museums} />
    </CategoryLayout>
  );
}
