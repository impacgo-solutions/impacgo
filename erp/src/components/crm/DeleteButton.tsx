"use client";

import { btnDanger } from "@/components/crm/ui";

export function DeleteButton({ label, onDelete }: { label: string; onDelete: () => void }) {
  return (
    <button
      type="button"
      className={btnDanger}
      onClick={() => {
        if (window.confirm(`Delete this ${label.toLowerCase()}? This can't be undone.`)) onDelete();
      }}
    >
      Delete
    </button>
  );
}
