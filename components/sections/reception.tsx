import { facilityStats } from "@/content/facility-stats";

export function Reception() {
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
          A performance club built for focused training.
        </h2>
        <p className="t-body mt-6 max-w-[62ch] text-muted">
          Train across dedicated strength, cardio, functional, yoga and recovery
          spaces, with coaching available when you need more structure.
        </p>

        {facilityStats.verified ? (
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-12">
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
