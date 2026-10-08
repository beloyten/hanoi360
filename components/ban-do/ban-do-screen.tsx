"use client";

import Image from "next/image";
import { useState } from "react";
import { BottomNav } from "../home/bottom-nav";
import { SearchIcon } from "../home/icons";
import { DirectionsButton } from "../shared/directions-button";
import { CATEGORY_FILTERS, PLACES, type MapPlace, type PlaceCategory } from "./places";

// Figma map pin (720:29461): 22x33 #AA6E00 marker with a see-through hole.
function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.7649 0C12.9358 6.1427e-05 15.0583 0.691448 16.8632 1.98644C18.6681 3.28148 20.0745 5.12233 20.9051 7.27575C21.7357 9.42919 21.9535 13.481 20.9051 16.4995C18.7511 22.7 12.9611 30.6428 10.7649 33C8.57084 30.6429 2.42491 22.4316 0.624823 16.4995C-0.209509 13.7496 -0.20671 9.42921 0.623837 7.27575C1.45446 5.1222 2.86168 3.2815 4.66668 1.98644C6.47167 0.691431 8.59406 0 10.7649 0ZM10.7659 4.71386C7.12893 4.71386 4.17995 7.88027 4.17993 11.7856C4.17993 15.691 7.12892 18.8574 10.7659 18.8574C14.4028 18.8573 17.351 15.6909 17.351 11.7856C17.3509 7.88037 14.4028 4.71402 10.7659 4.71386Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Figma "you are here" marker (720:28965): #863F00 dot with 23% and 10% halos, 46px.
function MyLocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.23" cx="23" cy="23" r="16" fill="#863F00" />
      <circle opacity="0.1" cx="23" cy="23" r="23" fill="#863F00" />
      <circle cx="23" cy="23" r="8" fill="#863F00" />
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
        <MyLocationIcon className="size-[46px]" />
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
            className={`absolute z-10 origin-bottom -translate-x-1/2 -translate-y-full transition-transform ${
              isSelected ? "z-20 scale-125" : "hover:scale-110"
            }`}
            style={{ left: `${place.x}%`, top: `${place.y}%`, color: isSelected ? "#805300" : "#AA6E00" }}
          >
            <PinIcon className="h-[33px] w-[22px]" />
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
