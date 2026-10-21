"use client";

import { CategoryLayout } from "../shared/category/category-layout";
import { FilterBar } from "../shared/category/filter-bar";
import { QuickPicks } from "./quick-picks";
import { RestaurantList } from "./restaurant-list";

const HERO = {
  title: "KHÁM PHÁ\nẨM THỰC",
  gradientFrom: "#DDB86B",
  gradientTo: "#AA6E00",
  illustration: { src: "/figma/hero-am-thuc.png", width: 394, height: 171, hasTitle: true },
  searchPlaceholder: "Tìm địa điểm bạn muốn đến",
};

const CHIPS = [
  { key: "500m", label: "<500m" },
  { key: "1km", label: "<1km" },
  { key: "veggie", label: "Đồ chay" },
];

const CUISINES = ["Ấn Độ", "Hàn Quốc", "Hi Lạp", "Hồng Kông", "Nhật Bản", "Parkistan", "Singapore", "Thái Lan", "Trung Quốc"];

const SHEET_SECTIONS = [
  { title: "Ưu đãi", options: [{ key: "discount", label: "Có mã giảm giá" }] },
  { title: "Ẩm thực thế giới", options: CUISINES.map((cuisine) => ({ key: cuisine, label: cuisine })) },
];

export function AmThucScreen() {
  return (
    <CategoryLayout
      title="Ẩm thực"
      hero={HERO}
      filters={<FilterBar scope="am-thuc" chips={CHIPS} sheetSections={SHEET_SECTIONS} />}
    >
      <QuickPicks />
      <RestaurantList />
    </CategoryLayout>
  );
}
