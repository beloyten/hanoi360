import { Banner } from "./banner";
import { BottomNav } from "./bottom-nav";
import { CategoryGrid } from "./category-grid";
import { Header } from "./header";
import { HistoryBanner } from "./history-banner";
import { NearYou } from "./near-you";

export function HomeScreen() {
  return (
    <div className="relative h-dvh w-full overflow-hidden bg-white">
      <Header />

      <main
        className="h-full overflow-y-auto"
        style={{
          paddingTop: "calc(68px + env(safe-area-inset-top))",
          paddingBottom: "calc(83px + env(safe-area-inset-bottom))",
          background: "linear-gradient(rgb(250, 248, 245) 0%, rgb(227, 226, 224) 100%)",
          touchAction: "pan-y",
        }}
      >
        {/* Figma Home "Content" (686:89999): a column with 28px between sections. */}
        <div className="flex flex-col gap-7 pb-6">
          <Banner />
          <CategoryGrid />
          <NearYou />
          <HistoryBanner />
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
