import type { Metadata } from "next";
import { EmptyState } from "@/components/dashboard/empty-state";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Customers" };

export default function CustomersPage() {
  return (
    <>
      <PageHeader
        title="Customers"
        description="Manage accounts, contacts, and subscriptions."
        actions={<Button>Add customer</Button>}
      />
      <EmptyState
        icon="users"
        title="No customers yet"
        description="Add your first customer or import a list to get started."
        action={<Button variant="outline">Import customers</Button>}
      />
    </>
  );
}
