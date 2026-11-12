import type { Metadata } from "next";
import { RecordView } from "@/components/crm/views/RecordView";
import { getModule } from "@/lib/modules";

export async function generateMetadata({ params }: PageProps<"/crm/[module]/[id]">): Promise<Metadata> {
  return { title: getModule((await params).module)?.singular ?? "Not found" };
}

export default async function RecordPage({ params }: PageProps<"/crm/[module]/[id]">) {
  const { module, id } = await params;
  return <RecordView moduleKey={module} id={Number(id)} />;
}
