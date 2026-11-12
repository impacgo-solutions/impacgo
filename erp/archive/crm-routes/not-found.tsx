import { Card, EmptyState } from "@/components/crm/ui";

export default function CrmNotFound() {
  return (
    <Card>
      <EmptyState
        title="Record not found"
        body="It may have been deleted, or the link is wrong."
        action={{ href: "/crm", label: "Back to Home" }}
      />
    </Card>
  );
}
