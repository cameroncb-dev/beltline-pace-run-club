import type { Metadata } from "next";
import { Open_Sans, Oswald } from "next/font/google";
import { Suspense } from "react";
import { BrandColor } from "@/components/BrandColor";
import { HeaderFallback, SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { UpdateBanner } from "@/components/UpdateBanner";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-oswald",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BeltLine Pace Run Club",
    template: "%s · BeltLine Pace Run Club",
  },
  description:
    "Show up. We will pace you. A free volunteer run club near the BeltLine in Old Fourth Ward. Every run ends with coffee.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <BrandColor />
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <UpdateBanner />
        <Suspense fallback={<HeaderFallback />}>
          <SiteHeader />
        </Suspense>
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
