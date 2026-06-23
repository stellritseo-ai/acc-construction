import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/sections/Hero";
import { TrustBar } from "@/components/site/sections/TrustBar";
import { About } from "@/components/site/sections/About";
import { Services } from "@/components/site/sections/Services";
import { WhyChooseUs } from "@/components/site/sections/WhyChooseUs";
import { Projects } from "@/components/site/sections/Projects";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { Process } from "@/components/site/sections/Process";
import { EmergencyCTA } from "@/components/site/sections/EmergencyCTA";
import { Estimate } from "@/components/site/sections/Estimate";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Voltline | Premium Electrical Contractors in Miami" },
      { name: "description", content: "Licensed, insured electricians delivering residential, commercial, and industrial electrical solutions across South Florida." },
      { property: "og:title", content: "Voltline | Premium Electrical Contractors" },
      { property: "og:description", content: "Powering homes and businesses with expert electrical solutions." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <Process />
      <EmergencyCTA />
      <Estimate />
      <Toaster />
    </SiteLayout>
  );
}
