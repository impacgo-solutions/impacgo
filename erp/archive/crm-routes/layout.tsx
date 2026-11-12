import type { Metadata } from "next";
import { CrmShell } from "@/components/crm/CrmShell";
import { CrmProvider } from "@/lib/crm-store";

// The CRM is a sample-data demo — keep every page of it out of search results.
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function CrmLayout({ children }: LayoutProps<"/crm">) {
  return (
    <CrmProvider>
      <CrmShell>{children}</CrmShell>
    </CrmProvider>
  );
}
