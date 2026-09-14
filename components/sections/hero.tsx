import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="threshold"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-core-black"
    >
      {/* TODO: replace with real exterior night photography when available — this section is built to accept a background <Image> later without restructuring; the gradient layers above are the pre-photography fallback, not the final design. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(200,162,74,0.06), transparent 70%)",
        }}
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
        <div className="fade-up mb-7">
          <p className="t-eyebrow text-titanium">CORE CLUB / FAISALABAD</p>
          <p className="t-eyebrow mt-3 text-muted">
            OPENING {site.preLaunch.openingDateLabel.toUpperCase()}
          </p>
        </div>

        <h1 className="t-hero max-w-[20ch]">
          <span className="t-hero headline-outline block">BUILT FROM THE</span>
          <span className="t-hero headline-solid block">CORE</span>
        </h1>

        <p className="t-body fade-up fade-up-delay-120 mt-8 max-w-[52ch] text-titanium">
          A premium performance club in Faisalabad. Strength, conditioning and
          recovery under one roof.
        </p>

        <div className="fade-up fade-up-delay-240 mt-8">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="/#pre-register">
              {site.preLaunch.heroPrimaryLabel}
            </Button>
            <Button variant="secondary" href="/memberships">
              {site.preLaunch.heroSecondaryLabel}
            </Button>
          </div>
          <p className="t-small mt-4 text-muted">
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
