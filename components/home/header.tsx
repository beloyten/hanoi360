import Image from "next/image";
import { SearchIcon } from "./icons";

// Figma "Top bar / home" (392:11222): 68px gradient bar; logo 48px, search 233x32, VNE 48x32, 16px gaps.
export function Header() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-40 flex items-end gap-4 bg-gradient-to-b from-[#ddb86b] to-[#aa6e00] px-4 pb-4"
      style={{ height: "calc(68px + env(safe-area-inset-top))", paddingTop: "env(safe-area-inset-top)" }}
    >
      <Image src="/onboarding/logo.svg" alt="Hanoi 360" width={48} height={48} className="shrink-0" />

      <div className="flex h-8 min-w-0 flex-1 items-center gap-3 rounded bg-[#F3F3F3] px-2">
        <SearchIcon className="h-5 w-5 shrink-0 text-[#27314D]" />
        <span className="truncate text-xs leading-none text-[#27314D]/70">Tìm địa điểm bạn muốn đến</span>
      </div>

      <button
        type="button"
        className="flex h-8 w-12 shrink-0 items-center justify-center rounded border border-[#F2D79F] text-sm text-white"
      >
        VNE
      </button>
    </header>
  );
}
