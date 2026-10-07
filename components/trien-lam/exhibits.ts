/** Event banners from Home; each has a static page at /trien-lam/[slug]. */
export type Exhibit = {
  slug: string;
  name: string;
  photo: string;
  address: string;
};

export const EXHIBITS: Exhibit[] = [
  {
    slug: "workshop-hoa-gom",
    name: "Workshop hoạ gốm",
    photo: "/home/banner-1.png",
    address: "Tầng 2, AN Thuận An, số 53 Thuận An, Trâu Quỳ, Gia Lâm, Hà Nội",
  },
  {
    slug: "giao-chi",
    name: "BST Giao Chỉ - Hình khối nguyên sơ của một ký ức",
    photo: "/home/banner-2.png",
    address: "Bát Tràng Museum Atelier, Số 1, đường 1-5, thôn 2, xã Bát Tràng, Hà Nội",
  },
  {
    slug: "bien-do-tuong-lai",
    name: "Triển Lãm Biên Độ Tương Lai",
    photo: "/home/banner-3.png",
    address: "LOTTE Department Store, 54 Liễu Giai, Hà Nội",
  },
  {
    slug: "dong-chay-cua-lua",
    name: "Triển lãm Trong dòng chảy của Lụa",
    photo: "/home/banner-4.png",
    address: "The Muse Artspace, 47 Tràng Tiền, Hà Nội",
  },
  {
    slug: "van-gogh",
    name: "Triển lãm đa giác quan Van Gogh Timeless",
    photo: "/home/banner-5.png",
    address: "Tầng 1, Tòa B - UDIC Westlake Building, Đ. Võ Chí Công, P. Phú Thượng, Hà Nội",
  },
];

export function getExhibit(slug: string) {
  const exhibit = EXHIBITS.find((item) => item.slug === slug);
  if (!exhibit) throw new Error(`Unknown exhibit: ${slug}`);
  return exhibit;
}
