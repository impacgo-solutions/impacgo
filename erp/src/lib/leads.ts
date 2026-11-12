/*
 * Emails ERP demo requests to the Impacgo team, through
 * the same EmailJS account/template the main site uses (see the main site's
 * src/calviq/pages/BookDemo.jsx). Uses EmailJS's REST endpoint, so no extra
 * package is needed.
 *
 * Configure in .env.local (and in the Vercel project's env vars):
 *   NEXT_PUBLIC_EMAILJS_SERVICE_ID / NEXT_PUBLIC_EMAILJS_TEMPLATE_ID / NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
 *   NEXT_PUBLIC_EMAILJS_ERP_TEMPLATE_ID (optional — a dedicated template for ERP emails)
 */
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_ERP_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type TeamEmail = {
  name: string;
  email: string;
  phone?: string;
  /** Shown in the shared template's "farm name" slot — the company, or what kind of email this is. */
  subject: string;
  message: string;
};

/** Sends one email to the team. Resolves true once EmailJS accepts it. */
async function sendToTeam({ name, email, phone, subject, message }: TeamEmail, { keepalive = false } = {}): Promise<boolean> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn("ERP email not sent: EmailJS env vars are missing.");
    return false;
  }
  try {
    const r = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive,
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: {
          // Field names match the shared template (name / farm_name / email / herd_size / time / message).
          name,
          email,
          farm_name: subject,
          herd_size: phone || "—",
          phone: phone || "",
          time: new Date().toLocaleString(),
          message,
        },
      }),
    });
    if (!r.ok) console.error("ERP email failed:", r.status);
    return r.ok;
  } catch (err) {
    console.error("ERP email failed:", err);
    return false;
  }
}

export type DemoRequest = { name: string; email: string; phone?: string; company: string; message?: string; source: string; page: string };

/**
 * Demo request from any ERP demo form (components/site/DemoForm.tsx). Awaited
 * so the form can show success or failure; `keepalive` lets it finish even if
 * the visitor navigates away right after submitting.
 */
export function sendDemoRequest({ name, email, phone, company, message, source, page }: DemoRequest) {
  const lines = [
    `New Impacgo ERP demo request from ${name} at ${company}.`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Message: ${message?.trim() || "(none)"}`,
    `Form: ${source}`,
    `Page: ${page}`,
  ].filter(Boolean);
  return sendToTeam({ name, email, phone, subject: `Impacgo ERP demo request — ${company}`, message: lines.join("\n") }, { keepalive: true });
}
