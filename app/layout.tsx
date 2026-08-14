import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

import { site } from "@/content/site";

import { archivo, inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Core Club | Premium Gym in Faisalabad",
    template: "%s — Core Club | Premium Gym in Faisalabad",
  },
  description: site.positioning,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <a
          href="#content"
          className="fixed top-4 left-4 z-[var(--z-overlay)] -translate-y-24 bg-core-black px-4 py-3 text-core-white focus:translate-y-0"
        >
          Skip to content
        </a>
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: "var(--z-grain)",
            opacity: 0.04,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />
        <main
          id="content"
          tabIndex={-1}
          style={{ position: "relative", zIndex: "var(--z-content)" }}
        >
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
