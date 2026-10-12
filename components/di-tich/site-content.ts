import type { DetailBlock } from "../shared/detail-content";
import type { Site } from "./sites";

const SITE_INFO: Record<number, { story: string; highlights: string[]; tip: string }> = {
  2: {
    story: "Vườn quốc gia Ba Vì là khu rừng nguyên sinh rộng lớn phía tây Hà Nội, nổi tiếng với khí hậu mát mẻ quanh năm, những thung lũng xanh và các khu cắm trại bên hồ.",
    highlights: [
      "Cắm trại và dã ngoại bên hồ giữa thung lũng",
      "Rừng thông, đồi cỏ và các cung đường trekking",
      "Đền Thượng trên đỉnh núi Vua với tầm nhìn toàn cảnh",
    ],
    tip: "Nên đi xe máy hoặc ô tô riêng và mang theo áo khoác mỏng - nhiệt độ trên núi thấp hơn nội thành vài độ.",
  },
  10: {
    story: "Chùa Tây Phương nằm trên đỉnh núi Câu Lâu, nổi tiếng với kiến trúc gỗ chồng diêm cổ kính và hệ thống tượng Phật được xem là đỉnh cao của nghệ thuật điêu khắc Việt Nam thế kỷ 18.",
    highlights: [
      "Bộ tượng 18 vị La Hán được chạm khắc sống động",
      "Kiến trúc ba tòa chùa xếp hình chữ Tam, mái cong chồng diêm",
      "Con đường 239 bậc đá ong dẫn lên đỉnh núi",
    ],
    tip: "Đường lên chùa khá dốc - nên đi giày thoải mái và đến vào buổi sáng để tránh nắng.",
  },
  1: {
    story: "Hồ Tây là hồ nước ngọt lớn nhất Hà Nội, hình thành từ một khúc cũ của sông Hồng. Quanh hồ là những con đường đẹp, quán cà phê view hồ và nhiều đền chùa cổ kính.",
    highlights: [
      "Đạp xe hoặc dạo bộ một vòng quanh hồ khoảng 17km",
      "Ngắm hoàng hôn trên con đường Thanh Niên",
      "Ghé các ngôi chùa cổ ven hồ như Trấn Quốc, Tảo Sách",
      "Thưởng thức bánh tôm Hồ Tây nổi tiếng",
    ],
    tip: "Chiều muộn là thời điểm đẹp nhất để ngắm hoàng hôn và chụp ảnh. Cuối tuần khu vực quanh hồ khá đông, hãy đến sớm nếu muốn không gian yên tĩnh.",
  },
  11: {
    story: "Chùa Trấn Quốc là ngôi chùa cổ nhất Hà Nội, được xây dựng từ thế kỷ thứ 6 dưới triều vua Lý Nam Đế, sau đó dời về đảo cá của Hồ Tây vào thế kỷ 17.",
    highlights: [
      "Tháp Bảo Tháp 11 tầng nổi bật giữa lòng hồ",
      "Cây bồ đề do Tổng thống Ấn Độ tặng năm 1959",
      "Kiến trúc và tượng Phật cổ quý giá",
    ],
    tip: "Nên mặc trang phục lịch sự khi vào chùa. Buổi sáng sớm ít khách và không khí thanh tịnh hơn.",
  },
  3: {
    story: "Nhà tù Hỏa Lò do thực dân Pháp xây dựng năm 1896, từng là nơi giam giữ các chiến sĩ cách mạng Việt Nam và sau này là tù binh chiến tranh. Hiện nay là di tích lịch sử mở cửa tham quan.",
    highlights: [
      "Khu trưng bày giam cũ và dụng cụ giam giữ nguyên trạng",
      "Phòng trưng bày về các chiến sĩ cách mạng",
      "Khu vực dành cho tù binh thời chiến tranh Việt Nam",
    ],
    tip: "Nên dành ít nhất 1-1,5 giờ để tham quan trọn vẹn. Một số khu vực trưng bày mang nội dung nặng nề, cân nhắc khi đi cùng trẻ nhỏ.",
  },
  4: {
    story: "Chùa Một Cột (Diên Hựu tự) được vua Lý Thái Tông cho xây dựng năm 1049, mang kiến trúc độc đáo hình bông sen vươn lên trên trụ đá giữa ao, là một trong những biểu tượng của Hà Nội.",
    highlights: [
      "Kiến trúc chùa một cột độc nhất Việt Nam",
      "Nằm trong quần thể khu Ba Đình lịch sử",
      "Miễn phí tham quan, dễ kết hợp với Lăng Bác và Bảo tàng Hồ Chí Minh",
    ],
    tip: "Khu vực quanh chùa có quy định về trang phục và giờ tham quan theo quần thể Ba Đình - nên đi vào buổi sáng.",
  },
  5: {
    story: "Hồ Hoàn Kiếm là trái tim của Hà Nội, gắn liền với truyền thuyết vua Lê Lợi trả gươm báu cho Rùa vàng. Giữa hồ là Tháp Rùa cổ kính, phía bắc là đền Ngọc Sơn nối với bờ qua cầu Thê Húc đỏ.",
    highlights: [
      "Cầu Thê Húc và đền Ngọc Sơn trên đảo nhỏ",
      "Tháp Rùa giữa hồ - biểu tượng của thành phố",
      "Phố đi bộ cuối tuần với nhiều hoạt động văn hóa",
    ],
    tip: "Tối thứ 6 đến Chủ nhật, phố đi bộ quanh hồ rất sôi động. Sáng sớm là lúc người dân tập thể dục - trải nghiệm đời sống địa phương thú vị.",
  },
  6: {
    story: "Vườn Quốc gia Ba Vì nằm cách trung tâm Hà Nội khoảng 50km, nổi tiếng với núi cao, rừng nguyên sinh, nhà thờ cổ bỏ hoang giữa rừng và hệ thống đền thờ trên đỉnh Tản Viên.",
    highlights: [
      "Leo núi lên đền Thượng và nhìn toàn cảnh đồng bằng Bắc Bộ",
      "Nhà thờ cổ phủ rêu giữa rừng - điểm chụp ảnh nổi tiếng",
      "Vườn xương rồng và rừng thông xanh mát",
    ],
    tip: "Mang theo giày đi bộ và nước uống. Mùa đông trên đỉnh núi khá lạnh, nên mang áo ấm.",
  },
  7: {
    story: "Thành Cổ Loa là kinh đô cổ nhất của Việt Nam, được An Dương Vương xây dựng từ thế kỷ thứ 3 trước Công nguyên. Di tích gồm ba vòng thành xoáy ốc độc đáo cùng đền thờ An Dương Vương và đền Ngọc Quý.",
    highlights: [
      "Ba vòng thành xoáy ốc còn sót lại",
      "Đền Thượng thờ An Dương Vương",
      "Giếng Ngọc gắn với truyền thuyết nỏ thần",
    ],
    tip: "Hội đền Thượng diễn ra vào ngày 6 tháng Giêng âm lịch - thời điểm lý tưởng để trải nghiệm văn hóa địa phương.",
  },
  8: {
    story: "Làng cổ Đường Lâm là 'quê hương của hai vị vua' Phùng Hưng và Ngô Quyền, nổi tiếng với các ngôi nhà cổ bằng đá ong hàng trăm năm tuổi, đình làng, giếng nước và lối sống làng quê Bắc Bộ nguyên vẹn.",
    highlights: [
      "Nhà cổ đá ong 300-400 năm tuổi",
      "Đình Mông Phụ và cây đa, bến nước, sân đình",
      "Đạp xe qua những con hẻm gạch đỏ yên bình",
      "Đặc sản chè lam, tương bần, gà mía",
    ],
    tip: "Nên thuê xe đạp tại cổng làng để khám phá. Ghé nhà cổ của các hộ gia đình để nghe kể chuyện làng xưa.",
  },
};

// Copy and photos from the Figma Hoàng Thành detail frame (720:27067).
const HOANG_THANH: DetailBlock[] = [
  {
    type: "text",
    parts: [
      {
        text: "Khu di tích trung tâm Hoàng thành Thăng Long - Hà Nội có diện tích 20ha, bao gồm khu khảo cổ học 18 Hoàng Diệu và các di tích còn sót lại trong khu di tích thành cổ Hà Nội như Bắc Môn, Đoan Môn, Hậu Lâu, rồng đá điện Kính Thiên, nhà con rồng, nhà D67 và cột cờ Hà Nội. Cụm di tích này được bao bọc bởi 4 con đường: phía Bắc là đường Phan Đình Phùng, phía Nam là đường Điện Biên Phủ, phía Đông là đường Nguyễn Tri Phương và phía Tây là đường Hoàng Diệu. Khu di tích Hoàng thành Thăng Long được UNESCO công nhận là Di sản Văn hóa thế giới năm 2010, với những giá trị di sản, kiến trúc, văn hóa được kết tinh qua hàng nghìn năm lịch sử.",
      },
    ],
  },
  { type: "image", src: "/figma/hoang-thanh-1.webp", alt: "Hoàng Thành Thăng Long" },
  {
    type: "text",
    parts: [
      {
        text: "Những di tích trên mặt đất và khai quật được trong lòng đất tại khu trung tâm Hoàng thành Thăng Long - Hà Nội là minh chứng đặc sắc về quá trình giao lưu văn hóa lâu dài, là nơi tiếp nhận nhiều ảnh hưởng văn hóa từ bên ngoài, nhiều học thuyết, tư tưởng có giá trị toàn cầu của văn minh nhân loại, đặc biệt Phật giáo, Nho giáo, thuyết phong thủy, mô hình vương thành phương Đông, mô hình kiến trúc quân sự phương Tây, đến từ Trung Hoa, Champa, Pháp, để tạo dựng nên những nét độc đáo, sáng tạo của một Trung tâm chính trị, kinh tế, văn hóa của một quốc gia vùng châu thổ sông Hồng. Kết quả giao thoa, tiếp biến văn hóa đó được biểu đạt trong tạo dựng cảnh quan, qui hoạch các khu cung điện, trong nghệ thuật kiến trúc và nghệ thuật trang trí cung đình với diễn biến văn hóa đa dạng qua các thời kỳ lịch sử.",
      },
    ],
  },
  { type: "image", src: "/figma/hoang-thanh-2.webp", alt: "Hoàng Thành Thăng Long" },
];

export function getSiteContent(site: Site): DetailBlock[] {
  if (site.id === 9) return HOANG_THANH;
  const info = SITE_INFO[site.id];

  return [
    {
      type: "text",
      parts: [
        { text: site.name, bold: true },
        {
          text: ` tọa lạc tại ${site.subtitle} Hà Nội, cách bạn khoảng ${site.distance}. ${info?.story ?? ""}`,
        },
      ],
    },
    {
      type: "text",
      parts: [
        {
          text: "Đây là một trong những điểm đến văn hóa - lịch sử được yêu thích nhất của thủ đô, phù hợp cho chuyến tham quan nửa ngày hoặc cả ngày tùy lịch trình của bạn.",
        },
      ],
    },
    {
      type: "text",
      parts: [
        { text: "Lưu ý: ", italic: true },
        { text: info?.tip ?? "Nên đến sớm để tránh đông đúc và có ánh sáng đẹp cho ảnh.", italic: true },
      ],
    },
    { type: "image", src: site.photo, alt: site.name },
    {
      type: "text",
      parts: [{ text: "Trải nghiệm nổi bật", bold: true }],
    },
    {
      type: "list",
      items: (info?.highlights ?? []).map((highlight) => [{ text: highlight }]),
    },
    {
      type: "text",
      parts: [
        { text: "Địa chỉ: ", bold: true },
        { text: `${site.subtitle} Hà Nội. ` },
        { text: `Cách bạn khoảng ${site.distance} - có thể đi bộ, xe máy hoặc ô tô tùy khoảng cách.` },
      ],
    },
    {
      type: "text",
      parts: [
        {
          text: "Thông tin trên chỉ mang tính tham khảo. Giờ mở cửa và giá vé có thể thay đổi theo mùa hoặc dịp lễ.",
          italic: true,
        },
      ],
    },
  ];
}
