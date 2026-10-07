"use client";

import { CategoryLayout } from "../shared/category/category-layout";
import { FilterBar } from "../shared/category/filter-bar";
import { SiteList } from "./site-list";
import { SITES } from "./sites";

const HERO = {
  title: "TÌM HIỂU\nLỊCH SỬ\nHÀ NỘI",
  gradientFrom: "#DDB86B",
  gradientTo: "#AA6E00",
  illustration: "/di-tich-lich-su/hero-illustration.svg",
  searchPlaceholder: "Tìm địa điểm bạn muốn đến",
};

const CHIPS = [
  { key: "500m", label: "<500m" },
  { key: "1km", label: "<1km" },
];

const SHEET_SECTIONS = [
  {
    title: "Loại địa điểm",
    options: [
      { key: "historical", label: "Di tích lịch sử" },
      { key: "spiritual", label: "Di tích tâm linh" },
      { key: "scenic", label: "Danh lam thắng cảnh" },
    ],
  },
];

export function DiTichScreen() {
  return (
    <CategoryLayout
      title="Di tích lịch sử"
      hero={HERO}
      filters={<FilterBar scope="di-tich" chips={CHIPS} sheetSections={SHEET_SECTIONS} />}
    >
      <SiteList sites={SITES} />
    </CategoryLayout>
  );
}
