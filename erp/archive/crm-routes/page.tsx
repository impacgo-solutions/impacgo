import type { Metadata } from "next";
import { DashboardView } from "@/components/crm/views/DashboardView";

export const metadata: Metadata = { title: "Home" };

export default function DashboardPage() {
  return <DashboardView />;
}
