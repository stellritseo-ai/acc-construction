import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Careers } from "@/components/site/Careers";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";

function CareersPage() {
  const { t } = useLanguage();
  return (
    <SiteLayout>
      <PageHeader
        eyebrow={t("Careers", "Carreras")}
        title={t("Join the R&E Electrical Crew", "Únase al Equipo de R&E Electrical")}
        subtitle={t("We are always hiring talented electricians, journeymen, and helpers in Florida.", "Siempre estamos contratando electricistas talentosos, jornaleros y ayudantes en Florida.")}
      />
      <Careers />
      <EmergencyCTA />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers & Job Openings | R&E Electrical Contractor Corp" },
      { name: "description", content: "Apply for electrician jobs, journeyman positions, and apprenticeships at Florida's trusted contractor. Competitive pay & premium benefits." },
      { property: "og:title", content: "Careers | R&E Electrical Contractor Corp" },
      { property: "og:description", content: "Join our licensed electrical crew in South Florida." },
    ],
  }),
  component: CareersPage,
});
