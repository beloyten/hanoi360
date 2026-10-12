"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { canGoBackInApp } from "@/lib/navigation-history";
import { CloseIcon } from "../home/icons";

/**
 * Figma "Chi tiet / 360" (720:27147): the tour fills the whole screen; the "Lưu" top bar variant
 * (close icon + #FAF8F5 title) floats on top, with a "Kéo để tham quan" hint until the first touch.
 */
export function VrScreen({ title, url, back }: { title: string; url: string; back: string }) {
  const router = useRouter();
  const [hintVisible, setHintVisible] = useState(true);

  return (
    <div className="fixed inset-0 bg-[#19264E]" onPointerDownCapture={() => setHintVisible(false)}>
      <iframe
        src={url}
        title={`Tour 360° ${title}`}
        className="absolute inset-0 h-full w-full border-0"
        allow="accelerometer; gyroscope; fullscreen; xr-spatial-tracking"
        allowFullScreen
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 px-3"
        style={{
          paddingTop: "calc(7px + env(safe-area-inset-top))",
          height: "calc(84px + env(safe-area-inset-top))",
          background: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)",
        }}
      >
        <div className="relative flex h-10 items-center">
          <button
            type="button"
            onClick={() => (canGoBackInApp() ? router.back() : router.push(back))}
            aria-label="Đóng"
            className="pointer-events-auto flex size-10 items-center justify-center text-[#FAF8F5]"
          >
            <CloseIcon className="size-[22px]" />
          </button>
          <span className="ml-[22px] min-w-0 truncate text-base leading-6 font-semibold text-[#FAF8F5]">{title}</span>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 transition-opacity duration-300"
        style={{ opacity: hintVisible ? 1 : 0 }}
      >
        <Image src="/figma/drag-360.svg" alt="" width={78} height={78} />
        <span className="text-sm font-black text-white" style={{ textShadow: "0px 1px 2.1px #000000" }}>
          Kéo để tham quan
        </span>
      </div>
    </div>
  );
}
