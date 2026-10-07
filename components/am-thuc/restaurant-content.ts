import type { DetailBlock } from "../shared/detail-content";
import type { Restaurant } from "./restaurants";

export function getRestaurantContent(restaurant: Restaurant): DetailBlock[] {
  const address = restaurant.address ?? "Hà Nội";

  const blocks: DetailBlock[] = [
    {
      type: "text",
      parts: [
        { text: restaurant.name, bold: true },
        {
          text: ` tọa lạc tại ${address} Hà Nội, chỉ cách bạn khoảng ${restaurant.distance}. Quán nổi tiếng với ${restaurant.description.charAt(0).toLowerCase()}${restaurant.description.slice(1)}.`,
        },
      ],
    },
    {
      type: "text",
      parts: [
        {
          text:
            restaurant.detail ??
            "Quán có không gian thoải mái, phục vụ nhanh và giá cả hợp lý, phù hợp cho cả bữa ăn nhanh lẫn buổi tụ họp cùng bạn bè, gia đình.",
        },
      ],
    },
    {
      type: "text",
      parts: [
        { text: "Gợi ý: ", italic: true },
        {
          text: restaurant.hasVoucher
            ? "quán hiện có voucher giảm giá khi đặt qua ứng dụng - nhớ kiểm tra trước khi thanh toán."
            : "giờ ăn trưa và tối cuối tuần thường đông, nên đến sớm hoặc đặt bàn trước.",
          italic: true,
        },
      ],
    },
  ];

  if (restaurant.photo) {
    blocks.push({ type: "image", src: restaurant.photo, alt: restaurant.name });
  }

  blocks.push(
    {
      type: "text",
      parts: [{ text: "Điểm nổi bật", bold: true }],
    },
    {
      type: "list",
      items: [
        [{ text: `Chuyên ${restaurant.description.charAt(0).toLowerCase()}${restaurant.description.slice(1)}` }],
        [{ text: `Giờ mở cửa: ${restaurant.hours ?? "9h00 - 22h00"} (${restaurant.hoursNote ?? "Thứ 2 - Chủ nhật"})` }],
        ...(restaurant.hasVoucher ? [[{ text: "Có ưu đãi voucher khi đặt qua ứng dụng" }]] : []),
        [{ text: "Nhân viên phục vụ nhanh, không gian sạch sẽ" }],
      ] as { text: string }[][],
    },
    {
      type: "text",
      parts: [{ text: "Kinh nghiệm khi đến quán", bold: true }],
    },
    {
      type: "list",
      ordered: true,
      items: [
        [{ text: "Đặt bàn trước vào giờ cao điểm trưa và tối" }],
        [{ text: "Thử các món được gợi ý ở phần 'Món nổi bật' bên dưới" }],
        [{ text: "Chỉ đường qua nút Chỉ đường ở trên để mở Google Maps" }],
      ],
    },
    {
      type: "text",
      parts: [
        { text: "Địa chỉ: ", bold: true },
        { text: `${address} Hà Nội. ` },
        { text: `Chỉ khoảng ${restaurant.distance} từ vị trí của bạn.` },
      ],
    }
  );

  return blocks;
}
