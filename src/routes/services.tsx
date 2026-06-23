import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/sections/PageHeader";
import { Services } from "@/components/site/sections/Services";
import { Process } from "@/components/site/sections/Process";
import { EmergencyCTA } from "@/components/site/sections/EmergencyCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Electrical Services | Voltline Contractors" },
      { name: "description", content: "Residential, commercial, industrial, EV chargers, generators, panel upgrades and emergency electrical services in Miami." },
      { property: "og:title", content: "Electrical Services | Voltline" },
      { property: "og:description", content: "Full-spectrum electrical services across South Florida." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Services" title="Every wire. Every watt." subtitle="One licensed team for every electrical need — residential to industrial." />
      <Services />
      <Process />
      <EmergencyCTA />
    </SiteLayout>
  ),
});
