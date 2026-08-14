// Temporary Phase 0 token specimen. This page will be entirely replaced in Phase 2.

import { coaches } from "@/content/coaches";
import { facilityStats } from "@/content/facility-stats";
import { hours } from "@/content/hours";
import { location } from "@/content/location";
import { memberships } from "@/content/memberships";
import { site } from "@/content/site";
import { zones } from "@/content/zones";

export const dynamic = "force-static";

const colours = [
  { name: "core-black", value: "#0b0b0d", className: "bg-core-black" },
  { name: "core-white", value: "#f4f6f8", className: "bg-core-white" },
  { name: "titanium", value: "#b9bec6", className: "bg-titanium" },
  { name: "graphite", value: "#2a2d33", className: "bg-graphite" },
  { name: "gold", value: "#c8a24a", className: "bg-gold" },
  { name: "gold-lift", value: "#e8ce8c", className: "bg-gold-lift" },
  { name: "surface-1", value: "#131418", className: "bg-surface-1" },
  { name: "surface-2", value: "#1a1c21", className: "bg-surface-2" },
  { name: "page-deep", value: "#08080a", className: "bg-page-deep" },
  { name: "muted", value: "#8b9099", className: "bg-muted" },
  {
    name: "hairline",
    value: "rgba(185, 190, 198, 0.13)",
    className: "bg-hairline",
  },
  {
    name: "hairline-strong",
    value: "rgba(185, 190, 198, 0.26)",
    className: "bg-hairline-strong",
  },
  { name: "success", value: "#4fb98a", className: "bg-success" },
  { name: "error", value: "#e2645a", className: "bg-error" },
  { name: "warning", value: "#e0a73c", className: "bg-warning" },
] as const;

const contentStatus = [
  {
    file: "site.ts",
    status: site.social.every((entry) => entry.verified)
      ? "verified"
      : "social links unverified",
  },
  { file: "location.ts", status: location.verified ? "verified" : "unverified" },
  { file: "hours.ts", status: hours.verified ? "verified" : "unverified" },
  {
    file: "zones.ts",
    status: zones.every((zone) => zone.verified) ? "verified" : "unverified",
  },
  {
    file: "facility-stats.ts",
    status: facilityStats.verified ? "verified" : "unverified",
  },
  {
    file: "memberships.ts",
    status: memberships.verified ? "verified" : "unverified",
  },
  { file: "coaches.ts", status: coaches.verified ? "verified" : "unverified" },
] as const;

function Label({ children }: Readonly<{ children: React.ReactNode }>) {
  return <p className="t-caption text-muted">{children}</p>;
}

export default function Home() {
  return (
    <div className="container-cc section-cc">
      <div className="space-y-8">
        <div>
          <Label>.t-hero</Label>
          <p className="t-hero">Built from the Core</p>
        </div>
        <div>
          <Label>.t-eyebrow</Label>
          <p className="t-eyebrow">Built from the Core</p>
        </div>
        <div>
          <Label>.t-h2</Label>
          <p className="t-h2">Performance begins at the core</p>
        </div>
        <div>
          <Label>.t-h3</Label>
          <p className="t-h3">Training with purpose</p>
        </div>
        <div>
          <Label>.t-button</Label>
          <p className="t-button">Button label</p>
        </div>
        <div>
          <Label>.t-slogan</Label>
          <p className="t-slogan">Built from the Core</p>
        </div>
        <div>
          <Label>.t-body</Label>
          <p className="t-body">Body text demonstrates the primary reading style.</p>
        </div>
        <div>
          <Label>.t-small</Label>
          <p className="t-small">Small text demonstrates supporting information.</p>
        </div>
        <div>
          <Label>.t-caption</Label>
          <p className="t-caption">Caption text demonstrates compact labels.</p>
        </div>
        <div>
          <Label>.t-stat</Label>
          <div className="t-stat w-fit">
            <p className="w-fit">1111</p>
            <p className="w-fit">1000</p>
          </div>
        </div>
        <div>
          <Label>.t-tabular</Label>
          <p className="t-tabular">1111 1000</p>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="t-h3">Colour tokens</h2>
        <div className="mt-6 flex flex-wrap gap-6">
          {colours.map((colour) => (
            <div key={colour.name}>
              <div
                className={`size-20 border border-hairline ${colour.className}`}
              />
              <p className="t-caption mt-2">{colour.name}</p>
              <p className="t-caption text-muted">{colour.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="t-h3">Radius tokens</h2>
        <div className="mt-6 flex flex-wrap gap-6">
          {(["sm", "md", "lg"] as const).map((radius) => (
            <div key={radius}>
              <div
                className="size-24 border border-hairline-strong bg-surface-1"
                style={{ borderRadius: `var(--radius-cc-${radius})` }}
              />
              <p className="t-caption mt-2">--radius-cc-{radius}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="t-h3">Focus ring</h2>
        <button
          type="button"
          className="t-button mt-6"
          style={{ border: "1px solid var(--color-hairline)" }}
        >
          Focus specimen
        </button>
      </section>

      <section className="mt-16">
        <h2 className="t-h3">Content verification</h2>
        <ul className="t-small mt-6">
          {contentStatus.map((entry) => (
            <li key={entry.file}>
              {entry.file}: {entry.status}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
