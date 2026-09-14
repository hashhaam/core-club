"use client";

import { zones } from "@/content/zones";

export function StrengthFloor() {
  return (
    <section id="strength-floor" className="section-cc bg-core-black">
      <div className="container-cc">
        <p className="t-eyebrow text-muted">02 / STRENGTH FLOOR</p>

        <div
          role="region"
          aria-label="Training zones"
          tabIndex={0}
          className="scrollbar-hide mt-8 flex flex-col gap-6 lg:overflow-x-auto lg:snap-x lg:snap-mandatory lg:scroll-pl-6 lg:flex-row"
        >
          {zones.map((zone) => (
            <article
              key={zone.slug}
              tabIndex={0}
              className="relative aspect-[16/11] w-full overflow-hidden rounded-cc-md bg-surface-2 lg:h-[560px] lg:w-[420px] lg:flex-none lg:snap-start lg:aspect-auto"
            >
              {/* TODO: when zone.image becomes non-null, render it as the card's background via next/image with fill, replacing the diagonal-texture fallback above — do not remove the bottom gradient, it stays for text legibility over the real photo too. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(185,190,198,0.04) 0px, rgba(185,190,198,0.04) 1px, transparent 1px, transparent 12px)",
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, #1A1C21 10%, transparent 60%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="t-h3 text-core-white">{zone.name}</h3>
                <p className="t-small mt-2 truncate text-titanium">
                  {zone.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
