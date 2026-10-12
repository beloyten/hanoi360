"use client";

import { useState } from "react";
import { ImageFilterButton } from "../shared/category/category-filter";

const PICKS = [
  { label: "Đồ uống", photo: "/am-thuc/quick-picks/do-uong.png" },
  { label: "Cơm", photo: "/am-thuc/quick-picks/com.jpg" },
  { label: "Bánh mỳ", photo: "/am-thuc/quick-picks/banh-mi.png" },
  { label: "Phở", photo: "/am-thuc/quick-picks/pho.png" },
  { label: "Bún", photo: "/am-thuc/quick-picks/bun.png" },
];

export function QuickPicks() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex overflow-x-auto px-3 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {PICKS.map((pick) => (
        <ImageFilterButton
          key={pick.label}
          image={pick.photo}
          label={pick.label}
          active={selected === pick.label}
          onClick={() => setSelected(selected === pick.label ? null : pick.label)}
        />
      ))}
    </div>
  );
}
