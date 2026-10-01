"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { location } from "@/content/location";
import { memberships } from "@/content/memberships";

type Details = {
  fullName: string;
  phone: string;
  email: string;
  planSlug: string;
};

type Field = keyof Details;
type Errors = Partial<Record<Field, string>>;
type CopyField = "account" | "iban";

const paymentDetails = {
  accountName: "Muhammad Ishfaq",
  accountNumber: "16837907101603",
  iban: "PK47HABB0016837907101603",
  branch: "D GROUND, FAISALABAD",
} as const;

const numberFormatter = new Intl.NumberFormat("en-PK");

const inputClasses =
  "mt-2 block w-full min-w-0 rounded-cc-sm border bg-surface-2 px-4 py-3 text-core-white placeholder:text-muted focus:border-gold";

function formatPrice(amount: number): string {
  return `${memberships.currency} ${numberFormatter.format(amount)}`;
}

function validate(details: Details): Errors {
  const errors: Errors = {};

  if (!details.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  const phone = details.phone.trim();
  const digitCount = phone.replace(/\D/g, "").length;
  if (!phone || !/^\+?[0-9()\s-]+$/.test(phone) || digitCount < 10 || digitCount > 15) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!memberships.plans.some((plan) => plan.slug === details.planSlug)) {
    errors.planSlug = "Please choose a membership plan.";
  }

  return errors;
}

export function PreRegistrationForm() {
  const [step, setStep] = useState<"details" | "payment">("details");
  const [details, setDetails] = useState<Details>({
    fullName: "",
    phone: "",
    email: "",
    planSlug: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [copiedField, setCopiedField] = useState<CopyField | null>(null);
  const [copyStatus, setCopyStatus] = useState("");

  const detailsHeadingRef = useRef<HTMLHeadingElement>(null);
  const paymentHeadingRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const planRef = useRef<HTMLInputElement>(null);
  const hasVisitedPayment = useRef(false);

  const selectedPlan = memberships.plans.find(
    (plan) => plan.slug === details.planSlug,
  );

  useEffect(() => {
    if (step === "payment") {
      hasVisitedPayment.current = true;
      paymentHeadingRef.current?.focus();
    } else if (hasVisitedPayment.current) {
      detailsHeadingRef.current?.focus();
    }
  }, [step]);

  function updateField(field: Field, value: string) {
    setDetails((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function continueToPayment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextDetails = {
      fullName: details.fullName.trim(),
      phone: details.phone.trim(),
      email: details.email.trim(),
      planSlug: details.planSlug,
    };
    const nextErrors = validate(nextDetails);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      if (nextErrors.fullName) nameRef.current?.focus();
      else if (nextErrors.phone) phoneRef.current?.focus();
      else if (nextErrors.email) emailRef.current?.focus();
      else planRef.current?.focus();
      return;
    }

    setDetails(nextDetails);
    setStep("payment");
  }

  async function copyDetail(field: CopyField, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setCopyStatus(`${field === "iban" ? "IBAN" : "Account number"} copied.`);
    } catch {
      setCopiedField(null);
      setCopyStatus("Copy unavailable. Please select and copy the detail manually.");
    }
  }

  const planLabel = selectedPlan
    ? `${selectedPlan.durationMonths} ${selectedPlan.durationMonths === 1 ? "Month" : "Months"}`
    : "";
  const whatsappMessage = selectedPlan
    ? [
        "Hello Core Club,",
        "",
        "I would like to complete my Founding Member pre-booking.",
        "",
        `Name: ${details.fullName}`,
        `Phone: ${details.phone}`,
        `Email: ${details.email}`,
        `Plan: ${planLabel}`,
        `Amount: ${formatPrice(selectedPlan.foundingPrice)}`,
        "",
        "I have made the payment and will attach the payment confirmation screenshot here.",
      ].join("\n")
    : "";
  const whatsappHref = `https://wa.me/${location.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

  if (step === "payment" && selectedPlan) {
    return (
      <section className="mt-8" aria-labelledby="payment-heading">
        <div className="rounded-[16px] border border-hairline-strong bg-surface-1 p-6 sm:p-8 lg:p-10">
          <p className="t-eyebrow text-gold-lift">02 / PAYMENT</p>
          <h2
            ref={paymentHeadingRef}
            id="payment-heading"
            tabIndex={-1}
            className="t-h3 mt-4 text-core-white"
          >
            Complete Your Pre-Booking
          </h2>
          <p className="t-body mt-4 max-w-[52ch] text-titanium">
            Review your details, make the payment, then send your confirmation
            on WhatsApp.
          </p>

          <dl className="mt-8 grid gap-5 border-y border-hairline-strong py-6 sm:grid-cols-2 sm:gap-8">
            <div className="min-w-0">
              <dt className="t-small text-titanium">Selected membership</dt>
              <dd className="t-h3 mt-2 text-core-white">{planLabel}</dd>
            </div>
            <div className="min-w-0">
              <dt className="t-small text-gold-lift">Amount to pay</dt>
              <dd className="t-stat mt-2 break-words text-[clamp(2rem,4vw,3rem)]! text-core-white">
                {formatPrice(selectedPlan.foundingPrice)}
              </dd>
            </div>
          </dl>

          <div className="mt-8">
            <h3 className="t-eyebrow text-muted">YOUR DETAILS</h3>
            <dl className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              <div className="min-w-0">
                <dt className="t-small text-muted">Full Name</dt>
                <dd className="t-body break-words text-core-white">{details.fullName}</dd>
              </div>
              <div className="min-w-0">
                <dt className="t-small text-muted">Phone</dt>
                <dd className="t-body break-words text-core-white">{details.phone}</dd>
              </div>
              <div className="min-w-0">
                <dt className="t-small text-muted">Email</dt>
                <dd className="t-body break-all text-core-white">{details.email}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-8 border-t border-hairline-strong pt-8">
            <h3 className="t-eyebrow text-muted">PAYMENT DETAILS</h3>
            <dl className="mt-5 divide-y divide-hairline-strong">
              <div className="py-4 first:pt-0">
                <dt className="t-small text-muted">Account Name</dt>
                <dd className="t-body mt-1 text-core-white">
                  {paymentDetails.accountName}
                </dd>
              </div>
              <div className="flex min-w-0 items-start justify-between gap-4 py-4">
                <div className="min-w-0">
                  <dt className="t-small text-muted">Account Number</dt>
                  <dd className="t-body t-tabular mt-1 break-all text-core-white">
                    {paymentDetails.accountNumber}
                  </dd>
                </div>
                <button
                  type="button"
                  onClick={() => copyDetail("account", paymentDetails.accountNumber)}
                  className="t-caption min-h-11 shrink-0 rounded-cc-sm border border-hairline-strong px-3 text-gold-lift hover:border-gold"
                  aria-label="Copy account number"
                >
                  {copiedField === "account" ? "COPIED" : "COPY"}
                </button>
              </div>
              <div className="flex min-w-0 items-start justify-between gap-4 py-4">
                <div className="min-w-0">
                  <dt className="t-small text-muted">IBAN</dt>
                  <dd className="t-body t-tabular mt-1 break-all text-core-white">
                    {paymentDetails.iban}
                  </dd>
                </div>
                <button
                  type="button"
                  onClick={() => copyDetail("iban", paymentDetails.iban)}
                  className="t-caption min-h-11 shrink-0 rounded-cc-sm border border-hairline-strong px-3 text-gold-lift hover:border-gold"
                  aria-label="Copy IBAN"
                >
                  {copiedField === "iban" ? "COPIED" : "COPY"}
                </button>
              </div>
              <div className="py-4 last:pb-0">
                <dt className="t-small text-muted">Branch</dt>
                <dd className="t-body mt-1 break-words text-core-white">
                  {paymentDetails.branch}
                </dd>
              </div>
            </dl>
            <p role="status" aria-live="polite" className="t-small text-titanium">
              {copyStatus}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-baseline justify-between gap-3 rounded-cc-sm border border-hairline-strong bg-surface-2 p-5 sm:p-6">
            <div>
              <p className="t-eyebrow text-muted">REGISTRATION FEE</p>
              <p className="t-small t-tabular mt-2 text-titanium">
                Regular: {formatPrice(memberships.registrationFee.regular)}
              </p>
            </div>
            <div className="text-left sm:text-right">
              <p className="t-h3 text-gold-lift">
                {memberships.registrationFee.founding === 0
                  ? "FREE"
                  : formatPrice(memberships.registrationFee.founding)}
              </p>
              <p className="t-small text-titanium">
                For the first {memberships.foundingMemberLimit} founding members
              </p>
            </div>
          </div>

          <p className="t-body mt-8 text-core-white">
            Make the payment for your selected membership, then send the payment
            confirmation to Core Club on WhatsApp for verification.
          </p>
          <p className="t-small mt-4 border-l-2 border-gold pl-4 text-titanium">
            Entering your details does not reserve or confirm a membership. Your
            founding-member place is confirmed only after Core Club verifies
            your payment, subject to availability among the first{" "}
            {memberships.foundingMemberLimit} members.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={whatsappHref} variant="primary">
              SEND PAYMENT CONFIRMATION
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setStep("details")}
            >
              EDIT DETAILS
            </Button>
          </div>
          <p className="t-small mt-4 text-muted">
            Attach your payment confirmation screenshot yourself after WhatsApp
            opens.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-8" aria-labelledby="details-heading">
      <form
        noValidate
        onSubmit={continueToPayment}
        className="rounded-[16px] border border-hairline-strong bg-surface-1 p-6 sm:p-8 lg:p-10"
      >
        <p className="t-eyebrow text-gold-lift">01 / YOUR DETAILS</p>
        <h2
          ref={detailsHeadingRef}
          id="details-heading"
          tabIndex={-1}
          className="t-h3 mt-4 text-core-white"
        >
          Your Details
        </h2>
        <p className="t-body mt-4 text-titanium">
          Enter the information we’ll include in your payment confirmation
          message.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="full-name" className="t-small text-core-white">
              Full Name
            </label>
            <input
              ref={nameRef}
              id="full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={details.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "full-name-error" : undefined}
              className={`${inputClasses} ${errors.fullName ? "border-error" : "border-hairline-strong"}`}
            />
            {errors.fullName && (
              <p id="full-name-error" className="t-small mt-2 text-error">
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="min-w-0">
            <label htmlFor="phone" className="t-small text-core-white">
              Phone Number
            </label>
            <input
              ref={phoneRef}
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={details.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`${inputClasses} ${errors.phone ? "border-error" : "border-hairline-strong"}`}
            />
            {errors.phone && (
              <p id="phone-error" className="t-small mt-2 text-error">
                {errors.phone}
              </p>
            )}
          </div>

          <div className="min-w-0">
            <label htmlFor="email" className="t-small text-core-white">
              Email Address
            </label>
            <input
              ref={emailRef}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={details.email}
              onChange={(event) => updateField("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`${inputClasses} ${errors.email ? "border-error" : "border-hairline-strong"}`}
            />
            {errors.email && (
              <p id="email-error" className="t-small mt-2 text-error">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <fieldset
          className="mt-8 border-t border-hairline-strong pt-6"
          aria-invalid={Boolean(errors.planSlug)}
          aria-describedby={errors.planSlug ? "plan-error" : undefined}
        >
          <legend className="t-small text-core-white">Membership Plan</legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {memberships.plans.map((plan, index) => {
              const selected = details.planSlug === plan.slug;
              const duration = `${plan.durationMonths} ${plan.durationMonths === 1 ? "Month" : "Months"}`;

              return (
                <label
                  key={plan.slug}
                  className={`flex min-w-0 cursor-pointer items-center gap-4 rounded-cc-sm border p-4 transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gold ${selected ? "border-gold border-l-[4px] bg-core-black" : "border-hairline-strong bg-surface-2 hover:border-titanium"}`}
                >
                  <input
                    ref={index === 0 ? planRef : undefined}
                    type="radio"
                    name="membershipPlan"
                    value={plan.slug}
                    required
                    checked={selected}
                    onChange={() => updateField("planSlug", plan.slug)}
                    className="size-5 shrink-0 accent-gold"
                  />
                  <span className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <span className="font-semibold text-core-white">{duration}</span>
                    <span className="t-small t-tabular text-gold-lift">
                      {formatPrice(plan.foundingPrice)}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
          {errors.planSlug && (
            <p id="plan-error" className="t-small mt-2 text-error">
              {errors.planSlug}
            </p>
          )}
        </fieldset>

        <div className="mt-8 border-t border-hairline-strong pt-8">
          <Button type="submit" variant="primary">
            CONTINUE TO PAYMENT
          </Button>
          <p className="t-small mt-4 max-w-[65ch] text-muted">
            Your details prepare the WhatsApp verification message. This website
            does not save this form in the current pre-booking flow.
          </p>
        </div>
      </form>
    </section>
  );
}
