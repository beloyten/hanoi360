import type { DetailBlock } from "../shared/detail-content";
import type { Guide } from "./guides";

const CATEGORY_INFO: Record<
  Guide["category"],
  {
    intro: string;
    body: string;
    heading: string;
    bullets: string[];
    steps: string[];
    tip: string;
  }
> = {
  itinerary: {
    intro: "là hành trình gợi ý giúp bạn khám phá Hà Nội một cách trọn vẹn nhất, cân bằng giữa tham quan, ẩm thực và nghỉ ngơi.",
    body: "Lịch trình được sắp xếp theo cụm địa điểm gần nhau để tiết kiệm thời gian di chuyển. Buổi sáng dành cho các điểm ngoài trời khi thời tiết còn mát, buổi chiều ghé các bảo tàng và phố cổ, tối đến dạo hồ và thưởng thức ẩm thực đường phố.",
    heading: "Điểm nhấn trong hành trình",
    bullets: [
      "Hồ Gươm, phố đi bộ và 36 phố phường",
      "Văn Miếu - Quốc Tử Giám và khu Ba Đình",
      "Hồ Tây, Chùa Trấn Quốc ngắm hoàng hôn",
      "Ẩm thực đường phố: phở, bún chả, bánh cuốn",
    ],
    steps: [
      "Ngày 1: Khám phá phố cổ và hồ Gươm, tối dạo phố đi bộ.",
      "Ngày 2: Ba Đình - Văn Miếu - Hồ Tây, kết thúc bằng bữa tối hải sản hoặc bún chả.",
      "Ngày 3 (nếu có): Làng nghề ngoại thành hoặc trekking Ba Vì nửa ngày.",
    ],
    tip: "Nên đặt khách sạn quanh khu vực phố cổ hoặc hồ Gươm để di chuyển thuận tiện. Đi bộ là cách tốt nhất để cảm nhận phố cổ.",
  },
  food: {
    intro: "là hành trình ẩm thực đưa bạn qua những món ăn đặc trưng nhất của Hà Nội - từ quán vỉa hè lâu đời đến các địa chỉ được Michelin giới thiệu.",
    body: "Ẩm thực Hà Nội ngon nhất vào sáng sớm và buổi tối. Đa số quán ngon nằm trong ngõ nhỏ, chỗ ngồi hạn chế nên hãy đến sớm hoặc chấp nhận xếp hàng. Giá cả rất hợp lý - một bữa ăn đầy đủ thường chỉ từ 30.000đ đến 70.000đ.",
    heading: "Món ăn không thể bỏ lỡ",
    bullets: [
      "Phở bò/gà - bữa sáng kinh điển của người Hà Nội",
      "Bún chả, chả cá Lã Vọng, bánh cuốn Thanh Trì",
      "Cà phê trứng và trà chanh vỉa hè",
      "Tào phớ, chè và kem Tràng Tiền cho món tráng miệng",
    ],
    steps: [
      "Đi theo nhóm để gọi được nhiều món chia sẻ.",
      "Mang tiền mặt - nhiều quán vỉa hè chưa nhận thẻ.",
      "Ăn đúng giờ cao điểm để được món nóng hổi nhất.",
    ],
    tip: "Các quán đông khách địa phương thường ngon hơn quán dành cho khách du lịch. Đừng ngại ngồi ghế nhựa nhỏ - đó là trải nghiệm chuẩn Hà Nội.",
  },
  season: {
    intro: "là cẩm nang theo mùa giúp bạn chọn đúng thời điểm và trải nghiệm để tận hưởng Hà Nội trong khung cảnh đẹp nhất của nó.",
    body: "Mỗi mùa Hà Nội có một vẻ riêng: xuân rộn ràng lễ hội, hạ rực rỡ hoa bằng lăng, thu trong trẻo với cốm và hoa sữa, đông se lạnh với phở gà nóng hổi. Bài viết gợi ý các hoạt động đặc trưng theo mùa cùng những lưu ý về thời tiết.",
    heading: "Trải nghiệm đặc trưng theo mùa",
    bullets: [
      "Hoa và lễ hội đầu năm: chùa Hương, hội Gióng, phủ Tây Hồ",
      "Mùa thu: cốm Vòng, hoa sữa, trà chiều bên Hồ Gươm",
      "Mùa đông: ẩm thực nóng - lẩu, bánh trôi tàu, ngô nướng",
      "Lễ hội làng nghề và phố cổ quanh năm",
    ],
    steps: [
      "Kiểm tra dự báo thời tiết trước khi lên lịch - mưa bất chợt thường xuyên.",
      "Đặt vé/phòng sớm vào dịp lễ Tết và cuối tuần dài.",
      "Mang theo áo khoác nhẹ - chênh nhiệt ngày đêm khá lớn.",
    ],
    tip: "Tháng 9-11 và tháng 3-4 được xem là thời điểm đẹp nhất để du lịch Hà Nội: khô ráo, mát mẻ và nhiều sự kiện.",
  },
  heritage: {
    intro: "là hành trình khám phá chiều sâu văn hóa - lịch sử nghìn năm của Thăng Long - Hà Nội qua di tích, làng nghề và các nghi lễ truyền thống.",
    body: "Văn hóa Hà Nội sống trong từng con phố, ngôi chùa và nghề thủ công truyền đời. Bài viết dẫn bạn qua các di tích tiêu biểu, giải thích ý nghĩa lịch sử và gợi ý cách trải nghiệm tôn trọng phong tục địa phương.",
    heading: "Điểm đến văn hóa tiêu biểu",
    bullets: [
      "Hoàng thành Thăng Long và các di tích Ba Đình",
      "Chùa Trấn Quốc, Chùa Một Cột, đền Ngọc Sơn",
      "Làng nghề truyền thống: Bát Tràng, Vạn Phúc, Chuông",
      "Nghệ thuật dân gian: ca trù, múa rối nước, quan họ",
    ],
    steps: [
      "Mặc trang phục kín đáo khi vào chùa, đền và nơi thờ cúng.",
      "Nên đi cùng hướng dẫn viên hoặc audio guide để hiểu bối cảnh.",
      "Tham gia workshop làng nghề để trải nghiệm trực tiếp.",
    ],
    tip: "Sáng sớm là thời điểm đẹp nhất để thăm chùa đền - ít khách, không khí thanh tịnh và ánh sáng tốt để chụp ảnh.",
  },
};

export function getGuideContent(guide: Guide): DetailBlock[] {
  const info = CATEGORY_INFO[guide.category];

  return [
    {
      type: "text",
      parts: [
        { text: guide.title, bold: true },
        { text: ` ${info.intro}` },
      ],
    },
    { type: "text", parts: [{ text: info.body }] },
    { type: "text", parts: [{ text: info.tip, italic: true }] },
    { type: "image", src: guide.photo, alt: guide.title },
    {
      type: "text",
      parts: [{ text: info.heading, bold: true }],
    },
    { type: "list", ordered: false, items: info.bullets.map((text) => [{ text }]) },
    {
      type: "text",
      parts: [{ text: "Gợi ý lịch trình", bold: true }],
    },
    { type: "list", ordered: true, items: info.steps.map((text) => [{ text }]) },
    {
      type: "text",
      parts: [
        {
          text: "Nội dung cẩm nang chỉ mang tính tham khảo - giờ mở cửa, giá vé và lịch sự kiện có thể thay đổi, hãy kiểm tra trước khi đi.",
          italic: true,
        },
      ],
    },
  ];
}
