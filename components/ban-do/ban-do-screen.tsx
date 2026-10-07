"use client";

import Image from "next/image";
import { useState } from "react";
import { BottomNav } from "../home/bottom-nav";
import { SearchIcon } from "../home/icons";
import { DirectionsButton } from "../shared/directions-button";
import { CATEGORY_FILTERS, PLACES, type MapPlace, type PlaceCategory } from "./places";

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 0C5.37258 0 0 5.37258 0 12C0 20.4 12 32 12 32C12 32 24 20.4 24 12C24 5.37258 18.6274 0 12 0Z"
        fill="currentColor"
      />
      <circle cx="12" cy="12" r="4.5" fill="#FFFFFF" />
    </svg>
  );
}

function LocateIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <path d="M12 1.5V5M12 19V22.5M1.5 12H5M19 12H22.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function BanDoScreen() {
  const [category, setCategory] = useState<PlaceCategory | "all">("all");
  const [selected, setSelected] = useState<MapPlace | null>(null);

  const visiblePlaces = PLACES.filter((place) => category === "all" || place.category === category);

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      {/* Map image from the Figma "Map" frame (720:29458). */}
      <Image src="/ban-do/map.webp" alt="" fill priority className="object-cover" sizes="100vw" />

      {/* user location marker */}
      <div
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
        style={{ left: "56%", top: "49%" }}
      >
        <span className="absolute -inset-3 animate-ping rounded-full bg-[#3B82F6]/20" />
        <span className="block h-4 w-4 rounded-full border-[3px] border-white bg-[#3B82F6] shadow-[0_1px_4px_rgba(0,0,0,0.3)]" />
      </div>

      {/* place pins */}
      {visiblePlaces.map((place) => {
        const isSelected = selected?.id === place.id;
        return (
          <button
            key={place.id}
            type="button"
            onClick={() => setSelected(place)}
            aria-label={place.name}
            className={`absolute z-10 -translate-x-1/2 -translate-y-full transition-transform ${
              isSelected ? "z-20 scale-125" : "hover:scale-110"
            }`}
            style={{ left: `${place.x}%`, top: `${place.y}%`, color: isSelected ? "#AA6E00" : "#19264E" }}
          >
            <PinIcon className="h-7 w-8 drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]" />
          </button>
        );
      })}

      {/* top overlay: search + category chips */}
      <div
        className="absolute inset-x-0 top-0 z-10"
        style={{ paddingTop: "calc(12px + env(safe-area-inset-top))" }}
      >
        <div className="px-4">
          <div className="flex h-10 items-center gap-3 rounded-lg bg-white px-3 shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
            <SearchIcon className="h-5 w-5 shrink-0 text-[#58585c]" />
            <span className="truncate text-xs leading-none text-[#58585c]/70">Tìm địa điểm bạn muốn đến</span>
          </div>
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORY_FILTERS.map((filter) => {
            const isActive = category === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setCategory(filter.key)}
                className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-medium shadow-[0_1px_4px_rgba(0,0,0,0.08)] transition-colors ${
                  isActive
                    ? "border-[#AA6E00] bg-[#AA6E00] text-white"
                    : "border-[#E3E2E0] bg-white text-[#252525]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* locate-me FAB */}
      <button
        type="button"
        aria-label="Vị trí của tôi"
        className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#19264E] shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
        style={{
          bottom: selected
            ? "calc(216px + env(safe-area-inset-bottom))"
            : "calc(88px + env(safe-area-inset-bottom))",
        }}
      >
        <LocateIcon className="h-6 w-6" />
      </button>

      {/* selected place card */}
      {selected && (
        <div
          className="absolute inset-x-4 z-20 rounded-xl bg-white p-3 shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
          style={{ bottom: "calc(79px + env(safe-area-inset-bottom))" }}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Đóng"
            className="absolute right-2 top-2 text-[#9B9B9B]"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <span className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-lg">
              <Image src={selected.photo} alt={selected.name} fill className="object-cover" sizes="64px" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-[#252525]">{selected.name}</p>
              <p className="mt-0.5 text-xs text-[#58585c]">{selected.subtitle}</p>
              <p className="mt-1 text-xs font-medium text-[#AA6E00]">{selected.distance}</p>
            </div>
            <DirectionsButton
              query={`${selected.name}, ${selected.subtitle} Hà Nội`}
              className="mr-5 shrink-0"
            />
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
