import { BadgeCheck, Clock, ShieldCheck, Star, Wrench } from "lucide-react";

const items = [
  { icon: Star, label: "Google Reviews", sub: "4.9 ★ 300+" },
  { icon: BadgeCheck, label: "HomeAdvisor", sub: "Top Rated" },
  { icon: ShieldCheck, label: "BBB Accredited", sub: "A+ Rated" },
  { icon: Wrench, label: "Licensed & Insured", sub: "EC13009876" },
  { icon: Clock, label: "24/7 Emergency", sub: "Service Available" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
        {items.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-bold text-secondary">{label}</div>
              <div className="truncate text-xs text-muted-foreground">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
