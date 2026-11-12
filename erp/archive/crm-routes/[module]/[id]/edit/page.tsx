import type { Metadata } from "next";
import { EditRecordView } from "@/components/crm/views/FormViews";

export const metadata: Metadata = { title: "Edit" };

export default async function EditRecordPage({ params }: PageProps<"/crm/[module]/[id]/edit">) {
  const { module, id } = await params;
  return <EditRecordView moduleKey={module} id={Number(id)} />;
}
