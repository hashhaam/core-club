import Link from "next/link";

import { hours } from "@/content/hours";
import { location } from "@/content/location";
import { site } from "@/content/site";

function formatTime(time: string): string {
  const [hour, minutes] = time.split(":");
  const numericHour = Number(hour);
  const clockHour = numericHour % 12 || 12;
  const minuteLabel = minutes === "00" ? "" : `:${minutes}`;
  return `${clockHour}${minuteLabel} ${numericHour < 12 ? "AM" : "PM"}`;
}

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface-1 py-16 lg:py-24">
      <div className="container-cc">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          <div>
            <div style={{ filter: "brightness(0) invert(1)" }}>
              {/* Static SVG: intentionally keep the public asset as requested. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/lockup.svg"
                alt={site.name}
                width={644}
                height={743}
                className="h-24 w-auto"
              />
            </div>
            <p className="t-caption mt-6 text-muted">{site.slogan}</p>
          </div>
          <div>
            <h2 className="t-eyebrow text-muted">NAVIGATE</h2>
            <ul className="mt-6 space-y-3">
              {[
                ...site.nav,
                { label: "About", href: "/about" },
                { label: "Gallery", href: "/gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="t-small text-titanium hover:text-core-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="t-eyebrow text-muted">VISIT</h2>
            {location.verified && (
              <address className="t-small mt-6 space-y-3 text-titanium not-italic">
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
            )}
            {hours.verified && (
              <div className="t-small t-tabular mt-6 space-y-3 text-titanium">
                <p>
                  {formatTime(hours.opens)}–{formatTime(hours.closes)}
                </p>
                <ul className="space-y-2">
                  {hours.dailySegments.map((segment) => (
                    <li key={segment.start}>
                      {segment.label}: {formatTime(segment.start)}–
                      {formatTime(segment.end)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            <h2 className="t-eyebrow text-muted">FOLLOW</h2>
            <ul className="mt-6 space-y-3">
              {site.social
                .filter((social) => social.verified)
                .map((social) => (
                  <li key={social.platform}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="t-small text-titanium hover:text-core-white"
                    >
                      {social.platform}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 lg:flex-row">
          <p className="t-caption text-muted">
            © {new Date().getFullYear()} Core Club. All rights reserved.
          </p>
          <div className="t-caption flex items-center gap-3 text-muted">
            <Link href="#">Privacy Policy</Link>
            <span aria-hidden="true" className="text-hairline">
              ·
            </span>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
