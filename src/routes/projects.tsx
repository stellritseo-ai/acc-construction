import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Projects } from "@/components/site/Projects";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";

function ProjectsPage() {
  const { t } = useLanguage();
  return (
    <SiteLayout>
      <PageHeader
        eyebrow={t("Projects", "Proyectos")}
        title={t("Work we're proud of.", "Trabajo del cual estamos orgullosos.")}
        subtitle={t("A snapshot of recent installations from the R&E Electrical crew.", "Una muestra de las instalaciones recientes del equipo de R&E Electrical.")}
      />
      <Projects />
      <EmergencyCTA />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Featured Projects | R&E Electrical Contractor Corp" },
      { name: "description", content: "Recent residential, commercial, and industrial electrical projects across Florida." },
      { property: "og:title", content: "Featured Projects | R&E Electrical Contractor Corp" },
      { property: "og:description", content: "Hand-picked recent electrical installations." },
    ],
  }),
  component: ProjectsPage,
});
