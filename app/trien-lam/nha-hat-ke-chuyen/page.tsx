import { DetailScreen } from "@/components/shared/detail-screen";
import type { DetailBlock } from "@/components/shared/detail-content";
import { getExhibit } from "@/components/trien-lam/exhibits";

const EXHIBIT = getExhibit("nha-hat-ke-chuyen");

// Copy from the Figma "Banner sự kiện" frame (431:51580).
const CONTENT: DetailBlock[] = [
  {
    type: "text",
    parts: [
      {
        text: "Lần đầu tiên trong lịch sử, Nhà hát Lớn Hà Nội tạm khép lại cánh cửa biểu diễn thường nhật để trở thành chính “sân khấu của mình”. Phó Giám đốc Nhà hát Lớn Hà Nội, ông Chu Anh Hùng cho biết, trong vòng 1-2 năm tới, Nhà hát sẽ tạm đóng cửa để bảo trì, bảo dưỡng. Dự án lần này được coi là một cuộc chia tay đầy cảm xúc, mang đến cho khán giả trải nghiệm mới - không còn ngồi yên trên ghế xem sân khấu, mà tự do dạo bước trong không gian ánh sáng và âm thanh.",
      },
    ],
  },
  {
    type: "text",
    parts: [
      {
        text: "Sử dụng các công nghệ trình diễn tiên tiến như 3D mapping, hologram, thực tế tăng cường (AR) và nghệ thuật storytelling đa lớp, chương trình mang đến cho công chúng trải nghiệm “immersive” - nơi ranh giới giữa khán giả và không gian biểu diễn được xóa nhòa.",
      },
    ],
  },
  {
    type: "text",
    parts: [
      {
        text: "Người xem không chỉ quan sát mà còn hòa mình vào dòng chảy câu chuyện, tương tác với không gian và ánh sáng, cảm nhận lịch sử bằng ngôn ngữ của thời đại số. Đây là bước tiến quan trọng trong việc ứng dụng công nghệ vào bảo tồn và phát huy di sản, góp phần khẳng định vị thế của Hà Nội - Thành phố sáng tạo được UNESCO công nhận, nơi giá trị cổ điển được hồi sinh bằng nghệ thuật đương đại.",
      },
    ],
  },
];

export default function NhaHatKeChuyenPage() {
  return (
    <DetailScreen
      item={{
        id: EXHIBIT.slug,
        name: EXHIBIT.name,
        photo: EXHIBIT.photo,
        hours: "22/11 - 31/12",
        address: EXHIBIT.address,
        content: CONTENT,
      }}
      savedKey={`exhibit:${EXHIBIT.slug}`}
      cta={{ label: "Mua vé" }}
    />
  );
}
