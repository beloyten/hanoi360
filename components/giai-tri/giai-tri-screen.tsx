"use client";

import { useMemo, useState } from "react";
import { CardItem } from "../shared/card-item";
import { CategoryFilter, toggleInSet } from "../shared/category/category-filter";
import { CategoryLayout } from "../shared/category/category-layout";
import { FilterBar } from "../shared/category/filter-bar";
import { CATEGORIES, ENTERTAINMENTS, type EntertainmentCategory } from "./entertainment";

const HERO = {
  title: "GIẢI TRÍ\nĐA DẠNG",
  gradientFrom: "#009B8C",
  gradientTo: "#004942",
  illustration: { src: "/figma/hero-giai-tri.png", width: 394, height: 170, hasTitle: true },
  searchPlaceholder: "Tìm địa điểm bạn muốn đến",
};

const CHIPS = [
  { key: "500m", label: "<500m" },
  { key: "1km", label: "<1km" },
];

const SHEET_SECTIONS = [
  {
    title: "Lọc theo",
    options: [
      { key: "discount", label: "Có mã giảm giá" },
      { key: "open-now", label: "Đang mở cửa" },
    ],
  },
];

const CATEGORY_ITEMS = CATEGORIES.map(({ key, label, icon }) => ({ key, label, image: icon }));

export function GiaiTriScreen() {
  const [active, setActive] = useState<Set<EntertainmentCategory>>(new Set());

  const items = useMemo(() => {
    if (active.size === 0) return ENTERTAINMENTS;
    return ENTERTAINMENTS.filter((item) => active.has(item.category));
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
      {/* Figma Giải trí uses the horizontal "card list_2" (logo tile + name + address). */}
      <div className="flex flex-col gap-1 px-3 pb-6">
        {items.map((item) => (
          <CardItem
            key={item.id}
            layout="horizontal"
            item={{ ...item, description: item.address }}
            savedKey={`entertainment:${item.id}`}
            href={`/giai-tri/${item.id}`}
          />
        ))}
      </div>
    </CategoryLayout>
  );
}
