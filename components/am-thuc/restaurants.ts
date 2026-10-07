import type { DetailBlock } from "../shared/detail-content";

export type Dish = {
  photo: string;
  name: string;
};

export type Restaurant = {
  id: number;
  name: string;
  description: string;
  distance: string;
  logoText: string;
  logoBg: string;
  photo?: string;
  hasVoucher?: boolean;
  hours?: string;
  hoursNote?: string;
  address?: string;
  detail?: string;
  dishes?: Dish[];
  content?: DetailBlock[];
};

export const RESTAURANTS: Restaurant[] = [
  {
    id: 1,
    name: "Kampong Chicken House",
    description: "Gà nướng phong cách Đông Nam Á, cơm gà, nước chấm đặc trưng",
    distance: "250m",
    logoText: "Kampong",
    logoBg: "#3c3a2e",
    photo: "/am-thuc/kam-pong.png",
    hasVoucher: true,
    hours: "9h00 - 22h00",
    hoursNote: "Thứ 2 - Chủ nhật",
    address: "09 Đào Duy Anh, Phường Mai, Đống Đa.",
    detail:
      "Tiên phong mang mô hình Cơm gà Hải Nam chuẩn vị Singapore về Hà Nội. Không gian quán được thiết kế theo phong cách nhiệt đới (tropical) rất xanh mát và hiện đại, phù hợp cho cả gia đình và dân văn phòng.",
    dishes: [
      { photo: "/am-thuc/kam-pong.png", name: "Cơm gà Hải Nam" },
      { photo: "/am-thuc/kam-pong.png", name: "Lẩu gà nấm" },
      { photo: "/am-thuc/kam-pong.png", name: "Gà quay sốt Kampong" },
    ],
  },
  {
    id: 2,
    name: "Crystal Jade Hong Kong Kitchen",
    description: "Ẩm thực Hồng Kông, dimsum, mì trứng tươi",
    distance: "250m",
    logoText: "Crystal Jade",
    logoBg: "#eef1ee",
    photo: "/am-thuc/crystal-jade.png",
    hasVoucher: true,
    hours: "10h00 - 22h00",
    hoursNote: "Thứ 2 - Chủ nhật",
    address: "Tầng 3, Vincom Bà Triệu, Hai Bà Trưng.",
    detail:
      "Nhà hàng ẩm thực Hồng Kông với thực đơn dimsum đa dạng, mì trứng tươi và các món hấp truyền thống, không gian sang trọng chuẩn 5 sao.",
    dishes: [
      { photo: "/am-thuc/crystal-jade.png", name: "Dimsum tôm hấp" },
      { photo: "/am-thuc/crystal-jade.png", name: "Mì trứng xào hải sản" },
      { photo: "/am-thuc/crystal-jade.png", name: "Vịt quay Hồng Kông" },
    ],
  },
  {
    id: 3,
    name: "GoGi House",
    description: "Thịt nướng Hàn Quốc, lẩu kim chi, buffet",
    distance: "250m",
    logoText: "GoGi House",
    logoBg: "#1c1c1c",
    photo: "/am-thuc/gogi-house.png",
    hasVoucher: true,
    hours: "10h30 - 22h30",
    hoursNote: "Thứ 2 - Chủ nhật",
    address: "18 Phạm Ngọc Thạch, Đống Đa.",
    detail:
      "Chuỗi nhà hàng thịt nướng Hàn Quốc nổi tiếng với buffet đa dạng, lẩu kim chi cay nồng và không gian hiện đại phù hợp cho nhóm bạn, gia đình.",
    dishes: [
      { photo: "/am-thuc/gogi-house.png", name: "Buffet thịt nướng Hàn Quốc" },
      { photo: "/am-thuc/gogi-house.png", name: "Lẩu kim chi hải sản" },
      { photo: "/am-thuc/gogi-house.png", name: "Cơm trộn Bibimbap" },
    ],
  },
  {
    id: 4,
    name: "Bếp Thái Koh Yam",
    description: "Tom yum, pad thái, ẩm thực Thái chuẩn vị",
    distance: "250m",
    logoText: "Koh Yam",
    logoBg: "#e7d9b8",
    photo: "/am-thuc/koh-yam.png",
    hasVoucher: true,
    hours: "10h00 - 21h30",
    hoursNote: "Thứ 2 - Chủ nhật",
    address: "45 Trần Duy Hưng, Cầu Giấy.",
    detail:
      "Ẩm thực Thái chuẩn vị với tom yum chua cay đặc trưng, pad thái đậm đà cùng không gian ấm cúng mang phong cách Đông Nam Á.",
    dishes: [
      { photo: "/am-thuc/koh-yam.png", name: "Tom Yum hải sản" },
      { photo: "/am-thuc/koh-yam.png", name: "Pad Thái tôm" },
      { photo: "/am-thuc/koh-yam.png", name: "Gỏi đu đủ Thái" },
    ],
  },
  {
    id: 5,
    name: "Nhà hàng Hải sản Nhật Hatoyama",
    description: "Hải sản tươi sống, sashimi, buffet Nhật Bản",
    distance: "250m",
    logoText: "Hatoyama",
    logoBg: "#c0392b",
    photo: "/am-thuc/hatoyama.png",
    hasVoucher: true,
    hours: "11h00 - 22h00",
    hoursNote: "Thứ 2 - Chủ nhật",
    address: "72 Linh Lang, Ba Đình.",
    detail:
      "Nhà hàng hải sản Nhật Bản với sashimi tươi sống mỗi ngày, buffet phong phú và không gian mang đậm phong cách Nhật truyền thống.",
    dishes: [
      { photo: "/am-thuc/hatoyama.png", name: "Sashimi tổng hợp" },
      { photo: "/am-thuc/hatoyama.png", name: "Buffet hải sản Nhật" },
      { photo: "/am-thuc/hatoyama.png", name: "Sushi cuộn cao cấp" },
    ],
  },
  {
    id: 6,
    name: "Namaste Hanoi",
    description: "Ẩm thực Ấn Độ chính thống, cà ri, bánh naan",
    distance: "250m",
    logoText: "Namaste",
    logoBg: "#2f2f2f",
    photo: "/am-thuc/namaste.png",
    hasVoucher: true,
    hours: "10h30 - 22h00",
    hoursNote: "Thứ 2 - Chủ nhật",
    address: "26 Xuân Diệu, Tây Hồ.",
    detail:
      "Ẩm thực Ấn Độ chính thống với các món cà ri đậm đà, bánh naan nóng hổi cùng gia vị nhập khẩu trực tiếp từ Ấn Độ.",
    dishes: [
      { photo: "/am-thuc/namaste.png", name: "Cà ri gà Ấn Độ" },
      { photo: "/am-thuc/namaste.png", name: "Bánh Naan bơ tỏi" },
      { photo: "/am-thuc/namaste.png", name: "Cơm Biryani" },
    ],
  },
  {
    id: 7,
    name: "PK Spice Restaurant",
    description: "Ẩm thực Ấn Độ, cà ri gia vị đậm đà",
    distance: "250m",
    logoText: "PK Spice",
    logoBg: "#0e3d2f",
    photo: "/am-thuc/pk-spice.png",
    hasVoucher: true,
    hours: "10h00 - 21h30",
    hoursNote: "Thứ 2 - Chủ nhật",
    address: "12 Kim Mã, Ba Đình.",
    detail:
      "Nhà hàng Ấn Độ với hương vị cà ri gia vị đậm đà, thực đơn chay và mặn phong phú, phù hợp cho bữa trưa và tối cùng gia đình.",
    dishes: [
      { photo: "/am-thuc/pk-spice.png", name: "Cà ri cừu" },
      { photo: "/am-thuc/pk-spice.png", name: "Gà Tandoori" },
      { photo: "/am-thuc/pk-spice.png", name: "Bánh Samosa" },
    ],
  },
  {
    id: 8,
    name: "Pita GR Hà Nội",
    description: "Pita, kebab và các món ăn nhanh kiểu Trung Đông",
    distance: "250m",
    logoText: "Pita GR",
    logoBg: "#d97b3f",
    photo: "/am-thuc/pita-gr.png",
    hasVoucher: true,
    hours: "9h30 - 22h00",
    hoursNote: "Thứ 2 - Chủ nhật",
    address: "88 Phố Huế, Hai Bà Trưng.",
    detail:
      "Quán ăn nhanh phong cách Trung Đông với bánh Pita mềm, kebab nướng thơm lừng và nước sốt đặc trưng.",
    dishes: [
      { photo: "/am-thuc/pita-gr.png", name: "Kebab thịt bò" },
      { photo: "/am-thuc/pita-gr.png", name: "Pita gà nướng" },
      { photo: "/am-thuc/pita-gr.png", name: "Salad Trung Đông" },
    ],
  },
  {
    id: 9,
    name: "Cà phê Giảng",
    description: "Cà phê trứng nổi tiếng Hà Nội từ 1946",
    distance: "250m",
    logoText: "Cà Phê Giảng",
    logoBg: "#f3e6d0",
    photo: "/am-thuc/cafe-giang.png",
    hasVoucher: true,
    hours: "7h00 - 22h00",
    hoursNote: "Thứ 2 - Chủ nhật",
    address: "39 Nguyễn Hữu Huân, Hoàn Kiếm.",
    detail:
      "Quán cà phê trứng gia truyền từ năm 1946, hương vị béo ngậy đặc trưng giữa lòng phố cổ Hà Nội.",
    dishes: [
      { photo: "/am-thuc/cafe-giang.png", name: "Cà phê trứng" },
      { photo: "/am-thuc/cafe-giang.png", name: "Cacao trứng" },
      { photo: "/am-thuc/cafe-giang.png", name: "Trà trứng" },
    ],
  },
  {
    id: 10,
    name: "Xới cơm",
    description: "Xôi, cơm bình dân, món ăn sáng truyền thống",
    distance: "250m",
    logoText: "Xới Cơm",
    logoBg: "#e9dfd4",
    photo: "/am-thuc/xoi-com.png",
    hasVoucher: true,
    hours: "6h30 - 20h00",
    hoursNote: "Thứ 2 - Chủ nhật",
    address: "15 Tống Duy Tân, Hoàn Kiếm.",
    detail:
      "Quán xôi, cơm bình dân với các món ăn sáng truyền thống, giá cả phải chăng, phù hợp cho bữa sáng nhanh gọn.",
    dishes: [
      { photo: "/am-thuc/xoi-com.png", name: "Xôi xéo" },
      { photo: "/am-thuc/xoi-com.png", name: "Cơm sườn nướng" },
      { photo: "/am-thuc/xoi-com.png", name: "Xôi gà" },
    ],
  },
  {
    id: 11,
    name: "Bún đậu Hương",
    description: "Bún đậu mắm tôm, đặc sản Hà Nội",
    distance: "250m",
    logoText: "Bún Đậu Hương",
    logoBg: "#2f4d2f",
    hasVoucher: true,
  },
  {
    id: 12,
    name: "Quán Nhậu Tự Do",
    description: "Đồ nhậu, món nướng, bia hơi bình dân",
    distance: "250m",
    logoText: "Tự Do",
    logoBg: "#1f5c3a",
    hasVoucher: true,
  },
  {
    id: 13,
    name: "Phở Bò Hồ Lợi",
    description: "Phở bò truyền thống, nước dùng đậm đà",
    distance: "250m",
    logoText: "Hồ Lợi",
    logoBg: "#7a1f1f",
    hasVoucher: true,
  },
  {
    id: 14,
    name: "Tiệm Bánh Mì Belly",
    description: "Bánh mì kiểu mới, nhân đa dạng, giòn thơm",
    distance: "250m",
    logoText: "Belly",
    logoBg: "#c9a34e",
    hasVoucher: true,
  },
];

export function getRestaurant(id: number) {
  return RESTAURANTS.find((restaurant) => restaurant.id === id);
}
