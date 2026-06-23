import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Jessica M.",
    role: "Homeowner, Coral Gables",
    quote: "Voltline rewired our 1940s house in a week. Spotless, on time, and the team was unbelievably professional.",
    initials: "JM",
  },
  {
    name: "David R.",
    role: "Restaurant Owner, Wynwood",
    quote: "They redid our entire kitchen and dining room lighting overnight so we wouldn't lose a day of service. Incredible.",
    initials: "DR",
  },
  {
    name: "Priya S.",
    role: "Office Manager, Brickell",
    quote: "From quote to install, transparent every step. Our new panel and EV chargers are humming along beautifully.",
    initials: "PS",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">What Clients Say</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-secondary sm:text-5xl">
            Loved by 300+ homes and businesses.
          </h2>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-border bg-white px-5 py-2 shadow-sm">
            <span className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
            </span>
            <span className="font-bold text-secondary">4.9 / 5</span>
            <span className="text-sm text-muted-foreground">300+ Google reviews</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="relative rounded-3xl border border-border bg-white p-8 shadow-sm">
              <Quote className="absolute -top-4 right-6 h-12 w-12 text-primary/15" />
              <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary" />)}
              </div>
              <blockquote className="mt-5 text-lg font-medium leading-relaxed text-secondary">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-[#FF9A3C] font-display text-sm font-extrabold text-primary-foreground">
                  {r.initials}
                </div>
                <div>
                  <div className="font-bold text-secondary">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
