import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { DemoForm } from "@/components/site/DemoForm";

export const metadata: Metadata = {
  title: "Book a free demo",
  description: "Book a free, personalised demo of Impacgo ERP. See HRMS, Finance, Chain, Make, Plan, Retail and Project mapped to the way your business runs.",
  alternates: { canonical: "https://www.impacgo.com/erp-suite/demo" },
};

/* Standalone demo request page (also where the old /signup URL redirects). */
export default function DemoPage() {
  return (
    <AuthShell title="Book your free demo" subtitle="Share a few details and our team will schedule a personalised walkthrough of Impacgo ERP for your business.">
      <DemoForm source="the ERP demo request page" />
    </AuthShell>
  );
}
