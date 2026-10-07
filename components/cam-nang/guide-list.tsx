import Image from "next/image";
import Link from "next/link";
import type { Guide } from "./guides";

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/cam-nang/${guide.id}`}
      className="relative block h-58.75 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-150 active:scale-[0.99]"
    >
      <div className="w-full h-[calc(100%-32px)] bg-[#c0c0c0] relative">
        <Image
          src={guide.photo}
          alt={guide.title}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 560px, 100vw"
        />
      </div>

      <div className="h-8" style={{ backgroundColor: guide.accentColor }} />

      <div className="absolute bottom-2 left-2 right-2 flex h-14 items-center justify-center overflow-hidden rounded bg-white/80 px-9 py-1 backdrop-blur-[15px]" style={{ height: '56px' }}>
        <p className="line-clamp-2 text-center text-base leading-6 font-semibold text-[#141E3F]">{guide.title}</p>
      </div>
    </Link>
  );
}

export function GuideList({ guides }: { guides: Guide[] }) {
  return (
    <div className="flex flex-col gap-2 px-3 pt-[9px] pb-8">
      {guides.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
    </div>
  );
}
