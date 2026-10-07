export type PlaceCategory = "di-tich" | "bao-tang" | "am-thuc";

export type MapPlace = {
  id: string;
  name: string;
  subtitle: string;
  distance: string;
  photo: string;
  category: PlaceCategory;
  /** Pin tip position as a percentage of the map image (public/ban-do/map.webp). */
  x: number;
  y: number;
};

export const CATEGORY_FILTERS: { key: PlaceCategory | "all"; label: string }[] = [
  { key: "all", label: "Tất cả" },
  { key: "di-tich", label: "Di tích" },
  { key: "bao-tang", label: "Bảo tàng" },
  { key: "am-thuc", label: "Ẩm thực" },
];

export const PLACES: MapPlace[] = [
  {
    id: "ho-tay",
    name: "Hồ Tây",
    subtitle: "Phường Tây Hồ.",
    distance: "250m",
    photo: "/di-tich-lich-su/ho-tay.png",
    category: "di-tich",
    x: 12,
    y: 22,
  },
  {
    id: "chua-tran-quoc",
    name: "Chùa Trấn Quốc",
    subtitle: "Phường Tây Hồ.",
    distance: "800m",
    photo: "/di-tich-lich-su/chua-tran-quoc.png",
    category: "di-tich",
    x: 28,
    y: 18,
  },
  {
    id: "bao-tang-dan-toc",
    name: "Bảo tàng Dân tộc học Việt Nam",
    subtitle: "Phường Cầu Giấy.",
    distance: "3.1km",
    photo: "/di-tich-lich-su/ho-tay.png",
    category: "bao-tang",
    x: 18,
    y: 45,
  },
  {
    id: "chua-mot-cot",
    name: "Chùa Một Cột (Diên Hựu tự)",
    subtitle: "Phường Ba Đình.",
    distance: "3.8km",
    photo: "/di-tich-lich-su/chua-mot-cot.png",
    category: "di-tich",
    x: 43,
    y: 24,
  },
  {
    id: "bao-tang-ha-noi",
    name: "Bảo tàng Hà Nội",
    subtitle: "Phường Nam Từ Liêm.",
    distance: "7.5km",
    photo: "/di-tich-lich-su/chua-tran-quoc.png",
    category: "bao-tang",
    x: 85,
    y: 16,
  },
  {
    id: "kampong",
    name: "Kampong Chicken House",
    subtitle: "Phường Mai, Đống Đa.",
    distance: "1.2km",
    photo: "/am-thuc/kam-pong.png",
    category: "am-thuc",
    x: 62,
    y: 50,
  },
  {
    id: "ho-guom",
    name: "Hồ Hoàn Kiếm (Hồ Gươm)",
    subtitle: "Phường Hoàn Kiếm.",
    distance: "4.5km",
    photo: "/di-tich-lich-su/ho-hoan-kiem.png",
    category: "di-tich",
    x: 88,
    y: 80,
  },
  {
    id: "crystal-jade",
    name: "Crystal Jade Hong Kong Kitchen",
    subtitle: "Phường Ba Đình.",
    distance: "2.4km",
    photo: "/am-thuc/crystal-jade.png",
    category: "am-thuc",
    x: 38,
    y: 60,
  },
  {
    id: "hoa-lo",
    name: "Di tích Nhà tù Hỏa Lò",
    subtitle: "Phường Hoàn Kiếm.",
    distance: "4.2km",
    photo: "/di-tich-lich-su/di-tich-hoa-lo.png",
    category: "di-tich",
    x: 55,
    y: 88,
  },
  {
    id: "bao-tang-lich-su",
    name: "Bảo tàng Lịch sử Quốc gia",
    subtitle: "Phường Hoàn Kiếm.",
    distance: "4.8km",
    photo: "/di-tich-lich-su/chua-mot-cot.png",
    category: "bao-tang",
    x: 75,
    y: 63,
  },
];
