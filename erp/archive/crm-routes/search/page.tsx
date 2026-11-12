import type { Metadata } from "next";
import { SearchView } from "@/components/crm/views/SearchView";

export const metadata: Metadata = { title: "Search" };

export default async function SearchPage({ searchParams }: PageProps<"/crm/search">) {
  const { q } = await searchParams;
  return <SearchView q={typeof q === "string" ? q : ""} />;
}
