"use client";

import { NavigationIcon } from "../home/icons";

export function DirectionsButton({
  query,
  className,
  iconClassName,
}: {
  query: string;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
          "_blank",
          "noopener,noreferrer"
        );
      }}
      aria-label="Chỉ đường"
      className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#F3EBD9] text-[#863F00] shadow-[0px_4px_4px_0px_#00000040] ${className ?? ""}`}
    >
      <NavigationIcon className={`size-6 ${iconClassName ?? ""}`} />
    </button>
  );
}
