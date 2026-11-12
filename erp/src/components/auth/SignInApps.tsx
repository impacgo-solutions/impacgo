"use client";

import { ContactLine } from "@/components/site/DemoForm";
import { ExternalArrow } from "@/components/site/icons";
import { ERP_MODULES, ErpIcon, appHost } from "@/components/site/suite";
import { CONTACT_HREF } from "@/lib/contact";

/*
 * Sign-in page body: each Impacgo module runs as its own app, so this lists
 * the modules that have one (appUrl in components/site/suite.tsx) and links
 * straight to its sign-in, in the same tab. Visitors without access are
 * pointed to the free demo.
 */
const APPS = ERP_MODULES.filter((m): m is (typeof m & { appUrl: string }) => Boolean(m.appUrl));

export function SignInApps() {
  return (
    <div className="flex flex-col gap-6">
      <ul className="flex flex-col gap-2.5">
        {APPS.map((m) => (
          <li key={m.key}>
            <a
              href={m.appUrl}
              aria-label={`Sign in to Impacgo ${m.name} (${appHost(m.appUrl)})`}
              className="group flex items-center gap-4 rounded-2xl border border-[#ebe5dc] bg-white p-4 transition-[border-color,box-shadow,translate] duration-200 hover:-translate-y-0.5 hover:border-[#d6cfc4] hover:shadow-[0_18px_40px_-26px_rgb(20_22_28/40%)]"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl transition-transform duration-200 group-hover:scale-105" style={{ background: m.tint, color: m.color }}>
                <ErpIcon name={m.key} size={20} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[16px] font-semibold text-[#14161c]">Impacgo {m.name}</span>
                <span className="block text-[13px] leading-snug text-[#5c6170]">{m.area}</span>
                <span className="block pt-0.5 text-[12px] font-medium tracking-[0.01em] text-[#9a9ea8]">{appHost(m.appUrl)}</span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1.5 text-[14px] font-semibold text-[#2d4fe0]">
                Sign in <ExternalArrow className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="rounded-2xl bg-[#f5f7ff] px-5 py-4 text-center text-[14px] leading-relaxed text-[#383d48] ring-1 ring-[#dfe5ff]">
        New to Impacgo ERP?{" "}
        {/* Opens the demo popup (components/site/ContactModal.tsx). */}
        <a href={CONTACT_HREF} className="font-semibold text-[#2d4fe0] hover:underline">
          Book a free demo
        </a>{" "}
        and our team will set up your access.
      </p>
      <ContactLine />
    </div>
  );
}
