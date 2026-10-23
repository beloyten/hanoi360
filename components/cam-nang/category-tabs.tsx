"use client";

import Image from "next/image";

// Figma icon sets "icon lich trinh goi y" etc. (425:40995...): 68px default, 72px selected with the grey frame
// baked in. Icons live in public/cam-nang/tabs/{key}(-active).png (@3x exports).
const TABS = [
  { key: "itinerary", label: "Lịch trình\ngợi ý" },
  { key: "heritage", label: "Hành trình\ndi sản" },
  { key: "season", label: "Mùa và\nlễ hội" },
  { key: "food", label: "Ẩm thực\ntour" },
] as const;

export function CategoryTabs({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: (typeof TABS)[number]["key"];
  onCategoryChange: (key: (typeof TABS)[number]["key"]) => void;
}) {
  const activeIndex = TABS.findIndex((tab) => tab.key === activeCategory);

  return (
    // Figma: tab row 361px wide (16px margins), 12px gaps, 8px bottom padding; labels 12px #141E3F.
    <div className="px-4 pb-2">
      <div className="relative flex gap-3">
        {TABS.map(({ key, label }) => {
          const isActive = key === activeCategory;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onCategoryChange(key)}
              className="flex flex-1 flex-col items-center pb-1"
            >
              {/* Both states stay mounted and only swap visibility (client 23/10): changing the src made iOS Safari
                  reload the PNG, so the tapped and the previously selected icons blanked out for a moment. */}
              <div
                className={`grid size-18 shrink-0 place-items-center ${isActive ? "animate-[tab-pop_0.3s_ease-in-out]" : ""}`}
              >
                <Image
                  src={`/cam-nang/tabs/${key}.png`}
                  alt=""
                  width={68}
                  height={68}
                  unoptimized
                  priority
                  className={`col-start-1 row-start-1 size-17 ${isActive ? "invisible" : ""}`}
                />
                <Image
                  src={`/cam-nang/tabs/${key}-active.png`}
                  alt=""
                  width={72}
                  height={72}
                  unoptimized
                  priority
                  className={`col-start-1 row-start-1 size-18 ${isActive ? "" : "invisible"}`}
                />
              </div>
              <span
                className="flex-1 text-center text-xs leading-[15px] whitespace-pre-line text-[#141E3F]"
                style={{ fontWeight: isActive ? 600 : 400 }}
              >
                {label}
              </span>
            </button>
          );
        })}
        <span
          aria-hidden
          className="absolute top-[calc(100%+1px)] h-0 w-0 -translate-x-1/2 border-x-[7.5px] border-b-[7px] border-x-transparent border-b-[#E3E2E0] transition-[left] duration-300 ease-in-out"
          style={{
            left: `calc(${2 * activeIndex + 1} * (100% - 36px) / 8 + ${12 * activeIndex}px)`,
          }}
        />
      </div>
    </div>
  );
}
