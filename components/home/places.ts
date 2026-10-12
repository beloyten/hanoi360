import { getSite } from "../di-tich/sites";

export type Place = {
  /** Di tích id: the card links to /di-tich/[siteId] and shares its saved state. */
  siteId: number;
  title: string;
  address: string;
  distance: string;
  photo: string;
};

const NEARBY: Omit<Place, "photo">[] = [
  { siteId: 3, title: "Di tích Nhà tù Hỏa Lò", address: "1 Phố Hoả Lò, phường Hoàn Kiếm.", distance: "250m" },
  { siteId: 5, title: "Hồ Gươm", address: "Phố Đinh Tiên Hoàng, phường Hoàn Kiếm.", distance: "480m" },
  { siteId: 4, title: "Chùa Một Cột", address: "Phố Chùa Một Cột, phường Ba Đình.", distance: "620m" },
  { siteId: 11, title: "Chùa Trấn Quốc", address: "Đường Thanh Niên, phường Tây Hồ.", distance: "700m" },
];

export const PLACES: Place[] = NEARBY.map((place) => ({ ...place, photo: getSite(place.siteId)?.photo ?? "" }));
