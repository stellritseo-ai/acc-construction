import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/sections/PageHeader";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { EmergencyCTA } from "@/components/site/sections/EmergencyCTA";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Voltline Electrical" },
      { name: "description", content: "Read 300+ five-star reviews from Voltline's residential and commercial electrical clients." },
      { property: "og:title", content: "Customer Reviews | Voltline" },
      { property: "og:description", content: "4.9 average rating from 300+ customers." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Reviews" title="Trusted by 300+ homes & businesses." subtitle="See what our customers say about the Voltline experience." />
      <Testimonials />
      <EmergencyCTA />
    </SiteLayout>
  ),
});
