"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

const STATE_CLASSES = {
  top: "bg-transparent border-transparent",
  scrolled: "bg-[rgba(11,11,13,0.72)] border-hairline backdrop-blur-[16px]",
} as const;

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTrigger = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number | null = null;
    const updateScroll = () => {
      frame = null;
      setScrolled(window.scrollY > 40);
    };
    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateScroll);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const trigger = menuTrigger.current?.querySelector("button");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menu.current?.querySelector("button")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktopChange = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktopChange);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktopChange);
      trigger?.focus();
    };
  }, [menuOpen]);

  return (
    <nav aria-label="Primary">
      <div
        inert={menuOpen}
        className={[
          "fixed inset-x-0 top-0 z-[var(--z-nav)] h-16 border-b transition-[background-color,backdrop-filter,border-color] duration-[var(--cc-dur)] ease-[var(--ease-cc)] lg:h-[76px]",
          STATE_CLASSES[scrolled ? "scrolled" : "top"],
        ].join(" ")}
      >
        <div className="container-cc flex h-full items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Core Club home"
            className="shrink-0 lg:flex-1"
          >
            <span
              className="block h-7 w-7 text-core-white"
              style={{ filter: "brightness(0) invert(1)" }}
            >
              {/* Static SVG: intentionally keep the public asset as requested. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/mark.svg"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7"
              />
            </span>
          </Link>
          <ul className="hidden items-center gap-6 lg:flex">
            {site.nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="t-button text-titanium transition-colors duration-[var(--cc-dur-fast)] hover:text-core-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-end gap-3 lg:flex-1">
            <div ref={menuTrigger} className="lg:hidden">
              <Button
                variant="ghost"
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="primary-menu"
                className="h-11 w-11 p-0!"
                onClick={() => setMenuOpen(true)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 5h14M3 10h14M3 15h14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </Button>
            </div>
            <Button
              variant="primary"
              href="/#pre-register"
              className="shrink-0 px-4! lg:px-[30px]!"
            >
              {site.preLaunch.navCtaLabel}
            </Button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div
          id="primary-menu"
          ref={menu}
          role="dialog"
          aria-label="Menu"
          className="fixed inset-0 z-[var(--z-overlay)] overflow-y-auto bg-core-black"
          onClickCapture={(event) => {
            if (event.target instanceof Element && event.target.closest("a")) {
              setMenuOpen(false);
            }
          }}
        >
          <div className="container-cc flex min-h-full flex-col py-6">
            <Button
              variant="ghost"
              className="self-end"
              onClick={() => setMenuOpen(false)}
            >
              Close menu
            </Button>
            <ul className="flex flex-1 flex-col justify-center gap-8 py-12">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className="t-h3 text-titanium transition-colors duration-[var(--cc-dur-fast)] hover:text-core-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              href="/#pre-register"
              className="self-start"
            >
              {site.preLaunch.navCtaLabel}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
