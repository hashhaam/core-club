"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SHOW_AFTER_PX = 600;

export function BackToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame: number | null = null;
    const updateVisibility = () => {
      frame = null;
      const button = buttonRef.current;
      if (!button) return;

      if (window.scrollY < SHOW_AFTER_PX || document.getElementById("primary-menu")) {
        if (document.activeElement === button) {
          document.getElementById("content")?.focus({ preventScroll: true });
        }
        setVisible(false);
        return;
      }

      const rect = button.getBoundingClientRect();
      const obstructsAction = Array.from(
        document.querySelectorAll<HTMLElement>(
          "main a, main button, main input, main select, main textarea, footer a, footer button",
        ),
      ).some((action) => {
        const actionRect = action.getBoundingClientRect();
        return (
          actionRect.left < rect.right &&
          actionRect.right > rect.left &&
          actionRect.top < rect.bottom &&
          actionRect.bottom > rect.top
        );
      });
      const shouldShow = !obstructsAction;

      if (!shouldShow && document.activeElement === button) {
        document.getElementById("content")?.focus({ preventScroll: true });
      }
      setVisible(shouldShow);
    };
    const scheduleUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateVisibility);
    };
    const observer = new MutationObserver(scheduleUpdate);
    observer.observe(document.body, { childList: true, subtree: true });

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      observer.disconnect();
    };
  }, [pathname]);

  function scrollToTop() {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    document.getElementById("content")?.focus({ preventScroll: true });
  }

  return (
    <button
      type="button"
      ref={buttonRef}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={scrollToTop}
      className={[
        "fixed right-4 bottom-6 z-[var(--z-nav)] flex h-12 w-12 items-center justify-center rounded-cc-sm border border-hairline-strong bg-surface-1/90 text-titanium shadow-none transition-[opacity,transform,background-color,border-color,color] duration-[var(--cc-dur-fast)] ease-[var(--ease-cc)] hover:border-red-lift hover:bg-surface-2/95 hover:text-core-white focus-visible:border-red-lift focus-visible:text-core-white motion-reduce:transform-none motion-reduce:transition-none sm:right-6 lg:right-8 lg:bottom-8",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0",
      ].join(" ")}
    >
      <svg
        aria-hidden="true"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M10 16V4m0 0L5 9m5-5 5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
