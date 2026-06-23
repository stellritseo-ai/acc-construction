import { ClipboardList, Search, ShieldCheck, Wrench } from "lucide-react";

const steps = [
  { n: "01", icon: ClipboardList, title: "Consultation", desc: "Tell us your project. Free quote within 24 hours." },
  { n: "02", icon: Search, title: "Inspection", desc: "On-site assessment, code review, scope finalization." },
  { n: "03", icon: Wrench, title: "Installation", desc: "Master electricians execute with precision and care." },
  { n: "04", icon: ShieldCheck, title: "Quality Check", desc: "Inspection, sign-off, and a workmanship warranty." },
];

export function Process() {
  return (
    <section className="section-padding bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">Our Process</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-secondary sm:text-5xl">
            Simple, transparent, on schedule.
          </h2>
        </div>

        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
          <ol className="grid gap-8 lg:grid-cols-4">
            {steps.map(({ n, icon: Icon, title, desc }) => (
              <li key={n} className="relative">
                <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-white shadow-[var(--shadow-card)] ring-4 ring-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                  <span className="absolute -top-2 -right-2 grid h-8 w-8 place-items-center rounded-full bg-secondary text-xs font-extrabold text-white">
                    {n}
                  </span>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-display text-xl font-extrabold text-secondary">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
