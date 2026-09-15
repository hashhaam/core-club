import Image from "next/image";
import Link from "next/link";

import { coaches } from "@/content/coaches";

export function Coaching() {
  if (!coaches.verified || coaches.list.length === 0) {
    return null;
  }

  return (
    <section id="coaching" className="section-cc bg-core-black">
      <div className="container-cc">
        <p className="t-eyebrow text-muted">04 / COACHING</p>
        <h2 className="t-h2 headline-solid mt-6">Coaching</h2>

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
      </div>
    </section>
  );
}
