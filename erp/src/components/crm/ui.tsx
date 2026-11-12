import Link from "next/link";
import type { ReactNode } from "react";

/*
 * Impacgo CRM tokens: light sidebar, content #faf7f2, primary #2d4fe0,
 * hairlines #ebe5dc, ink #14161c / muted #5c6170, 8–12px radii.
 */

export const btnPrimary =
  "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[#2d4fe0] px-4 text-[14px] font-semibold text-white shadow-[0_1px_2px_rgb(20_22_28/12%),inset_0_1px_0_rgb(255_255_255/18%)] transition-colors duration-200 hover:bg-[#2443cc] disabled:cursor-wait disabled:opacity-60";
export const btnSecondary =
  "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-[#ebe5dc] bg-white px-4 text-[14px] font-medium text-[#14161c] shadow-[0_1px_2px_rgb(20_22_28/5%)] transition-colors duration-200 hover:border-[#d6cfc4] hover:bg-[#faf7f2]";
export const btnDanger =
  "inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-[#fecaca] bg-white px-4 text-[14px] font-medium text-[#dc2626] transition-colors duration-200 hover:border-[#dc2626] hover:bg-[#fef2f2]";
export const btnIcon =
  "inline-grid size-9 cursor-pointer place-items-center rounded-lg border border-[#ebe5dc] bg-white text-[#5c6170] transition-colors duration-200 hover:border-[#d6cfc4] hover:text-[#14161c]";
export const inputClass =
  "w-full rounded-lg border border-[#ebe5dc] bg-white px-3 py-2 text-[14px] text-[#14161c] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#686c79] focus:border-[#2d4fe0] focus:shadow-[0_0_0_3px_rgb(45_79_224/14%)] aria-invalid:border-[#dc2626]";
export const linkClass = "text-[#2d4fe0] hover:underline";

export function PageHeader({ title, subtitle, actions }: { title: ReactNode; subtitle?: ReactNode; actions?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
      <div className="min-w-0">
        <h1 className="truncate text-[20px] leading-tight font-bold text-[#14161c]">{title}</h1>
        {subtitle ? <p className="pt-1 text-[13px] text-[#5c6170]">{subtitle}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  );
}

export function Card({ title, actions, children, className = "", id }: { title?: ReactNode; actions?: ReactNode; children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`scroll-mt-20 rounded-xl border border-[#ebe5dc] bg-white shadow-[0_1px_2px_rgb(20_22_28/4%)] ${className}`}>
      {title ? (
        <div className="flex items-center justify-between gap-2 border-b border-[#f3efe8] px-5 py-3">
          <h2 className="text-[15px] font-semibold text-[#14161c]">{title}</h2>
          {actions}
        </div>
      ) : null}
      {children}
    </section>
  );
}

const BADGE_TONES: Record<string, string> = {
  green: "bg-[#ecfdf5] text-[#047857] ring-[#a7f3d0] [--dot:#10b981]",
  red: "bg-[#fef2f2] text-[#b91c1c] ring-[#fecaca] [--dot:#ef4444]",
  amber: "bg-[#fffbeb] text-[#b45309] ring-[#fde68a] [--dot:#f59e0b]",
  blue: "bg-[#eef5fc] text-[#1f5f9e] ring-[#cfe1f3] [--dot:#6d4ef0]",
  grey: "bg-[#faf7f2] text-[#464b57] ring-[#ebe5dc] [--dot:#686c79]",
};

const VALUE_TONES: Record<string, keyof typeof BADGE_TONES> = {
  "Closed Won": "green",
  Completed: "green",
  "Pre-Qualified": "green",
  "Closed Lost": "red",
  "Lost Lead": "red",
  "Not Qualified": "red",
  High: "red",
  "Negotiation/Review": "amber",
  "Proposal/Price Quote": "amber",
  "In Progress": "amber",
  Waiting: "amber",
  "Attempted to Contact": "amber",
  New: "blue",
  Contacted: "blue",
  Qualification: "blue",
};

export function Badge({ value }: { value: string }) {
  const tone = BADGE_TONES[VALUE_TONES[value] ?? "grey"];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[12px] font-medium whitespace-nowrap ring-1 ring-inset ${tone}`}>
      <span aria-hidden className="size-1.5 rounded-full bg-(--dot)" />
      {value}
    </span>
  );
}

export function EmptyState({ title, body, action }: { title: string; body: string; action?: { href: string; label: string } }) {
  return (
    <div className="flex flex-col items-center px-6 py-14 text-center">
      <p className="text-[16px] font-bold text-[#14161c]">{title}</p>
      <p className="max-w-[380px] pt-1.5 text-[14px] text-[#5c6170]">{body}</p>
      {action ? (
        <Link href={action.href} className={`${btnPrimary} mt-5`}>
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}

/* Initials avatar with a colour picked from the name. */
const AVATAR_COLORS = ["#2d4fe0", "#c8452a", "#6d4ef0", "#7a52c7", "#b26a07", "#4b4ee8", "#be3d6b", "#3f6f4f"];
export function Avatar({ name, size = 40 }: { name: string; size?: number }) {
  const initials = name.split(/\s+/).map((p) => p[0]).join("").slice(0, 2).toUpperCase() || "?";
  const color = AVATAR_COLORS[[...name].reduce((s, c) => s + c.charCodeAt(0), 0) % AVATAR_COLORS.length];
  return (
    <span
      aria-hidden
      className="inline-grid shrink-0 place-items-center rounded-full font-bold text-white"
      style={{ width: size, height: size, background: color, fontSize: Math.round(size * 0.38) }}
    >
      {initials}
    </span>
  );
}
