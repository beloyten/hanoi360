export type VillageCategory = "may-tre-non-mu" | "luong-thuc-thuc-pham" | "thu-cong-my-nghe" | "det-may-theu";

export type Village = {
  id: number;
  name: string;
  address: string;
  distance: string;
  category: VillageCategory;
  photo: string;
};

export function getVillage(id: number) {
  return VILLAGES.find((village) => village.id === id);
}

export const CATEGORIES: { key: VillageCategory; label: string; icon: string }[] = [
  { key: "may-tre-non-mu", label: "Mây tre &\nnón mũ", icon: "/lang-nghe/cat-may-tre-non-mu.png" },
  { key: "luong-thuc-thuc-pham", label: "Lương thực\nthực phẩm", icon: "/lang-nghe/cat-luong-thuc-thuc-pham.png" },
  { key: "thu-cong-my-nghe", label: "Thủ công\nmỹ nghệ", icon: "/lang-nghe/cat-thu-cong-my-nghe.png" },
  { key: "det-may-theu", label: "Dệt may\n& thêu", icon: "/lang-nghe/cat-det-may-theu.png" },
];

export const VILLAGES: Village[] = [
  {
    id: 1,
    name: "Làng đúc đồng Ngũ Xá",
    address: "Phường Trúc Bạch, Quận Ba Đình",
    distance: "250m",
    category: "thu-cong-my-nghe",
    photo: "/lang-nghe/lang-duc-dong-ngu-xa.png",
  },
  {
    id: 2,
    name: "Làng cốm Vòng",
    address: "Phường Dịch Vọng Hậu, Quận Cầu Giấy",
    distance: "400m",
    category: "luong-thuc-thuc-pham",
    photo: "/lang-nghe/lang-com-vong.png",
  },
  {
    id: 3,
    name: "Làng lụa Vạn Phúc",
    address: "Phường Vạn Phúc, Quận Hà Đông",
    distance: "550m",
    category: "det-may-theu",
    photo: "/lang-nghe/lang-lua-van-phuc.png",
  },
  {
    id: 4,
    name: "Làng gốm Bát Tràng",
    address: "Xã Bát Tràng, Huyện Gia Lâm",
    distance: "700m",
    category: "thu-cong-my-nghe",
    photo: "/lang-nghe/lang-gom-bat-trang.png",
  },
  {
    id: 5,
    name: "Làng khảm trai Chuôn Ngọ",
    address: "Xã Chuyên Mỹ, Huyện Phú Xuyên",
    distance: "850m",
    category: "thu-cong-my-nghe",
    photo: "/lang-nghe/lang-kham-trai-chuon-ngo.png",
  },
  {
    id: 6,
    name: "Làng mây tre đan Phú Vinh",
    address: "Xã Phú Nghĩa, Huyện Chương Mỹ",
    distance: "1km",
    category: "may-tre-non-mu",
    photo: "/lang-nghe/lang-may-tre-dan-phu-vinh.png",
  },
  {
    id: 7,
    name: "Làng hương tăm Quảng Phú Cầu",
    address: "Xã Quảng Phú Cầu, Huyện Ứng Hòa, Hà Nội.",
    distance: "1.2km",
    category: "thu-cong-my-nghe",
    photo: "/lang-nghe/lang-huong-tam-quang-phu-cau.png",
  },
  {
    id: 8,
    name: "Làng miến dong",
    address: "Xã Cự Khê, Huyện Thanh Oai",
    distance: "1.4km",
    category: "luong-thuc-thuc-pham",
    photo: "/lang-nghe/lang-mien-tuong-cu-da.png",
  },
  {
    id: 9,
    name: "Làng nón Chuông",
    address: "Xã Phương Trung, Huyện Thanh Oai",
    distance: "1.6km",
    category: "may-tre-non-mu",
    photo: "/lang-nghe/lang-non-chuong.png",
  },
];
