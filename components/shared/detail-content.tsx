import Image from "next/image";
import type { ReactNode } from "react";
import { FacebookIcon } from "../home/icons";

export type DetailTextPart = {
  text: string;
  bold?: boolean;
  italic?: boolean;
};

export type DetailBlock =
  | { type: "text"; parts: DetailTextPart[] }
  | { type: "list"; ordered?: boolean; items: DetailTextPart[][] }
  | { type: "image"; src: string; alt?: string }
  | { type: "vr"; src: string; title?: string }
  | { type: "social"; title: string };

function renderParts(parts: DetailTextPart[]) {
  return parts.map((part, index) => {
    let node: ReactNode = part.text;
    if (part.bold) node = <strong className="leading-6 font-semibold">{node}</strong>;
    if (part.italic) node = <em>{node}</em>;
    return <span key={index}>{node}</span>;
  });
}

export function DetailContent({ blocks }: { blocks: DetailBlock[] }) {
  return (
    <div className="flex flex-col gap-4 px-3 pb-8">
      {blocks.map((block, index) => {
        if (block.type === "image") {
          return (
            <div key={index} className="relative h-[236px] w-full overflow-hidden bg-[#f3f3f3]">
              <Image
                src={block.src}
                alt={block.alt ?? ""}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          );
        }

        if (block.type === "vr") {
          return (
            <div key={index}>
              <h2 className="text-base font-semibold text-[#252525]">{block.title ?? "Tour VR 360°"}</h2>
              <div className="mt-3 h-[236px] w-full overflow-hidden rounded-lg bg-[#f3f3f3]">
                <iframe
                  src={block.src}
                  title={block.title ?? "Tour VR 360°"}
                  className="h-full w-full border-0"
                  allow="accelerometer; gyroscope; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          );
        }

        if (block.type === "social") {
          // Figma footer: caption + Facebook/YouTube buttons. No fanpage URLs from the client yet, so visual only.
          const buttonClass = "flex h-10 flex-1 items-center justify-center rounded border border-[#9B9B9B]";
          return (
            <div key={index} className="flex flex-col items-center gap-2 py-1">
              <p className="text-xs text-[#141E3F]">{block.title}</p>
              <div className="flex w-[239px] gap-2">
                <button type="button" aria-label="Facebook" className={buttonClass}>
                  <FacebookIcon className="h-6 w-6 text-[#1877F2]" />
                </button>
                <button type="button" aria-label="YouTube" className={buttonClass}>
                  <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#FF0000"
                      d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8Z"
                    />
                    <path fill="#FFFFFF" d="m9.75 15.02 5.75-3.02-5.75-3.02v6.04Z" />
                  </svg>
                </button>
              </div>
            </div>
          );
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag
              key={index}
              className={`flex flex-col gap-1.5 pl-5 text-base leading-[22px] text-[#19264E] ${
                block.ordered ? "list-decimal" : "list-disc"
              }`}
            >
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{renderParts(item)}</li>
              ))}
            </ListTag>
          );
        }

        return (
          <p key={index} className="text-base leading-[22px] whitespace-pre-line text-[#19264E]">
            {renderParts(block.parts)}
          </p>
        );
      })}
    </div>
  );
}
