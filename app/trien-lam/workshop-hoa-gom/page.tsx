import { DetailScreen } from "@/components/shared/detail-screen";
import { getExhibit } from "@/components/trien-lam/exhibits";
import type { DetailBlock } from "@/components/shared/detail-content";

const EXHIBIT = getExhibit("workshop-hoa-gom");

const CONTENT: DetailBlock[] = [
  {
    type: "text",
    parts: [
      {
        text: "Workshop làm gốm Hà Nội là một trong những hoạt động nghệ thuật hấp dẫn và phổ biến ở Thủ đô. Trải nghiệm thú vị này giúp bạn hiểu hơn về nghề làm gốm truyền thống cũng như thể hiện sự sáng tạo và cá tính của mình qua những tác phẩm gốm tuyệt vời.",
      },
    ],
  },
  { type: "image", src: "/home/banner-1/img-1.png", alt: "Workshop hoạ gốm" },
  {
    type: "text",
    parts: [{ text: "Lợi ích của việc tham gia workshop làm gốm Hà Nội", bold: true }],
  },
  {
    type: "text",
    parts: [
      {
        text: "Không đơn thuần là một hoạt động giải trí, các workshop gốm cũng có rất nhiều lợi ích tuyệt vời khi tham gia, bao gồm:",
      },
    ],
  },
  {
    type: "list",
    ordered: false,
    items: [
      [
        { text: "Giảm stress, cải thiện khả năng tập trung: ", bold: true },
        {
          text: "Làm gốm sẽ kích thích sự sáng tạo và giúp bạn hoàn toàn thư giãn, tạm quên những áp lực và căng thẳng hàng ngày. Quá trình này cũng giúp bạn gia tăng sự tập trung và tìm lại sự cân bằng trong cuộc sống.",
        },
      ],
      [
        { text: "Rèn luyện tính kiên nhẫn, tỉ mỉ: ", bold: true },
        {
          text: "Nặn gốm là quá trình đòi hỏi sự kiên nhẫn và cẩn thận đến từng chi tiết để tạo ra một tác phẩm đẹp và hoàn hảo. Do đó bạn sẽ dần rèn được tính kiên nhẫn một cách tốt nhất.",
        },
      ],
      [
        { text: "Cải thiện kỹ năng vận động: ", bold: true },
        {
          text: "Đi workshop làm gốm Hà Nội cũng giúp bạn rời xa các thiết bị điện tử để mắt được nghỉ ngơi. Thay vào đó bạn sẽ được vận động thể chất để làm nên một sản phẩm gốm hoàn chỉnh, đây cũng được xem là một cách rèn luyện sức khỏe tuyệt vời.",
        },
      ],
      [
        { text: "Gặp gỡ những người bạn mới có cùng đam mê: ", bold: true },
        {
          text: "Bạn sẽ được giao lưu, kết nối với những người yêu nghệ thuật và có cùng sở thích nặn gốm khi đi workshop. Từ đó bạn có thể mở rộng vòng tròn giao tiếp và có thêm nhiều người bạn mới.",
        },
      ],
    ],
  },
  { type: "image", src: "/home/banner-1/img-2.png", alt: "Workshop hoạ gốm" },
  {
    type: "text",
    parts: [
      {
        text: "Mỗi sản phẩm hoàn thiện không chỉ là một tác phẩm trang trí, mà còn mang dấu ấn cá nhân, được tạo nên từ một di sản tập thể, để khơi dậy tình yêu, sự gìn giữ và làm mới văn hóa Việt. Mời bạn cùng AN trải nghiệm nét văn hóa giao thoa với sắc gốm và nét tranh qua chính gam màu bạn chọn!",
      },
    ],
  },
];

export default function WorkshopHoaGomPage() {
  return (
    <DetailScreen
      item={{
        id: EXHIBIT.slug,
        name: EXHIBIT.name,
        photo: EXHIBIT.photo,
        hours: "15h00 - 17h00",
        hoursNote: "Thứ 7, ngày 31/05",
        address: EXHIBIT.address,
        content: CONTENT,
      }}
      savedKey={`exhibit:${EXHIBIT.slug}`}
      socials
    />
  );
}
