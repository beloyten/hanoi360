"use client";

import { useState } from "react";
import { CheckIcon, CloseIcon, FilterIcon, TrashIcon } from "../home/icons";
import type { SavedItemType } from "./saved-items";

export type SortBy = "recent" | "nearest";
export type FilterType = "all" | SavedItemType;

const FILTERS: { key: FilterType; label: string }[] = [
  { key: "all", label: "Tất cả" },
  { key: "restaurant", label: "Ẩm thực" },
  { key: "venue", label: "Vui chơi" },
  { key: "facility", label: "Y tế" },
  { key: "shop", label: "Mua sắm" },
  { key: "site", label: "Di tích" },
  { key: "museum", label: "Bảo tàng" },
  { key: "village", label: "Làng nghề" },
];

const SORTS: { key: SortBy; label: string }[] = [
  { key: "recent", label: "Mới nhất" },
  { key: "nearest", label: "Gần nhất" },
];

export function SavedToolbar({
  disabled,
  filterType,
  onFilterChange,
  sortBy,
  onSortChange,
  selectMode,
  onToggleSelectMode,
  selectedCount,
  allSelected,
  onSelectAll,
  onBulkRemove,
}: {
  disabled: boolean;
  filterType: FilterType;
  onFilterChange: (value: FilterType) => void;
  sortBy: SortBy;
  onSortChange: (value: SortBy) => void;
  selectMode: boolean;
  onToggleSelectMode: () => void;
  selectedCount: number;
  allSelected: boolean;
  onSelectAll: () => void;
  onBulkRemove: () => void;
}) {
  const [openMenu, setOpenMenu] = useState<"filter" | "sort" | null>(null);

  if (selectMode) {
    return (
      <div className="relative flex items-center gap-2 px-4 pb-3">
        <button
          type="button"
          onClick={() => {
            setOpenMenu(null);
            onToggleSelectMode();
          }}
          aria-label="Đóng"
          className="flex h-8 w-8 shrink-0 items-center justify-center text-[#19264e]"
        >
          <CloseIcon className="h-[21.79px] w-[21.79px]" />
        </button>

        <div className="ml-auto flex items-center gap-2.5">
          <button
            type="button"
            onClick={onSelectAll}
            className="flex h-8 w-[120px] items-center justify-center rounded border border-[#9b9b9b] bg-white px-3 py-1.5 text-xs font-normal text-[#252525]"
          >
            {allSelected ? "Bỏ chọn tất cả" : "Chọn tất cả"}
          </button>
          <button
            type="button"
            onClick={onBulkRemove}
            disabled={selectedCount === 0}
            aria-label="Xoá mục đã chọn"
            className={`flex h-8 w-[120px] items-center justify-center rounded border border-[#9b9b9b] px-3 py-1.5 disabled:opacity-40 ${
              selectedCount > 0 ? "border-[#aa6e00] bg-[#aa6e00] text-[#f3ebd9]" : "bg-white text-[#9b9b9b]"
            }`}
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex items-center gap-2 px-4 pb-3">
      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setOpenMenu((m) => (m === "filter" ? null : "filter"))}
          className="flex h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-medium transition-colors disabled:opacity-40"
          style={{
            borderColor: openMenu === "filter" ? "#009b8c" : "#e5e5e4",
            backgroundColor: "transparent",
            color: "#252525",
          }}
        >
          <FilterIcon className="h-5 w-5 text-[#141E3F]" />
          Lọc theo
        </button>

        {openMenu === "filter" && (
          <div className="absolute top-[calc(100%+6px)] left-0 z-20 w-40 rounded-xl bg-white p-1 shadow-lg ring-1 ring-black/5">
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => {
                  onFilterChange(filter.key);
                  setOpenMenu(null);
                }}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm"
                style={{ color: filterType === filter.key ? "#009b8c" : "#252525" }}
              >
                {filter.label}
                {filterType === filter.key && <CheckIcon className="h-4 w-4" />}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          disabled={disabled}
          onClick={() => {
            setOpenMenu(null);
            onToggleSelectMode();
          }}
          className="flex h-7 w-[105px] items-center justify-center rounded border border-[#9b9b9b] text-center text-xs font-normal text-[#252525] disabled:opacity-40"
        >
          Chọn
        </button>

        <div className="relative">
          <button
            type="button"
            disabled={disabled}
            onClick={() => setOpenMenu((m) => (m === "sort" ? null : "sort"))}
            className="flex h-7 w-[105px] items-center justify-center rounded border text-center text-xs font-normal text-[#252525] disabled:opacity-40"
            style={{ borderColor: openMenu === "sort" ? "#009b8c" : "#9b9b9b" }}
          >
            Sắp xếp theo
          </button>

          {openMenu === "sort" && (
            <div className="absolute top-[calc(100%+6px)] right-0 z-20 w-32 rounded-xl bg-white p-1 shadow-lg ring-1 ring-black/5">
              {SORTS.map((sort) => (
                <button
                  key={sort.key}
                  type="button"
                  onClick={() => {
                    onSortChange(sort.key);
                    setOpenMenu(null);
                  }}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm"
                  style={{ color: sortBy === sort.key ? "#009b8c" : "#252525" }}
                >
                  {sort.label}
                  {sortBy === sort.key && <CheckIcon className="h-4 w-4" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
