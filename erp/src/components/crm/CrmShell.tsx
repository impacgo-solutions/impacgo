"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { Icon } from "@/components/crm/icons";
import { Avatar } from "@/components/crm/ui";
import { useCrm } from "@/lib/crm-store";
import { MODULES, MODULE_ORDER, formatDate, getModule } from "@/lib/modules";
import { recordTitle, today } from "@/lib/crm-data";

const COLLAPSE_KEY = "crm-ui-demo:sidebar-collapsed";

/* Close a popover on outside click or Escape. */
function useDismiss(ref: RefObject<HTMLElement | null>, open: boolean, close: () => void) {
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && close();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [ref, open, close]);
}

function Popover({ button, children, align = "right", label }: { button: (open: boolean) => ReactNode; children: (close: () => void) => ReactNode; align?: "left" | "right"; label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);
  useDismiss(ref, open, close);
  return (
    <div ref={ref} className="relative">
      <button type="button" aria-label={label} aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="block cursor-pointer">
        {button(open)}
      </button>
      {open ? (
        <div
          role="menu"
          className={`absolute top-[calc(100%+8px)] z-40 min-w-56 origin-top animate-[crm-pop_.16s_ease-out] overflow-hidden rounded-xl border border-[#ebe5dc] bg-white py-1.5 shadow-[0_16px_40px_-12px_rgb(20_22_28/25%)] ${align === "right" ? "right-0" : "left-0"}`}
        >
          {children(close)}
        </div>
      ) : null}
    </div>
  );
}

const menuItem = "flex w-full cursor-pointer items-center gap-2.5 px-3.5 py-2 text-left text-[14px] text-[#14161c] transition-colors duration-150 hover:bg-[#f3eee6]";
const topIcon = "grid size-9 place-items-center rounded-lg text-[#464b57] transition-colors duration-150 hover:bg-[#f3eee6] hover:text-[#14161c]";

/* ---------- Sidebar ---------- */

const PRIMARY = [
  { label: "Home", href: "/crm", icon: "home" },
  { label: "Pipeline", href: "/crm/deals?view=board", icon: "pipeline" },
  { label: "My Tasks", href: "/crm/tasks", icon: "tasks" },
];

const SECTIONS = [
  { label: "Sales", modules: ["leads", "contacts", "accounts", "deals"] },
  { label: "Activities", modules: ["tasks"] },
];

function Sidebar({ collapsed, onToggle, onNavigate }: { collapsed: boolean; onToggle: () => void; onNavigate: () => void }) {
  const pathname = usePathname();
  const { state } = useCrm();
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const isActive = (href: string) => {
    if (href.includes("view=board")) return false;
    const path = href.split("?")[0];
    return path === "/crm" ? pathname === "/crm" : pathname.startsWith(path);
  };

  const item = (active: boolean) =>
    `group relative flex items-center gap-3 rounded-lg px-3 py-2 text-[14px] font-medium transition-colors duration-150 ${
      active ? "bg-[#eef1ff] text-[#2443cc]" : "text-[#464b57] hover:bg-[#f3eee6] hover:text-[#14161c]"
    } ${collapsed ? "justify-center px-0" : ""}`;
  const bar = (active: boolean) =>
    active ? <span aria-hidden className="absolute top-1.5 bottom-1.5 -left-2.5 w-1 rounded-r-full bg-[#2d4fe0]" /> : null;

  const count = (key: string) => state[key as keyof typeof MODULES].filter((r) => !(key === "leads" && r.converted_at)).length;

  return (
    <div className="flex h-full flex-col">
      <div className={`flex h-[64px] shrink-0 items-center gap-2 border-b border-[#f3efe8] px-4 ${collapsed ? "justify-center px-0" : ""}`}>
        <Link href="/crm" onClick={onNavigate} className="flex items-center gap-2.5" aria-label="Impacgo CRM home">
          <svg width="30" height="30" viewBox="0 0 28 28" aria-hidden className="shrink-0">
            <defs>
              <linearGradient id="crm-logo" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#4f6cf2" />
                <stop offset="1" stopColor="#6d4ef0" />
              </linearGradient>
            </defs>
            <rect width="28" height="28" rx="8" fill="url(#crm-logo)" />
            <path d="M9 8.5h3.2v11H9z" fill="#fff" />
            <path d="M14.5 8.5l6 5.5-6 5.5" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {collapsed ? null : (
            <span className="text-[17px] font-bold whitespace-nowrap text-[#14161c]">
              Impacgo <span className="font-medium text-[#5c6170]">CRM</span>
            </span>
          )}
        </Link>
        {collapsed ? null : (
          <button type="button" onClick={onToggle} aria-label="Collapse sidebar" className="ml-auto hidden cursor-pointer rounded-md p-1 text-[#686c79] hover:bg-[#f3eee6] hover:text-[#14161c] lg:block">
            <Icon name="collapse" />
          </button>
        )}
      </div>

      <nav aria-label="CRM" className="flex min-h-0 flex-1 flex-col overflow-y-auto px-2.5 py-3 [scrollbar-width:thin]">
        {collapsed ? null : (
          <div className="mb-3 flex items-center gap-3 rounded-xl border border-[#ebe5dc] bg-gradient-to-br from-[#faf7f2] to-white p-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-[#2d4fe0] to-[#6d4ef0] text-[12px] font-bold text-white">IG</span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-[14px] font-semibold text-[#14161c]">Impacgo</span>
              <span className="block truncate text-[12px] text-[#5c6170]">Sales workspace</span>
            </span>
          </div>
        )}

        <div className="flex flex-col gap-0.5">
          {PRIMARY.map((p) => {
            const active = isActive(p.href);
            return (
              <Link key={p.label} href={p.href} onClick={onNavigate} title={collapsed ? p.label : undefined} className={item(active)}>
                {bar(active)}
                <Icon name={p.icon} size={19} />
                {collapsed ? null : p.label}
              </Link>
            );
          })}
        </div>

        {collapsed ? (
          <div className="mt-3 flex flex-col gap-0.5 border-t border-[#f3efe8] pt-3">
            {MODULE_ORDER.map((key) => {
              const active = isActive(`/crm/${key}`);
              return (
                <Link key={key} href={`/crm/${key}`} onClick={onNavigate} title={MODULES[key].plural} className={item(active)}>
                  {bar(active)}
                  <Icon name={key} size={19} />
                </Link>
              );
            })}
            <button type="button" onClick={onToggle} aria-label="Expand sidebar" className="mt-3 hidden cursor-pointer justify-center rounded-lg p-2 text-[#686c79] hover:bg-[#f3eee6] hover:text-[#14161c] lg:flex">
              <Icon name="collapse" style={{ transform: "scaleX(-1)" }} />
            </button>
          </div>
        ) : (
          <>
            <label className="relative mt-4 mb-1 block">
              <span className="sr-only">Filter menu</span>
              <Icon name="search" size={15} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#686c79]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to…"
                className="w-full rounded-lg border border-[#ebe5dc] bg-[#faf7f2] py-1.5 pr-3 pl-9 text-[13px] text-[#14161c] outline-none placeholder:text-[#686c79] focus:border-[#aebdff] focus:bg-white"
              />
            </label>
            {SECTIONS.map((section) => {
              const modules = section.modules.filter((k) => !q || MODULES[k as keyof typeof MODULES].plural.toLowerCase().includes(q));
              if (modules.length === 0) return null;
              return (
                <div key={section.label} className="pt-4">
                  <p className="px-3 pb-1.5 text-[11px] font-bold tracking-[0.08em] text-[#686c79] uppercase">{section.label}</p>
                  <div className="flex flex-col gap-0.5">
                    {modules.map((key) => {
                      const active = isActive(`/crm/${key}`);
                      return (
                        <Link key={key} href={`/crm/${key}`} onClick={onNavigate} className={item(active)}>
                          {bar(active)}
                          <Icon name={key} size={19} />
                          <span className="flex-1">{MODULES[key as keyof typeof MODULES].plural}</span>
                          <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${active ? "bg-white text-[#2443cc]" : "bg-[#f3eee6] text-[#5c6170]"}`}>{count(key)}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </nav>

      {collapsed ? null : (
        <div className="m-2.5 rounded-xl bg-gradient-to-br from-[#2d4fe0] to-[#6d4ef0] p-4 text-white [@media(max-height:780px)]:hidden">
          <p className="text-[14px] font-semibold">Tip</p>
          <p className="pt-1 text-[12px] leading-relaxed text-white/85">Drag cards on any board view to update their stage or status.</p>
        </div>
      )}
    </div>
  );
}

/* ---------- Top bar ---------- */

function crumbs(pathname: string) {
  if (pathname === "/crm") return ["Home"];
  if (pathname.startsWith("/crm/search")) return ["Search"];
  const [, , key, id, action] = pathname.split("/");
  const mod = getModule(key ?? "");
  if (!mod) return ["CRM"];
  if (!id) return [mod.plural];
  if (id === "new") return [mod.plural, `New ${mod.singular}`];
  return [mod.plural, action === "edit" ? "Edit" : action === "convert" ? "Convert" : mod.singular];
}

function Notifications() {
  const { state } = useCrm();
  const now = today();
  const due = state.tasks
    .filter((t) => t.status !== "Completed" && t.due_date != null && String(t.due_date) <= now)
    .sort((a, b) => String(a.due_date).localeCompare(String(b.due_date)));

  return (
    <Popover
      label={`Notifications (${due.length})`}
      button={() => (
        <span className={`${topIcon} relative`}>
          <Icon name="bell" size={19} />
          {due.length > 0 ? (
            <span className="absolute top-1 right-1 grid h-4 min-w-4 place-items-center rounded-full bg-[#ef4444] px-1 text-[10px] font-bold text-white ring-2 ring-white">{due.length}</span>
          ) : null}
        </span>
      )}
    >
      {(close) => (
        <div className="w-80">
          <p className="border-b border-[#f3efe8] px-4 py-2.5 text-[14px] font-semibold text-[#14161c]">Due and overdue tasks</p>
          {due.length === 0 ? (
            <p className="px-4 py-6 text-center text-[14px] text-[#5c6170]">You&apos;re all caught up.</p>
          ) : (
            due.slice(0, 6).map((t) => (
              <Link key={t.id} href={`/crm/tasks/${t.id}`} onClick={close} className={`${menuItem} items-start`}>
                <span className={`mt-1 size-2 shrink-0 rounded-full ${String(t.due_date) < now ? "bg-[#ef4444]" : "bg-[#f59e0b]"}`} />
                <span className="min-w-0">
                  <span className="block truncate font-medium">{recordTitle("tasks", t)}</span>
                  <span className="block text-[12px] text-[#5c6170]">
                    {String(t.due_date) < now ? "Overdue" : "Due today"} · {formatDate(String(t.due_date))}
                  </span>
                </span>
              </Link>
            ))
          )}
          <Link href="/crm/tasks" onClick={close} className="block border-t border-[#f3efe8] px-4 py-2.5 text-center text-[13px] font-semibold text-[#2d4fe0] hover:bg-[#faf7f2]">
            View all tasks
          </Link>
        </div>
      )}
    </Popover>
  );
}

function TopBar({ onMenu }: { onMenu: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const { profile, loadSample, clearAll } = useCrm();
  const searchRef = useRef<HTMLInputElement>(null);
  const trail = crumbs(pathname);

  // ⌘K / Ctrl+K focuses search.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-20 flex h-[64px] shrink-0 items-center gap-3 border-b border-[#ebe5dc] bg-white/85 px-4 backdrop-blur-md sm:px-6">
      <button type="button" onClick={onMenu} aria-label="Open menu" className={`${topIcon} lg:hidden`}>
        <Icon name="menu" size={20} />
      </button>
      <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-2 text-[15px]">
        {trail.map((c, i) => (
          <span key={i} className="flex min-w-0 items-center gap-2">
            {i > 0 ? <Icon name="chevronRight" size={14} className="shrink-0 text-[#d6cfc4]" /> : null}
            <span className={`truncate ${i === trail.length - 1 ? "font-bold text-[#14161c]" : "text-[#5c6170]"}`}>{c}</span>
          </span>
        ))}
      </nav>

      <form
        role="search"
        className="relative ml-auto hidden w-full max-w-[320px] md:block"
        onSubmit={(e) => {
          e.preventDefault();
          const q = String(new FormData(e.currentTarget).get("q") ?? "").trim();
          if (q) router.push(`/crm/search?q=${encodeURIComponent(q)}`);
        }}
      >
        <Icon name="search" size={16} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#686c79]" />
        <input
          ref={searchRef}
          name="q"
          type="search"
          placeholder="Search everything"
          aria-label="Search all records"
          className="h-9 w-full rounded-lg border border-[#ebe5dc] bg-[#faf7f2] pr-14 pl-9 text-[14px] text-[#14161c] outline-none placeholder:text-[#686c79] focus:border-[#aebdff] focus:bg-white focus:shadow-[0_0_0_3px_rgb(45_79_224/12%)]"
        />
        <kbd className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 rounded border border-[#ebe5dc] bg-white px-1.5 text-[11px] text-[#686c79]">Ctrl K</kbd>
      </form>

      <div className="flex items-center gap-1 max-md:ml-auto">
        <Popover
          label="Create"
          button={() => (
            <span className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#2d4fe0] px-3 text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-[#2443cc]">
              <Icon name="plus" size={17} strokeWidth={2.2} />
              <span className="max-sm:hidden">New</span>
            </span>
          )}
        >
          {(close) => (
            <>
              <p className="px-3.5 pt-1.5 pb-1 text-[11px] font-bold tracking-[0.08em] text-[#686c79] uppercase">Create</p>
              {MODULE_ORDER.map((key) => (
                <Link key={key} href={`/crm/${key}/new`} onClick={close} className={menuItem}>
                  <Icon name={key} size={16} className="text-[#5c6170]" />
                  {MODULES[key].singular}
                </Link>
              ))}
            </>
          )}
        </Popover>
        <Notifications />
        <Popover label="Settings" button={() => <span className={`${topIcon} max-sm:hidden`}><Icon name="settings" size={19} /></span>}>
          {(close) => (
            <>
              <button
                type="button"
                className={menuItem}
                onClick={() => {
                  loadSample();
                  close();
                  router.push("/crm");
                }}
              >
                <Icon name="refresh" size={16} className="text-[#5c6170]" /> Reset sample data
              </button>
              <button
                type="button"
                className={menuItem}
                onClick={() => {
                  if (window.confirm("Remove all records? You can load the sample data again afterwards.")) {
                    clearAll();
                    close();
                    router.push("/crm");
                  }
                }}
              >
                <Icon name="trash" size={16} className="text-[#5c6170]" /> Clear all records
              </button>
            </>
          )}
        </Popover>
        <Popover
          label={`Account menu for ${profile.name}`}
          button={() => (
            <span className="ml-1 block rounded-full ring-2 ring-transparent transition-shadow hover:ring-[#c9d3ff]">
              <Avatar name={profile.name} size={34} />
            </span>
          )}
        >
          {(close) => (
            <>
              <div className="flex items-center gap-3 border-b border-[#f3efe8] px-4 py-3">
                <Avatar name={profile.name} size={40} />
                <div className="min-w-0">
                  <p className="truncate text-[14px] font-semibold text-[#14161c]">{profile.name}</p>
                  <p className="truncate text-[12px] text-[#5c6170]">{profile.email}</p>
                </div>
              </div>
              <Link href="/" onClick={close} className={menuItem}>
                <Icon name="grid" size={16} className="text-[#5c6170]" /> Impacgo website
              </Link>
              <Link href="/login" onClick={close} className={menuItem}>
                <Icon name="logout" size={16} className="text-[#5c6170]" /> Sign out
              </Link>
            </>
          )}
        </Popover>
      </div>
    </header>
  );
}

/* ---------- Shell ---------- */

export function CrmShell({ children }: { children: ReactNode }) {
  // Mounted client-side only (inside CrmProvider), so reading storage here is safe.
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return window.localStorage.getItem(COLLAPSE_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = () =>
    setCollapsed((c) => {
      try {
        window.localStorage.setItem(COLLAPSE_KEY, c ? "0" : "1");
      } catch {}
      return !c;
    });

  return (
    <div className="flex min-h-screen bg-[#faf7f2] text-[#14161c]">
      <aside
        className={`fixed inset-y-0 left-0 z-40 border-r border-[#ebe5dc] bg-white transition-[width,translate] duration-200 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          collapsed ? "lg:w-[72px]" : "lg:w-[256px]"
        } w-[272px] ${mobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}`}
      >
        <Sidebar collapsed={collapsed && !mobileOpen} onToggle={toggle} onNavigate={() => setMobileOpen(false)} />
      </aside>
      {mobileOpen ? (
        <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)} className="fixed inset-0 z-30 bg-[#14161c]/40 backdrop-blur-[2px] lg:hidden" />
      ) : null}
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar onMenu={() => setMobileOpen(true)} />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}

/* Standard padded page body (home, forms, search). */
export function PageBody({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-[1500px] px-4 py-6 sm:px-6">{children}</div>;
}
