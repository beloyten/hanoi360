"use client";

import { useMemo, useState } from "react";
import { CategoryFilter, toggleInSet } from "../shared/category/category-filter";
import { CategoryLayout } from "../shared/category/category-layout";
import { FilterBar } from "../shared/category/filter-bar";
import { ShopList } from "./shop-list";
import { CATEGORIES, SHOPS, type ShopCategory } from "./shops";

const HERO = {
  title: "MUA SẮM\nTHOẢ THÍCH",
  gradientFrom: "#DDB86B",
  gradientTo: "#AA6E00",
  illustration: { src: "/figma/hero-mua-sam.png", width: 394, height: 170, hasTitle: true },
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
      { key: "discount", label: "Có khuyến mãi" },
      { key: "open-now", label: "Đang mở cửa" },
    ],
  },
];

const CATEGORY_ITEMS = CATEGORIES.map(({ key, label, icon }) => ({ key, label, image: icon }));

export function MuaSamScreen() {
  const [active, setActive] = useState<Set<ShopCategory>>(new Set());

  const items = useMemo(() => {
    if (active.size === 0) return SHOPS;
    return SHOPS.filter((item) => active.has(item.category));
  }, [active]);

  return (
    <CategoryLayout
      title="Mua sắm"
      hero={HERO}
      filters={
        <>
          <FilterBar scope="mua-sam" chips={CHIPS} sheetSections={SHEET_SECTIONS} />
          <CategoryFilter items={CATEGORY_ITEMS} active={active} onToggle={(key) => setActive((prev) => toggleInSet(prev, key))} />
        </>
      }
    >
      <ShopList shops={items} />
    </CategoryLayout>
  );
}
