"use client";

import { useEffect, useState } from "react";

const ZONES = [
  { number: "00", label: "THRESHOLD" },
  { number: "01", label: "RECEPTION" },
  { number: "02", label: "STRENGTH FLOOR" },
  { number: "03", label: "EQUIPMENT" },
  { number: "04", label: "COACHING" },
  { number: "05", label: "MEMBERSHIP" },
  { number: "06", label: "WOMEN'S HOURS" },
  { number: "07", label: "THE CLUB" },
] as const satisfies ReadonlyArray<{ number: string; label: string }>;

export function DepthRail() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const viewport = window.matchMedia("(min-width: 1440px)");
    const updateViewport = () => setVisible(viewport.matches);
    const frame = window.requestAnimationFrame(updateViewport);
    viewport.addEventListener("change", updateViewport);
    return () => {
      window.cancelAnimationFrame(frame);
      viewport.removeEventListener("change", updateViewport);
    };
  }, []);

  if (!visible) return null;

  // TODO Phase 3: wire scroll-spy to homepage sections and highlight the active zone.
  return (
    <aside
      aria-label="Club depth zones"
      className="pointer-events-none fixed top-1/2 left-8 z-[var(--z-content)] -translate-y-1/2"
    >
      <ol className="flex flex-col gap-6">
        {ZONES.map((zone) => (
          <li key={zone.number} className="flex items-center gap-1">
            <span className="t-caption text-muted">{zone.number}</span>
            <span className="t-caption tracking-wide! text-muted">
              {zone.label}
            </span>
          </li>
        ))}
      </ol>
    </aside>
  );
}
