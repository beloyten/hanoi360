import { RESTAURANTS } from "@/components/am-thuc/restaurants";
import { VENUES } from "@/components/vui-choi/venues";
import { FACILITIES } from "@/components/co-so-y-te/facilities";
import { SHOPS } from "@/components/mua-sam/shops";
import { SITES } from "@/components/di-tich/sites";
import { MUSEUMS } from "@/components/bao-tang/museums";
import { VILLAGES } from "@/components/lang-nghe/villages";
import { GUIDES } from "@/components/cam-nang/guides";
import { EXHIBITS } from "@/components/trien-lam/exhibits";

export type SavedItemType =
  | "restaurant"
  | "venue"
  | "facility"
  | "shop"
  | "site"
  | "museum"
  | "village"
  | "guide"
  | "exhibit";

export type SavedDisplayItem = {
  key: string;
  type: SavedItemType;
  name: string;
  subtitle: string;
  distance: string;
  photo?: string;
  href?: string;
};

export function resolveSavedItem(key: string): SavedDisplayItem | null {
  const [type, idStr] = key.split(":");
  const id = Number(idStr);

  if (type === "exhibit") {
    const exhibit = EXHIBITS.find((item) => item.slug === idStr);
    if (!exhibit) return null;
    return {
      key,
      type,
      name: exhibit.name,
      subtitle: exhibit.address,
      distance: "",
      photo: exhibit.photo,
      href: `/trien-lam/${exhibit.slug}`,
    };
  }

  if (type === "guide") {
    const guide = GUIDES.find((item) => item.id === id);
    if (!guide) return null;
    return {
      key,
      type,
      name: guide.title,
      subtitle: "Cẩm nang du lịch Hà Nội",
      distance: "",
      photo: guide.photo,
      href: `/cam-nang/${guide.id}`,
    };
  }

  if (type === "restaurant") {
    const restaurant = RESTAURANTS.find((item) => item.id === id);
    if (!restaurant) return null;
    return {
      key,
      type,
      name: restaurant.name,
      subtitle: restaurant.description,
      distance: restaurant.distance,
      photo: restaurant.photo,
      href: `/am-thuc/${restaurant.id}`,
    };
  }

  if (type === "venue") {
    const venue = VENUES.find((item) => item.id === id);
    if (!venue) return null;
    return {
      key,
      type,
      name: venue.name,
      subtitle: venue.address,
      distance: venue.distance,
      photo: venue.photo,
      href: `/vui-choi/${venue.id}`,
    };
  }

  if (type === "facility") {
    const facility = FACILITIES.find((item) => item.id === id);
    if (!facility) return null;
    return {
      key,
      type,
      name: facility.name,
      subtitle: facility.address,
      distance: facility.distance,
      photo: facility.photo,
      href: `/co-so-y-te/${facility.id}`,
    };
  }

  if (type === "shop") {
    const shop = SHOPS.find((item) => item.id === id);
    if (!shop) return null;
    return {
      key,
      type,
      name: shop.name,
      subtitle: shop.address,
      distance: shop.distance,
      photo: shop.photo,
      href: `/mua-sam/${shop.id}`,
    };
  }

  if (type === "site") {
    const site = SITES.find((item) => item.id === id);
    if (!site) return null;
    return {
      key,
      type,
      name: site.name,
      subtitle: site.subtitle,
      distance: site.distance,
      photo: site.photo,
      href: `/di-tich/${site.id}`,
    };
  }

  if (type === "museum") {
    const museum = MUSEUMS.find((item) => item.id === id);
    if (!museum) return null;
    return {
      key,
      type,
      name: museum.title,
      subtitle: museum.address,
      distance: museum.distance,
      photo: museum.image,
      href: `/bao-tang/${museum.id}`,
    };
  }

  if (type === "village") {
    const village = VILLAGES.find((item) => item.id === id);
    if (!village) return null;
    return {
      key,
      type,
      name: village.name,
      subtitle: village.address,
      distance: village.distance,
      photo: village.photo,
      href: `/lang-nghe/${village.id}`,
    };
  }

  return null;
}

export function parseDistanceMeters(distance: string): number {
  const trimmed = distance.trim().toLowerCase();
  const value = parseFloat(trimmed);
  if (Number.isNaN(value)) return Number.POSITIVE_INFINITY;
  return trimmed.includes("km") ? value * 1000 : value;
}
