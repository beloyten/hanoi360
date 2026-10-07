import { DetailScreen } from "@/components/shared/detail-screen";
import { getExhibit } from "@/components/trien-lam/exhibits";
import type { DetailBlock } from "@/components/shared/detail-content";

const EXHIBIT = getExhibit("van-gogh");

const CONTENT: DetailBlock[] = [
  {
    type: "text",
    parts: [
      {
        text: 'Từ 21/08/2026, không gian gần 4.000m² của Van Gogh Timeless tại Hà Nội chính thức mở cửa - mở ra một khoảng trời bình yên để cùng bạn đắm chìm, cảm nhận nghệ thuật theo cách của riêng mình, và để mỗi chúng ta được tự mình "bước vào trong tranh":',
      },
    ],
  },
  { type: "image", src: "/home/banner-5/img-1.png", alt: "Van Gogh Timeless" },
  {
    type: "text",
    parts: [
      { text: "Đắm chìm giữa vũ trụ kiệt tác bản quyền Van Gogh từ Pháp." },
    ],
  },
  { type: "image", src: "/home/banner-5/img-2.png", alt: "Van Gogh Timeless" },
  {
    type: "text",
    parts: [
      {
        text: "Thả lỏng mọi giác quan với công nghệ 3D Mapping Projection, VR - AR, Lidars và Hệ thống Surround Sound… dải âm thanh tần số chữa lành và không gian ánh sáng tương tác sống động.",
      },
    ],
  },
  {
    type: "text",
    parts: [
      {
        text: "Tạm gác lại những ồn ào phố thị, dành tặng bản thân và người thương một khoảng lặng bình yên.",
      },
    ],
  },
  { type: "image", src: "/home/banner-5/img-3.png", alt: "Van Gogh Timeless" },
  {
    type: "text",
    parts: [
      {
        text: "Cuộc hẹn giữa bạn và Vincent Van Gogh đã được định ngày. Hãy giữ chỗ sớm để chọn cho mình khung giờ thưởng lãm phù hợp nhất nhé!",
      },
    ],
  },
];

export default function VanGoghPage() {
  return (
    <DetailScreen
      item={{
        id: EXHIBIT.slug,
        name: EXHIBIT.name,
        photo: EXHIBIT.photo,
        hours: "08:00 - 22:00",
        hoursNote: "Thứ 2,3,5,6,7,CN.",
        address: EXHIBIT.address,
        content: CONTENT,
      }}
      savedKey={`exhibit:${EXHIBIT.slug}`}
      socials
      cta={{ label: "Mua vé" }}
    />
  );
}
