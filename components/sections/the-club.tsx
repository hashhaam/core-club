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
    <section id="the-club" className="bg-core-black">
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
          <div className="container-cc grid items-center gap-12 lg:grid-cols-2">
            <div>
              <iframe
                src={`https://maps.google.com/maps?q=${location.geo.lat},${location.geo.lng}&z=16&output=embed`}
                className="w-full h-[360px] rounded-cc-md border border-hairline grayscale-[0.3] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Core Club location"
              />
              <a
                href={`https://www.google.com/maps?q=${location.geo.lat},${location.geo.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="t-small mt-4 inline-block text-gold-lift"
              >
                Get Directions →
              </a>
            </div>

            <div>
              <h2 className="t-h2 headline-solid">The Club</h2>
              <address className="t-body mt-8 space-y-4 text-titanium not-italic">
                <div>
                  {location.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <p>
                    {location.city} {location.postal}
                  </p>
                </div>
                <a
                  href={`tel:${location.phone.replace(/\s/g, "")}`}
                  className="block hover:text-core-white"
                >
                  {location.phone}
                </a>
                <a
                  href={`https://wa.me/${location.whatsapp.replace(/^\+/, "")}`}
                  className="block hover:text-core-white"
                >
                  WhatsApp: {location.whatsapp}
                </a>
              </address>
              {hours.verified && (
                <p className="t-body t-tabular mt-4 text-titanium">
                  {formatTime(hours.opens)}–{formatTime(hours.closes)}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="bg-surface-1 py-24 text-center">
        <div className="container-cc">
          <h2 className="t-h2 headline-solid">Built From The Core</h2>
          <Button variant="primary" href="/#pre-register" className="mt-8">
            {site.preLaunch.heroPrimaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
