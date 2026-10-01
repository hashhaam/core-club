import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { hours } from "@/content/hours";
import { location } from "@/content/location";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";

function formatTime(time: string): string {
  const [hour, minutes] = time.split(":");
  const numericHour = Number(hour);
  const clockHour = numericHour % 12 || 12;
  const minuteLabel = minutes === "00" ? "" : `:${minutes}`;
  return `${clockHour}${minuteLabel} ${numericHour < 12 ? "AM" : "PM"}`;
}

export function TheClub() {
  // TODO: populate content/testimonials.ts with real member quotes once available — this section is built and gated, ready to activate with a single content edit.
  return (
    <section id="the-club" className="border-t border-hairline-strong bg-core-black">
      {testimonials.verified && testimonials.list.length > 0 && (
        <div className="section-cc">
          <div className="container-cc grid gap-6 lg:grid-cols-2">
            {testimonials.list.map((testimonial) => (
              <Card key={testimonial.slug} className="p-6 lg:p-8">
                <figure>
                  <blockquote className="t-h3 text-core-white">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="t-small mt-6 text-muted">
                    <p>{testimonial.name}</p>
                    <p>{testimonial.detail}</p>
                  </figcaption>
                </figure>
              </Card>
            ))}
          </div>
        </div>
      )}

      {location.verified && (
        <div className="section-cc">
          <div className="container-cc grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <iframe
                src={`https://maps.google.com/maps?q=${location.geo.lat},${location.geo.lng}&z=16&output=embed`}
                className="w-full h-[360px] rounded-cc-md border border-hairline-strong grayscale-[0.3] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Core Club location"
              />
              <a
                href={`https://www.google.com/maps?q=${location.geo.lat},${location.geo.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="t-small mt-4 inline-block border-b border-hairline-strong pb-1 text-titanium hover:text-core-white"
              >
                Get Directions →
              </a>
            </Reveal>

            <Reveal delay={0.08} className="lg:border-l lg:border-hairline-strong lg:pl-12">
              <h2 className="t-h2 headline-solid border-b border-hairline-strong pb-6">The Club</h2>
              <address className="mt-6 not-italic">
                <div className="t-body space-y-1 text-titanium">
                  {location.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <p>
                    {location.city} {location.postal}
                  </p>
                </div>
                <div className="t-body mt-6 space-y-3 border-t border-hairline-strong pt-5 text-core-white">
                  <a
                    href={`tel:${location.phone.replace(/\D/g, "")}`}
                    className="block hover:text-titanium"
                  >
                    {location.phone}
                  </a>
                  <a
                    href={`tel:${location.secondaryPhone.replace(/\D/g, "")}`}
                    className="block hover:text-titanium"
                  >
                    {location.secondaryPhone}
                  </a>
                  <a
                    href={`https://wa.me/${location.whatsapp.replace(/\D/g, "")}`}
                    className="block hover:text-titanium"
                  >
                    WhatsApp: {location.whatsapp}
                  </a>
                </div>
              </address>
              {hours.verified && (
                <p className="t-body t-tabular mt-6 border-t border-hairline-strong pt-5 font-semibold text-core-white">
                  {formatTime(hours.opens)} – {formatTime(hours.closes)}
                </p>
              )}
            </Reveal>
          </div>
        </div>
      )}

      <div className="border-t border-hairline-strong bg-surface-1 py-20 text-center sm:py-24">
        <div className="container-cc">
          <Reveal>
            <span aria-hidden="true" className="mx-auto mb-8 block h-[3px] w-12 bg-gold" />
            <h2 className="t-h2 headline-solid mx-auto max-w-[18ch]">Built From The Core</h2>
            <p className="t-small mx-auto mt-6 max-w-[52ch] text-titanium">{site.preLaunch.supportingLine}</p>
            <Button variant="primary" href="/pre-register" className="mt-9">
              {site.preLaunch.heroPrimaryLabel}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
