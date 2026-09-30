import type { Metadata } from "next";
import Link from "next/link";

import { PreRegistrationForm } from "@/components/pre-register/pre-registration-form";
import { memberships } from "@/content/memberships";

export const metadata: Metadata = {
  title: "Founding Member Pre-Booking",
  description:
    "Pre-register for a Core Club founding membership in Faisalabad. Review your plan and send payment confirmation for manual verification.",
};

export default function PreRegisterPage() {
  return (
    <div className="section-cc min-h-screen bg-core-black">
      <div className="container-cc">
        <div className="mx-auto max-w-[900px]">
          <Link
            href="/#membership"
            className="t-button inline-flex min-h-11 items-center text-titanium hover:text-core-white"
          >
            ← BACK TO MEMBERSHIPS
          </Link>

          <header className="mt-10 border-b border-hairline pb-10 sm:mt-14">
            <p className="t-eyebrow text-gold-lift">
              FOUNDING MEMBERS / PRE-BOOKING
            </p>
            <h1 className="t-h2 headline-solid mt-6">Join The Core</h1>
            <p className="t-body mt-5 max-w-[58ch] text-titanium">
              Choose your membership, enter your details and complete your
              payment for manual verification.
            </p>
            <p className="t-small mt-5 text-muted">
              Pre-booking opens {memberships.preBookingOpens}. Founding rates
              are available to the first {memberships.foundingMemberLimit} members.
            </p>
          </header>

          <PreRegistrationForm />
        </div>
      </div>
    </div>
  );
}
