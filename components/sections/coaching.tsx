import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { coaches } from "@/content/coaches";

export function Coaching() {
  const hasVerifiedProfiles = coaches.verified && coaches.list.length > 0;

  return (
    <section
      id="coaching"
      aria-labelledby="coaching-heading"
      className="section-cc scroll-mt-16 border-t border-hairline bg-core-black lg:scroll-mt-[76px]"
    >
      <div className="container-cc">
        <Reveal>
          <p className="t-eyebrow text-gold-lift">COACHING</p>
          <h2 id="coaching-heading" className="t-h2 headline-solid mt-6">
            Coaching with purpose.
          </h2>
          <p className="t-body mt-6 max-w-[62ch] text-titanium">
            Work with Core Club&apos;s coaching staff when you want more structure,
            consistency and direction in your training.
          </p>
          <Button
            variant="secondary"
            href="/#the-club"
            className="mt-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            ASK ABOUT COACHING
          </Button>
        </Reveal>

        {hasVerifiedProfiles && (
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coaches.list.map((coach) => (
              <Link
                key={coach.slug}
                href={`/trainers/${coach.slug}`}
                className="block rounded-cc-md"
              >
                <article className="group relative overflow-hidden rounded-cc-md bg-surface-2">
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 z-10 h-px w-0 bg-gold transition-[width] duration-[var(--cc-dur)] ease-[var(--ease-cc)] group-hover:w-full"
                  />

                  <div className="relative aspect-[4/5] overflow-hidden transition-transform duration-[var(--cc-dur)] group-hover:-translate-y-1">
                    {coach.portrait ? (
                      <Image
                        src={coach.portrait}
                        alt={coach.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover grayscale group-hover:grayscale-[0.6] transition-[filter] duration-[var(--cc-dur)]"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-surface-2"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(135deg, rgba(185,190,198,0.04) 0px, rgba(185,190,198,0.04) 1px, transparent 1px, transparent 12px)",
                        }}
                      />
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="t-h3 text-core-white">{coach.name}</h3>
                    <p className="t-caption mt-4 font-display! text-[11px]! font-semibold! tracking-[0.28em]! uppercase text-gold">
                      {coach.specialisation}
                    </p>
                    <p className="t-small mt-2 truncate text-muted">
                      {coach.credential}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        <Reveal className="mt-12 rounded-cc-md border border-hairline bg-surface-1 p-6 sm:mt-16 sm:p-8 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-[62ch]">
            <h3 className="t-h3 text-core-white">In-house Physiotherapy</h3>
            <p className="t-body mt-4 text-titanium">
              Need advice around an injury or training-related concern? In-house
              physiotherapy consultations are available at Core Club. Speak to
              the team to arrange a consultation.
            </p>
          </div>
          <Button
            variant="ghost"
            href="/#the-club"
            className="mt-8 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:mt-0"
          >
            ASK ABOUT PHYSIOTHERAPY
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
