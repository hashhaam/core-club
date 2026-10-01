import { facilityStats } from "@/content/facility-stats";
import { Reveal } from "@/components/motion/reveal";

export function Reception() {
  return (
    <section
      id="reception"
      className="section-cc relative overflow-hidden border-y border-hairline bg-core-black"
    >
      <div className="container-cc relative z-[var(--z-content)]">
        <Reveal>
          <p className="t-eyebrow text-titanium">RECEPTION</p>
          <h2 className="t-h2 mt-7 max-w-[720px] text-core-white">
            A performance club built for focused training.
          </h2>
          <p className="t-body mt-5 max-w-[62ch] text-muted">
            Train across dedicated strength, cardio, functional, yoga and recovery
            spaces, with coaching available when you need more structure.
          </p>
        </Reveal>

        {facilityStats.verified ? (
          <div className="mt-10">
            <div aria-hidden="true" className="relative h-px bg-hairline-strong">
              <span className="absolute -top-px left-0 h-[3px] w-12 bg-core-red" />
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-12">
              {facilityStats.stats.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  delay={index * 0.06}
                  className="flex flex-col lg:border-l lg:border-hairline-strong lg:pl-5 lg:first:border-l-0 lg:first:pl-0"
                >
                  <dt className="t-eyebrow mt-3 text-titanium">{stat.label}</dt>
                  <dd className="t-stat reception-stat order-first text-core-white">
                    {stat.value}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        ) : null}
      </div>
    </section>
  );
}
