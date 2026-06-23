import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/sections/PageHeader";
import { Projects } from "@/components/site/sections/Projects";
import { EmergencyCTA } from "@/components/site/sections/EmergencyCTA";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Featured Projects | Voltline Electrical" },
      { name: "description", content: "Recent residential, commercial, and industrial electrical projects across South Florida." },
      { property: "og:title", content: "Featured Projects | Voltline" },
      { property: "og:description", content: "Hand-picked recent electrical installations." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Projects" title="Work we're proud of." subtitle="A snapshot of recent installations from the Voltline crew." />
      <Projects />
      <EmergencyCTA />
    </SiteLayout>
  ),
});
