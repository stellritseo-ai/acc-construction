import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, BadgeCheck, Phone, ShieldCheck, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-electrician.jpg";

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Professional electrician at work" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
      </div>

      {/* Animated blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-accent/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-20">
        <div className="animate-fade-up text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-md">
            <span className="flex text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-primary" />)}
            </span>
            Trusted Electrical Contractor
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Powering Homes & Businesses With{" "}
            <span className="gradient-text-orange">Expert Electrical</span> Solutions
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Licensed, insured, and experienced electricians delivering residential, commercial,
            and industrial services with unmatched quality and reliability.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get Free Estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="tel:+13055551234">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Licensed & Insured</span>
            <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-primary" /> 24/7 Emergency</span>
            <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-primary" /> BBB Accredited</span>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto h-[520px] w-full max-w-md">
            <FloatCard className="absolute left-0 top-0" delay="0s" icon={<Zap className="h-5 w-5 text-primary" />} value="600+" label="Projects Completed" />
            <FloatCard className="absolute right-0 top-16" delay="0.4s" icon={<Award className="h-5 w-5 text-primary" />} value="15+" label="Years Experience" />
            <FloatCard className="absolute left-6 top-56" delay="0.8s" icon={<Star className="h-5 w-5 text-primary fill-primary" />} value="100%" label="Satisfaction" />
            <FloatCard className="absolute right-2 bottom-4" delay="1.2s" icon={<ShieldCheck className="h-5 w-5 text-primary" />} value="A+" label="Licensed & Insured" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatCard({
  className = "",
  icon,
  value,
  label,
  delay = "0s",
}: {
  className?: string;
  icon: React.ReactNode;
  value: string;
  label: string;
  delay?: string;
}) {
  return (
    <div
      className={`glass-card animate-float w-60 rounded-2xl p-5 ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15">{icon}</div>
        <div>
          <div className="font-display text-2xl font-extrabold text-secondary">{value}</div>
          <div className="text-xs font-medium text-secondary/70">{label}</div>
        </div>
      </div>
    </div>
  );
}
