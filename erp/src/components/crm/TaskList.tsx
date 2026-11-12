"use client";

import Link from "next/link";
import { useCrm } from "@/lib/crm-store";
import { formatDate } from "@/lib/modules";
import { today, type RecordRow } from "@/lib/crm-data";
import { Badge } from "@/components/crm/ui";

/* Compact task rows with a completion checkbox. */
export function TaskList({ tasks, showRelated = true }: { tasks: RecordRow[]; showRelated?: boolean }) {
  const { toggleTask } = useCrm();
  const now = today();

  return (
    <ul className="divide-y divide-border">
      {tasks.map((task) => {
        const done = task.status === "Completed";
        const due = task.due_date as string | null;
        const overdue = !done && due != null && due < now;
        const related = task._ref_related_to as string | null;
        const [relModule, relId] = String(task.related_to ?? "").split(":");
        return (
          <li key={task.id} className="flex items-start gap-3 px-5 py-3">
            <input
              type="checkbox"
              checked={done}
              aria-label={`Mark “${task._title}” ${done ? "not completed" : "completed"}`}
              onChange={(e) => toggleTask(task.id, e.target.checked)}
              className="mt-1 size-4 shrink-0 cursor-pointer accent-[#2d4fe0]"
            />
            <div className="min-w-0 flex-1">
              <Link
                href={`/crm/tasks/${task.id}`}
                className={`font-medium text-[14px] hover:underline ${done ? "text-[#999] line-through" : "text-black"}`}
              >
                {task._title}
              </Link>
              <p className="flex flex-wrap gap-x-2 text-[12px] text-[#666]">
                {due ? <span className={overdue ? "text-[#c4161c]" : ""}>{overdue ? "Overdue · " : ""}{formatDate(due)}</span> : null}
                {showRelated && related ? (
                  <Link href={`/crm/${relModule}/${relId}`} className="text-[#2d4fe0] hover:underline">
                    {related}
                  </Link>
                ) : null}
              </p>
            </div>
            {task.priority === "High" && !done ? <Badge value="High" /> : null}
          </li>
        );
      })}
    </ul>
  );
}
