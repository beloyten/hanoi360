import Image from "next/image";

export type HeroIllustration = {
  src: string;
  width: number;
  height: number;
  /** The Figma artwork already contains the Headline 1 title, so the text is kept for screen readers only. */
  hasTitle?: boolean;
  /** Top offset in px (default 56, Figma artwork y). */
  top?: number;
};

type HeroProps = {
  title: string;
  /** Figma heroes without a headline (Bảo tàng, Mua sắm, Y tế): keep the title for screen readers only. */
  hideTitle?: boolean;
  gradientFrom: string;
  gradientTo: string;
  illustration?: HeroIllustration;
};

// Figma category hero components ("Bảo tàng" 389:29785, ...): 393x258, the artwork sits at y 56,
// the title uses Headline 1 (Inter Black 30/40, white) on the left.
export function Hero({ title, hideTitle, gradientFrom, gradientTo, illustration }: HeroProps) {
  return (
    <div
      className="relative h-64.5 overflow-hidden rounded-b-[20px]"
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
          className="pointer-events-none absolute -left-px max-w-none select-none"
          style={{ top: illustration.top ?? 56, width: illustration.width, height: illustration.height }}
        />
      )}
      {illustration?.hasTitle || hideTitle ? (
        <h1 className="sr-only">{title}</h1>
      ) : (
        <div className="pointer-events-none absolute top-14 bottom-4 left-4 flex items-center">
          <h1 className="text-[30px] leading-10 font-black whitespace-pre-line text-white uppercase">{title}</h1>
        </div>
      )}
    </div>
  );
}
