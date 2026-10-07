import { DetailScreen } from "@/components/shared/detail-screen";
import { getExhibit } from "@/components/trien-lam/exhibits";
import type { DetailBlock } from "@/components/shared/detail-content";

const EXHIBIT = getExhibit("giao-chi");

const CONTENT: DetailBlock[] = [
  {
    type: "text",
    parts: [
      {
        text: "Bát Tràng Museum Atelier (BTMA) phối hợp cùng T.U.N.G dining đã tổ chức thành công buổi ra mắt Bộ sưu tập “Giao Chỉ”, với sự đồng hành từ Rượu Làng. Đây là dự án hợp tác giữa BTMA và Nghệ sĩ Phạm Kiều Phúc, đánh dấu sự giao thoa giữa nghệ thuật gốm thủ công và trải nghiệm ẩm thực đương đại tại T.U.N.G dining.",
      },
    ],
  },
  { type: "image", src: "/home/banner-2/img-1.png", alt: "BST Giao Chỉ" },
  {
    type: "text",
    parts: [
      {
        text: "Bộ sưu tập Giao Chỉ lấy cảm hứng từ truyền thuyết nhân dạng học về ngón chân chõe ngang của người Việt cổ. Từ câu chuyện đó, Nghệ sĩ Phạm Kiều Phúc đã chuyển hóa ký ức văn hóa này thành những thực thể gốm mang tính điêu khắc. Bộ sưu tập gồm 4 thiết kế kết hợp giữa khối tích bàn chân vững chãi, họa tiết Primitive Art nguyên sơ và kỹ thuật men chồng màu đặc trưng nung tại 1300°C của BTMA.",
      },
    ],
  },
  { type: "image", src: "/home/banner-2/img-2.png", alt: "BST Giao Chỉ" },
  {
    type: "text",
    parts: [
      {
        text: "Các thiết kế dễ dàng hòa hợp vào nhiều bối cảnh không gian - từ góc phòng, bên đôn gỗ đến kệ sách - tạo nên những điểm dừng thị giác trong cách bài trí không gian sống.",
      },
    ],
  },
];

export default function GiaoChiPage() {
  return (
    <DetailScreen
      item={{
        id: EXHIBIT.slug,
        name: EXHIBIT.name,
        photo: EXHIBIT.photo,
        hours: "24/09 - 03/10",
        address: EXHIBIT.address,
        content: CONTENT,
      }}
      savedKey={`exhibit:${EXHIBIT.slug}`}
      socials
    />
  );
}
