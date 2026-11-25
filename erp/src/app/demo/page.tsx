import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { DemoForm } from "@/components/site/DemoForm";
import { erpDemoJsonLd, toJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Book a free ERP demo",
  description: "Book a free, personalised demo of Impacgo ERP. See HRMS, Finance, Chain, Make, Plan, Retail and Project mapped to the way your business runs.",
  alternates: { canonical: "https://www.impacgo.com/erp-suite/demo" },
};

const STEPS = [
  "We read your request and confirm a time that suits you.",
  "A short call to understand your business, teams and current tools.",
  "A live walkthrough of the modules you need, set up around your processes.",
  "Your questions answered, and clear next steps. No obligation.",
];

/* Standalone demo request page (also where the old /signup URL redirects). */
export default function DemoPage() {
  return (
    <AuthShell title="Book your free demo" subtitle="Share a few details and our team will schedule a personalised walkthrough of Impacgo ERP for your business.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(erpDemoJsonLd) }} />
      <DemoForm source="the ERP demo request page" />
      <section aria-labelledby="demo-steps" className="mt-10 border-t border-[#eceef3] pt-6">
        <h2 id="demo-steps" className="text-[15px] font-semibold text-[#14161c]">
          What happens in your demo
        </h2>
        <ol className="mt-3 flex flex-col gap-2 text-[14px] leading-relaxed text-[#5c6170]">
          {STEPS.map((s, i) => (
            <li key={s} className="flex gap-3">
              <span className="font-semibold text-[#2d4fe0]">{i + 1}.</span>
              {s}
            </li>
          ))}
        </ol>
        <p className="mt-4 text-[14px] leading-relaxed text-[#5c6170]">
          Impacgo ERP brings HRMS, Finance, Chain (supply chain), Make (manufacturing), Plan, Retail and Project into one cloud platform, so we can show the
          parts that matter to you, whether you run a factory, a distribution business, retail stores or a services company.
        </p>
      </section>
    </AuthShell>
  );
}
