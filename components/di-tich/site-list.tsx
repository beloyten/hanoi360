"use client";

import { CardItem } from "../shared/card-item";
import type { Site } from "./sites";

export function SiteList({ sites }: { sites: Site[] }) {
  if (sites.length === 0) {
    return <p className="px-4 py-10 text-center text-sm text-[#58585c]">Không tìm thấy địa điểm phù hợp.</p>;
  }

  return (
    <div className="flex flex-col gap-1 px-3 pb-6">
      {sites.map((site) => (
        <CardItem
          key={site.id}
          layout="vertical"
          item={site}
          savedKey={`site:${site.id}`}
          href={`/di-tich/${site.id}`}
        />
      ))}
    </div>
  );
}
