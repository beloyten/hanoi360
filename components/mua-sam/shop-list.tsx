import { CardItem } from "../shared/card-item";
import type { Shop } from "./shops";

export function ShopList({ shops }: { shops: Shop[] }) {
  if (shops.length === 0) {
    return <p className="px-4 py-10 text-center text-sm text-[#58585c]">Không tìm thấy địa điểm phù hợp.</p>;
  }

  return (
    <div className="flex flex-col gap-1 px-3 pb-6">
      {shops.map((shop) => (
        <CardItem
          key={shop.id}
          layout="horizontal"
          item={{
            id: shop.id,
            name: shop.name,
            description: shop.address,
            address: shop.address,
            distance: shop.distance,
            photo: shop.photo,
          }}
          savedKey={`shop:${shop.id}`}
          href={`/mua-sam/${shop.id}`}
        />
      ))}
    </div>
  );
}
