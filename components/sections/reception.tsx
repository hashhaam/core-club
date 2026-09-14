import { facilityStats } from "@/content/facility-stats";
import { site } from "@/content/site";

export function Reception() {
  const [positioningLead, ...positioningRemainder] =
    site.positioning.split(" — ");
  const positioningDetail = positioningRemainder.join(" — ");

  return (
    <section
      id="reception"
      className="section-cc relative overflow-hidden bg-surface-1"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-64 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-hairline opacity-[0.04]"
      />

      <div className="container-cc relative z-[var(--z-content)]">
        <p className="t-eyebrow text-muted">01 / RECEPTION</p>
        <h2 className="t-h2 mt-8 max-w-3xl text-core-white">
          <span>{positioningLead}</span>
          {positioningDetail ? (
            <>
              <span> — </span>
              <span className="text-titanium">{positioningDetail}</span>
            </>
          ) : null}
        </h2>
        <p className="t-body mt-6 max-w-[62ch] text-muted">
          [PLACEHOLDER] Supporting paragraph copy pending — final wording to
          come from the content pass.
        </p>

        {facilityStats.verified ? (
          <dl className="mt-12 flex flex-wrap gap-12">
            {facilityStats.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="t-eyebrow mt-3 text-muted">{stat.label}</dt>
                <dd className="t-stat order-first text-core-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
