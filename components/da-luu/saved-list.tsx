"use client";

import { useSavedKeys } from "@/lib/store/use-saved-store";
import { CardItem } from "../shared/card-item";
import { CheckIconV2 } from "../home/icons";
import { parseDistanceMeters, resolveSavedItem, type SavedDisplayItem } from "./saved-items";
import type { FilterType, SortBy } from "./saved-toolbar";

function SavedCard({
  item,
  selectMode,
  selected,
  onToggleSelect,
  onRemove,
}: {
  item: SavedDisplayItem;
  selectMode: boolean;
  selected: boolean;
  onToggleSelect: () => void;
  onRemove: () => void;
}) {
  return (
    <div className={`relative ${selectMode ? "rounded-lg border border-[#aa6e00]" : ""}`}>
      <CardItem
        layout="vertical"
        item={{
          id: item.key,
          name: item.name,
          subtitle: item.subtitle,
          distance: item.distance,
          photo: item.photo,
        }}
        savedKey={item.key}
        href={selectMode ? undefined : item.href}
        onToggleSaved={onRemove}
      />

      {selectMode && (
        <button
          type="button"
          onClick={onToggleSelect}
          aria-label="Chọn địa điểm"
          aria-pressed={selected}
          className="absolute inset-0 z-20"
        >
          <span
            className="absolute top-3 left-3 flex h-5 w-5 items-center justify-center border border-[#9b9b9b] transition-colors"
            style={{ backgroundColor: selected ? "#aa6e00" : "#ffffff" }}
          >
            {selected && <CheckIconV2 className="h-3 w-3 text-[#f2d79f]" />}
          </span>
        </button>
      )}
    </div>
  );
}

export function SavedList({
  filterType,
  sortBy,
  selectMode,
  selectedKeys,
  onToggleSelect,
  onRemove,
}: {
  filterType: FilterType;
  sortBy: SortBy;
  selectMode: boolean;
  selectedKeys: Set<string>;
  onToggleSelect: (key: string) => void;
  onRemove: (key: string) => void;
}) {
  const keys = useSavedKeys();
  let items = keys.map(resolveSavedItem).filter((item) => item !== null);

  if (filterType !== "all") {
    items = items.filter((item) => item.type === filterType);
  }

  items =
    sortBy === "nearest"
      ? [...items].sort((a, b) => parseDistanceMeters(a.distance) - parseDistanceMeters(b.distance))
      : [...items].reverse();

  if (items.length === 0) {
    return (
      // Figma empty state: a single centered line, 116px under the toolbar.
      <p className="px-4 pt-[116px] text-center text-sm text-[#27314D]">Chưa có địa điểm nào được lưu</p>
    );
  }

  return (
    <div className="flex flex-col gap-4 px-4 pb-6">
      {items.map((item) => (
        <SavedCard
          key={item.key}
          item={item}
          selectMode={selectMode}
          selected={selectedKeys.has(item.key)}
          onToggleSelect={() => onToggleSelect(item.key)}
          onRemove={() => onRemove(item.key)}
        />
      ))}
    </div>
  );
}
