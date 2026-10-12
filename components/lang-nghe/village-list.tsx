import { CardItem } from "../shared/card-item";
import type { Village } from "./villages";

export function VillageList({ villages }: { villages: Village[] }) {
  if (villages.length === 0) {
    return <p className="px-4 py-10 text-center text-sm text-[#58585c]">Không tìm thấy địa điểm phù hợp.</p>;
  }

  return (
    <div className="flex flex-col gap-1 px-3 pb-6">
      {villages.map((village) => (
        <CardItem
          key={village.id}
          layout="vertical"
          item={{
            id: village.id,
            name: village.name,
            subtitle: village.address,
            distance: village.distance,
            photo: village.photo,
          }}
          savedKey={`village:${village.id}`}
          href={`/lang-nghe/${village.id}`}
        />
      ))}
    </div>
  );
}
