"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BottomNav } from "../home/bottom-nav";
import { FacebookIcon } from "../home/icons";
import { TopBar } from "../shared/top-bar";

type Era = {
  key: string;
  chip: string;
  title: string;
  body: string;
  photo: string;
  cta: { label: string; href: string; external?: boolean };
};

const mapsSearch = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

// Copy from the Figma "lich su hn" detail frame (720:26467).
const ERAS: Era[] = [
  {
    key: "co-dai",
    chip: "Trước TK 10",
    title: "Thời cổ đại - Trước thế kỷ 10",
    body: "Vùng đất Hà Nội từng là kinh đô Âu Lạc với thành Cổ Loa của An Dương Vương, toà thành hình xoáy ốc cổ nhất Việt Nam. Đây là dấu tích cho thấy nơi này đã là trung tâm quyền lực từ rất sớm.",
    photo: "/figma/lich-su-1.webp",
    cta: { label: "Ghé thăm thành Cổ Loa", href: "/di-tich/7" },
  },
  {
    key: "thang-long",
    chip: "Từ năm 1010",
    title: "Thời Thăng Long - Từ năm 1010",
    body: 'Năm 1010, vua Lý Thái Tổ dời đô về đây và đặt tên Thăng Long, nghĩa là "rồng bay lên". Thăng Long trở thành kinh đô của các triều Lý, Trần, Lê trong nhiều thế kỷ. Cũng trong thời kỳ này, Văn Miếu - Quốc Tử Giám ra đời, được xem là trường đại học đầu tiên của Việt Nam và biểu tượng cho truyền thống hiếu học của mảnh đất này.',
    photo: "/figma/lich-su-2.webp",
    cta: { label: "Ghé thăm Văn Miếu - Quốc Tử Giám", href: mapsSearch("Văn Miếu - Quốc Tử Giám, Hà Nội"), external: true },
  },
  {
    key: "can-dai",
    chip: "Từ TK 19",
    title: "Thời cận đại - Từ thế kỷ 19",
    body: 'Năm 1831, dưới triều Nguyễn, thành phố mang tên Hà Nội, nghĩa là "vùng đất trong sông". Cuối thế kỷ 19, Hà Nội trở thành một trung tâm của Đông Dương thuộc Pháp, để lại dấu ấn kiến trúc Đông Dương với những dãy nhà tường vàng, ô cửa chớp xanh, cầu Long Biên và khu phố Pháp còn đến ngày nay.',
    photo: "/figma/lich-su-3.webp",
    cta: { label: "Ghé thăm Bảo tàng Lịch sử Quốc Gia", href: "/bao-tang/3" },
  },
  {
    key: "hien-dai",
    chip: "Từ năm 1945",
    title: "Thời hiện đại - Từ năm 1945",
    body: 'Ngày 2 tháng 9 năm 1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, mở ra một thời kỳ mới cho Hà Nội với vị thế thủ đô. Năm 1999, thành phố được UNESCO vinh danh là "Thành phố vì hoà bình". Đến năm 2010, Hà Nội kỷ niệm tròn 1000 năm Thăng Long - Hà Nội, và khu di tích Hoàng thành Thăng Long được công nhận là Di sản Văn hoá Thế giới.',
    photo: "/figma/lich-su-4.webp",
    cta: { label: "Ghé thăm quảng trường Ba Đình", href: mapsSearch("Quảng trường Ba Đình, Hà Nội"), external: true },
  },
  {
    key: "hom-nay",
    chip: "Hà Nội hôm nay",
    title: "Hà Nội hôm nay",
    body: "Ngày nay, Hà Nội là nơi quá khứ và hiện tại cùng tồn tại: những ngôi đền, khu phố cổ và làng nghề truyền thống nằm bên cạnh nhịp sống hiện đại. Chính sự giao hoà đó làm nên một Hà Nội vừa cổ kính, vừa trẻ trung để du khách khám phá.",
    photo: "/figma/lich-su-5.webp",
    // Client: "Khám phá Hà Nội" leads to Cẩm nang.
    cta: { label: "Khám phá Hà Nội", href: "/cam-nang" },
  },
];

const BAR_HEIGHT = 48;
const HERO_HEIGHT = 392;
const DETAIL_BAR_GRADIENT =
  "linear-gradient(180deg, rgba(39, 39, 45, 1) 0%, rgba(18, 18, 21, 0.32) 54%, rgba(0, 0, 0, 0) 100%)";

function EraCard({ era, refCallback }: { era: Era; refCallback: (el: HTMLElement | null) => void }) {
  const ctaClass = "flex items-center justify-center gap-3 p-2 text-sm font-semibold text-[#27314D]";
  const cta = (
    <>
      {era.cta.label}
      <Image src="/figma/icon-arrow-pill.svg" alt="" width={50} height={28} />
    </>
  );

  return (
    // Figma "card thông tin" (696:64422): white text panel, 272px photo (20/20/8/8 radius), centered CTA.
    <article ref={refCallback} className="scroll-mt-24">
      <div className="flex flex-col gap-1 rounded-t-lg bg-white p-2 pb-6">
        <div className="flex items-center gap-1">
          <Image src="/figma/icon-book.svg" alt="" width={32} height={32} />
          <h3 className="text-base leading-6 font-semibold text-[#19264E]">{era.title}</h3>
        </div>
        <p className="text-base leading-[22px] text-[#19264E]/80">{era.body}</p>
      </div>
      <div className="relative -mt-4 h-[272px] overflow-hidden rounded-t-[20px] rounded-b-lg bg-[#C0C0C0]">
        <Image src={era.photo} alt={era.title} fill sizes="369px" className="object-cover" />
      </div>
      {era.cta.external ? (
        <a href={era.cta.href} target="_blank" rel="noreferrer" className={ctaClass}>
          {cta}
        </a>
      ) : (
        <Link href={era.cta.href} className={ctaClass}>
          {cta}
        </Link>
      )}
    </article>
  );
}

export function LichSuScreen() {
  const scrollRef = useRef<HTMLElement>(null);
  const sections = useRef<Record<string, HTMLElement | null>>({});
  const [active, setActive] = useState<string | null>(null);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setPastHero(el.scrollTop > HERO_HEIGHT - BAR_HEIGHT);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const jumpTo = (key: string) => {
    setActive(key);
    sections.current[key]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-white">
      <TopBar
        title={pastHero ? "Lịch sử Hà Nội" : undefined}
        tone={pastHero ? "dark" : "light"}
        background={pastHero ? "#F3F3F3" : DETAIL_BAR_GRADIENT}
        height={pastHero ? BAR_HEIGHT : 104}
        className="pointer-events-none fixed inset-x-0 top-0 z-40"
      />

      <main
        ref={scrollRef}
        className="h-full overflow-y-auto"
        style={{
          paddingBottom: "calc(83px + env(safe-area-inset-bottom))",
          background: "linear-gradient(180deg, #FFFFFF 0%, #E3E2E0 100%)",
        }}
      >
        <div className="relative h-[392px] w-full overflow-hidden rounded-b-[20px] bg-[#C0C0C0]">
          <Image src="/figma/lich-su-hero.webp" alt="Hà Nội" fill priority sizes="100vw" className="object-cover" />
        </div>

        <div className="relative z-10 -mt-8 flex flex-col gap-3 px-3">
          <div className="mx-3 rounded-2xl bg-white/80 px-4 py-[15px] backdrop-blur-[15px]">
            <h1 className="text-xl leading-6 font-semibold text-[#141E3F]">Nghìn năm trong một dòng chảy</h1>
          </div>

          <p className="text-base leading-[22px] text-[#19264E]">
            Hà Nội là một trong những thủ đô lâu đời nhất thế giới. Hơn một nghìn năm qua, thành phố đã mang nhiều tên gọi
            và chứng kiến bao thăng trầm, để lại một bề dày lịch sử còn hiện diện trong từng con phố hôm nay.
          </p>

          {/* Equal-width era chips (client: "thẻ lọc có width = nhau"); tap scrolls to that era. */}
          <div className="sticky top-12 z-20 -mx-3 -my-2 bg-[#F3F3F3] px-3 py-2">
            <div className="flex h-8 gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {ERAS.map((era) => {
                const isActive = active === era.key;
                return (
                  <button
                    key={era.key}
                    type="button"
                    onClick={() => jumpTo(era.key)}
                    className="flex w-[110px] shrink-0 items-center justify-center rounded-[32px] border px-[13px] text-xs whitespace-nowrap transition-colors"
                    style={{
                      borderColor: isActive ? "#009B8C" : "#BDBDBD",
                      color: isActive ? "#009B8C" : "#141E3F",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    {era.chip}
                  </button>
                );
              })}
            </div>
          </div>

          {ERAS.map((era) => (
            <EraCard key={era.key} era={era} refCallback={(el) => (sections.current[era.key] = el)} />
          ))}

          <div className="flex flex-col items-center gap-2 px-2 py-1">
            <p className="text-xs text-[#141E3F]">Ghé thăm Fanpage và Website</p>
            <div className="flex w-[239px] gap-2">
              {/* No fanpage/website URL from the client yet, so these are visual-only buttons. */}
              <button
                type="button"
                aria-label="Fanpage"
                className="flex h-10 flex-1 items-center justify-center rounded border border-[#9B9B9B] text-[#27314D]"
              >
                <FacebookIcon className="h-6 w-6" />
              </button>
              <button
                type="button"
                aria-label="Website"
                className="flex h-10 flex-1 items-center justify-center rounded border border-[#9B9B9B] text-[#27314D]"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
