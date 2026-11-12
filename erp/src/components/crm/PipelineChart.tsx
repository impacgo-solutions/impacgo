import { formatCurrency } from "@/lib/modules";

type Stage = { stage: string; count: number; total: number };

/*
 * Single-series horizontal bars (deal value per stage): one hue, thin marks
 * with a 4px rounded data end, values in text ink, per-bar hover tooltip.
 */
export function PipelineChart({ data }: { data: Stage[] }) {
  const max = Math.max(...data.map((d) => d.total), 1);

  return (
    <ul className="flex flex-col gap-3 p-5" aria-label="Deal value by stage">
      {data.map((d) => {
        const pct = (d.total / max) * 100;
        const summary = `${d.stage}: ${formatCurrency(d.total)} across ${d.count} ${d.count === 1 ? "deal" : "deals"}`;
        return (
          <li
            key={d.stage}
            tabIndex={0}
            aria-label={summary}
            className="group relative grid grid-cols-[150px_minmax(0,1fr)] items-center gap-3 rounded-[4px] outline-none focus-visible:ring-2 focus-visible:ring-[#2d4fe0] max-sm:grid-cols-[110px_minmax(0,1fr)]"
          >
            <span className="truncate text-[13px] text-[#555]">{d.stage}</span>
            <div className="flex items-center gap-2">
              <div className="h-3 flex-1 rounded-r-[4px] bg-[#f1f3f6]">
                <div
                  className="h-full rounded-r-[4px] bg-[#2d4fe0] transition-[width] duration-500 group-hover:bg-[#2443cc]"
                  style={{ width: `${pct}%`, minWidth: d.total > 0 ? 4 : 0 }}
                />
              </div>
              <span className="w-[76px] shrink-0 text-right text-[13px] text-black tabular-nums">
                {formatCurrency(d.total)}
              </span>
            </div>
            <span
              role="tooltip"
              className="pointer-events-none absolute -top-8 left-[150px] z-10 hidden rounded-[4px] bg-[#1f2a3c] px-2.5 py-1 text-[12px] whitespace-nowrap text-white group-hover:block group-focus-visible:block max-sm:left-[110px]"
            >
              {summary}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
