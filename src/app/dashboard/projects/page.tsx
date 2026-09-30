import type { Metadata } from "next";
import { EmptyState } from "@/components/dashboard/empty-state";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Plan, track, and ship work across your team."
        actions={<Button>New project</Button>}
      />
      <EmptyState
        icon="folder"
        title="No projects yet"
        description="Create your first project to start organizing tasks and collaborating with your team."
        action={<Button>Create project</Button>}
      />
    </>
  );
}
