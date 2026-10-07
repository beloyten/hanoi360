import type { DetailBlock } from "../shared/detail-content";
import type { Venue } from "./venues";

const VENUE_INFO: Record<number, { story: string; highlights: string[]; tip: string }> = {
  1: {
    story: "Thủy cung Lotte World Aquarium trong Lotte Mall West Lake là thủy cung trong nhà lớn nhất Việt Nam, với đường hầm kính và hàng chục ngàn sinh vật biển.",
    highlights: [
      "Đường hầm kính xuyên đại dương với cá mập, cá đuối",
      "Khu vực chạm vào sao biển và sinh vật biển nông",
      "Show cho cá ăn và biểu diễn nàng tiên cá theo giờ",
    ],
    tip: "Mua vé online trước để tránh xếp hàng. Chiều tối cuối tuần rất đông trẻ nhỏ.",
  },
  2: {
    story: "Công viên Bách Thảo (Bách Thảo) là lá phổi xanh lâu đời nhất Hà Nội, rợp bóng cây cổ thụ, thích hợp để dạo bộ, tập thể dục và dã ngoại nhẹ.",
    highlights: [
      "Đại lộ cây xanh mát quanh năm",
      "Hồ nhỏ, cầu đá và khu vực chơi cho trẻ em",
      "Không gian yên tĩnh giữa trung tâm thành phố",
    ],
    tip: "Đẹp nhất vào sáng sớm và chiều mát. Mang theo nước và mũ nếu đi vào giữa trưa.",
  },
  3: {
    story: "Phố đi bộ Hồ Gươm mở cửa từ tối thứ 6 đến hết Chủ nhật, biến khu vực quanh hồ thành quảng trường văn hóa với nhạc đường phố, trò chơi dân gian và hàng quán vỉa hè.",
    highlights: [
      "Nhạc sống đường phố và biểu diễn đường phố",
      "Trò chơi dân gian: ô ăn quan, nhảy bao bố, kéo co",
      "Hàng quán đặc sản và xe kem dạo quanh hồ",
    ],
    tip: "Chỉ mở vào cuối tuần (từ tối thứ Sáu). Nên đi bộ - phương tiện không được vào khu phố đi bộ.",
  },
  4: {
    story: "Jump Arena là khu vui chơi nhảy bạt lò xo (trampoline) trong nhà, phù hợp cho trẻ em và người trẻ thích vận động mạnh với nhiều khu trò chơi khác nhau.",
    highlights: [
      "Sân trampoline rộng với nhiều khu nhảy tự do",
      "Khu ninja warrior và leo núi",
      "Khu trẻ em với trò chơi mềm an toàn",
    ],
    tip: "Mang theo hoặc thuê tất chống trượt tại quầy. Đặt giờ chơi trước vào cuối tuần.",
  },
  5: {
    story: "Complex 01 là khu tổ hợp sáng tạo trong hẻm Tây Sơn - quán cà phê, cửa hàng độc lập, không gian triển lãm và sự kiện âm nhạc nhỏ trong một tòa nhà cũ cải tạo.",
    highlights: [
      "Cà phê độc lập và cửa hàng thiết kế local brand",
      "Không gian triển lãm, workshop và sự kiện cuối tuần",
      "Góc chụp ảnh theo phong cách công nghiệp cũ",
    ],
    tip: "Theo dõi lịch sự kiện trên fanpage trước khi đến - các đêm nhạc nhỏ rất đáng thử.",
  },
  6: {
    story: "Công viên Yên Sở là công viên rộng lớn phía nam Hà Nội với hồ trung tâm, đồi cỏ và khu cắm trại - nơi dã ngoại cuối tuần quen thuộc của người dân.",
    highlights: [
      "Đồi cỏ rộng thoải thích hợp picnic và cắm trại",
      "Hồ trung tâm với đường dạo bộ vòng quanh",
      "Khu vực chụp ảnh cưới và check-in nổi tiếng",
    ],
    tip: "Nên mang theo thảm, đồ ăn nhẹ và kem chống nắng. Buổi chiều muộn đẹp nhất để picnic.",
  },
  7: {
    story: "Trekking Ba Vì là cung đường leo núi kinh điển gần Hà Nội, lên đỉnh Vua hoặc đỉnh Tản Viên qua rừng nguyên sinh, sương mù và nhà thờ cổ đổ nát.",
    highlights: [
      "Chinh phục đỉnh Tản Viên hoặc đỉnh Vua 1.296m",
      "Đền Thượng, nhà thờ cổ giữa rừng sương",
      "Rừng nguyên sinh và suối dọc đường đi",
    ],
    tip: "Đi sớm để kịp xuống trước chiều tối. Mang giày bám, áo mưa nhẹ và nước uống đủ.",
  },
  8: {
    story: "Phố đi bộ Thành cổ Sơn Tây là tuyến phố đi bộ mới nối với khu Thành cổ Sơn Tây, mang về không khí phố cổ ven đô với hàng quán và hoạt động văn hóa cuối tuần.",
    highlights: [
      "Kết hợp tham quan Thành cổ Sơn Tây gần đó",
      "Hàng quán ăn vặt và cà phê theo phong cách cổ",
      "Hoạt động văn hóa, trò chơi vào cuối tuần",
    ],
    tip: "Kết hợp luôn chuyến thăm Thành cổ Sơn Tây và làng cổ Đường Lâm trong cùng một ngày.",
  },
  9: {
    story: "Núi Hàm Lợn ('mũi của trời') là đỉnh núi trekking gần nhất Hà Nội, với đường lên đỉnh qua rừng thông và đồi bằng cắm trại nhìn ra hồ Suối Hai.",
    highlights: [
      "Trekking lên đỉnh khoảng 3-4 giờ",
      "Đồi bằng cắm trại qua đêm ngắm sao",
      "View hồ Suối Hai và cánh rừng xanh",
    ],
    tip: "Cung đường khá dốc ở đoạn cuối - cần giày trekking tốt. Cắm trại qua đêm nên đi nhóm và mang theo đồ cắm trại đầy đủ.",
  },
};

export function getVenueContent(venue: Venue): DetailBlock[] {
  const info = VENUE_INFO[venue.id];

  return [
    {
      type: "text",
      parts: [
        { text: venue.name, bold: true },
        {
          text: ` nằm tại ${venue.address}, cách bạn khoảng ${venue.distance}. ${info?.story ?? ""}`,
        },
      ],
    },
    {
      type: "text",
      parts: [
        {
          text: "Đây là một trong những địa điểm vui chơi - giải trí được săn đón nhất của người dân Hà Nội và du khách, phù hợp cho cả đi chơi tự do lẫn tụ họp nhóm.",
        },
      ],
    },
    {
      type: "text",
      parts: [
        { text: "Gợi ý: ", italic: true },
        {
          text:
            info?.tip ??
            "Nên đi sớm để có nhiều thời gian trải nghiệm và tránh giờ cao điểm.",
          italic: true,
        },
      ],
    },
    { type: "image", src: venue.photo, alt: venue.name },
    {
      type: "text",
      parts: [{ text: "Hoạt động nổi bật", bold: true }],
    },
    {
      type: "list",
      items: (info?.highlights ?? []).map((highlight) => [{ text: highlight }]),
    },
    {
      type: "text",
      parts: [{ text: "Kinh nghiệm khi đến", bold: true }],
    },
    {
      type: "list",
      ordered: true,
      items: [
        [{ text: "Kiểm tra giờ mở cửa và mua vé trước nếu có thể" }],
        [{ text: "Mang theo nước, mũ và giày đi bộ thoải mái" }],
        [{ text: "Bấm nút Chỉ đường để mở Google Maps dẫn đường" }],
      ],
    },
    {
      type: "text",
      parts: [
        { text: "Địa chỉ: ", bold: true },
        { text: `${venue.address} ` },
        { text: `Cách bạn khoảng ${venue.distance}.` },
      ],
    },
  ];
}
