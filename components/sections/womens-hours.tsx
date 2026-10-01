import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { hours } from "@/content/hours";

function formatTime(time: string): string {
  const [hour, minutes] = time.split(":");
  const numericHour = Number(hour);
  const clockHour = numericHour % 12 || 12;
  const minuteLabel = minutes === "00" ? "" : `:${minutes}`;
  return `${clockHour}${minuteLabel} ${numericHour < 12 ? "AM" : "PM"}`;
}

export function WomensHours() {
  // TODO: TEMPORARY GENERATED CONCEPT ART — replace with real women's-area photography before launch.
  return (
    <section id="womens-hours" className="section-cc border-t border-hairline-strong bg-surface-1">
      <div className="container-cc grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="t-eyebrow text-titanium">WOMEN&apos;S HOURS</p>
          <h2 className="t-h2 headline-solid mt-6">Women&apos;s Hours</h2>
          <p className="t-body mt-6 max-w-[52ch] text-titanium">
            Every day from 10 AM to 5 PM, Core Club is reserved for women.
            Co-Timings run from 6 AM to 10 AM and again from 5 PM to 1 AM.
          </p>

          {hours.verified && (
            <ul className="mt-8 border-t border-hairline-strong">
              {hours.dailySegments.map((segment) => (
                <li
                  key={segment.start}
                  className="flex items-baseline justify-between gap-4 border-b border-hairline-strong py-4 sm:py-5"
                >
                  <span className="t-body font-semibold text-core-white">{segment.label}</span>
                  <span className="t-body t-tabular whitespace-nowrap font-medium text-titanium">
                    {formatTime(segment.start)} – {formatTime(segment.end)}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <Button variant="primary" href="/#the-club" className="mt-8">
            ASK ABOUT HOURS
          </Button>
        </Reveal>

        <Reveal delay={0.08}>
          <div
            aria-hidden="true"
            className="relative aspect-[4/5] overflow-hidden rounded-cc-lg bg-surface-2"
          >
            <Image
              src="/images/club/womens-hours.webp"
              alt=""
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to top, #1A1C21 20%, transparent 60%)",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
