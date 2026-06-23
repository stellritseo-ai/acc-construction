import { ArrowRight, Phone, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function EmergencyCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-secondary py-20 text-white">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <Zap className="h-3.5 w-3.5" /> 24/7 Emergency
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Need immediate electrical assistance?
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-white/70">
            Our licensed electricians are on call and ready to dispatch — anywhere across South Florida.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="hero" size="xl">
            <a href="tel:+13055551234"><Phone className="h-4 w-4" /> Call Now</a>
          </Button>
          <Button asChild variant="heroOutline" size="xl">
            <Link to="/contact">Request Service <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
