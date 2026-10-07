import type { ReactNode } from "react";

type FilterSectionProps = {
  /** Tailwind gap-* class between filter items. */
  gapClassName?: string;
  /** Extra classes merged onto the outer wrapper (e.g. padding overrides). */
  className?: string;
  children: ReactNode;
};

export function FilterSection({ gapClassName = "gap-2", className = "pt-2 pb-3", children }: FilterSectionProps) {
  return (
    <div className={className}>
      <div className={`flex ${gapClassName} overflow-x-auto px-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}>
        {children}
      </div>
    </div>
  );
}
