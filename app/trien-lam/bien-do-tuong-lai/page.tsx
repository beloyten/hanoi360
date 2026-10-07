import { DetailScreen } from "@/components/shared/detail-screen";
import { getExhibit } from "@/components/trien-lam/exhibits";
import type { DetailBlock } from "@/components/shared/detail-content";

const EXHIBIT = getExhibit("bien-do-tuong-lai");

const CONTENT: DetailBlock[] = [
  {
    type: "text",
    parts: [
      {
        text: "Những biên độ sáng tạo không giới hạn của tuổi trẻ",
        bold: true,
      },
    ],
  },
  {
    type: "text",
    parts: [
      {
        text: "\u201CBiên Độ Tương Lai\u201D là hành trình khám phá những ranh giới mới giữa nghệ thuật \u2013 công nghệ \u2013 giáo dục \u2013 di sản. Dự án đặt ra câu hỏi về cách thế hệ sáng tạo trẻ có thể tiếp nối các giá trị văn hóa truyền thống, đồng thời kiến tạo những hình thái nghệ thuật mới phù hợp với bối cảnh đương đại. Dự án đóng vai trò như một dòng chảy ý tưởng xuyên suốt, kết nối từ Lễ hội Thiết kế Sáng tạo Hà Nội đến hệ sinh thái các trường đào tạo nghệ thuật, nơi những nghệ sĩ trẻ độc lập gặp gỡ và mở ra những biên độ chưa được đo đếm.",
      },
    ],
  },
  { type: "image", src: "/home/banner-6/img-1.png", alt: "Triển Lãm Biên Độ Tương Lai" },
  {
    type: "text",
    parts: [{ text: "Các mốc thời gian chính", bold: true }],
  },
  {
    type: "text",
    parts: [{ text: "Giai đoạn 1 \u2013 Khởi động dự án (Tháng 5/2026)", bold: true }],
  },
  {
    type: "list",
    ordered: false,
    items: [
      [{ text: "Công bố chủ đề và định hướng chương trình LOTTE Art Week Vol.3" }],
      [{ text: "Kết nối các trường đại học nghệ thuật và đối tác sáng tạo" }],
      [{ text: "Kết nối với các trường đại học, không gian sáng tạo và cộng đồng nghệ thuật trẻ" }],
      [{ text: "Hoàn thiện các tác phẩm, sắp đặt và nội dung triển lãm" }],
    ],
  },
  {
    type: "text",
    parts: [
      { text: "Giai đoạn 2 \u2013 Triển lãm & hoạt động công chúng (Tháng 6,7/2026)", bold: true },
    ],
  },
  {
    type: "list",
    ordered: false,
    items: [
      [{ text: "Khai mạc LOTTE Art Week Vol.3 (ngày 6/6/2026)" }],
      [{ text: "Hội chợ sáng tạo LOTTE Art Fair (5-7/6/2026)" }],
      [{ text: "Trưng bày triển lãm nghệ thuật đương đại và các dự án sinh viên (6/6-19/7/2026)" }],
      [{ text: "Tổ chức talkshow, hoạt động trải nghiệm sáng tạo và giao lưu cộng đồng" }],
      [{ text: "Đấu giá tác phẩm sinh viên và nghệ sĩ trẻ (18-19/7/2026)" }],
    ],
  },
  { type: "image", src: "/home/banner-6/img-2.png", alt: "Triển Lãm Biên Độ Tương Lai" },
  {
    type: "text",
    parts: [{ text: "Giá trị cộng đồng và Định hướng văn hoá", bold: true }],
  },
  {
    type: "text",
    parts: [
      {
        text: "LOTTE Art Week Vol.3 không chỉ là một sự kiện nghệ thuật mà còn là một nền tảng kết nối sáng tạo, góp phần đưa nghệ thuật đến gần hơn với công chúng trẻ, đồng thời thúc đẩy tinh thần hợp tác giữa doanh nghiệp, nhà trường và cộng đồng sáng tạo.",
      },
    ],
  },
  {
    type: "text",
    parts: [
      {
        text: "Thông qua dự án, các đơn vị tổ chức kỳ vọng đóng góp vào việc lan tỏa hình ảnh Hà Nội như một Thành phố Sáng tạo giàu bản sắc, nơi các giá trị văn hóa truyền thống được tái sinh bằng ngôn ngữ nghệ thuật đương đại và các thực hành sáng tạo mới.",
      },
    ],
  },
  {
    type: "text",
    parts: [
      {
        text: "Chương trình đồng thời thể hiện cam kết của LOTTE Department Store trong việc đồng hành cùng các hoạt động văn hóa \u2013 nghệ thuật \u2013 giáo dục tại Việt Nam, góp phần thúc đẩy sự phát triển bền vững của hệ sinh thái sáng tạo trẻ trong tương lai.",
      },
    ],
  },
];

export default function BienDoTuongLaiPage() {
  return (
    <DetailScreen
      item={{
        id: EXHIBIT.slug,
        name: EXHIBIT.name,
        photo: EXHIBIT.photo,
        hours: "06/06 - 28/06",
        hoursNote: "04/07 - 19/07",
        address: EXHIBIT.address,
        content: CONTENT,
      }}
      savedKey={`exhibit:${EXHIBIT.slug}`}
      socials
    />
  );
}
