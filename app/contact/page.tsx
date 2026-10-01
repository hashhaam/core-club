import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { hours } from "@/content/hours";
import { location } from "@/content/location";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Contact Core Club | D Ground, Faisalabad" },
  description:
    "Contact Core Club in D Ground, Faisalabad for memberships, coaching, facilities, women's hours and physiotherapy enquiries.",
};

const actionClasses =
  "t-button inline-flex min-h-11 items-center justify-center rounded-cc-sm border border-[rgba(244,246,248,0.20)] bg-[rgba(244,246,248,0.06)] px-5 py-3 text-core-white transition-colors hover:border-[rgba(244,246,248,0.34)] hover:bg-[rgba(244,246,248,0.12)]";

function formatTime(time: string): string {
  const [hour, minutes] = time.split(":");
  const numericHour = Number(hour);
  const clockHour = numericHour % 12 || 12;
  const minuteLabel = minutes === "00" ? "" : `:${minutes}`;
  return `${clockHour}${minuteLabel} ${numericHour < 12 ? "AM" : "PM"}`;
}

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${location.whatsapp.replace(/\D/g, "")}`;
  const directionsHref = `https://www.google.com/maps?q=${location.geo.lat},${location.geo.lng}`;

  return (
    <div className="section-cc min-h-screen bg-core-black">
      <div className="container-cc">
        <header className="max-w-[760px] border-b border-hairline-strong pb-10">
          <span aria-hidden="true" className="mb-6 block h-[3px] w-12 bg-core-red" />
          <p className="t-eyebrow text-titanium">CORE CLUB / CONTACT</p>
          <h1 className="t-h2 mt-6 max-w-[18ch] text-core-white">Talk to Core Club.</h1>
          <p className="t-body mt-5 max-w-[52ch] text-titanium">
            Ask about memberships, coaching, facilities, women&apos;s hours or
            physiotherapy. Contact the team directly or send an enquiry below.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${location.phone.replace(/\D/g, "")}`} className={actionClasses}>
              CALL
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={actionClasses}>
              WHATSAPP
            </a>
            <a href={directionsHref} target="_blank" rel="noopener noreferrer" className={actionClasses}>
              GET DIRECTIONS
            </a>
          </div>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0 space-y-10">
            <section aria-labelledby="visit-heading">
              <h2 id="visit-heading" className="t-h3 text-core-white">Visit the club</h2>
              <address className="t-body mt-5 space-y-4 border-t border-hairline-strong pt-5 text-titanium not-italic">
                <div>
                  {location.addressLines.map((line) => <p key={line}>{line}</p>)}
                  <p>{location.city} {location.postal}</p>
                  <p>{location.country}</p>
                </div>
                <a href={`tel:${location.phone.replace(/\D/g, "")}`} className="block hover:text-core-white">
                  {location.phone}
                </a>
                <a href={`tel:${location.secondaryPhone.replace(/\D/g, "")}`} className="block hover:text-core-white">
                  {location.secondaryPhone}
                </a>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="block hover:text-core-white">
                  WhatsApp: {location.whatsapp}
                </a>
              </address>
            </section>

            {hours.verified && (
              <section aria-labelledby="hours-heading" className="border-t border-hairline-strong pt-8">
                <h2 id="hours-heading" className="t-h3 text-core-white">Hours</h2>
                <p className="t-body t-tabular mt-5 text-core-white">
                  {formatTime(hours.opens)} – {formatTime(hours.closes)} daily
                </p>
                <ul className="t-small t-tabular mt-4 divide-y divide-hairline-strong text-titanium">
                  {hours.dailySegments.map((segment) => (
                    <li key={segment.start} className="flex flex-wrap justify-between gap-x-5 gap-y-1 py-2 first:pt-0">
                      <span>{segment.label}</span>
                      <span>{formatTime(segment.start)} – {formatTime(segment.end)}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section aria-labelledby="follow-heading" className="border-t border-hairline-strong pt-8">
              <h2 id="follow-heading" className="t-h3 text-core-white">Follow Core Club</h2>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                {site.social.filter((social) => social.verified).map((social) => (
                  <li key={social.platform}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="t-small text-titanium hover:text-core-white">
                      {social.platform}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <ContactForm />
        </div>

        <section aria-labelledby="map-heading" className="mt-16 border-t border-hairline-strong pt-12">
          <h2 id="map-heading" className="t-h3 text-core-white">Find us</h2>
          <p className="t-small mt-3 text-titanium">
            {location.addressLines.join(", ")}, {location.city}.
          </p>
          <iframe
            src={`https://maps.google.com/maps?q=${location.geo.lat},${location.geo.lng}&z=16&output=embed`}
            title="Map showing Core Club in D Ground, Faisalabad"
            className="mt-6 h-[360px] w-full rounded-cc-md border border-hairline-strong grayscale-[0.3] contrast-[1.1]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </div>
    </div>
  );
}
