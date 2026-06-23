import { Clock, DollarSign, HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully licensed master electricians with $2M liability coverage." },
  { icon: Clock, title: "Fast Response Time", desc: "Same-day quotes and emergency dispatch within 60 minutes." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "Flat-rate quotes signed off before any work begins." },
  { icon: Users, title: "Experienced Electricians", desc: "15+ years average tenure. Background-checked technicians." },
  { icon: Sparkles, title: "Emergency Support", desc: "24/7 hotline for power outages, breakers, and hazards." },
  { icon: HeartHandshake, title: "Satisfaction Guarantee", desc: "Workmanship warranty on every installation we deliver." },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">Why Choose Us</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-secondary sm:text-5xl">
              The standard for premium electrical service.
            </h2>
            <p className="mt-5 text-muted-foreground">
              We've built our reputation on doing the job right the first time — with the
              transparency, safety, and craftsmanship our clients expect.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
                style={{ marginTop: i % 2 === 1 ? "1.5rem" : 0 }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-[#FF9A3C] text-primary-foreground shadow-[0_10px_25px_-10px_rgba(255,107,0,0.7)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-extrabold text-secondary">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
