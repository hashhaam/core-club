"use client";

import { useRef, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { location } from "@/content/location";

const enquiryTypes = [
  "Membership",
  "Coaching",
  "Facilities",
  "Women's Hours",
  "Physiotherapy",
  "Other",
] as const;

type Details = {
  fullName: string;
  phone: string;
  email: string;
  enquiryType: string;
  message: string;
};

type Field = keyof Details;
type Errors = Partial<Record<Field, string>>;

const inputClasses =
  "mt-2 block w-full min-w-0 rounded-cc-sm border bg-surface-2 px-4 py-3 text-core-white placeholder:text-muted focus:border-gold";

function validate(details: Details): Errors {
  const errors: Errors = {};

  if (!details.fullName) errors.fullName = "Please enter your full name.";

  const digits = details.phone.replace(/\D/g, "").length;
  if (!details.phone || !/^\+?[0-9()\s-]+$/.test(details.phone) || digits < 10 || digits > 15) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!enquiryTypes.some((type) => type === details.enquiryType)) {
    errors.enquiryType = "Please choose an enquiry type.";
  }

  if (!details.message) errors.message = "Please enter your message.";

  return errors;
}

export function ContactForm() {
  const [details, setDetails] = useState<Details>({
    fullName: "",
    phone: "",
    email: "",
    enquiryType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function updateField(field: Field, value: string) {
    setDetails((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function sendEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed: Details = {
      fullName: details.fullName.trim(),
      phone: details.phone.trim(),
      email: details.email.trim(),
      enquiryType: details.enquiryType,
      message: details.message.trim(),
    };
    const nextErrors = validate(trimmed);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      if (nextErrors.fullName) nameRef.current?.focus();
      else if (nextErrors.phone) phoneRef.current?.focus();
      else if (nextErrors.email) emailRef.current?.focus();
      else if (nextErrors.enquiryType) typeRef.current?.focus();
      else messageRef.current?.focus();
      return;
    }

    const message = [
      "Hello Core Club,",
      "",
      "I have a general enquiry.",
      "",
      `Name: ${trimmed.fullName}`,
      `Phone: ${trimmed.phone}`,
      `Email: ${trimmed.email}`,
      `Enquiry: ${trimmed.enquiryType}`,
      "",
      "Message:",
      trimmed.message,
    ].join("\n");
    const whatsappUrl = `https://wa.me/${location.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    window.location.assign(whatsappUrl);
  }

  return (
    <section aria-labelledby="enquiry-heading" className="min-w-0">
      <form noValidate onSubmit={sendEnquiry} className="rounded-[16px] border border-hairline-strong bg-surface-1 p-6 sm:p-8">
        <div className="border-b border-hairline-strong pb-6">
          <p className="t-eyebrow text-titanium">GENERAL ENQUIRY</p>
          <h2 id="enquiry-heading" className="t-h3 mt-4 text-core-white">Send an enquiry</h2>
          <p className="t-small mt-3 text-titanium">
            Your details will prepare a WhatsApp message for you to send.
          </p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="contact-full-name" className="t-small font-medium text-core-white">Full Name</label>
            <input
              ref={nameRef}
              id="contact-full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={details.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "contact-full-name-error" : undefined}
              className={`${inputClasses} ${errors.fullName ? "border-error" : "border-hairline-strong"}`}
            />
            {errors.fullName && <p id="contact-full-name-error" className="t-small mt-2 text-error">{errors.fullName}</p>}
          </div>

          <div className="min-w-0">
            <label htmlFor="contact-phone" className="t-small font-medium text-core-white">Phone Number</label>
            <input
              ref={phoneRef}
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={details.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "contact-phone-error" : undefined}
              className={`${inputClasses} ${errors.phone ? "border-error" : "border-hairline-strong"}`}
            />
            {errors.phone && <p id="contact-phone-error" className="t-small mt-2 text-error">{errors.phone}</p>}
          </div>

          <div className="min-w-0">
            <label htmlFor="contact-email" className="t-small font-medium text-core-white">Email Address</label>
            <input
              ref={emailRef}
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={details.email}
              onChange={(event) => updateField("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              className={`${inputClasses} ${errors.email ? "border-error" : "border-hairline-strong"}`}
            />
            {errors.email && <p id="contact-email-error" className="t-small mt-2 text-error">{errors.email}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="contact-enquiry-type" className="t-small font-medium text-core-white">Enquiry Type</label>
            <select
              ref={typeRef}
              id="contact-enquiry-type"
              name="enquiryType"
              required
              value={details.enquiryType}
              onChange={(event) => updateField("enquiryType", event.target.value)}
              aria-invalid={Boolean(errors.enquiryType)}
              aria-describedby={errors.enquiryType ? "contact-enquiry-type-error" : undefined}
              className={`${inputClasses} ${errors.enquiryType ? "border-error" : "border-hairline-strong"}`}
            >
              <option value="">Choose an enquiry type</option>
              {enquiryTypes.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
            {errors.enquiryType && <p id="contact-enquiry-type-error" className="t-small mt-2 text-error">{errors.enquiryType}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="contact-message" className="t-small font-medium text-core-white">Message</label>
            <textarea
              ref={messageRef}
              id="contact-message"
              name="message"
              rows={5}
              required
              value={details.message}
              onChange={(event) => updateField("message", event.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              className={`${inputClasses} ${errors.message ? "border-error" : "border-hairline-strong"}`}
            />
            {errors.message && <p id="contact-message-error" className="t-small mt-2 text-error">{errors.message}</p>}
          </div>
        </div>

        <div className="mt-8 border-t border-hairline-strong pt-8">
          <Button type="submit" variant="primary">SEND ENQUIRY ON WHATSAPP</Button>
          <p className="t-small mt-4 text-muted">
            WhatsApp opens with your message ready. You choose when to send it.
            This website does not save your form details.
          </p>
        </div>
      </form>
    </section>
  );
}
