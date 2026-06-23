import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/sections/PageHeader";
import { Estimate } from "@/components/site/sections/Estimate";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Free Estimate & Contact | Voltline Electrical" },
      { name: "description", content: "Get a free, transparent electrical estimate from Miami's trusted licensed contractors. Call (305) 555-1234." },
      { property: "og:title", content: "Contact Voltline Electrical" },
      { property: "og:description", content: "Free electrical estimates within 24 hours." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Contact" title="Let's power your next project." subtitle="Free estimates within 24 hours — no pressure, fully transparent." />
      <Estimate />
      <Toaster />
    </SiteLayout>
  ),
});
