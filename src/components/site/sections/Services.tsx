import { ArrowUpRight, Battery, Bolt, Building2, Cable, Home, Plug, ShieldAlert, Wrench, Zap } from "lucide-react";
import resImg from "@/assets/service-residential.jpg";
import comImg from "@/assets/service-commercial.jpg";
import indImg from "@/assets/service-industrial.jpg";
import panImg from "@/assets/service-panel.jpg";
import evImg from "@/assets/service-ev.jpg";
import genImg from "@/assets/service-generator.jpg";

const services = [
  { icon: Home, title: "Residential Electrical", desc: "Whole-home wiring, lighting, smart switches, and panel installs.", img: resImg },
  { icon: Building2, title: "Commercial Electrical", desc: "Office build-outs, retail lighting, and tenant improvements.", img: comImg },
  { icon: Bolt, title: "Industrial Electrical", desc: "Heavy-duty power distribution, controls, and motor circuits.", img: indImg },
  { icon: Zap, title: "Panel Upgrades", desc: "200A / 400A service upgrades with modern breakers.", img: panImg },
  { icon: Plug, title: "EV Charger Installation", desc: "Level 2 home chargers and commercial EV stations.", img: evImg },
  { icon: Battery, title: "Generator Installation", desc: "Whole-home standby generators with auto-transfer switches.", img: genImg },
  { icon: Cable, title: "Wiring & Rewiring", desc: "Full-home rewires, knob & tube removal, code corrections.", img: resImg },
  { icon: ShieldAlert, title: "Security Systems", desc: "Cameras, low-voltage, and access control wiring.", img: comImg },
  { icon: Wrench, title: "24/7 Emergency Service", desc: "Power outages, breaker faults, and electrical hazards.", img: indImg },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">Our Services</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-secondary sm:text-5xl">
            Full-Spectrum Electrical Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One licensed team. Every job — from a single outlet to a 50,000 sqft facility.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, img }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_-20px_rgba(255,107,0,0.35)] hover:border-primary/30"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold text-secondary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
