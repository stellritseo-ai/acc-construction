import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";

function AboutPage() {
  const { t } = useLanguage();
  return (
    <SiteLayout>
      <PageHeader
        eyebrow={t("About Us", "Sobre Nosotros")}
        title={t("Built on craft. Powered by trust.", "Construido sobre mano de obra. Impulsado por la confianza.")}
        subtitle={t("A family-owned team of master electricians serving Florida since 2009.", "Un equipo familiar de maestros electricistas que sirve a Florida desde 2009.")}
      />
      <About />
      <WhyChooseUs />
      <Process />
      <EmergencyCTA />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About R&E Electrical Contractor Corp | Florida Master Electricians" },
      { name: "description", content: "Family-owned electrical contractors with 15+ years powering Florida homes and businesses safely and beautifully." },
      { property: "og:title", content: "About R&E Electrical Contractor Corp" },
      { property: "og:description", content: "Florida's trusted licensed electrical contractors." },
    ],
  }),
  component: AboutPage,
});
