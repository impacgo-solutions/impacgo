"use client";

import { PageBody } from "@/components/crm/CrmShell";
import { RecordTable } from "@/components/crm/RecordTable";
import { Card, EmptyState } from "@/components/crm/ui";
import { useCrm } from "@/lib/crm-store";
import { searchAll } from "@/lib/crm-data";
import { MODULES } from "@/lib/modules";

export function SearchView({ q }: { q: string }) {
  const { state } = useCrm();
  const groups = searchAll(state, q);
  const total = groups.reduce((s, g) => s + g.rows.length, 0);

  return (
    <PageBody>
      <p className="pb-4 text-[15px] text-[#5c6170]">
        {q ? (
          <>
            {total} {total === 1 ? "result" : "results"} for <strong className="text-[#14161c]">“{q}”</strong>
          </>
        ) : (
          "Type in the search box above to find records across every module."
        )}
      </p>
      {q && total === 0 ? (
        <Card>
          <EmptyState title="No records found" body="Check the spelling or try a shorter search term." />
        </Card>
      ) : (
        <div className="flex flex-col gap-4">
          {groups.map((g) => (
            <Card key={g.module} title={`${MODULES[g.module].plural} (${g.rows.length})`}>
              <RecordTable mod={MODULES[g.module]} rows={g.rows} />
            </Card>
          ))}
        </div>
      )}
    </PageBody>
  );
}
