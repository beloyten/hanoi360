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
    story: "Bảo tàng Phòng không - Không quân lưu giữ lịch sử chiến đấu của bộ đội Phòng không - Không quân, nổi bật với khu trưng bày máy bay, tên lửa và pháo cao xạ ngoài trời.",
    highlights: [
      "Máy bay MiG-21 và các loại máy bay chiến đấu thật ngoài trời",
      "Tên lửa SAM-2 và pháo cao xạ từng bảo vệ bầu trời Hà Nội",
      "Tư liệu về chiến dịch Hà Nội - Điện Biên Phủ trên không năm 1972",
    ],
    tip: "Khu trưng bày ngoài trời rất rộng và nắng - nên đến buổi sáng hoặc chiều muộn, mang theo mũ và nước.",
  },
  7: {
    story: "Bảo tàng Vũ trụ Việt Nam là bảo tàng khoa học hiện đại về thiên văn và công nghệ vũ trụ, với nhà chiếu hình vũ trụ (planetarium) và nhiều mô hình vệ tinh, tàu vũ trụ.",
    highlights: [
      "Nhà chiếu hình vũ trụ với màn chiếu bán cầu",
      "Mô hình vệ tinh, trạm vũ trụ và tên lửa đẩy",
      "Khu trải nghiệm tương tác về Hệ Mặt Trời dành cho trẻ em",
    ],
    tip: "Bảo tàng nằm khá xa trung tâm - nên đặt lịch trước và dành cả buổi để xem thêm các suất chiếu planetarium.",
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

// Copy from the Figma detail frame "Chi tiet/bao tang" (413:36662).
const QUAN_SU: DetailBlock[] = [
  {
    type: "text",
    parts: [
      {
        text: "Bảo tàng Lịch sử Quân sự Việt Nam là một công trình văn hóa đặc biệt tiêu biểu, nơi bảo tồn và phát huy tinh hoa di sản văn hóa quân sự của dân tộc, đáp ứng nhu cầu nghiên cứu, học tập, tham quan và hưởng thụ văn hóa của các tầng lớp nhân dân trong nước và du khách quốc tế; phù hợp với chủ trương của Quân ủy Trung ương và Bộ Quốc phòng: “Bảo tàng Lịch sử Quân sự Việt Nam là một thiết chế đa năng tổng hợp, đặc biệt quan trọng, tiêu biểu của Thủ đô Hà Nội và Quốc gia”.",
      },
    ],
  },
  { type: "image", src: "/figma/list/quan-su-1.webp", alt: "Khu trưng bày ngoài trời Bảo tàng Lịch sử Quân sự Việt Nam" },
  { type: "text", parts: [{ text: "Miễn phí thăm quan Bảo tàng Lịch sử Quân sự Việt Nam đối với các trường hợp sau:", bold: true }] },
  // Figma sets the free-entry cases as one paragraph with line breaks, not a bulleted list.
  { type: "text", parts: [{ text: "a) Trẻ em theo quy định của pháp luật về trẻ em;\nb) Người cao tuổi từ 80 tuổi trở lên;\nc) Người khuyết tật đặc biệt nặng theo quy định của pháp luật về người khuyết tật;\nd) Người được hưởng chính sách ưu đãi hưởng thụ văn hoá theo quy định của pháp luật bao gồm: Người tàn tật, người già cô đơn; các đối tượng được chăm sóc tại cơ sở bảo trợ xã hội; học sinh các trường phổ thông dân tộc nội trú;\nđ) Người có công với cách mạng theo quy định của pháp luật về ưu đãi người có công với cách mạng;\ne) Cựu chiến binh theo quy định của pháp luật về cựu chiến binh;\ng) Khách đối ngoại của các cơ quan Đảng, Nhà nước, Chính phủ, Quốc hội theo phê duyệt của Bộ trưởng Bộ Quốc phòng, Chủ nhiệm Tổng cục Chính trị Quân đội nhân dân Việt Nam;\nh) Sĩ quan Quân đội nhân dân Việt Nam, quân nhân chuyên nghiệp, hạ sĩ quan, binh sĩ, công nhân và viên chức quốc phòng theo phê duyệt của Bộ trưởng Bộ Quốc phòng, Chủ nhiệm Tổng cục Chính trị Quân đội nhân dân Việt Nam." }] },

  { type: "image", src: "/figma/list/quan-su-2.webp", alt: "Hiện vật ngoài trời" },
  { type: "image", src: "/figma/list/quan-su-3.webp", alt: "Không gian trưng bày" },
  { type: "image", src: "/figma/list/quan-su-4.webp", alt: "Phòng trưng bày hiện vật" },
  { type: "social", title: "Đặt vé và tour tại fanpage" },
];

export function getMuseumContent(museum: Museum): DetailBlock[] {
  if (museum.id === 5) return QUAN_SU;
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
