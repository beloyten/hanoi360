import type { DetailBlock } from "../shared/detail-content";

// Giải trí content from the Figma "Giải trí" section (417:40044); images live in public/vui-choi.

export type EntertainmentCategory = "bar-pub" | "rap-phim" | "rap-xiec" | "san-khau-truyen-thong" | "san-khau-kich";

export type Entertainment = {
  id: number;
  name: string;
  address: string;
  distance: string;
  photo: string;
  category: EntertainmentCategory;
  hasVoucher?: boolean;
  /** Detail hero photo when it differs from the list logo. */
  cover?: string;
};

export const CATEGORIES: { key: EntertainmentCategory; label: string; icon: string }[] = [
  { key: "bar-pub", label: "Bar & Pub", icon: "/vui-choi/bar.png" },
  { key: "rap-phim", label: "Rạp phim", icon: "/vui-choi/cinema.png" },
  { key: "rap-xiec", label: "Rạp xiếc", icon: "/vui-choi/threat.png" },
  { key: "san-khau-truyen-thong", label: "Sân khấu\ntruyền thống", icon: "/vui-choi/sankhau.png" },
  { key: "san-khau-kich", label: "Sân khấu\nkịch", icon: "/vui-choi/san-kich.png" },
];

export const ENTERTAINMENTS: Entertainment[] = [
  { id: 1, name: "LOTTE Cinema West Lake", address: "272 Võ Chí Công, Phú Thượng, Tây Hồ", distance: "250m", photo: "/vui-choi/lotte-cinema.png", category: "rap-phim", hasVoucher: true },
  { id: 2, name: "Soma Pub & Dining", address: "685 Lạc Long Quân, Hà Nội", distance: "300m", photo: "/vui-choi/soma-pub.png", category: "bar-pub", hasVoucher: true },
  { id: 3, name: "The Loosehead Hanoi", address: "18 P. Quảng Bá, Tây Hồ, Hà Nội", distance: "450m", photo: "/vui-choi/loose-head.png", category: "bar-pub", hasVoucher: true },
  { id: 4, name: "Lotte Cinema Kosmo", address: "Tầng 2, Kosmo Tây Hồ, 161 Đ. Xuân La, P. Xuân Đỉnh, Hà Nội", distance: "600m", photo: "/vui-choi/lotte-kosmo.png", category: "rap-phim", hasVoucher: true },
  { id: 5, name: "CGV Xuân Diệu", address: "59 Đ. Xuân Diệu, Tây Hồ, Hà Nội", distance: "700m", photo: "/vui-choi/cgv-xuan-dieu.png", category: "rap-phim" },
  { id: 6, name: "The House's Lab", address: "148 Đ. Xuân Diệu, Tây Hồ, Hà Nội", distance: "750m", photo: "/vui-choi/house-lab.png", category: "bar-pub" },
  { id: 7, name: "Nhà hát Kịch Việt Nam", address: "1 Tràng Tiền, Cửa Nam, Hà Nội", distance: "1.2km", photo: "/vui-choi/nha-hat-kich.png", category: "san-khau-kich" },
  { id: 8, name: "Nhà hát Chèo Việt Nam", address: "1 P. Giang Văn Minh, Giảng Võ, Hà Nội", distance: "1.5km", photo: "/vui-choi/hat-cheo.png", category: "san-khau-truyen-thong" },
  { id: 9, name: "Nhà Hát Múa Rối Thăng Long", address: "57B phố Đinh Tiên Hoàng, p. Hoàn Kiếm", distance: "1.8km", photo: "/vui-choi/hat-mua-roi.png", category: "san-khau-truyen-thong" },
  { id: 10, name: "Nhà hát Tuồng Việt Nam", address: "172 P. Doãn Kế Thiện, Phú Diễn, Hà Nội", distance: "2.1km", photo: "/vui-choi/hat-tuong.png", category: "san-khau-truyen-thong" },
  { id: 11, name: "Rạp Xiếc Trung Ương", address: "67-69 P. Trần Nhân Tông, Hai Bà Trưng, Hà Nội", distance: "2.4km", photo: "/vui-choi/rap-xiec-trung-uong.png", category: "rap-xiec" },
  { id: 12, name: "Nhà hát tuổi trẻ Việt Nam", address: "11 Ngô Thì Nhậm, Hai Bà Trưng, Hà Nội", distance: "2.6km", photo: "/figma/list/tuoi-tre-logo.webp", category: "san-khau-kich", cover: "/figma/tuoi-tre-hero.webp" },
];

export function getEntertainment(id: number) {
  return ENTERTAINMENTS.find((item) => item.id === id);
}

const SHOWTIMES_NOTE: DetailBlock = {
  type: "text",
  parts: [{ text: "Xem các xuất chiếu mới nhất tại Fanpage & Website", bold: true }],
};

// Full copy from the Figma detail frame (417:40261) for Nhà hát Tuổi trẻ.
const TUOI_TRE: DetailBlock[] = [
  {
    type: "text",
    parts: [
      {
        text: "Thành lập năm 1978, Nhà hát Tuổi trẻ Việt Nam là nhà hát Nghệ thuật Quốc gia duy nhất tại Việt Nam có chức năng biểu diễn phục vụ Thiếu nhi và Khán giả trẻ, là người bạn thân thiết của tuổi thơ trong hơn 40 năm qua.",
      },
    ],
  },
  {
    type: "text",
    parts: [
      {
        text: "Năm 1981, trở thành thành viên chính thức của Hiệp hội Sân khấu Quốc tế dành cho Thiếu nhi và Khán giả trẻ (ASSITEJ), mang tên định danh là ASSITEJ Việt Nam.",
      },
    ],
  },
  {
    type: "text",
    parts: [
      {
        text: "Trên hành trình sáng tạo nghệ thuật của mình, Nhà hát Tuổi trẻ Việt Nam đã tạo dựng nên những dấu ấn đậm nét, đóng góp tích cực cho diện mạo nghệ thuật sân khấu Việt Nam với nhiều tác phẩm lớn, đây cũng là nơi trưởng thành của nhiều thế hệ các nghệ sỹ tên tuổi được đông đảo công chúng yêu mến.",
      },
    ],
  },
  {
    type: "text",
    parts: [
      {
        text: "Được xem là một trong những nhà hát năng động và sáng tạo nhất tại Việt Nam, Nhà hát Tuổi trẻ Việt Nam có bề dày hợp tác với các tổ chức văn hóa quốc tế, các đoàn nghệ thuật và nhà hát nước ngoài, trở thành cầu nối cho các hoạt động giao lưu văn hóa, tăng cường hiểu biết và quan hệ hữu nghị giữa Việt Nam và thế giới. Ngày nay, Nhà hát Tuổi trẻ Việt Nam còn là địa chỉ quen thuộc của thanh thiếu niên tới trải nghiệm những chương trình nghệ thuật quốc tế đặc sắc, trẻ trung, hiện đại.",
      },
    ],
  },
  { type: "text", parts: [{ text: "Một vài vở kịch tiêu biểu làm nên tên tuổi của nhà hát Tuổi Trẻ", bold: true }] },
  { type: "text", parts: [{ text: 'Những lớp diễn mang lại tiếng cười duyên dáng trong vở "Quân khu Nam Đồng"' }] },
  { type: "image", src: "/figma/tuoi-tre-1.webp", alt: "Quân khu Nam Đồng" },
  { type: "text", parts: [{ text: 'Vở nhạc kịch "Không gia đình"' }] },
  { type: "image", src: "/figma/tuoi-tre-2.webp", alt: "Không gia đình" },
  { type: "text", parts: [{ text: 'Vở kịch "Ông không phải là bố tôi"' }] },
  { type: "image", src: "/figma/tuoi-tre-3.webp", alt: "Ông không phải là bố tôi" },
  SHOWTIMES_NOTE,
];

const CATEGORY_INTRO: Record<EntertainmentCategory, string> = {
  "bar-pub": "là điểm hẹn về đêm quen thuộc với không gian âm nhạc sôi động và thực đơn đồ uống phong phú.",
  "rap-phim": "là cụm rạp hiện đại với phòng chiếu chuẩn quốc tế, cập nhật phim mới mỗi tuần.",
  "rap-xiec": "là sân khấu xiếc lâu đời nhất thủ đô với các tiết mục nhào lộn, ảo thuật dành cho cả gia đình.",
  "san-khau-truyen-thong": "là nơi lưu giữ và biểu diễn loại hình nghệ thuật truyền thống đặc sắc của Việt Nam.",
  "san-khau-kich": "là sân khấu kịch nói với nhiều vở diễn được khán giả thủ đô yêu thích.",
};

export function getEntertainmentContent(item: Entertainment): DetailBlock[] {
  if (item.id === 12) return TUOI_TRE;
  return [
    { type: "text", parts: [{ text: item.name, bold: true }, { text: ` ${CATEGORY_INTRO[item.category]}` }] },
    { type: "text", parts: [{ text: `Địa chỉ: ${item.address}.` }] },
    { type: "image", src: item.photo, alt: item.name },
    SHOWTIMES_NOTE,
  ];
}
