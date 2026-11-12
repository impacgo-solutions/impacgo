"use client";

import Link from "next/link";
import { useState, type DragEvent } from "react";
import { useCrm } from "@/lib/crm-store";
import { formatCurrency, formatDate, type ModuleDef } from "@/lib/modules";
import type { RecordRow } from "@/lib/crm-data";

/* Status dot colour per column, in order. */
const DOTS = ["#2d4fe0", "#6d4ef0", "#e65a3d", "#e0a020", "#7a52c7", "#8b6cf6", "#16a34a", "#8a8e99"];

type Props = { mod: ModuleDef; rows: RecordRow[]; field: string; options: readonly string[] };

/* Kanban grouped by a picklist field; drag a card to another column to change it. */
export function KanbanBoard({ mod, rows, field, options }: Props) {
  const { save } = useCrm();
  const [dragging, setDragging] = useState<number | null>(null);
  const [over, setOver] = useState<string | null>(null);
  const lines = mod.fields.filter((f) => f.list && f.name !== field && f.type !== "related").slice(0, 2);
  const isDeals = mod.key === "deals";

  function move(id: number, value: string) {
    if (rows.find((r) => r.id === id)?.[field] !== value) save(mod.key, id, { [field]: value });
  }

  // The dragged id travels in the DataTransfer (Firefox won't start a drag
  // without data); `dragging` state only drives the card's styling.
  function drop(e: DragEvent<HTMLElement>, value: string) {
    e.preventDefault();
    const id = Number(e.dataTransfer.getData("text/plain"));
    if (id) move(id, value);
    setDragging(null);
    setOver(null);
  }

  return (
    // `relative` keeps the cards' absolutely positioned sr-only labels inside the scroller.
    <div className="relative flex gap-3 overflow-x-auto pb-4">
      {options.map((value, i) => {
        const dot = DOTS[i % DOTS.length];
        const cards = rows.filter((r) => r[field] === value);
        const total = cards.reduce((s, r) => s + (Number(r.amount) || 0), 0);
        return (
          <section
            key={value}
            aria-label={value}
            onDragOver={(e) => {
              e.preventDefault();
              setOver(value);
            }}
            onDragLeave={() => setOver((o) => (o === value ? null : o))}
            onDrop={(e) => drop(e, value)}
            className={`flex w-[280px] shrink-0 flex-col rounded-2xl border bg-[#f3eee6] transition-[border-color,background-color] duration-200 ${
              over === value ? "border-[#aebdff] bg-[#eef1ff]" : "border-transparent"
            }`}
          >
            <header className="flex items-center gap-2 px-3.5 pt-3.5 pb-2">
              <span aria-hidden className="size-2.5 shrink-0 rounded-full" style={{ background: dot, boxShadow: `0 0 0 3px ${dot}22` }} />
              <h2 className="truncate text-[14px] font-semibold text-[#14161c]">{value}</h2>
              <span className="rounded-full bg-white px-2 py-0.5 text-[12px] font-semibold text-[#5c6170] shadow-[0_1px_2px_rgb(20_22_28/6%)]">{cards.length}</span>
              {isDeals ? <span className="ml-auto text-[12px] font-semibold text-[#464b57] tabular-nums">{formatCurrency(total)}</span> : null}
            </header>
            <div className="flex min-h-[160px] flex-1 flex-col gap-2 p-2 pt-1">
              {cards.map((row) => (
                <article
                  key={row.id}
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.effectAllowed = "move";
                    e.dataTransfer.setData("text/plain", String(row.id));
                    setDragging(row.id);
                  }}
                  onDragEnd={() => {
                    setDragging(null);
                    setOver(null);
                  }}
                  className={`cursor-grab rounded-xl border border-[#ebe5dc] bg-white px-3.5 py-3 shadow-[0_1px_2px_rgb(20_22_28/5%)] transition-[translate,box-shadow,opacity] duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgb(20_22_28/18%)] active:cursor-grabbing ${
                    dragging === row.id ? "opacity-50" : ""
                  }`}
                >
                  <Link href={`/crm/${mod.key}/${row.id}`} draggable={false} className="block truncate text-[15px] font-bold text-[#14161c] hover:text-[#2d4fe0]">
                    {row._title}
                  </Link>
                  {lines.map((f) => {
                    const v = f.type === "ref" ? row[`_ref_${f.name}`] : f.type === "currency" ? formatCurrency(row[f.name] as number | null) : f.type === "date" ? formatDate(row[f.name] as string | null) : row[f.name];
                    return v ? (
                      <p key={f.name} className="truncate pt-1 text-[14px] text-[#464b57]">
                        {v}
                      </p>
                    ) : null;
                  })}
                  <label className="sr-only" htmlFor={`move-${row.id}`}>
                    Move {row._title}
                  </label>
                  <select
                    id={`move-${row.id}`}
                    value={value}
                    onChange={(e) => move(row.id, e.target.value)}
                    className="mt-2 w-full cursor-pointer rounded-[4px] border border-transparent bg-[#f3eee6] px-1.5 py-1 text-[12px] text-[#464b57] hover:border-[#ebe5dc]"
                  >
                    {options.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
