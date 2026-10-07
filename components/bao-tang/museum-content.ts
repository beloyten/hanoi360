import type { DetailBlock } from "../shared/detail-content";
import type { Museum } from "./museums";

const MUSEUM_INFO: Record<number, { story: string; highlights: string[]; tip: string }> = {
  1: {
    story: "Bảo tàng Dân tộc học Việt Nam trưng bày đời sống văn hóa của 54 dân tộc, với khu nhà truyền thống ngoài trời là điểm nhấn được yêu thích nhất.",
    highlights: [
      "Khu nhà dân tộc ngoài trời: nhà dài Ê Đê, nhà Rông, nhà sàn",
      "Hiện vật về trang phục, nhạc cụ, sinh hoạt của 54 dân tộc",
      "Biểu diễn múa rối nước vào cuối tuần",
      "Khu trưng bày Đông Nam Á trong tòa nhà Cánh Diều",
    ],
    tip: "Nên dành ít nhất nửa ngày - khu ngoài trời khá rộng và rất đáng khám phá. Mang theo mũ và nước vào mùa hè.",
  },
  2: {
    story: "Bảo tàng Hà Nội lưu giữ hành trình hơn nghìn năm của thành phố, với kiến trúc hình chóp úp độc đáo tại khu đô thị mới Nam Từ Liêm.",
    highlights: [
      "Hiện vật từ thời phong kiến đến Hà Nội hiện đại",
      "Kiến trúc chóp ngược biểu tượng của tòa nhà",
      "Triển lãm chuyên đề về văn hóa Thăng Long",
    ],
    tip: "Tòa nhà nằm ở khu đô thị mới, cách trung tâm khá xa - nên kết hợp tham quan với các điểm lân cận trong cùng một chuyến đi.",
  },
  3: {
    story: "Bảo tàng Lịch sử Quốc gia là bảo tàng lâu đời nhất Việt Nam (khởi nguồn từ 1926), lưu giữ hơn 200.000 hiện vật qua các thời kỳ từ tiền sử đến hiện đại.",
    highlights: [
      "Hiện vật thời tiền sử, Đông Sơn, Óc Eo",
      "Trống đồng và bảo vật quốc gia",
      "Kiến trúc Pháp thuộc đặc sắc của tòa nhà chính",
    ],
    tip: "Bảo tàng có hai cơ sở trên phố Tràng Tiền và Trần Quang Khải - đối diện nhau, mua một vé tham quan được cả hai.",
  },
  4: {
    story: "Bảo tàng Mỹ thuật Việt Nam lưu giữ bộ sưu tập nghệ thuật lớn nhất cả nước, từ điêu khắc Chăm Pa, tranh sơn mài đến hội họa hiện đại.",
    highlights: [
      "Tranh sơn mài và sơn dầu các danh họa",
      "Điêu khắc Phật giáo và Chăm Pa cổ",
      "Không gian triển lãm trong tòa nhà kiến trúc Pháp",
    ],
    tip: "Nằm ngay khu Ba Đình, thuận tiện kết hợp với Văn Miếu hoặc khu Lăng Bác trong cùng buổi.",
  },
  5: {
    story: "Bảo tàng Lịch sử Quân sự Việt Nam trưng bày hiện vật quân sự qua các cuộc kháng chiến, nổi bật với xác máy bay, xe tăng và Cột cờ Hà Nội ngay trong khuôn viên.",
    highlights: [
      "Xác máy bay B-52 và các phương tiện chiến tranh thật",
      "Cột cờ Hà Nội - di tích quốc gia trong khuôn viên",
      "Triển lãm về chiến dịch Điện Biên Phủ",
    ],
    tip: "Khuôn viên ngoài trời nắng nóng - tham quan phần triển lãm trong nhà trước, ra ngoài trời vào chiều mát.",
  },
  6: {
    story: "Bảo tàng Phụ nữ Việt Nam tôn vinh vai trò của phụ nữ qua các thời kỳ, với triển lãm về gia đình, lịch sử và thời trang truyền thống giàu cảm xúc.",
    highlights: [
      "Triển lãm 'Phụ nữ trong gia đình' và 'Phụ nữ trong lịch sử'",
      "Bộ sưu tập trang phục các dân tộc",
      "Không gian tương tác và triển lãm hiện đại",
    ],
    tip: "Bảo tàng nằm ngay trung tâm, cách phố cổ vài phút đi bộ - dễ kết hợp trong ngày khám phá Hoàn Kiếm.",
  },
  7: {
    story: "Bảo tàng Hồ Chí Minh lưu giữ cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh qua hiện vật, tư liệu và những mô hình trình bày nghệ thuật độc đáo.",
    highlights: [
      "Hiện vật và tư liệu về cuộc đời Bác Hồ",
      "Triển lãm nghệ thuật sắp đặt ấn tượng",
      "Nằm trong quần thể Lăng Chủ tịch - chùa Một Cột",
    ],
    tip: "Khu Ba Đình có quy định trang phục lịch sự và kiểm tra an ninh - đến buổi sáng và mang theo giấy tờ tùy thân.",
  },
  8: {
    story: "Bảo tàng Thiên nhiên Việt Nam trưng bày hệ sinh thái và khoáng sản đất nước, với bộ sưu tập hóa thạch, xương cá voi và mô hình động thực vật phong phú.",
    highlights: [
      "Bộ xương cá voi khổng lồ và hóa thạch cổ",
      "Mô hình sinh cảnh động thực vật các vùng miền",
      "Khu vui chơi khám phá dành cho trẻ em",
    ],
    tip: "Rất phù hợp đưa trẻ nhỏ đi học về thiên nhiên. Nên đi vào cuối tuần khi có thêm hoạt động trải nghiệm.",
  },
};

export function getMuseumContent(museum: Museum): DetailBlock[] {
  const info = MUSEUM_INFO[museum.id];

  return [
    {
      type: "text",
      parts: [
        { text: museum.title, bold: true },
        {
          text: ` nằm tại ${museum.address}, Hà Nội, cách bạn khoảng ${museum.distance}. ${info?.story ?? ""}`,
        },
      ],
    },
    {
      type: "text",
      parts: [
        {
          text: "Bảo tàng mở cửa hầu hết các ngày trong tuần (thường nghỉ thứ Hai), phù hợp cho chuyến tham quan 1-2 giờ tìm hiểu văn hóa và lịch sử.",
        },
      ],
    },
    {
      type: "text",
      parts: [
        { text: "Lưu ý: ", italic: true },
        {
          text:
            info?.tip ??
            "Nên đến vào buổi sáng để có thời gian tham quan thoải mái.",
          italic: true,
        },
      ],
    },
    { type: "image", src: museum.image, alt: museum.title },
    {
      type: "text",
      parts: [{ text: "Không gian trưng bày nổi bật", bold: true }],
    },
    {
      type: "list",
      items: (info?.highlights ?? []).map((highlight) => [{ text: highlight }]),
    },
    {
      type: "text",
      parts: [{ text: "Kinh nghiệm tham quan", bold: true }],
    },
    {
      type: "list",
      ordered: true,
      items: [
        [{ text: "Mua vé tại quầy hoặc đặt trước trong mùa cao điểm" }],
        [{ text: "Không sử dụng đèn flash khi chụp ảnh hiện vật" }],
        [{ text: "Giữ yên lặng trong khu vực triển lãm" }],
      ],
    },
    {
      type: "text",
      parts: [
        { text: "Địa chỉ: ", bold: true },
        { text: `${museum.address}, Hà Nội. ` },
        { text: `Cách bạn khoảng ${museum.distance}.` },
      ],
    },
  ];
}
