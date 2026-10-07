"use client";

import type { CSSProperties } from "react";
import { useRouter } from "next/navigation";
import { canGoBackInApp } from "@/lib/navigation-history";
import { BackIcon } from "../home/icons";

// Figma "Top bar" (429:38288): a 40px row placed 8px from the top and 12px from the sides.
// The back control is a 40px frame holding the 32px ico_back; the title is Title 2 (Inter 600 16/24).
const TONES = {
  dark: "#19264E",
  light: "#FAF8F5",
} as const;

export function TopBar({
  title,
  tone = "dark",
  color: colorOverride,
  align = "left",
  showBack = true,
  background,
  height,
  className,
}: {
  title?: string;
  /** dark = #19264E icon/text (on light backgrounds), light = #FAF8F5 (on photos, gradients). */
  tone?: keyof typeof TONES;
  /** Overrides the tone color (e.g. #27314D for the tab-screen titles). */
  color?: string;
  /** left = category/detail variants, center = "Lưu" variant used by tab screens. */
  align?: "left" | "center";
  showBack?: boolean;
  background?: string;
  /** Figma bar height below the safe area (52 tab screens, 112 detail gradient); defaults to the 56px content height. */
  height?: number;
  className?: string;
}) {
  const router = useRouter();
  const color = colorOverride ?? TONES[tone];

  const style: CSSProperties = {
    background,
    color,
    paddingTop: "calc(8px + env(safe-area-inset-top))",
    height: height ? `calc(${height}px + env(safe-area-inset-top))` : undefined,
  };

  return (
    <div className={`px-3 transition-[background-color,color] duration-200 ${className ?? ""}`} style={style}>
      <div className="relative flex h-10 items-center gap-2">
        {showBack && (
          <button
            type="button"
            // Opened from a shared link there is no in-app page to return to, so go Home instead.
            onClick={() => (canGoBackInApp() ? router.back() : router.push("/home"))}
            aria-label="Quay lại"
            className="pointer-events-auto flex size-10 shrink-0 items-center justify-center"
          >
            <BackIcon className="size-8" />
          </button>
        )}
        {title && (
          <span
            className={`truncate text-base leading-6 font-semibold ${
              align === "center" ? "absolute inset-x-12 text-center" : "min-w-0"
            }`}
          >
            {title}
          </span>
        )}
      </div>
    </div>
  );
}
