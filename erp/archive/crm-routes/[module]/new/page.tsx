import type { Metadata } from "next";
import { NewRecordView } from "@/components/crm/views/FormViews";
import { getModule } from "@/lib/modules";

export async function generateMetadata({ params }: PageProps<"/crm/[module]/new">): Promise<Metadata> {
  const mod = getModule((await params).module);
  return { title: mod ? `Create ${mod.singular}` : "Not found" };
}

export default async function NewRecordPage({ params, searchParams }: PageProps<"/crm/[module]/new">) {
  const { module } = await params;
  // Prefill from the URL, e.g. /crm/tasks/new?related_to=deals:4 from a record's related list.
  const prefill = Object.fromEntries(
    Object.entries(await searchParams).filter((entry): entry is [string, string] => typeof entry[1] === "string"),
  );
  return <NewRecordView moduleKey={module} prefill={prefill} />;
}
