"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useIsSaved, useToggleSaved } from "@/lib/store/use-saved-store";
import { DirectionsButton } from "../shared/directions-button";
import { BookmarkIcon, LocationOffIcon, PinIcon } from "./icons";
import { PLACES, type Place } from "./places";
import { useGeoPermission } from "./use-geo-permission";

const CARD_W = 287;
const CARD_GAP = 12;

// Figma "Near you" card (163:1771): 287px wide, 138px photo with a 20px bottom radius,
// 85px white panel with a 20px top radius, directions button straddling the seam.
function PlaceCard({ place }: { place: Place }) {
  const key = `site:${place.siteId}`;
  const saved = useIsSaved(key);
  const toggleSaved = useToggleSaved();

  return (
    <Link
      href={`/di-tich/${place.siteId}`}
      aria-label={place.title}
      className="relative block shrink-0 snap-center rounded"
      style={{ width: CARD_W }}
    >
      <div className="relative h-[138px] w-full overflow-hidden rounded-t rounded-b-[20px] bg-[#e5e5e4]">
        <Image src={place.photo} alt={place.title} fill sizes={`${CARD_W}px`} className="object-cover" />
      </div>

      <div className="relative h-[85px] rounded-t-[20px] rounded-b bg-white">
        <div className="flex w-[203px] flex-col gap-1 px-3 pt-2">
          <p className="truncate text-base leading-5 font-semibold text-[#19264E]">{place.title}</p>
          <p className="truncate text-sm leading-[18px] text-[#19264E]/80">{place.address}</p>
        </div>

        <div className="absolute bottom-1 left-3 inline-flex h-5 items-center">
          <PinIcon className="size-5 text-[#27314D]" />
          <span className="text-[11px] leading-none text-[#27314D]">{place.distance}</span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleSaved(key);
          }}
          aria-label={saved ? "Bỏ lưu địa điểm" : "Lưu địa điểm"}
          aria-pressed={saved}
          className="absolute top-[41px] right-3 flex size-11 items-center justify-center text-[#27314D]"
        >
          <BookmarkIcon className="size-[26px]" filled={saved} />
        </button>
      </div>

      <DirectionsButton query={`${place.title}, Hà Nội`} className="absolute top-[120px] right-5 z-10" />
    </Link>
  );
}

export function NearYou() {
  const { status, requestLocation } = useGeoPermission();
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Start with the second card centered so both neighbours peek in, as in the Figma frame.
  useEffect(() => {
    if (status !== "granted" || !scrollerRef.current) return;
    scrollerRef.current.scrollLeft = CARD_W + CARD_GAP;
  }, [status]);

  if (status !== "granted") {
    return (
      <div className="mx-6 flex flex-col items-center gap-3 rounded-xl px-4 py-6 text-center">
        <LocationOffIcon className="h-7 w-7 text-[#9e6c1a]" />
        {status === "denied" ? (
          <p className="text-sm text-[#58585c]">
            Vị trí đã bị chặn. Vui lòng bật quyền truy cập vị trí trong cài đặt trình duyệt để xem địa điểm gần bạn.
          </p>
        ) : (
          <>
            <p className="text-sm text-[#58585c]">Bật vị trí để khám phá những địa điểm gần bạn nhất</p>
            <button
              type="button"
              onClick={requestLocation}
              className="rounded-full bg-[#aa6e00] px-5 py-2 text-sm font-semibold text-[#f3ebd9]"
            >
              Cho phép truy cập vị trí
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-center text-base leading-6 font-semibold text-[#27314D]">Gần bạn nhất</h2>
      <div
        ref={scrollerRef}
        className="mt-0.5 flex snap-x snap-mandatory overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ gap: CARD_GAP, paddingInline: `calc((100% - ${CARD_W}px) / 2)` }}
      >
        {PLACES.map((place) => (
          <PlaceCard key={place.siteId} place={place} />
        ))}
      </div>
    </section>
  );
}
