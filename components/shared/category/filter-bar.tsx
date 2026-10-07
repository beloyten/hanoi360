"use client";

import { useState, type CSSProperties } from "react";
import { FilterIcon } from "../../home/icons";
import { FilterSection } from "../filter-section";
import { FilterSheet, type FilterOption, type FilterSheetSection } from "./filter-sheet";
import { useHasActiveFilters } from "./filter-store";

// Figma "button_filter" (429:42930): 1px #BDBDBD border, text #141E3F; active = #009B8C border + text.
const chipStyle = (active: boolean): CSSProperties => ({
  borderColor: active ? "#009B8C" : "#BDBDBD",
  color: active ? "#009B8C" : "#141E3F",
});

const CHIP_CLASS =
  "flex shrink-0 items-center gap-1 rounded-[32px] border bg-white px-[13px] py-1 text-xs whitespace-nowrap transition-colors duration-150";

export function FilterBar({
  scope,
  chips,
  sheetSections,
}: {
  scope: string;
  chips: FilterOption[];
  sheetSections: FilterSheetSection[];
}) {
  const [active, setActive] = useState<Set<string>>(new Set());
  const [sheetOpen, setSheetOpen] = useState(false);
  const sortActive = useHasActiveFilters(scope);

  const toggle = (key: string) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <>
      <FilterSection className="pt-1 pb-2">
        <button type="button" onClick={() => setSheetOpen(true)} className={CHIP_CLASS} style={chipStyle(sortActive)}>
          <FilterIcon className="h-5 w-5" />
          Lọc theo
        </button>

        {chips.map((chip) => (
          <button
            key={chip.key}
            type="button"
            onClick={() => toggle(chip.key)}
            className={CHIP_CLASS}
            style={chipStyle(active.has(chip.key))}
          >
            {chip.label}
          </button>
        ))}
      </FilterSection>

      {sheetOpen && <FilterSheet scope={scope} sections={sheetSections} onClose={() => setSheetOpen(false)} />}
    </>
  );
}
