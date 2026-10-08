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

function MapPinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 10c0 5-8 11-8 11s-8-6-8-11a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.78 19.78 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.78 19.78 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.92.33 1.82.62 2.68a2 2 0 0 1-.45 2.11L8 9.79a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.86.29 1.76.5 2.68.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function WhatsappIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91a9.86 9.86 0 0 0-2.91-7.02Zm-7 15.25h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.25 8.24Zm4.52-6.17c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.16 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

function ClockIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function PlusIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className={className}
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function NavigateLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={className}>
      {site.nav.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="t-small text-titanium transition-colors hover:text-core-white"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function TimingsContent() {
  if (!hours.verified) return null;

  return (
    <div className="t-small t-tabular space-y-4 text-titanium">
      <div className="text-core-white">
        <p>
          GENERAL TIMINGS {formatTime(hours.opens)}-{formatTime(hours.closes)}
        </p>
      </div>
      <ul className="space-y-2">
        {hours.dailySegments.map((segment) => (
          <li key={segment.start} className="flex justify-start gap-6">
            <span className="min-w-[6.5rem]">{segment.label}</span>
            <span className="text-core-white">
              {formatTime(segment.start)}-{formatTime(segment.end)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function VisitContent() {
  if (!location.verified) return null;

  return (
    <div className="space-y-5">
      <address className="t-small text-titanium not-italic">
        <div className="flex items-start gap-3">
          <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-core-white" />
          <div>
            <p>
              {location.addressLines.join(", ")}, {location.city}{" "}
              {location.postal}
            </p>
          </div>
        </div>
      </address>
      <div className="t-small space-y-3 text-titanium">
        <a
          href={`tel:${location.phone.replace(/\D/g, "")}`}
          className="flex items-center gap-3 transition-colors hover:text-core-white"
        >
          <PhoneIcon className="h-4 w-4 shrink-0 text-core-white" />
          <span>{location.phone}</span>
        </a>
        <a
          href={`https://wa.me/${location.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 transition-colors hover:text-core-white"
        >
          <WhatsappIcon className="h-4 w-4 shrink-0 text-core-white" />
          <span>{location.whatsapp}</span>
        </a>
      </div>
      <ul className="flex items-center gap-4 pt-1">
        {site.social
          .filter((social) => social.verified)
          .map((social) => (
            <li key={social.platform}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="inline-flex text-titanium transition-colors hover:text-core-white"
              >
                <SocialIcon platform={social.platform} />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

function FooterAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group border-b border-hairline-strong py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
        <span className="t-eyebrow text-titanium">{title}</span>
        <PlusIcon className="h-4 w-4 shrink-0 text-core-white transition-transform group-open:rotate-45" />
      </summary>
      <div className="pt-5">{children}</div>
    </details>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-hairline-strong bg-core-black py-16 lg:py-20">
      <div className="container-cc">
        <div className="grid grid-cols-1 gap-8 md:hidden">
          <div>
            <Image
              src="/logo/footer-lockup.png"
              alt="Core Club — Built From The Core"
              width={582}
              height={783}
              className="h-36 w-auto"
              loading="eager"
              unoptimized
            />
          </div>
          <div className="border-t border-hairline-strong">
            <FooterAccordion title="NAVIGATE">
              <NavigateLinks className="space-y-3" />
            </FooterAccordion>
            <FooterAccordion title="GYM TIMINGS">
              <TimingsContent />
            </FooterAccordion>
            <FooterAccordion title="INFORMATION">
              <VisitContent />
            </FooterAccordion>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12">
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
            <NavigateLinks className="mt-6 space-y-3" />
          </div>
          <div>
            <h2 className="t-eyebrow text-titanium">GYM TIMINGS</h2>
            <div className="mt-6">
              <TimingsContent />
            </div>
          </div>
          <div>
            <h2 className="t-eyebrow text-titanium">INFORMATION</h2>
            <div className="mt-6">
              <VisitContent />
            </div>
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
