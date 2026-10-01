"use client";

import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Facilities } from "@/components/sections/facilities";
import { zones } from "@/content/zones";

export function StrengthFloor() {
  return (
    <section id="strength-floor" className="section-cc bg-core-black">
      <div className="container-cc">
        <Reveal>
          <p className="t-eyebrow text-red-lift">STRENGTH FLOOR</p>
        </Reveal>

        <div
          role="region"
          aria-label="Training zones"
          tabIndex={0}
          className="scrollbar-hide mt-8 flex flex-col gap-6 lg:overflow-x-auto lg:snap-x lg:snap-mandatory lg:scroll-pl-6 lg:flex-row"
        >
          {zones.map((zone, index) => (
            <Reveal
              as="article"
              key={zone.slug}
              tabIndex={0}
              delay={(index % 3) * 0.06}
              className="relative aspect-[16/11] w-full overflow-hidden rounded-[16px] border border-hairline-strong bg-surface-2 lg:h-[560px] lg:w-[420px] lg:flex-none lg:snap-start lg:aspect-auto"
            >
              {/* TODO: replace each temporary generated concept image with real zone photography before launch. */}
              {zone.image ? (
                <Image
                  src={zone.image}
                  alt=""
                  fill
                  sizes="(max-width: 1023px) 100vw, 420px"
                  className="object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, rgba(185,190,198,0.04) 0px, rgba(185,190,198,0.04) 1px, transparent 1px, transparent 12px)",
                  }}
                />
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, #0B0B0D 8%, transparent 62%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="t-h3 zone-title text-core-white">{zone.name}</h3>
                <p className="t-small mt-2 text-titanium">
                  {zone.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Facilities />
      </div>
    </section>
  );
}
