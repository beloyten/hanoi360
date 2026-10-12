export type MuseumCategory = "culture-art" | "history-society" | "military-security" | "science-nature";

export type Museum = {
  id: number;
  title: string;
  address: string;
  image: string;
  distance: string;
  category: MuseumCategory;
  /** Opening hours shown in the detail card (Figma Bảo tàng Lịch sử Quân sự). */
  hours?: string;
  hoursNote?: string;
  /** Detail hero photo when it differs from the list photo. */
  cover?: string;
};

export function getMuseum(id: number) {
  return MUSEUMS.find((museum) => museum.id === id);
}

export const CATEGORIES: { key: MuseumCategory; label: string; image: string }[] = [
  { key: "culture-art", label: "Văn hoá\nNghệ thuật", image: "/bao-tang/nghe-thuat.png" },
  { key: "history-society", label: "Lịch sử\nXã hội", image: "/bao-tang/lich-su-xa-hoi.png" },
  { key: "military-security", label: "Quân sự\nAn ninh", image: "/bao-tang/an-ninh.png" },
  { key: "science-nature", label: "Khoa học\nTự nhiên", image: "/bao-tang/khtn.png" },
];

// Order and photos follow the Figma "Bảo tàng" list (413:36526).
export const MUSEUMS: Museum[] = [
  {
    id: 1,
    title: "Bảo tàng Dân tộc học Việt Nam",
    address: "Đường Nguyễn Văn Huyên, phường Cầu Giấy",
    image: "/figma/list/museum-1.webp",
    distance: "250m",
    category: "culture-art",
  },
  {
    id: 2,
    title: "Bảo tàng Hà Nội",
    address: "Phạm Hùng, phường Nam Từ Liêm",
    image: "/figma/list/museum-2.webp",
    distance: "400m",
    category: "history-society",
  },
  {
    id: 3,
    title: "Bảo tàng Lịch sử Quốc gia",
    address: "1 Tràng Tiền & 216 Trần Quang Khải, Hoàn Kiếm",
    image: "/figma/list/museum-3.webp",
    distance: "600m",
    category: "history-society",
  },
  {
    id: 4,
    title: "Bảo tàng Mỹ thuật Việt Nam",
    address: "66 Nguyễn Thái Học, phường Ba Đình",
    image: "/figma/list/museum-4.webp",
    distance: "800m",
    category: "culture-art",
  },
  {
    id: 8,
    title: "Bảo tàng Thiên nhiên Việt Nam",
    address: "18 Hoàng Quốc Việt, Cầu Giấy",
    image: "/figma/list/museum-8.webp",
    distance: "1.2km",
    category: "science-nature",
  },
  {
    id: 6,
    title: "Bảo tàng Phòng không - Không quân",
    address: "173C Trường Chinh, Thanh Xuân",
    image: "/figma/list/museum-6.webp",
    distance: "1.5km",
    category: "military-security",
  },
  {
    id: 5,
    title: "Bảo tàng Lịch sử Quân sự Việt Nam",
    address: "Km6+500 Đại lộ Thăng Long, Tây Mỗ, Nam Từ Liêm",
    hours: "S: 7h00 - 11h30\nC: 13h00 - 16h30",
    hoursNote: "Thứ 3, 4, 5, 7, CN",
    image: "/figma/list/museum-5.webp",
    cover: "/figma/list/quan-su-hero.webp",
    distance: "2km",
    category: "military-security",
  },
  {
    id: 7,
    title: "Bảo tàng Vũ trụ Việt Nam",
    address: "Khu Công nghệ cao Hòa Lạc, Thạch Thất",
    image: "/figma/list/museum-7.webp",
    distance: "28km",
    category: "science-nature",
  },
];
