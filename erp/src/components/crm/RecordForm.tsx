"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent, type ReactNode } from "react";
import { useCrm } from "@/lib/crm-store";
import type { Field, ModuleDef } from "@/lib/modules";
import { getFormOptions, parseForm, type FormErrors, type FormValues, type Option, type RelatedGroup } from "@/lib/crm-data";
import { btnPrimary, btnSecondary, inputClass } from "@/components/crm/ui";

type Props = {
  mod: ModuleDef;
  recordId: number | null;
  initial: FormValues;
  cancelHref: string;
  title: string;
};

/* Sticky action bar used by the record and conversion forms. */
export function FormBar({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="sticky top-[64px] z-10 flex flex-wrap items-center gap-3 border-b border-[#ebe5dc] bg-white px-4 py-3 sm:px-5">
      <h2 className="mr-auto text-[20px] font-bold text-[#14161c]">{title}</h2>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}

/* Zoho-style form row: label on the left, control on the right (stacked on phones). */
export function FormRow({ id, label, required, error, children }: { id: string; label: string; required?: boolean; error?: string; children: ReactNode }) {
  return (
    <div className="grid items-start gap-1.5 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-4">
      <label htmlFor={id} className="pt-2 text-[14px] text-[#464b57] md:text-right">
        {label}
        {required ? <span className="text-[#e5373d]"> *</span> : null}
      </label>
      <div>
        {children}
        {error ? (
          <p id={`${id}-error`} className="pt-1 text-[13px] text-[#c4161c]">
            {error}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function Control({ field, value, error, refs, related }: { field: Field; value: string; error?: string; refs: Record<string, Option[]>; related: RelatedGroup[] }) {
  const id = `field-${field.name}`;
  const common = {
    id,
    name: field.name,
    defaultValue: value,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
    className: inputClass,
  };
  switch (field.type) {
    case "textarea":
      return <textarea {...common} rows={4} />;
    case "select":
      return (
        <select {...common}>
          {!field.required ? <option value="">-None-</option> : null}
          {field.options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      );
    case "ref":
      return (
        <select {...common}>
          <option value="">-None-</option>
          {(refs[field.name] ?? []).map((o) => (
            <option key={o.id} value={o.id}>
              {o.title}
            </option>
          ))}
        </select>
      );
    case "related":
      return (
        <select {...common}>
          <option value="">-None-</option>
          {related.map((group) =>
            group.options.length > 0 ? (
              <optgroup key={group.module} label={group.label}>
                {group.options.map((o) => (
                  <option key={o.id} value={`${group.module}:${o.id}`}>
                    {o.title}
                  </option>
                ))}
              </optgroup>
            ) : null,
          )}
        </select>
      );
    case "currency":
    case "number":
      return <input {...common} type="text" inputMode="decimal" />;
    default:
      return <input {...common} type={field.type} />;
  }
}

export function RecordForm({ mod, recordId, initial, cancelHref, title }: Props) {
  const { state, save } = useCrm();
  const router = useRouter();
  const [errors, setErrors] = useState<FormErrors>({});
  const [formKey, setFormKey] = useState(0);
  const [savedNotice, setSavedNotice] = useState<{ id: number; title: string } | null>(null);
  const { refs, related } = getFormOptions(state, mod);
  const errorCount = Object.keys(errors).length;
  const main = mod.fields.filter((f) => f.type !== "textarea");
  const long = mod.fields.filter((f) => f.type === "textarea");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const andNew = (e.nativeEvent as SubmitEvent).submitter?.getAttribute("value") === "new";
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(mod.fields.map((f) => [f.name, String(formData.get(f.name) ?? "")]));
    const result = parseForm(state, mod, values);
    setErrors(result.errors);
    if (Object.keys(result.errors).length > 0) return;
    const id = save(mod.key, recordId, result.data);
    if (andNew) {
      // Stay on the form, reset it, and confirm what was saved.
      setSavedNotice({ id, title: values.last_name ? `${values.first_name} ${values.last_name}`.trim() : values.name || values.subject || mod.singular });
      setFormKey((k) => k + 1);
      window.scrollTo({ top: 0 });
      return;
    }
    router.push(`/crm/${mod.key}/${id}`);
  }

  return (
    <form key={formKey} onSubmit={submit} noValidate>
      <FormBar title={title}>
        <Link href={cancelHref} className={btnSecondary}>
          Cancel
        </Link>
        {recordId == null ? (
          <button type="submit" value="new" className={btnSecondary}>
            Save and New
          </button>
        ) : null}
        <button type="submit" value="save" className={btnPrimary}>
          Save
        </button>
      </FormBar>

      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 p-4 sm:p-5">
        {savedNotice ? (
          <p role="status" className="rounded-lg border border-[#bbe8cc] bg-[#ecfdf3] px-4 py-2.5 text-[14px] text-[#166534]">
            {mod.singular} saved:{" "}
            <Link href={`/crm/${mod.key}/${savedNotice.id}`} className="font-bold underline">
              {savedNotice.title}
            </Link>
            . Add the next one below.
          </p>
        ) : null}
        {errorCount > 0 ? (
          <p role="alert" className="rounded-lg bg-[#fdecec] px-4 py-2.5 text-[14px] text-[#c4161c]">
            Please fix {errorCount === 1 ? "the highlighted field" : `the ${errorCount} highlighted fields`}.
          </p>
        ) : null}

        <section className="rounded-xl border border-[#ebe5dc] bg-white">
          <h3 className="border-b border-[#f3efe8] px-5 py-3 text-[15px] font-bold">{mod.singular} Information</h3>
          <div className="grid gap-x-10 gap-y-4 p-5 md:grid-cols-2">
            {main.map((field) => (
              <FormRow key={field.name} id={`field-${field.name}`} label={field.label} required={field.required} error={errors[field.name]}>
                <Control field={field} value={initial[field.name] ?? ""} error={errors[field.name]} refs={refs} related={related} />
              </FormRow>
            ))}
          </div>
        </section>

        {long.length > 0 ? (
          <section className="rounded-xl border border-[#ebe5dc] bg-white">
            <h3 className="border-b border-[#f3efe8] px-5 py-3 text-[15px] font-bold">Description Information</h3>
            <div className="grid gap-4 p-5">
              {long.map((field) => (
                <div key={field.name} className="grid items-start gap-1.5 md:grid-cols-[minmax(0,1fr)_minmax(0,4fr)] md:gap-4">
                  <label htmlFor={`field-${field.name}`} className="pt-2 text-[14px] text-[#464b57] md:text-right">
                    {field.label}
                  </label>
                  <Control field={field} value={initial[field.name] ?? ""} error={errors[field.name]} refs={refs} related={related} />
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </form>
  );
}
