import Image from "next/image";

export type HeroIllustration = {
  src: string;
  width: number;
  height: number;
  /** The Figma artwork already contains the Headline 1 title, so the text is kept for screen readers only. */
  hasTitle?: boolean;
};

type HeroProps = {
  title: string;
  /** Figma heroes without a headline (Bảo tàng, Mua sắm, Y tế): keep the title for screen readers only. */
  hideTitle?: boolean;
  gradientFrom: string;
  gradientTo: string;
  illustration?: HeroIllustration;
};

// Figma category hero components ("Bảo tàng" 389:29785, ...): the artwork sits under the 48px bar and spans the
// full width at its own ratio (client 21/10); the title uses Headline 1 (Inter Black 30/40, white) on the left.
export function Hero({ title, hideTitle, gradientFrom, gradientTo, illustration }: HeroProps) {
  return (
    <div
      className="relative overflow-hidden rounded-b-[20px] pt-12 pb-8"
      style={{ background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})` }}
    >
      {illustration && (
        // PNG @3x exports: the Figma SVGs rely on texture filters that browsers render blurry.
        <Image
          src={illustration.src}
          alt=""
          width={illustration.width}
          height={illustration.height}
          unoptimized
          priority
          // Figma exports are 394x170 (headline baked in); the box spans the full width at that ratio.
          className="pointer-events-none block aspect-[394/170] h-auto w-full object-cover select-none"
        />
      )}
      {illustration?.hasTitle || hideTitle ? (
        <h1 className="sr-only">{title}</h1>
      ) : (
        <div className="pointer-events-none absolute top-12 bottom-8 left-4 flex items-center">
          <h1 className="text-[30px] leading-10 font-black whitespace-pre-line text-white uppercase">{title}</h1>
        </div>
      )}
    </div>
  );
}
