export type Site = {
  id: number;
  name: string;
  subtitle: string;
  distance: string;
  photo: string;
  /** Detail-only fields (Figma "Chi tiet/bao tang" layout for Hoàng Thành). */
  address?: string;
  hours?: string;
  hoursNote?: string;
  vrTour?: string;
  hasAudio?: boolean;
};

export function getSite(id: number) {
  return SITES.find((site) => site.id === id);
}

export const SITES: Site[] = [
  // Client 21/10: Hoàng Thành Thăng Long leads the list.
  {
    id: 9,
    name: "Hoàng Thành Thăng Long",
    subtitle: "Phường Ba Đình.",
    distance: "1.1km",
    photo: "/figma/hoang-thanh-hero.webp",
    address: "19c Hoàng Diệu, Điện Biên, Ba Đình, Hà Nội",
    hours: "S: 7h00 - 11h30\nC: 13h00 - 16h30",
    hoursNote: "Thứ 3, 4, 5, 7, CN",
    vrTour: "hoang-thanh",
    hasAudio: true,
  },
  {
    id: 1,
    name: "Hồ Tây",
    subtitle: "Phường Tây Hồ.",
    distance: "250m",
    photo: "/di-tich-lich-su/ho-tay.png",
  },
  {
    id: 2,
    name: "Vườn quốc gia Ba Vì",
    subtitle: "Xã Ba Vì",
    distance: "800m",
    photo: "/figma/list/di-tich-2.webp",
  },
  {
    id: 3,
    name: "Di tích Nhà tù Hỏa Lò",
    subtitle: "1 Phố Hoả Lò, phường Hoàn Kiếm.",
    distance: "4.2km",
    photo: "/di-tich-lich-su/di-tich-hoa-lo.png",
  },
  {
    id: 4,
    name: "Chùa Một Cột (Diên Hựu tự)",
    subtitle: "Phố Chùa Một Cột, phường Ba Đình.",
    distance: "3.8km",
    photo: "/di-tich-lich-su/chua-mot-cot.png",
  },
  {
    id: 5,
    name: "Hồ Hoàn Kiếm (Hồ Gươm)",
    subtitle: "Trung tâm phường Hoàn Kiếm.",
    distance: "4.5km",
    photo: "/di-tich-lich-su/ho-hoan-kiem.png",
  },
  {
    id: 6,
    name: "Vườn Quốc gia Ba Vì",
    subtitle: "Xã Ba Vì",
    distance: "48km",
    photo: "/di-tich-lich-su/vuon-quoc-gia-ba-vi.png",
  },
  {
    id: 7,
    name: "Thành Cổ Loa",
    subtitle: "Xã Cổ Loa, huyện Đông Anh",
    distance: "24km",
    photo: "/di-tich-lich-su/thanh-co-loa.png",
  },
  {
    id: 8,
    name: "Làng cổ Đường Lâm",
    subtitle: "Thị xã Sơn Tây",
    distance: "44km",
    photo: "/di-tich-lich-su/lang-co-duong-lam.png",
  },
  {
    id: 10,
    name: "Chùa Tây Phương (Tây Phương Cổ Tự)",
    subtitle: "Núi Câu Lâu, xã Thạch Xá, huyện Thạch Thất",
    distance: "32km",
    photo: "/figma/list/di-tich-2.webp",
  },
  {
    id: 11,
    name: "Chùa Trấn Quốc",
    subtitle: "Phường Tây Hồ.",
    distance: "800m",
    photo: "/di-tich-lich-su/chua-tran-quoc.png",
  },
];
