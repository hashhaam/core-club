import Image from "next/image";

import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="threshold"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-core-black"
    >
      {/* TODO: TEMPORARY GENERATED CONCEPT ART — replace with real Core Club exterior night photography before launch. */}
      <Image
        src="/images/club/hero-exterior.webp"
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 60%, #0B0B0D 100%)",
        }}
      />

      <div className="container-cc relative z-[var(--z-content)]">
        <div className="fade-up mb-5">
          <p className="t-eyebrow text-titanium">CORE CLUB / D GROUND, FAISALABAD</p>
        </div>

        <h1 className="t-hero max-w-[20ch]">
          <span className="t-hero headline-outline block">BUILT FROM THE</span>
          <span className="t-hero headline-solid block">CORE</span>
        </h1>

        <div className="fade-up fade-up-delay-120 mt-6 max-w-[46ch]">
          <div aria-hidden="true" className="h-[3px] w-12 bg-core-red" />
          <p className="t-body mt-4 text-titanium">{site.positioning}</p>
        </div>

        <div className="fade-up fade-up-delay-240 mt-7">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="/pre-register">
              {site.preLaunch.heroPrimaryLabel}
            </Button>
            <Button variant="secondary" href="/#strength-floor">
              {site.preLaunch.heroSecondaryLabel}
            </Button>
          </div>
          <p className="t-small mt-4 font-semibold leading-relaxed text-core-white">
            {site.preLaunch.supportingLine}
          </p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block motion-reduce:hidden!"
      >
        <div className="relative h-12 w-px bg-hairline-strong">
          <span className="scroll-cue-dot absolute top-0 -left-[2.5px] h-[6px] w-[6px] rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
