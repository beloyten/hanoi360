import { CardItem } from "../shared/card-item";
import type { Facility } from "./facilities";

export function FacilityList({ facilities }: { facilities: Facility[] }) {
  if (facilities.length === 0) {
    return <p className="px-4 py-10 text-center text-sm text-[#58585c]">Không tìm thấy địa điểm phù hợp.</p>;
  }

  return (
    <div className="flex flex-col gap-1 px-3 pb-6">
      {facilities.map((facility) => (
        <CardItem
          key={facility.id}
          layout="horizontal"
          item={{
            id: facility.id,
            name: facility.name,
            description: facility.address,
            address: facility.address,
            distance: facility.distance,
            photo: facility.photo,
          }}
          savedKey={`facility:${facility.id}`}
          href={`/co-so-y-te/${facility.id}`}
        />
      ))}
    </div>
  );
}
