import type { DetailBlock } from "../shared/detail-content";
import type { Village } from "./villages";

const VILLAGE_INFO: Record<number, { story: string; highlights: string[]; tip: string }> = {
  1: {
    story: "Làng đúc đồng Ngũ Xá nổi tiếng từ thế kỷ 17 với nghề đúc đồng tinh xảo, đã tạo nên nhiều tượng đồng lớn nổi tiếng trên cả nước như tượng Phật chùa Trấn Quốc hay Quán Thế Âm.",
    highlights: [
      "Đình và nhà thờ họ mang dấu ấn nghề đúc đồng",
      "Xem nghệ nhân chế tác đồ đồng thủ công",
      "Mua lưu niệm: chuông, tượng, khay đồng nhỏ",
    ],
    tip: "Làng nằm ngay cạnh hồ Trúc Bạch - kết hợp tham quan làng và dạo hồ trong cùng buổi.",
  },
  2: {
    story: "Làng cốm Vòng là cái nôi của thức quà mùa thu Hà Nội. Cốm xanh dẻo thơm gói trong lá sen được làm từ lúa nếp cái hoa vàng, theo bí quyết gia truyền hàng trăm năm.",
    highlights: [
      "Xem quy trình tuốt, rang, giã cốm truyền thống",
      "Mua cốm tươi gói lá sen vào mùa thu",
      "Thưởng thức xôi cốm, chè cốm tại làng",
    ],
    tip: "Mùa cốm đẹp nhất từ tháng 7 đến tháng 9 âm lịch. Nên đi buổi sáng để mua được cốm vừa giã.",
  },
  3: {
    story: "Làng lụa Vạn Phúc có bề dày hơn nghìn năm dệt lụa, từng là nơi cung cấp lụa cho triều đình. Ngày nay làng vẫn dệt và bán lụa trực tiếp trong những con phố mua sắm đầy sắc màu.",
    highlights: [
      "Phố lụa với hàng trăm cửa hàng lụa tơ tằm",
      "Xem khung dệt và quy trình dệt lụa thủ công",
      "Đặt may áo dài, khăn lụa theo yêu cầu",
    ],
    tip: "Nên trả giá nhẹ khi mua tại các cửa hàng trong làng. Cuối tuần đông khách, đi sáng sớm sẽ thoải mái hơn.",
  },
  4: {
    story: "Làng gốm Bát Tràng bên bờ sông Hồng là làng gốm nổi tiếng nhất Việt Nam với hơn 700 năm lịch sử, nơi bạn vừa tham quan vừa tự tay nặn gốm.",
    highlights: [
      "Trải nghiệm nặn gốm và vẽ men tại xưởng",
      "Chợ gốm với đồ dùng, đồ trang trí giá tận xưởng",
      "Bảo tàng gốm sứ Bát Tràng kiến trúc ấn tượng",
      "Đi thuyền trên sông Hồng ngắm làng",
    ],
    tip: "Nên thử nặn gốm (khoảng 30-45 phút) và thuê nướng chín sản phẩm mang về. Chợ gốm đông nhất vào cuối tuần.",
  },
  5: {
    story: "Làng khảm trai Chuôn Ngọ giữ nghề khảm xà cừ, khảm trai truyền thống hàng trăm năm, tạo ra những sản phẩm thủ công lấp lánh được đưa vào các công trình và đồ dùng cao cấp.",
    highlights: [
      "Xem nghệ nhân mài, khảm từng mảnh xà cừ thủ công",
      "Sản phẩm khảm trai: hộp, khay, tranh, nội thất",
      "Nghe chuyện nghề từ chính những người thợ trong làng",
    ],
    tip: "Sản phẩm khảm trai khá nặng và cần đóng gói cẩn thận - mang theo túi chắc hoặc nhờ xưởng đóng gói.",
  },
  6: {
    story: "Làng mây tre đan Phú Vinh là trung tâm đan lát xuất khẩu lớn, nơi nghệ nhân biến mây, tre, cói thành giỏ, túi, nội thất xuất đi khắp thế giới.",
    highlights: [
      "Xem đan lát thủ công tại các hộ gia đình",
      "Mua giỏ, túi, mũ và đồ nội thất mây tre",
      "Tìm hiểu chuỗi sản xuất từ nguyên liệu đến thành phẩm",
    ],
    tip: "Sản phẩm ở làng rẻ hơn nhiều so với cửa hàng trong phố. Nên đi vào ngày thường để thấy quy trình sản xuất nhộn nhịp.",
  },
  7: {
    story: "Làng hương tăm Quảng Phú Cầu là 'thủ phủ' hương đỏ nổi tiếng với những bó hương được phơi thành bông hoa rực rỡ - điểm chụp ảnh quen thuộc của du khách.",
    highlights: [
      "Những sân phơi hương đỏ rực như cánh đồng hoa",
      "Xem quy trình chẻ tre, tôm hương, phơi hương",
      "Chụp ảnh với các tán hương được dàn cảnh sẵn",
    ],
    tip: "Hương phơi đẹp nhất vào ngày nắng và trước Tết. Hỏi người dân trước khi vào sân chụp ảnh.",
  },
  8: {
    story: "Làng Cự Đà nổi tiếng với miến dong dai trong và tương bần đậm đà - hai đặc sản gói trọn hương vị đồng quê Bắc Bộ được bảo lưu qua nhiều thế hệ.",
    highlights: [
      "Xem phơi miến dong trên các giàn trải dài",
      "Thưởng thức tương Cự Đà chấm rau sống",
      "Mua miến, tương làm quà từ chính các hộ sản xuất",
    ],
    tip: "Mùa phơi miến đẹp nhất vào các tháng nắng khô. Miến Cự Đà mua tại làng ngon và rẻ hơn nhiều so với chợ.",
  },
  9: {
    story: "Làng nón Chuông (Thanh Oai) có truyền thống làm nón lá hơn 300 năm. Chợ nón họp 6 phiên mỗi tháng âm lịch là nét văn hóa độc đáo còn giữ lại đến nay.",
    highlights: [
      "Chợ nón phiên họp ngày 4, 10, 14, 20, 24, 30 âm lịch",
      "Xem chằm nón, viền nón thủ công tại các nhà trong làng",
      "Mua nón lá, nón quai thao làm quà",
    ],
    tip: "Đi vào đúng phiên chợ để thấy không khí đông đúc đặc trưng. Phiên chợ diễn ra từ sáng sớm đến khoảng 8-9 giờ.",
  },
};

export function getVillageContent(village: Village): DetailBlock[] {
  const info = VILLAGE_INFO[village.id];

  return [
    {
      type: "text",
      parts: [
        { text: village.name, bold: true },
        {
          text: ` nằm tại ${village.address}, Hà Nội, cách bạn khoảng ${village.distance}. ${info?.story ?? ""}`,
        },
      ],
    },
    {
      type: "text",
      parts: [
        {
          text: "Làng nghề vẫn giữ nhịp sản xuất thủ công mỗi ngày. Đến đây, bạn vừa được xem nghệ nhân làm việc, vừa có thể mua sản phẩm tận gốc với giá tận xưởng.",
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
            "Nên đi vào ngày thường để thấy quy trình sản xuất nhộn nhịp nhất.",
          italic: true,
        },
      ],
    },
    { type: "image", src: village.photo, alt: village.name },
    {
      type: "text",
      parts: [{ text: "Trải nghiệm tại làng", bold: true }],
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
        [{ text: "Hỏi trước khi chụp ảnh hoặc quay phim tại xưởng sản xuất" }],
        [{ text: "Mang theo tiền mặt - nhiều hộ gia đình chưa nhận chuyển khoản" }],
        [{ text: "Thương lượng nhẹ giá khi mua số lượng nhiều" }],
      ],
    },
    {
      type: "text",
      parts: [
        { text: "Địa chỉ: ", bold: true },
        { text: `${village.address}, Hà Nội. ` },
        { text: `Cách bạn khoảng ${village.distance} - phù hợp đi xe máy hoặc ô tô.` },
      ],
    },
  ];
}
