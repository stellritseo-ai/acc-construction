import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/sections/PageHeader";
import { About } from "@/components/site/sections/About";
import { WhyChooseUs } from "@/components/site/sections/WhyChooseUs";
import { Process } from "@/components/site/sections/Process";
import { EmergencyCTA } from "@/components/site/sections/EmergencyCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Voltline | Miami Master Electricians" },
      { name: "description", content: "Family-owned electrical contractors with 15+ years powering Miami homes and businesses safely and beautifully." },
      { property: "og:title", content: "About Voltline" },
      { property: "og:description", content: "Miami's trusted licensed electrical contractors." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="About Us" title="Built on craft. Powered by trust." subtitle="A family-owned team of master electricians serving South Florida since 2009." />
      <About />
      <WhyChooseUs />
      <Process />
      <EmergencyCTA />
    </SiteLayout>
  ),
});
