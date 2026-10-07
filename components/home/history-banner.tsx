import Image from "next/image";
import Link from "next/link";

// Figma history banner (686:90044, 369x146) exported @3x as one image: its photo collage, noise
// textures and Inter Black lettering can't be rebuilt crisply in CSS. The text stays readable via aria-label.
export function HistoryBanner() {
  return (
    <Link
      href="/di-tich"
      aria-label="Ngược Dòng Thời Gian - Khám Phá Trọn Vẹn Lịch Sử Hà Nội"
      className="mx-3 block transition-transform duration-150 select-none active:scale-[0.98]"
    >
      <Image
        src="/home/figma/history-banner.png"
        alt=""
        width={369}
        height={148}
        unoptimized
        className="h-auto w-full"
        draggable={false}
      />
    </Link>
  );
}
