import type { Metadata } from "next";
import { ListView } from "@/components/crm/views/ListView";
import { getModule } from "@/lib/modules";

export async function generateMetadata({ params }: PageProps<"/crm/[module]">): Promise<Metadata> {
  return { title: getModule((await params).module)?.plural ?? "Not found" };
}

function str(value: string | string[] | undefined) {
  return typeof value === "string" ? value : undefined;
}

export default async function ModuleListPage({ params, searchParams }: PageProps<"/crm/[module]">) {
  const { module } = await params;
  const sp = await searchParams;
  return (
    <ListView
      moduleKey={module}
      query={{ q: str(sp.q), filter: str(sp.filter), sort: str(sp.sort), dir: str(sp.dir) }}
      board={sp.view === "board"}
    />
  );
}
