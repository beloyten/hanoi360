"use client";

import Image from "next/image";
import Link from "next/link";
import { useIsSaved, useToggleSaved } from "@/lib/store/use-saved-store";
import { DirectionsButton } from "./directions-button";
import { BookmarkIcon, PinIcon } from "../home/icons";
import { DiscountBadge } from "../am-thuc/discount-badge";
import { useShowDistance } from "../home/use-geo-permission";

export type VerticalCardItem = {
  id: number | string;
  name: string;
  subtitle: string;
  distance: string;
  photo?: string;
};

export type HorizontalCardItem = {
  id: number | string;
  name: string;
  description: string;
  distance: string;
  logoText?: string;
  logoBg?: string;
  photo?: string;
  hasVoucher?: boolean;
  address?: string;
};

export function CardItemVertical({
  item,
  savedKey,
  href,
  onToggleSaved,
}: {
  item: VerticalCardItem;
  savedKey: string;
  href?: string;
  /** Replaces the default save toggle (Đã lưu asks for confirmation first). */
  onToggleSaved?: () => void;
}) {
  const saved = useIsSaved(savedKey);
  const showDistance = useShowDistance();
  const toggleSaved = useToggleSaved();

  // Figma "card list" (413:37829): 369px card, 178px photo (8/8/20/20 radius) over a white panel;
  // Title 2 #27314D + Body 2 #141E3F/80, 40px save target, grey (#727273) directions icon.
  const card = (
    <>
      <div className="relative h-44.5 w-full overflow-hidden rounded-t-lg rounded-b-[20px] bg-[#C0C0C0]">
        {item.photo && (
          <Image
            src={item.photo}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 560px, 100vw"
          />
        )}
      </div>

      <DirectionsButton
        query={`${item.name}, ${item.subtitle}, Hà Nội`}
        className="absolute top-[153px] right-6 z-10"
        iconClassName="text-[#727273]"
      />

      <div className="relative min-h-[94px] rounded-t-[20px] rounded-b-lg bg-white pt-1 pr-14 pb-7 pl-3">
        <div className="flex flex-col gap-1">
          <p className="line-clamp-2 text-base leading-6 font-semibold text-[#27314D]">{item.name}</p>
          <p className="line-clamp-2 text-sm leading-[17px] text-[#141E3F]/80">{item.subtitle}</p>
        </div>

        {showDistance && item.distance && (
          <div className="absolute bottom-1 left-3 inline-flex items-center">
            <PinIcon className="size-5 text-[#27314D]" />
            <span className="flex h-5 items-center text-[11px] leading-none text-[#27314D]">{item.distance}</span>
          </div>
        )}

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (onToggleSaved) onToggleSaved();
            else toggleSaved(savedKey);
          }}
          aria-label={saved ? "Bỏ lưu địa điểm" : "Lưu địa điểm"}
          aria-pressed={saved}
          className="absolute top-[46px] right-4 flex size-10 items-center justify-center text-[#27314D] transition-transform duration-150 select-none active:scale-90"
        >
          <BookmarkIcon className="size-7" filled={saved} />
        </button>
      </div>
    </>
  );

  return href ? (
    <Link href={href} aria-label={item.name} className="relative block">
      {card}
    </Link>
  ) : (
    <div className="relative">{card}</div>
  );
}

export function CardItemHorizontal({
  item,
  savedKey,
  href,
  directionsIconClassName,
}: {
  item: HorizontalCardItem;
  savedKey: string;
  href: string;
  directionsIconClassName?: string;
}) {
  const saved = useIsSaved(savedKey);
  const showDistance = useShowDistance();
  const toggleSaved = useToggleSaved();
  const logoBg = item.logoBg ?? "#eef1ee";
  const isDark = logoBg.toLowerCase() !== "#eef1ee" && !logoBg.startsWith("#f") && !logoBg.startsWith("#e");

  const card = (
    <>
      <div
        className="relative size-33 shrink-0 self-center overflow-hidden rounded-l-lg rounded-r-2xl"
        style={{ backgroundColor: item.photo ? "#f3f3f3" : logoBg }}
      >
        {item.photo ? (
          <Image src={item.photo} alt={item.name} fill className="object-cover" sizes="132px" />
        ) : (
          <span
            className="absolute inset-0 flex items-center justify-center px-2.5 text-center text-sm leading-tight font-bold"
            style={{ color: isDark ? "#ffffff" : "#3c3a2e" }}
          >
            {item.logoText}
          </span>
        )}
        {item.hasVoucher && <DiscountBadge className="absolute right-0 bottom-0" />}
      </div>

      <div className="relative flex min-w-0 flex-1 flex-col rounded-l-2xl rounded-r-lg bg-white px-3 py-1">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleSaved(savedKey);
          }}
          aria-label="Lưu địa điểm"
          className="relative z-10 -mt-1 -ml-1 flex h-8 w-8 shrink-0 items-center justify-center self-start text-[#27314D]"
        >
          <BookmarkIcon className="size-[26px]" filled={saved} />
        </button>
        <p className="truncate text-base leading-6 font-semibold text-[#27314D]">{item.name}</p>

        {/* Figma "card list_2": fixed 132px card, subtitle box 170x34 (two lines of Body 2). */}
        <p className="line-clamp-2 w-[170px] max-w-full text-sm leading-[17px] text-[#141E3F]/80">{item.description}</p>

        {showDistance && (
          <div className="mt-auto inline-flex items-center pt-2.5">
            <PinIcon className="size-5 text-[#27314D]" />
            <span className="text-[11px] leading-none text-[#27314D]">{item.distance}</span>
          </div>
        )}
      </div>

      {/* Figma "card list_2" (client 21/10 + 23/10): the button sits 8px from the card's right and bottom edges. */}
      <DirectionsButton
        query={`${item.name}${item.address ? `, ${item.address}` : ""}, Hà Nội`}
        className="absolute right-2 bottom-2 z-10"
        iconClassName={directionsIconClassName ?? "text-[#727273]"}
      />
    </>
  );

  return (
    <Link href={href} aria-label={item.name} className="relative flex h-33">
      {card}
    </Link>
  );
}

export function CardItem(
  props: { savedKey: string } & (
    | { layout: "vertical"; item: VerticalCardItem; href?: string; onToggleSaved?: () => void }
    | { layout: "horizontal"; item: HorizontalCardItem; href: string; directionsIconClassName?: string }
  )
) {
  if (props.layout === "vertical") {
    return (
      <CardItemVertical item={props.item} savedKey={props.savedKey} href={props.href} onToggleSaved={props.onToggleSaved} />
    );
  }
  return (
    <CardItemHorizontal
      item={props.item}
      savedKey={props.savedKey}
      href={props.href}
      directionsIconClassName={props.directionsIconClassName}
    />
  );
}
