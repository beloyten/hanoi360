"use client";

import { FoodTourIcon, HeritageIcon, ItineraryIcon, SeasonFestivalIcon } from "./icons";

const TABS = [
  { key: "itinerary", label: "Lịch trình\ngợi ý", Icon: ItineraryIcon },
  { key: "heritage", label: "Hành trình\ndi sản", Icon: HeritageIcon },
  { key: "season", label: "Mùa và\nlễ hội", Icon: SeasonFestivalIcon },
  { key: "food", label: "Ẩm thực\ntour", Icon: FoodTourIcon },
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
        {TABS.map(({ key, label, Icon }) => {
          const isActive = key === activeCategory;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onCategoryChange(key)}
              className="flex flex-1 flex-col items-center pb-1"
            >
              <div className="grid size-18 shrink-0 place-items-center">
                <div className={`grid place-items-center ${isActive ? "size-18 bg-[#9B9B9B] p-0.5 animate-[tab-pop_0.3s_ease-in-out]" : "size-17 bg-transparent"}`}>
                  <div className="size-full rounded-lg bg-white">
                    <Icon className="h-full w-full" />
                  </div>
                </div>
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
