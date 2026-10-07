"use client";

import Image from "next/image";
import { FilterSection } from "../filter-section";

export type CategoryFilterItem<K extends string> = { key: K; label: string; image: string };

// Figma "Filter" (310:29173): 82px wide, an 80px frame holding a 70px image (4px radius);
// selected shrinks the image to 64px inside a #AA6E00 "selected stroke" and colors the label.
export function ImageFilterButton({
  image,
  label,
  active,
  onClick,
}: {
  image: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="flex w-[82px] shrink-0 flex-col items-center gap-1 select-none"
    >
      <span className="relative block size-20 shrink-0">
        <span
          className="absolute inset-1 rounded-[6px] border-2 border-[#AA6E00] transition-opacity duration-150"
          style={{ opacity: active ? 1 : 0 }}
        />
        <span
          className="absolute overflow-hidden rounded bg-white transition-[inset] duration-150"
          style={{ inset: active ? 8 : 4.88 }}
        >
          <Image src={image} alt="" fill className="object-cover" sizes="72px" />
        </span>
      </span>
      <span
        className="w-[71px] text-center text-xs leading-[15px] whitespace-pre-line transition-colors duration-150"
        style={{ color: active ? "#AA6E00" : "#27314D" }}
      >
        {label}
      </span>
    </button>
  );
}

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
    <FilterSection gapClassName="gap-0" className="pb-2">
      {items.map((item) => (
        <ImageFilterButton
          key={item.key}
          image={item.image}
          label={item.label}
          active={active.has(item.key)}
          onClick={() => onToggle(item.key)}
        />
      ))}
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
