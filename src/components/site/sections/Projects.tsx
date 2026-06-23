import { useState } from "react";
import { MapPin } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/service-commercial.jpg";
import p6 from "@/assets/service-ev.jpg";
import { cn } from "@/lib/utils";

const all = [
  { img: p1, title: "Luxury Home Lighting", cat: "Residential", loc: "Coral Gables, FL", tall: true },
  { img: p2, title: "Corporate Atrium Install", cat: "Commercial", loc: "Brickell, FL" },
  { img: p3, title: "Warehouse High-Bay LED", cat: "Industrial", loc: "Doral, FL", tall: true },
  { img: p4, title: "Restaurant Ambient Lighting", cat: "Commercial", loc: "Wynwood, FL" },
  { img: p5, title: "Office Build-out", cat: "Commercial", loc: "Aventura, FL" },
  { img: p6, title: "Home EV Charger", cat: "Residential", loc: "Pinecrest, FL" },
];
const cats = ["All", "Residential", "Commercial", "Industrial"] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const items = active === "All" ? all : all.filter((p) => p.cat === active);

  return (
    <section id="projects" className="section-padding bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex rounded-full bg-primary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">Featured Projects</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Recent work, hand-picked.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition",
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-white/20 bg-white/5 text-white/80 hover:border-white/40",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article
              key={p.title}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-white/10",
                p.tall ? "row-span-2" : "",
              )}
            >
              <img
                src={p.img}
                alt={p.title}
                className={cn(
                  "w-full object-cover transition-transform duration-700 group-hover:scale-110",
                  p.tall ? "h-[520px]" : "h-64",
                )}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase text-primary-foreground">{p.cat}</span>
                <h3 className="mt-3 font-display text-xl font-extrabold">{p.title}</h3>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-white/70">
                  <MapPin className="h-3.5 w-3.5" /> {p.loc}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
