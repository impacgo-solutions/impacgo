import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConvertLeadView } from "@/components/crm/views/FormViews";

export const metadata: Metadata = { title: "Convert Lead" };

export default async function ConvertLeadPage({ params }: PageProps<"/crm/[module]/[id]/convert">) {
  const { module, id } = await params;
  if (module !== "leads") notFound();
  return <ConvertLeadView id={Number(id)} />;
}
