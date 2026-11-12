import Image from "next/image";
import type { ReactNode } from "react";
import { BrandLockup } from "@/components/site/BrandLockup";
import { withBasePath } from "@/lib/base-path";

const POINTS = ["Seven integrated modules, one platform", "Role-based access on every screen", "Cloud, multi-tenant and secure"];

/* Split layout for the sign-in and demo request pages: light brand panel with a cut-out photo (desktop) + content. */
export function AuthShell({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <main className="grid min-h-screen bg-white lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <aside className="relative hidden overflow-hidden bg-[linear-gradient(150deg,#eef1ff,#fff5f1_55%,#fff3ea)] p-12 lg:flex lg:flex-col">
        <div className="relative">
          <BrandLockup logoClass="h-10" priority />
        </div>
        <div className="relative mt-12 max-w-[480px]">
          <h2 className="text-[36px] leading-[1.1] font-extrabold tracking-[-1.2px] text-[#14161c]">
            One platform.
            <br />
            <span className="bg-gradient-to-r from-[#2d4fe0] to-[#6d4ef0] bg-clip-text text-transparent">Your whole business.</span>
          </h2>
          <ul className="flex flex-col gap-3 pt-6">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[15px] text-[#383d48]">
                <span className="grid size-6 place-items-center rounded-full bg-white text-[#2d4fe0] shadow-[0_2px_6px_rgb(45_79_224/18%)]">
                  <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mt-auto pt-10">
          <div className="relative h-[380px] overflow-hidden rounded-3xl bg-[linear-gradient(160deg,#ffffff,#f3eeff_60%,#ffeede)] shadow-[0_30px_60px_-30px_rgb(20_22_28/35%)]">
            <span aria-hidden className="absolute right-[2%] bottom-[-30%] size-[380px] rounded-full bg-[radial-gradient(circle,#d9d0ff,transparent_66%)]" />
            <Image src={withBasePath("/images/people/manager.webp")} alt="A confident sales manager" width={631} height={1000} sizes="260px" priority className="absolute right-[10%] bottom-0 h-[94%] w-auto animate-[crm-pop_.7s_ease_both]" />
          </div>
          <div className="absolute bottom-8 left-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_14px_34px_-16px_rgb(20_22_28/40%)]">
            <span className="grid size-9 place-items-center rounded-xl bg-[#ecfdf3] text-[15px] font-bold text-[#15803d]">✓</span>
            <span>
              <span className="block text-[14px] font-semibold text-[#14161c]">Purchase order approved</span>
              <span className="block text-[12px] text-[#5c6170]">Chain → Finance, posted automatically</span>
            </span>
          </div>
        </div>
      </aside>

      <div className="flex flex-col px-5 py-6 sm:px-10">
        <div className="lg:hidden">
          <BrandLockup logoClass="h-8 sm:h-9" priority />
        </div>
        <div className="mx-auto flex w-full max-w-[400px] flex-1 flex-col justify-center py-12">
          <h1 className="text-[30px] leading-tight font-extrabold tracking-[-0.8px] text-[#14161c]">{title}</h1>
          <p className="pt-2 pb-8 text-[15px] text-[#5c6170]">{subtitle}</p>
          {children}
        </div>
      </div>
    </main>
  );
}
