"use client";

import Image from "next/image";
import { FilterSection } from "../filter-section";

export type CategoryFilterItem<K extends string> = { key: K; label: string; image: string };

export function CategoryFilter<K extends string>({
  items,
  active,
  onToggle,
}: {
  items: CategoryFilterItem<K>[];
  active: Set<K>;
  onToggle: (key: K) => void;
}) {
  return (
    <FilterSection gapClassName="gap-2" className="pb-3">
      {items.map((item) => {
        const isActive = active.has(item.key);
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onToggle(item.key)}
            className="flex flex-1 shrink-0 flex-col items-center gap-1"
          >
            <span className={`shrink-0 p-0.5 ${isActive ? "bg-[#9B9B9B]" : "bg-transparent"}`}>
              <span className="relative block h-18 w-18 overflow-hidden rounded bg-white">
                <Image src={item.image} alt="" fill className="object-cover" sizes="72px" />
              </span>
            </span>
            <span
              className="text-center text-[11px] leading-tight whitespace-pre-line text-[#252525]"
              style={{ fontWeight: isActive ? 600 : 500 }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </FilterSection>
  );
}

/** Multi-select toggle state for the image category filter; empty set = show everything. */
export function toggleInSet<K>(prev: Set<K>, key: K) {
  const next = new Set(prev);
  if (next.has(key)) next.delete(key);
  else next.add(key);
  return next;
}
