"use client";

import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Icon } from "@/components/crm/icons";
import { KanbanBoard } from "@/components/crm/KanbanBoard";
import { RecordTable } from "@/components/crm/RecordTable";
import { EmptyState, btnIcon, inputClass } from "@/components/crm/ui";
import { useCrm } from "@/lib/crm-store";
import { listRecords, type ListQuery, type RecordRow } from "@/lib/crm-data";
import { formatCurrency, getModule, type ModuleDef } from "@/lib/modules";

const PANEL_KEY = "crm-ui-demo:filter-panel";

function useOutside(open: boolean, close: () => void) {
  const ref = useRef<HTMLDivElement>(null);
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
  }, [open, close]);
  return ref;
}

function Menu({ label, trigger, children, align = "left" }: { label: string; trigger: ReactNode; children: (close: () => void) => ReactNode; align?: "left" | "right" }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const ref = useOutside(open, close);
  return (
    <div ref={ref} className="relative">
      <button type="button" aria-label={label} aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="block cursor-pointer">
        {trigger}
      </button>
      {open ? (
        <div role="menu" className={`absolute top-[calc(100%+6px)] z-30 min-w-52 rounded-xl border border-[#ebe5dc] bg-white py-1 shadow-[0_12px_32px_rgb(20_22_28/16%)] ${align === "right" ? "right-0" : "left-0"}`}>
          {children(close)}
        </div>
      ) : null}
    </div>
  );
}

const menuItem = "flex w-full cursor-pointer items-center gap-2.5 px-4 py-2 text-left text-[14px] text-[#14161c] hover:bg-[#eef1ff] disabled:cursor-not-allowed disabled:opacity-50";
const toolBtn = "inline-flex h-9 items-center gap-1.5 rounded-lg px-2.5 text-[14px] text-[#14161c] transition-colors duration-150 hover:bg-[#faf7f2]";

function toCsv(mod: ModuleDef, rows: RecordRow[]) {
  const cols = mod.fields.filter((f) => f.type !== "textarea");
  const cell = (v: unknown) => {
    const s = v == null ? "" : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const header = ["Name", ...cols.map((f) => f.label)].map(cell).join(",");
  const body = rows.map((r) =>
    [r._title, ...cols.map((f) => (f.type === "ref" || f.type === "related" ? r[`_ref_${f.name}`] : r[f.name]))].map(cell).join(","),
  );
  return [header, ...body].join("\n");
}

export function ListView({ moduleKey, query, board }: { moduleKey: string; query: ListQuery; board: boolean }) {
  const { state, remove } = useCrm();
  const router = useRouter();
  const mod = getModule(moduleKey);
  const [panelOpen, setPanelOpen] = useState(() => {
    try {
      return window.localStorage.getItem(PANEL_KEY) !== "0";
    } catch {
      return true;
    }
  });
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [filterSearch, setFilterSearch] = useState("");

  const rows = useMemo(() => (mod ? listRecords(state, mod, board ? { q: query.q, filter: query.filter } : query) : []), [state, mod, board, query]);
  if (!mod) notFound();

  const filterField = mod.fields.find((f) => f.name === mod.filterField);
  const active = query.filter ? query.filter.split(",") : [];
  const visibleSelected = new Set([...selected].filter((id) => rows.some((r) => r.id === id)));

  function go(changes: Record<string, string | undefined>) {
    const next = new URLSearchParams();
    const merged = { ...query, view: board ? "board" : undefined, ...changes };
    for (const [k, v] of Object.entries(merged)) if (v) next.set(k, v);
    const qs = next.toString();
    router.replace(`/crm/${mod!.key}${qs ? `?${qs}` : ""}`);
  }

  function togglePanel() {
    setPanelOpen((o) => {
      try {
        window.localStorage.setItem(PANEL_KEY, o ? "0" : "1");
      } catch {}
      return !o;
    });
  }

  function toggleFilter(value: string) {
    const next = active.includes(value) ? active.filter((v) => v !== value) : [...active, value];
    go({ filter: next.join(",") || undefined });
  }

  function exportCsv() {
    const blob = new Blob([toCsv(mod!, rows)], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement("a"), { href: url, download: `${mod!.key}.csv` });
    a.click();
    URL.revokeObjectURL(url);
  }

  function deleteSelected() {
    const ids = [...visibleSelected];
    if (ids.length && window.confirm(`Delete ${ids.length} ${ids.length === 1 ? mod!.singular.toLowerCase() : mod!.plural.toLowerCase()}? This can't be undone.`)) {
      ids.forEach((id) => remove(mod!.key, id));
      setSelected(new Set());
    }
  }

  const views = [
    { label: `All ${mod.plural}`, filter: undefined as string | undefined },
    ...(filterField?.options ?? []).slice(0, 4).map((o) => ({ label: o, filter: o })),
  ];
  const sortFields = [...mod.fields.filter((f) => f.list || f.required).filter((f) => f.type !== "related"), { name: "created_at", label: "Created Time" }];
  const total = rows.reduce((s, r) => s + (Number(r.amount) || 0), 0);

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col">
      {/* View tabs */}
      <div className="flex items-end gap-5 overflow-x-auto border-b border-[#ebe5dc] bg-white px-4 pt-2 [scrollbar-width:none] sm:px-6">
        {views.map((v) => {
          const isActive = (v.filter ?? "") === (query.filter ?? "");
          return (
            <button
              key={v.label}
              type="button"
              onClick={() => go({ filter: v.filter })}
              className={`relative inline-flex shrink-0 cursor-pointer items-center gap-2 pt-1.5 pb-3 text-[14px] whitespace-nowrap transition-colors duration-150 ${
                isActive ? "font-semibold text-[#14161c]" : "text-[#5c6170] hover:text-[#14161c]"
              }`}
            >
              {v.label}
              <span
                aria-hidden
                className={`absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-[#2d4fe0] transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`}
              />
            </button>
          );
        })}
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 border-b border-[#ebe5dc] bg-white px-4 py-2 sm:px-5">
        {filterField?.options ? (
          <button type="button" onClick={togglePanel} aria-pressed={panelOpen} className={`${toolBtn} ${panelOpen ? "bg-[#faf7f2]" : ""}`}>
            <Icon name="filter" size={17} /> Filter
            {active.length ? <span className="grid h-5 min-w-5 place-items-center rounded-full bg-[#2d4fe0] px-1.5 text-[11px] font-bold text-white">{active.length}</span> : null}
          </button>
        ) : null}
        {!board ? (
          <Menu label="Sort" trigger={<span className={toolBtn}><Icon name="sort" size={17} /> Sort</span>}>
            {(close) =>
              sortFields.map((f) =>
                (["asc", "desc"] as const).map((dir) => {
                  const on = (query.sort ?? "created_at") === f.name && (query.dir ?? "desc") === dir;
                  return (
                    <button
                      key={f.name + dir}
                      type="button"
                      className={`${menuItem} ${on ? "font-bold text-[#2d4fe0]" : ""}`}
                      onClick={() => {
                        go({ sort: f.name, dir });
                        close();
                      }}
                    >
                      {f.label} <span className="text-[12px] text-[#5c6170]">{dir === "asc" ? "A → Z / oldest" : "Z → A / newest"}</span>
                    </button>
                  );
                }),
              )
            }
          </Menu>
        ) : null}
        <span className="mx-1.5 h-6 w-px bg-[#ebe5dc]" aria-hidden />
        <div className="flex items-center gap-0.5" role="group" aria-label="View">
          <Link
            href={`/crm/${mod.key}${query.filter ? `?filter=${encodeURIComponent(query.filter)}` : ""}`}
            aria-label="List view"
            aria-current={!board}
            className={`grid size-9 place-items-center rounded-lg ${!board ? "bg-[#dfe5ff] text-[#14161c]" : "text-[#5c6170] hover:bg-[#faf7f2]"}`}
          >
            <Icon name="list" size={19} />
          </Link>
          {filterField?.options ? (
            <Link
              href={`/crm/${mod.key}?view=board${query.q ? `&q=${encodeURIComponent(query.q)}` : ""}`}
              aria-label="Kanban view"
              aria-current={board}
              className={`grid size-9 place-items-center rounded-lg ${board ? "bg-[#dfe5ff] text-[#14161c]" : "text-[#5c6170] hover:bg-[#faf7f2]"}`}
            >
              <Icon name="kanban" size={19} />
            </Link>
          ) : null}
        </div>

        <div className="ml-auto flex flex-wrap items-center gap-2 max-sm:mt-1 max-sm:w-full">
          <form
            role="search"
            className="relative max-sm:flex-1"
            onSubmit={(e) => {
              e.preventDefault();
              go({ q: String(new FormData(e.currentTarget).get("q") ?? "").trim() || undefined });
            }}
          >
            <Icon name="search" size={16} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#5c6170]" />
            <input
              key={query.q ?? ""}
              name="q"
              type="search"
              defaultValue={query.q ?? ""}
              placeholder={`Search ${mod.plural.toLowerCase()}`}
              aria-label={`Search ${mod.plural}`}
              className={`${inputClass} h-9 w-full py-0 pl-9 sm:w-56`}
            />
          </form>
          <div className="flex">
            <Link href={`/crm/${mod.key}/new`} className="inline-flex h-9 items-center rounded-l-[6px] bg-[#2d4fe0] px-4 text-[14px] font-bold text-white transition-colors duration-200 hover:bg-[#2443cc]">
              Create {mod.singular}
            </Link>
            <Menu
              label="More create options"
              align="right"
              trigger={
                <span className="grid h-9 w-9 place-items-center rounded-r-[6px] border-l border-[#4f6cf2] bg-[#2d4fe0] text-white transition-colors duration-200 hover:bg-[#2443cc]">
                  <Icon name="chevronDown" size={16} />
                </span>
              }
            >
              {(close) =>
                (["leads", "contacts", "accounts", "deals", "tasks"] as const).map((k) => (
                  <Link key={k} href={`/crm/${k}/new`} onClick={close} className={menuItem}>
                    <Icon name={k} size={16} className="text-[#5c6170]" /> Create {getModule(k)!.singular}
                  </Link>
                ))
              }
            </Menu>
          </div>
          <Menu label="More actions" align="right" trigger={<span className={btnIcon}><Icon name="more" size={18} /></span>}>
            {(close) => (
              <>
                <button
                  type="button"
                  className={menuItem}
                  disabled={rows.length === 0}
                  onClick={() => {
                    exportCsv();
                    close();
                  }}
                >
                  <Icon name="download" size={16} className="text-[#5c6170]" /> Export {rows.length} {rows.length === 1 ? "record" : "records"} (CSV)
                </button>
                <button
                  type="button"
                  className={menuItem}
                  disabled={visibleSelected.size === 0}
                  onClick={() => {
                    close();
                    deleteSelected();
                  }}
                >
                  <Icon name="trash" size={16} className="text-[#5c6170]" /> Delete selected ({visibleSelected.size})
                </button>
              </>
            )}
          </Menu>
        </div>
      </div>

      {/* Body */}
      <div className="flex min-h-0 flex-1 gap-4 p-4 sm:p-5">
        {panelOpen && filterField?.options ? (
          <aside className="hidden w-[270px] shrink-0 self-start rounded-xl border border-[#ebe5dc] bg-white md:block" aria-label="Filters">
            <div className="flex items-center justify-between border-b border-[#f3efe8] px-4 py-3">
              <h2 className="text-[15px] font-bold">Filter {mod.plural} by</h2>
              {active.length ? (
                <button type="button" onClick={() => go({ filter: undefined })} className="cursor-pointer text-[13px] text-[#2d4fe0] hover:underline">
                  Clear
                </button>
              ) : null}
            </div>
            <div className="p-3">
              <label className="relative block">
                <span className="sr-only">Search filters</span>
                <Icon name="search" size={15} className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-[#686c79]" />
                <input value={filterSearch} onChange={(e) => setFilterSearch(e.target.value)} placeholder="Search filters" className={`${inputClass} h-8 py-0 pl-8 text-[13px]`} />
              </label>
              <p className="flex items-center gap-1.5 pt-4 pb-2 text-[14px] font-bold">
                <Icon name="chevronDown" size={14} /> {filterField.label}
              </p>
              <ul className="flex flex-col">
                {filterField.options
                  .filter((o) => o.toLowerCase().includes(filterSearch.trim().toLowerCase()))
                  .map((o) => {
                    const count = state[mod.key].filter((r) => r[filterField.name] === o && !(mod.key === "leads" && r.converted_at)).length;
                    return (
                      <li key={o}>
                        <label className="flex cursor-pointer items-center gap-2.5 rounded-[4px] px-1.5 py-1.5 text-[14px] text-[#14161c] hover:bg-[#faf7f2]">
                          <input type="checkbox" checked={active.includes(o)} onChange={() => toggleFilter(o)} className="size-4 accent-[#2d4fe0]" />
                          <span className="flex-1">{o}</span>
                          <span className="text-[12px] text-[#686c79]">{count}</span>
                        </label>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </aside>
        ) : null}

        <div className="min-w-0 flex-1">
          {board && filterField?.options ? (
            <KanbanBoard mod={mod} rows={rows} field={filterField.name} options={filterField.options} />
          ) : (
            <div className="rounded-xl border border-[#ebe5dc] bg-white">
              {rows.length > 0 ? (
                <>
                  <RecordTable
                    mod={mod}
                    rows={rows}
                    sort={{ params: Object.fromEntries(Object.entries(query).filter(([, v]) => v)) as Record<string, string>, current: query.sort, dir: query.dir }}
                    selected={visibleSelected}
                    onToggle={(id) =>
                      setSelected((s) => {
                        const next = new Set(s);
                        if (next.has(id)) next.delete(id);
                        else next.add(id);
                        return next;
                      })
                    }
                    onToggleAll={() => setSelected(visibleSelected.size === rows.length ? new Set() : new Set(rows.map((r) => r.id)))}
                  />
                  <div className="flex items-center justify-between border-t border-[#f3efe8] px-5 py-2.5 text-[13px] text-[#5c6170]">
                    <span>
                      Total Records <strong className="text-[#14161c]">{rows.length}</strong>
                      {visibleSelected.size ? <> · {visibleSelected.size} selected</> : null}
                    </span>
                    {mod.key === "deals" ? (
                      <span>
                        Sum of amount <strong className="text-[#14161c]">{formatCurrency(total)}</strong>
                      </span>
                    ) : null}
                  </div>
                </>
              ) : query.q || query.filter ? (
                <EmptyState title="No matching records" body="Try a different search term or clear the filters." />
              ) : (
                <EmptyState
                  title={`No ${mod.plural.toLowerCase()} yet`}
                  body={`${mod.plural} you create will show up here.`}
                  action={{ href: `/crm/${mod.key}/new`, label: `Create ${mod.singular}` }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
