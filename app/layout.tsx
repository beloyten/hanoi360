import type { Metadata, Viewport } from "next";
import { Inter, Baloo_2 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { NavigationTracker } from "@/lib/navigation-history";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const baloo2 = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hanoi 360",
  description: "Khám phá Hà Nội theo cách của bạn",
};

// "cover" lets the env(safe-area-inset-*) paddings used across screens take effect on notched iPhones.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={cn("h-full", "antialiased", inter.variable, baloo2.variable, "font-sans")}>
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
        <NavigationTracker />
      </body>
    </html>
  );
}
