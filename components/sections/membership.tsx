import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { memberships } from "@/content/memberships";

const priceFormatter = new Intl.NumberFormat("en-PK");

function formatPrice(amount: number): string {
  return `${memberships.currency} ${priceFormatter.format(amount)}`;
}

export function Membership() {
  if (!memberships.verified) return null;

  return (
    <section
      id="membership"
      aria-labelledby="membership-heading"
      className="section-cc scroll-mt-16 border-t border-hairline-strong bg-core-black lg:scroll-mt-[76px]"
    >
      <div className="container-cc">
        <Reveal>
          <p className="t-eyebrow text-gold-lift">MEMBERSHIP</p>
          <h2 id="membership-heading" className="t-h2 headline-solid mt-6">
            <span className="block">Founding Member</span>
            <span className="block">Pre-Booking</span>
          </h2>
          <p className="t-body mt-6 max-w-[66ch] text-titanium">
            Choose the membership term that suits your training. Founding rates
            are available to the first {memberships.foundingMemberLimit} members,
            with the {formatPrice(memberships.registrationFee.regular)} registration
            fee waived.
          </p>
        </Reveal>

        <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {memberships.plans.map((plan, index) => (
            <Reveal
              as="li"
              key={plan.slug}
              delay={index * 0.06}
              className="flex min-w-0 flex-col rounded-cc-sm border border-hairline-strong bg-surface-1 p-6"
            >
              <h3 className="t-h3 text-core-white">
                {plan.durationMonths} {plan.durationMonths === 1 ? "MONTH" : "MONTHS"}
              </h3>
              <dl className="mt-7 flex flex-1 flex-col">
                <div className="border-t border-hairline-strong pt-5">
                  <dt className="t-eyebrow text-muted">REGULAR</dt>
                  <dd className="t-body t-tabular mt-2 text-titanium">
                    {formatPrice(plan.regularPrice)}
                  </dd>
                </div>
                <div className="mt-6 pb-6">
                  <dt className="t-eyebrow text-gold-lift">FOUNDING RATE</dt>
                  <dd className="t-stat mt-3 whitespace-nowrap text-[clamp(2rem,2.45vw,2.375rem)]! text-core-white">
                    {formatPrice(plan.foundingPrice)}
                  </dd>
                </div>
                <div className="mt-auto border-t border-hairline-strong pt-5">
                  <dt className="t-eyebrow text-muted">SAVE</dt>
                  <dd className="t-body t-tabular mt-2 text-titanium">
                    {formatPrice(plan.regularPrice - plan.foundingPrice)}
                  </dd>
                </div>
              </dl>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-5 grid gap-5 rounded-cc-sm border border-hairline-strong bg-surface-1 p-6 sm:grid-cols-2 sm:items-center lg:p-8">
          <div>
            <p className="t-eyebrow text-muted">REGISTRATION FEE</p>
            <p className="t-small t-tabular mt-3 text-titanium">
              Regular: {formatPrice(memberships.registrationFee.regular)}
            </p>
          </div>
          <p className="t-body text-core-white sm:border-l sm:border-hairline-strong sm:pl-8">
            <span className="t-h3 inline-block text-gold-lift">
              {memberships.registrationFee.founding === 0
                ? "FREE"
                : formatPrice(memberships.registrationFee.founding)}
            </span>{" "}
            for the first {memberships.foundingMemberLimit} members
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-5 border-t border-hairline-strong pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-small text-titanium">
            Pre-booking opens {memberships.preBookingOpens}.
          </p>
          <Button variant="primary" href="/pre-register">
            PRE-REGISTER
          </Button>
        </div>
      </div>
    </section>
  );
}
