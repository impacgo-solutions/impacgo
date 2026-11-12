import Link from "next/link";
import { formatCurrency, formatDate, type Field } from "@/lib/modules";
import type { RecordRow } from "@/lib/crm-data";
import { Badge } from "@/components/crm/ui";

const BADGE_FIELDS = new Set(["status", "stage", "priority"]);

/* Read-only rendering of one field value. */
export function FieldValue({ field, row }: { field: Field; row: RecordRow }) {
  const value = row[field.name];
  if (value == null || value === "") return <span className="text-[#999]">—</span>;

  switch (field.type) {
    case "ref": {
      const title = row[`_ref_${field.name}`];
      return title ? (
        <Link href={`/crm/${field.ref}/${value}`} className="text-[#2d4fe0] hover:underline">
          {title}
        </Link>
      ) : (
        <span className="text-[#999]">—</span>
      );
    }
    case "related": {
      const title = row[`_ref_${field.name}`];
      const [module, id] = String(value).split(":");
      return title ? (
        <Link href={`/crm/${module}/${id}`} className="text-[#2d4fe0] hover:underline">
          {title}
        </Link>
      ) : (
        <span className="text-[#999]">—</span>
      );
    }
    case "email":
      return (
        <a href={`mailto:${value}`} className="text-[#2d4fe0] hover:underline">
          {value}
        </a>
      );
    case "tel":
      return <a href={`tel:${value}`}>{value}</a>;
    case "url":
      return (
        <a href={String(value)} target="_blank" rel="noopener noreferrer" className="text-[#2d4fe0] hover:underline">
          {String(value).replace(/^https?:\/\//, "")}
        </a>
      );
    case "currency":
      return <>{formatCurrency(Number(value))}</>;
    case "number":
      return <>{Number(value).toLocaleString("en-US")}</>;
    case "date":
      return <>{formatDate(String(value))}</>;
    case "select":
      return BADGE_FIELDS.has(field.name) ? <Badge value={String(value)} /> : <>{value}</>;
    case "textarea":
      return <span className="whitespace-pre-wrap">{value}</span>;
    default:
      return <>{value}</>;
  }
}
