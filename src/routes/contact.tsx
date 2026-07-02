import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Estimate } from "@/components/site/Estimate";
import { Toaster } from "@/components/ui/sonner";
import { useLanguage } from "@/hooks/useLanguage";

function ContactPage() {
  const { t } = useLanguage();
  return (
    <SiteLayout>
      <PageHeader
        eyebrow={t("Contact", "Contacto")}
        title={t("Let's power your next project.", "Alimentemos su próximo proyecto.")}
        subtitle={t("Free estimates within 24 hours — no pressure, fully transparent.", "Presupuestos gratuitos en 24 horas — sin presiones, totalmente transparentes.")}
      />
      <Estimate />
      <Toaster />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Free Estimate & Contact | R&E Electrical Contractor Corp" },
      { name: "description", content: "Get a free, transparent electrical estimate from Florida's trusted licensed contractors. Call (786) 307-5933." },
      { property: "og:title", content: "Contact R&E Electrical Contractor Corp" },
      { property: "og:description", content: "Free electrical estimates within 24 hours." },
    ],
  }),
  component: ContactPage,
});
