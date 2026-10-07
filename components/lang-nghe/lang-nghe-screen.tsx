"use client";

import { useMemo, useState } from "react";
import { CategoryFilter, toggleInSet } from "../shared/category/category-filter";
import { CategoryLayout } from "../shared/category/category-layout";
import { FilterBar } from "../shared/category/filter-bar";
import { VillageList } from "./village-list";
import { CATEGORIES, VILLAGES, type VillageCategory } from "./villages";

const HERO = {
  title: "TINH HOA\nLÀNG NGHỀ",
  gradientFrom: "#DDB86B",
  gradientTo: "#AA6E00",
  illustration: { src: "/figma/hero-lang-nghe.png", width: 413, height: 171.3, hasTitle: true },
  searchPlaceholder: "Tìm địa điểm bạn muốn đến",
};

const CHIPS = [
  { key: "500m", label: "<500m" },
  { key: "1000m", label: "<1000m" },
];

const SHEET_SECTIONS = [
  {
    title: "Loại làng nghề",
    options: [
      { key: "may-tre-non-mu", label: "Mây tre & nón mũ" },
      { key: "luong-thuc-thuc-pham", label: "Lương thực thực phẩm" },
      { key: "thu-cong-my-nghe", label: "Thủ công mỹ nghệ" },
      { key: "det-may-theu", label: "Dệt may & thêu" },
    ],
  },
];

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
      filters={
        <>
          <FilterBar scope="lang-nghe" chips={CHIPS} sheetSections={SHEET_SECTIONS} />
          <CategoryFilter items={CATEGORY_ITEMS} active={active} onToggle={(key) => setActive((prev) => toggleInSet(prev, key))} />
        </>
      }
    >
      <VillageList villages={items} />
    </CategoryLayout>
  );
}
