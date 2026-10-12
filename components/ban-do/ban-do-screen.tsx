"use client";

import Image from "next/image";
import { useState } from "react";
import { BottomNav } from "../home/bottom-nav";
import { SearchIcon } from "../home/icons";
import { DirectionsButton } from "../shared/directions-button";
import { TopBar } from "../shared/top-bar";
import { useShowDistance } from "../home/use-geo-permission";
import { CATEGORY_OPTIONS, PLACES, type MapPlace, type PlaceCategory } from "./places";

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

function CaretIcon({ open }: { open: boolean }) {
  // Figma: caret points up while closed, down while the list is open.
  return (
    <svg className="size-5" viewBox="0 0 20 20" fill="none" style={{ transform: open ? "rotate(180deg)" : undefined }}>
      <path d="M4 13L10 7L16 13H4Z" fill="currentColor" />
    </svg>
  );
}

function Radio({ checked }: { checked: boolean }) {
  return checked ? (
    <svg className="size-5" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#AA6E00" />
      <path d="M5.5 10.2L8.6 13.2L14.5 7.3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <span className="block size-5 rounded-full border-2 border-[#9B9B9B]" />
  );
}

// Figma "Bản đồ" (720:28903 / 720:28993): category top bar with search, map below from y 98,
// a 200px "Tìm kiếm theo" dropdown with radio options, 19 pins and the "you are here" dot.
export function BanDoScreen() {
  const [category, setCategory] = useState<PlaceCategory | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<MapPlace | null>(null);
  const showDistance = useShowDistance();

  const visiblePlaces = PLACES.filter((place) => !category || place.category === category);

  return (
    <div
      className="relative h-dvh w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F3F3F3 0%, #E3E2E0 100%)" }}
    >
      <div className="absolute inset-x-0 top-0 z-30">
        <TopBar title="Bản đồ" tone="dark" />
        <div className="mx-3 mt-[3px] flex h-10 items-center gap-3 rounded bg-[#E3E2E0] px-2">
          <SearchIcon className="size-5 shrink-0 text-[#19264E]" />
          <span className="truncate text-xs text-[#19264E]/70">Tìm địa điểm, quán ăn, nhà hàng...</span>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 overflow-hidden"
        style={{ top: "calc(98px + env(safe-area-inset-top))" }}
        onClick={() => setMenuOpen(false)}
      >
        <Image src="/ban-do/map.webp" alt="" fill priority className="object-cover" sizes="100vw" />

        {/* "you are here" (Figma 224,362 in the map area) */}
        <div
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${(247 / 393) * 100}%`, top: `${(385 / 630) * 100}%` }}
        >
          {/* Pulsing halo like the current demo (client asked to keep the animation). */}
          <span className="absolute inset-[7px] animate-ping rounded-full bg-[#863F00]/25" />
          <MyLocationIcon className="relative size-[46px]" />
        </div>

        {visiblePlaces.map((place) => {
          const isSelected = selected?.id === place.id;
          return (
            <button
              key={place.id}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelected(place);
              }}
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

        <div className="absolute top-1 left-3 z-20 w-[200px]" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            className="flex h-[50px] w-full items-center justify-between rounded bg-white pr-[21px] pl-[18px] text-sm"
            style={{ color: menuOpen ? "#AA6E00" : "#19264E" }}
          >
            {category ? CATEGORY_OPTIONS.find((option) => option.key === category)?.label : "Tìm kiếm theo"}
            <CaretIcon open={menuOpen} />
          </button>

          {menuOpen && (
            <div className="mt-2 rounded bg-white px-3">
              {CATEGORY_OPTIONS.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => {
                    setCategory((current) => (current === option.key ? null : option.key));
                    setSelected(null);
                    setMenuOpen(false);
                  }}
                  className="flex h-[50px] w-full items-center justify-between border-b border-[#D5D5D5] pr-6 pl-1.5 text-left text-base text-[#19264E] last:border-b-0"
                >
                  {option.label}
                  <Radio checked={category === option.key} />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

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
              {showDistance && <p className="mt-1 text-xs font-medium text-[#AA6E00]">{selected.distance}</p>}
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
