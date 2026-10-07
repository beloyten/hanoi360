"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

// Icons are PNG @3x exports: the Figma SVGs use a texture filter that browsers rasterize blurry.
const CATEGORIES = [
  { label: "Di tích lịch sử", icon: "/home/figma/cat-di-tich.png", href: "/di-tich" },
  { label: "Ẩm thực", icon: "/home/figma/cat-am-thuc.png", href: "/am-thuc" },
  { label: "Bảo tàng", icon: "/home/figma/cat-bao-tang.png", href: "/bao-tang" },
  { label: "Làng nghề", icon: "/home/figma/cat-lang-nghe.png", href: "/lang-nghe" },
  { label: "Giải trí", icon: "/home/figma/cat-giai-tri.png", href: "/giai-tri" },
  { label: "Vui chơi", icon: "/home/figma/cat-vui-choi.png", href: "/vui-choi" },
  { label: "Mua sắm", icon: "/home/figma/cat-mua-sam.png", href: "/mua-sam" },
  { label: "Cơ sở Y tế", icon: "/home/figma/cat-co-so-y-te.png", href: "/co-so-y-te" },
];

export function CategoryGrid() {
  const router = useRouter();

  // Figma "Category" (686:90013): 369x214, 4 columns of 83.25px with 12px gaps, rows 115px apart.
  return (
    <div className="relative mx-3 grid grid-cols-4 gap-x-3 gap-y-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/home/figma/category-bg.svg"
        alt=""
        className="pointer-events-none absolute top-0.5 left-0 h-[212px] w-full select-none"
        draggable={false}
      />

      {CATEGORIES.map((category) => (
        <button
          key={category.label}
          type="button"
          onClick={() => router.push(category.href)}
          className="relative flex flex-col items-center gap-2 pb-1 transition-transform duration-150 select-none active:scale-90"
        >
          <Image src={category.icon} alt="" width={72} height={72} unoptimized className="size-18 rounded" />
          <span className="text-center text-xs leading-[15px] text-[#141E3F]">{category.label}</span>
        </button>
      ))}
    </div>
  );
}
