"use client";

import { Card, btnPrimary } from "@/components/crm/ui";

export default function CrmError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Card>
      <div className="flex flex-col items-center px-6 py-14 text-center">
        <p className="font-semibold text-[16px] text-black">Something went wrong</p>
        <p className="max-w-[380px] pt-1.5 text-[14px] text-[#666]">
          The page couldn&apos;t be loaded. Try again, and if it keeps happening check the server log.
        </p>
        <button type="button" onClick={reset} className={`${btnPrimary} mt-5`}>
          Try again
        </button>
      </div>
    </Card>
  );
}
