"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight } from "@/components/site/icons";
import { button } from "@/components/site/Section";
import { MAIN_SITE } from "@/lib/base-path";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from "@/lib/contact";
import { sendDemoRequest } from "@/lib/leads";

/*
 * The one demo request form used across the ERP site: the home-page card, the
 * /demo page and the "Book a free demo" popup. There is no self-serve sign-up
 * or free trial — the details are emailed to the Impacgo team (lib/leads.ts),
 * who get in touch to schedule a personalised demo.
 */

export const COUNTRY_CODES = [
  { code: "+91", label: "India (+91)" },
  { code: "+1", label: "United States (+1)" },
  { code: "+44", label: "United Kingdom (+44)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+65", label: "Singapore (+65)" },
  { code: "+61", label: "Australia (+61)" },
];

const field =
  "h-11 w-full rounded-xl border border-[#ebe5dc] bg-white px-4 text-[15px] text-[#14161c] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#686c79] focus:border-[#2d4fe0] focus:shadow-[0_0_0_4px_rgb(45_79_224/12%)] aria-invalid:border-[#ef4444]";
const alertBox = "rounded-lg bg-[#fef2f2] px-3 py-2 text-[13px] text-[#b91c1c] ring-1 ring-[#fecaca]";

type Status = "idle" | "sending" | "sent" | "error";

/** Email + phone, shown under every demo form. */
export function ContactLine({ className = "" }: { className?: string }) {
  return (
    <p className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13px] text-[#686c79] ${className}`}>
      <span>Prefer to talk now?</span>
      <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-1.5 font-medium text-[#2d4fe0] hover:underline">
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
        {CONTACT_EMAIL}
      </a>
      <a href={CONTACT_PHONE_TEL} className="inline-flex items-center gap-1.5 font-medium text-[#2d4fe0] hover:underline">
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
        {CONTACT_PHONE}
      </a>
    </p>
  );
}

export function DemoForm({
  source,
  compact = false,
  autoFocus = false,
  heading,
  onClose,
}: {
  /** Where the form is, for the email (e.g. "the ERP home page"). */
  source: string;
  /** Home-page card: no message box, tighter layout. */
  compact?: boolean;
  autoFocus?: boolean;
  /** Rendered above the fields (hidden once sent). */
  heading?: ReactNode;
  /** Popup only: shows a Close button after sending. */
  onClose?: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<{ field: string; message: string } | null>(null);
  const [sentTo, setSentTo] = useState<{ name: string; email: string } | null>(null);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const email = String(f.get("email") ?? "").trim().toLowerCase();
    const company = String(f.get("company") ?? "").trim();
    const phoneRaw = String(f.get("phone") ?? "").replace(/[\s-]/g, "");
    const message = String(f.get("message") ?? "").trim();

    // Spam trap: people never see or fill this field.
    if (String(f.get("website") ?? "")) {
      setSentTo({ name, email });
      setStatus("sent");
      return;
    }
    if (!name) return setError({ field: "name", message: "Please enter your name." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError({ field: "email", message: "Please enter a valid work email." });
    if (!company) return setError({ field: "company", message: "Please enter your company name." });
    if (phoneRaw && !/^\d{6,14}$/.test(phoneRaw)) return setError({ field: "phone", message: "Please enter a valid phone number." });

    setError(null);
    setStatus("sending");
    const phone = phoneRaw ? `${f.get("country_code") ?? ""} ${phoneRaw}`.trim() : undefined;
    const ok = await sendDemoRequest({ name, email, phone, company, message, source, page: window.location.href });
    if (ok) {
      setSentTo({ name, email });
      setStatus("sent");
    } else {
      setStatus("error");
    }
  }

  if (status === "sent" && sentTo) {
    return (
      <div role="status" className="flex flex-col items-center py-4 text-center">
        <span className="grid size-14 place-items-center rounded-full bg-[#ecfdf3] text-[#15803d] ring-8 ring-[#ecfdf3]/50">
          <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </span>
        <p className="pt-6 text-[22px] font-semibold tracking-[-0.02em] text-[#14161c]">Thanks, {sentTo.name.split(/\s+/)[0] || sentTo.name}!</p>
        <p className="max-w-[360px] pt-2 text-[15px] leading-relaxed text-[#5c6170]">
          Your demo request is in. Our team will contact you at <span className="font-semibold text-[#14161c]">{sentTo.email}</span> to schedule a time that suits you.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-7">
          {onClose ? (
            <button type="button" onClick={onClose} className={`${button.secondary} cursor-pointer`}>
              Close
            </button>
          ) : (
            <Link href="/#modules" className={button.secondary}>
              Explore the modules
            </Link>
          )}
        </div>
        <ContactLine className="pt-7" />
      </div>
    );
  }

  const invalid = (n: string) => (error?.field === n ? true : undefined);
  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-3">
      {heading}
      <div className={compact ? "flex flex-col gap-3" : "grid gap-3 sm:grid-cols-2"}>
        <input name="name" type="text" placeholder="Full name" autoComplete="name" aria-label="Full name" aria-invalid={invalid("name")} autoFocus={autoFocus} className={field} />
        <input name="email" type="email" placeholder="Work email" autoComplete="email" aria-label="Work email" aria-invalid={invalid("email")} className={field} />
      </div>
      <input name="company" type="text" placeholder="Company name" autoComplete="organization" aria-label="Company name" aria-invalid={invalid("company")} className={field} />
      <div className={`flex h-11 overflow-hidden rounded-xl border bg-white transition-colors focus-within:border-[#2d4fe0] ${invalid("phone") ? "border-[#ef4444]" : "border-[#ebe5dc]"}`}>
        <select name="country_code" aria-label="Country code" defaultValue="+91" className="w-[84px] cursor-pointer border-r border-[#ebe5dc] bg-[#faf7f2] px-3 text-[14px] text-[#383d48] outline-none">
          {COUNTRY_CODES.map((c) => (
            <option key={c.code} value={c.code} label={c.code}>
              {c.label}
            </option>
          ))}
        </select>
        <input name="phone" type="tel" placeholder="Phone (optional)" autoComplete="tel-national" aria-label="Phone" aria-invalid={invalid("phone")} className="min-w-0 flex-1 bg-transparent px-4 text-[15px] text-[#14161c] outline-none placeholder:text-[#686c79]" />
      </div>
      {compact ? null : (
        <textarea
          name="message"
          rows={3}
          placeholder="Which modules interest you? Anything we should know? (optional)"
          aria-label="Message"
          className="w-full resize-y rounded-xl border border-[#ebe5dc] bg-white px-4 py-3 text-[15px] text-[#14161c] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#686c79] focus:border-[#2d4fe0] focus:shadow-[0_0_0_4px_rgb(45_79_224/12%)]"
        />
      )}
      {/* Spam trap — hidden from people and screen readers. */}
      <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-px w-px opacity-0" />

      {error ? (
        <p role="alert" className={alertBox}>
          {error.message}
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className={alertBox}>
          We couldn&apos;t send your request. Please try again, or reach us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline">
            {CONTACT_EMAIL}
          </a>{" "}
          /{" "}
          <a href={CONTACT_PHONE_TEL} className="font-semibold underline">
            {CONTACT_PHONE}
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-1 inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[linear-gradient(180deg,#e5512f,#cc3b1c)] text-[16px] font-semibold text-white shadow-[inset_0_1px_0_rgb(255_255_255/20%),0_12px_28px_-10px_rgb(204_59_28/60%)] transition-[filter,translate] duration-200 hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "sending" ? "Sending…" : <>Request my free demo <ArrowRight className="transition-transform group-hover:translate-x-1" /></>}
      </button>
      <p className="text-center text-[12px] leading-snug text-[#686c79]">
        By submitting, you agree to our{" "}
        <a href={MAIN_SITE.terms} target="_blank" rel="noopener noreferrer" className="underline decoration-[#d6cfc4] underline-offset-2 hover:text-[#14161c]">
          Terms
        </a>{" "}
        and{" "}
        <a href={MAIN_SITE.privacy} target="_blank" rel="noopener noreferrer" className="underline decoration-[#d6cfc4] underline-offset-2 hover:text-[#14161c]">
          Privacy Policy
        </a>
        .
      </p>
      <ContactLine className="border-t border-[#f3efe8] pt-4" />
    </form>
  );
}
