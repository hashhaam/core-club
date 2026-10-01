import Image from "next/image";
import Link from "next/link";

import { hours } from "@/content/hours";
import { location } from "@/content/location";
import { site } from "@/content/site";
import { SocialIcon } from "@/components/layout/social-icon";

function formatTime(time: string): string {
  const [hour, minutes] = time.split(":");
  const numericHour = Number(hour);
  const clockHour = numericHour % 12 || 12;
  const minuteLabel = minutes === "00" ? "" : `:${minutes}`;
  return `${clockHour}${minuteLabel} ${numericHour < 12 ? "AM" : "PM"}`;
}

export function Footer() {
  return (
    <footer className="border-t border-hairline-strong bg-core-black py-16 lg:py-20">
      <div className="container-cc">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.4fr_1fr] lg:gap-8">
          <div>
            <Image
              src="/logo/footer-lockup.png"
              alt="Core Club — Built From The Core"
              width={582}
              height={783}
              className="h-40 w-auto"
              loading="eager"
              unoptimized
            />
          </div>
          <div>
            <h2 className="t-eyebrow text-titanium">NAVIGATE</h2>
            <ul className="mt-5 space-y-3">
              {site.nav.map((link) => (
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
            <h2 className="t-eyebrow text-titanium">VISIT</h2>
            {location.verified && (
              <address className="t-small mt-5 space-y-3 text-titanium not-italic">
                <div>
                  {location.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <p>
                    {location.city} {location.postal}
                  </p>
                </div>
                <a
                  href={`tel:${location.phone.replace(/\D/g, "")}`}
                  className="block hover:text-core-white"
                >
                  {location.phone}
                </a>
                <a
                  href={`tel:${location.secondaryPhone.replace(/\D/g, "")}`}
                  className="block hover:text-core-white"
                >
                  {location.secondaryPhone}
                </a>
                <a
                  href={`https://wa.me/${location.whatsapp.replace(/\D/g, "")}`}
                  className="block hover:text-core-white"
                >
                  WhatsApp: {location.whatsapp}
                </a>
              </address>
            )}
            {hours.verified && (
              <div className="t-small t-tabular mt-5 space-y-3 text-titanium">
                <p>
                  {formatTime(hours.opens)} – {formatTime(hours.closes)}
                </p>
                <ul className="space-y-2">
                  {hours.dailySegments.map((segment) => (
                    <li key={segment.start}>
                      {segment.label}: {formatTime(segment.start)} –{" "}
                      {formatTime(segment.end)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            <h2 className="t-eyebrow text-titanium">FOLLOW</h2>
            <ul className="mt-5 space-y-3">
              {site.social
                .filter((social) => social.verified)
                .map((social) => (
                  <li key={social.platform}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="t-small inline-flex items-center gap-2 text-titanium hover:text-core-white"
                    >
                      <SocialIcon platform={social.platform} />
                      {social.platform}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-hairline-strong pt-8 text-center lg:text-left">
          <p className="t-caption text-muted">
            © {new Date().getFullYear()} Core Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
