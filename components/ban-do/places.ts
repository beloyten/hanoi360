import { getRestaurant } from "../am-thuc/restaurants";
import { getMuseum } from "../bao-tang/museums";
import { getFacility } from "../co-so-y-te/facilities";
import { getSite } from "../di-tich/sites";
import { getEntertainment } from "../giai-tri/entertainment";
import { getVillage } from "../lang-nghe/villages";
import { getShop } from "../mua-sam/shops";
import { getVenue } from "../vui-choi/venues";

export type PlaceCategory =
  | "am-thuc"
  | "di-tich"
  | "bao-tang"
  | "lang-nghe"
  | "giai-tri"
  | "vui-choi"
  | "mua-sam"
  | "co-so-y-te";

export type MapPlace = {
  id: string;
  name: string;
  subtitle: string;
  distance: string;
  photo: string;
  href: string;
  category: PlaceCategory;
  /** Pin tip position as a percentage of the 393x630 Figma map area. */
  x: number;
  y: number;
};

// Order and labels of the Figma "Tìm kiếm theo" dropdown (720:29064).
export const CATEGORY_OPTIONS: { key: PlaceCategory; label: string }[] = [
  { key: "am-thuc", label: "Ẩm thực" },
  { key: "di-tich", label: "Di tích lịch sử" },
  { key: "bao-tang", label: "Bảo tàng" },
  { key: "lang-nghe", label: "Làng nghề" },
  { key: "giai-tri", label: "Giải trí" },
  { key: "vui-choi", label: "Vui chơi" },
  { key: "mua-sam", label: "Mua sắm" },
  { key: "co-so-y-te", label: "Cơ sở y tế" },
];

// The 19 pin positions (top-left of the 21x33 pin) from the Figma map frame (720:28996).
const PIN_SPOTS: [number, number][] = [
  [264.48, 330], [281.25, 227], [257.03, 263], [239.34, 271], [257.03, 166], [112.69, 163], [128.52, 150],
  [61.46, 184], [-11, 237], [4, 250], [-6, 271], [331.54, 366], [202.09, 493], [130.38, 443],
  [139.69, 493], [108.96, 493], [122.93, 504], [67.05, 521], [35.39, 510],
];

type Source = { name: string; subtitle: string; distance: string; photo: string; href: string };

function from(category: PlaceCategory, id: number): Source | undefined {
  switch (category) {
    case "am-thuc": {
      const r = getRestaurant(id);
      return r && { name: r.name, subtitle: r.address ?? r.description, distance: r.distance, photo: r.photo ?? "", href: `/am-thuc/${id}` };
    }
    case "di-tich": {
      const s = getSite(id);
      return s && { name: s.name, subtitle: s.subtitle, distance: s.distance, photo: s.photo, href: `/di-tich/${id}` };
    }
    case "bao-tang": {
      const m = getMuseum(id);
      return m && { name: m.title, subtitle: m.address, distance: m.distance, photo: m.image, href: `/bao-tang/${id}` };
    }
    case "lang-nghe": {
      const v = getVillage(id);
      return v && { name: v.name, subtitle: v.address, distance: v.distance, photo: v.photo, href: `/lang-nghe/${id}` };
    }
    case "giai-tri": {
      const e = getEntertainment(id);
      return e && { name: e.name, subtitle: e.address, distance: e.distance, photo: e.photo, href: `/giai-tri/${id}` };
    }
    case "vui-choi": {
      const v = getVenue(id);
      return v && { name: v.name, subtitle: v.address, distance: v.distance, photo: v.photo, href: `/vui-choi/${id}` };
    }
    case "mua-sam": {
      const s = getShop(id);
      return s && { name: s.name, subtitle: s.address, distance: s.distance, photo: s.photo ?? "", href: `/mua-sam/${id}` };
    }
    case "co-so-y-te": {
      const f = getFacility(id);
      return f && { name: f.name, subtitle: f.address, distance: f.distance, photo: f.photo ?? "", href: `/co-so-y-te/${id}` };
    }
  }
}

// Which existing places sit on the 19 Figma pins (spread across all 8 categories).
const ASSIGNMENTS: [PlaceCategory, number][] = [
  ["di-tich", 4], ["bao-tang", 1], ["am-thuc", 1], ["mua-sam", 1], ["di-tich", 5], ["bao-tang", 2], ["giai-tri", 7],
  ["am-thuc", 2], ["co-so-y-te", 1], ["vui-choi", 1], ["lang-nghe", 1], ["bao-tang", 3], ["di-tich", 3], ["am-thuc", 3],
  ["giai-tri", 9], ["mua-sam", 2], ["vui-choi", 2], ["lang-nghe", 2], ["co-so-y-te", 2],
];

export const PLACES: MapPlace[] = ASSIGNMENTS.flatMap(([category, id], i) => {
  const source = from(category, id);
  if (!source) return [];
  const [left, top] = PIN_SPOTS[i];
  return [{ id: `${category}-${id}`, category, ...source, x: ((left + 10.7) / 393) * 100, y: ((top + 32.7) / 630) * 100 }];
});
