import Link from "next/link";
import type { ModuleDef } from "@/lib/modules";
import type { RecordRow } from "@/lib/crm-data";
import { FieldValue } from "@/components/crm/FieldValue";

type Props = {
  mod: ModuleDef;
  rows: RecordRow[];
  /* When set, column headers become sort links preserving these params. */
  sort?: { params: Record<string, string>; current?: string; dir?: string };
  hideField?: string;
  /* Row selection (list view). */
  selected?: Set<number>;
  onToggle?: (id: number) => void;
  onToggleAll?: () => void;
};

export function RecordTable({ mod, rows, sort, hideField, selected, onToggle, onToggleAll }: Props) {
  const cols = mod.fields.filter((f) => f.list && f.name !== hideField);
  const isPerson = mod.key === "leads" || mod.key === "contacts";
  const title = isPerson
    ? { label: `${mod.singular} Name`, column: "last_name" }
    : { label: mod.fields[0].label, column: mod.fields[0].name };
  const selectable = Boolean(selected && onToggle);
  const allSelected = selectable && rows.length > 0 && rows.every((r) => selected!.has(r.id));

  function sortHref(column: string) {
    const next = new URLSearchParams(sort?.params);
    const asc = sort?.current === column && sort.dir !== "asc";
    next.set("sort", column);
    next.set("dir", asc ? "asc" : "desc");
    return `?${next}`;
  }

  function header(label: string, column: string) {
    if (!sort) return label;
    const active = sort.current === column;
    return (
      <Link href={sortHref(column)} className="inline-flex items-center gap-1 hover:text-[#14161c]">
        {label}
        <span aria-hidden className={active ? "text-[#2d4fe0]" : "text-transparent"}>
          {active && sort.dir === "asc" ? "↑" : "↓"}
        </span>
      </Link>
    );
  }

  const check = "size-4 cursor-pointer accent-[#2d4fe0]";

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] border-collapse text-left text-[14px]">
        <thead>
          <tr className="border-b border-[#ebe5dc] bg-[#faf7f2] text-[13px] text-[#5c6170]">
            {selectable ? (
              <th scope="col" className="w-11 py-3 pl-5">
                <input type="checkbox" className={check} checked={allSelected} onChange={onToggleAll} aria-label="Select all" />
              </th>
            ) : null}
            <th scope="col" className={`py-3 font-bold ${selectable ? "pl-2" : "pl-5"} pr-4`}>
              {header(title.label, title.column)}
            </th>
            {cols.map((f) => (
              <th key={f.name} scope="col" className="px-4 py-3 font-bold whitespace-nowrap">
                {f.type === "related" || f.type === "ref" ? f.label : header(f.label, f.name)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const isSelected = selected?.has(row.id) ?? false;
            return (
              <tr
                key={row.id}
                className={`border-b border-[#f3efe8] transition-colors duration-150 last:border-b-0 ${isSelected ? "bg-[#eef1ff]" : "hover:bg-[#faf7f2]"}`}
              >
                {selectable ? (
                  <td className="py-3 pl-5">
                    <input type="checkbox" className={check} checked={isSelected} onChange={() => onToggle!(row.id)} aria-label={`Select ${row._title}`} />
                  </td>
                ) : null}
                <td className={`py-3 pr-4 whitespace-nowrap ${selectable ? "pl-2" : "pl-5"}`}>
                  <Link href={`/crm/${mod.key}/${row.id}`} className="font-bold text-[#2d4fe0] hover:underline">
                    {row._title || "(untitled)"}
                  </Link>
                </td>
                {cols.map((f) => (
                  <td key={f.name} className="max-w-[260px] truncate px-4 py-3 text-[#14161c]">
                    <FieldValue field={f} row={row} />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
