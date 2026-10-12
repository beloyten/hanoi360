import { CardItem } from "../shared/card-item";
import type { Venue } from "./venues";

export function VenueList({ venues, hrefPrefix = "/vui-choi" }: { venues: Venue[]; hrefPrefix?: string }) {
  if (venues.length === 0) {
    return <p className="px-4 py-10 text-center text-sm text-[#58585c]">Không tìm thấy địa điểm phù hợp.</p>;
  }

  return (
    <div className="flex flex-col gap-1 px-3 pb-6">
      {venues.map((venue) => (
        <CardItem
          key={venue.id}
          layout="vertical"
          item={{
            id: venue.id,
            name: venue.name,
            subtitle: venue.address,
            distance: venue.distance,
            photo: venue.photo,
          }}
          savedKey={`venue:${venue.id}`}
          href={`${hrefPrefix}/${venue.id}`}
        />
      ))}
    </div>
  );
}
