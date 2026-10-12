"use client";

import { useState } from "react";
import { useSavedKeys, useToggleSaved } from "@/lib/store/use-saved-store";
import { BottomNav } from "../home/bottom-nav";
import { TopBar } from "../shared/top-bar";
import { resolveSavedItem, type SavedDisplayItem } from "./saved-items";
import { SavedList } from "./saved-list";
import { SavedToolbar, type FilterType, type SortBy } from "./saved-toolbar";

export function DaLuuScreen() {
  const keys = useSavedKeys();
  const toggleSaved = useToggleSaved();

  const [filterType, setFilterType] = useState<FilterType>("all");
  const [sortBy, setSortBy] = useState<SortBy>("recent");
  const [selectMode, setSelectMode] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
  const [confirmOpen, setConfirmOpen] = useState(false);

  const toggleSelectMode = () => {
    setSelectMode((v) => !v);
    setSelectedKeys(new Set());
  };

  const toggleSelectKey = (key: string) => {
    setSelectedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const visibleKeys = keys
    .map(resolveSavedItem)
    .filter((item): item is SavedDisplayItem => item !== null)
    .filter((item) => filterType === "all" || item.type === filterType)
    .map((item) => item.key);

  const allSelected = visibleKeys.length > 0 && visibleKeys.every((key) => selectedKeys.has(key));

  const toggleSelectAll = () => {
    setSelectedKeys(allSelected ? new Set() : new Set(visibleKeys));
  };

  const bulkRemove = () => {
    selectedKeys.forEach((key) => toggleSaved(key));
    setSelectedKeys(new Set());
    setSelectMode(false);
    setConfirmOpen(false);
  };

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-white">
      <main
        className="h-full overflow-y-auto"
        style={{
          paddingBottom: "calc(83px + env(safe-area-inset-bottom))",
          background: "linear-gradient(rgb(250, 248, 245) 0%, rgb(239, 236, 231) 100%)",
        }}
      >
        {/* Figma "Layout 2_Saved" (424:13764): 52px centered top bar, toolbar row at y 116. */}
        <div className="sticky top-0 z-20 bg-white pb-2">
          <TopBar title="Đã lưu" align="center" showBack={false} color="#27314D" height={52} />
          <div className="h-16" />

          <SavedToolbar
            disabled={keys.length === 0}
            filterType={filterType}
            onFilterChange={setFilterType}
            sortBy={sortBy}
            onSortChange={setSortBy}
            selectMode={selectMode}
            onToggleSelectMode={toggleSelectMode}
            selectedCount={selectedKeys.size}
            allSelected={allSelected}
            onSelectAll={toggleSelectAll}
            onBulkRemove={() => setConfirmOpen(true)}
          />
        </div>

        <SavedList
          filterType={filterType}
          sortBy={sortBy}
          selectMode={selectMode}
          selectedKeys={selectedKeys}
          onToggleSelect={toggleSelectKey}
        />
      </main>

      <BottomNav />

      {confirmOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 px-6"
          onClick={() => setConfirmOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="flex h-[155px] w-[299px] flex-col items-center rounded bg-white px-4 pb-3 shadow-[0px_4px_6px_0px_#00000040]"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="flex flex-1 items-center text-center text-sm text-[#252525]">
              Bạn muốn xoá {selectedKeys.size} nội dung?
            </p>
            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={() => setConfirmOpen(false)}
                className="flex h-8 w-[124px] items-center justify-center rounded border border-[#9b9b9b] bg-white px-3 py-1.5 text-sm font-medium text-[#252525]"
              >
                Huỷ
              </button>
              <button
                type="button"
                onClick={bulkRemove}
                className="flex h-8 w-[124px] items-center justify-center rounded border border-[#aa6e00] bg-[#aa6e00] px-3 py-1.5 text-sm font-medium text-white"
              >
                Xoá
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
