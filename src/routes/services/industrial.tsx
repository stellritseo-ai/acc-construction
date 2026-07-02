import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-industrial.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/industrial")({
  head: () => ({
    meta: [
      { title: "Industrial Electrical Services | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed industrial electrical installations, 3-phase power distribution, motor controls, and heavy machinery hookups across South Florida." },
      { property: "og:title", content: "Industrial Electrical Services | R&E Electrical" },
      { property: "og:description", content: "Licensed industrial electrical solutions for South Florida." },
    ],
  }),
  component: IndustrialPage,
});

function IndustrialPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("3-Phase Power Distribution Systems", "Sistemas de Distribución de Energía Trifásica"),
    t("Motor Control Centers & VFD Install", "Instalación de Centros de Control de Motores y VFD"),
    t("Heavy Machinery & Equipment Hookups", "Conexiones de Maquinaria y Equipos Pesados"),
    t("PLC Cabinet Wiring & Program Integration", "Cableado de Gabinetes PLC e Integración de Programas"),
    t("Industrial Facility Power Audits", "Auditorías de Energía de Instalaciones Industriales"),
    t("Hazardous Location (Classified) Wiring", "Cableado de Lugares Peligrosos (Clasificados)"),
    t("Busway & Cable Tray System Installs", "Instalación de Sistemas de Vías de Autobús y Bandejas de Cables"),
    t("High-Voltage Transformer Upgrades", "Actualizaciones de Transformadores de Alto Voltaje"),
  ];

  const faqs = [
    {
      q: t("Do your technicians follow OSHA and NFPA standards?", "¿Sus técnicos siguen los estándares de OSHA y NFPA?"),
      a: t("Yes. Safety is our absolute priority. Our industrial team wears complete PPE and strictly adheres to OSHA, NEC, and NFPA 70E (Electrical Safety in the Workplace) safety standards.", "Sí. La seguridad es nuestra prioridad absoluta. Nuestro equipo industrial utiliza el EPP completo y se adhiere estrictamente a los estándares de seguridad de OSHA, NEC y NFPA 70E (Seguridad Eléctrica en el Lugar de Trabajo).")
    },
    {
      q: t("What industrial industries do you service?", "¿A qué sectores industriales brindan servicio?"),
      a: t("R&E Electrical Contractor Corp works with warehouses, manufacturing lines, recycling facilities, packaging plants, food & beverage facilities, and distribution centers across South Florida.", "R&E Electrical Contractor Corp trabaja con almacenes, líneas de producción, instalaciones de reciclaje, plantas de empaque, instalaciones de alimentos y bebidas, y centros de distribución en todo el sur de Florida.")
    },
    {
      q: t("Do you offer industrial backup generator integration?", "¿Ofrecen integración de generadores de respaldo industriales?"),
      a: t("Yes. We install high-capacity backup generator systems and automatic transfer switches to ensure continuous facility operations during utility failure.", "Sí. Instalamos sistemas de generadores de respaldo de alta capacidad e interruptores de transferencia automática para asegurar la operación continua de la instalación durante fallas de servicios públicos.")
    }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Industrial Services", "Servicios Industriales")}
        title={t("Heavy-Duty Power for Industrial Facilities", "Energía de Alta Potencia para Instalaciones Industriales")}
        subtitle={t("Keep your production lines running. Our expert industrial electricians deploy high-voltage systems, machinery hookups, and controls safely.", "Mantenga sus líneas de producción en funcionamiento. Nuestros electricistas industriales expertos despliegan sistemas de alto voltaje, conexiones de maquinaria y controles de forma segura.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  {t("Specialized Industrial Electrical Engineering", "Ingeniería Eléctrica Industrial Especializada")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {t("Industrial environments demand heavy-duty, highly resilient electrical systems. R&E Electrical Contractor Corp's industrial electricians possess specialized training in 3-phase power, motor controls, PLC cabinets, and classified wiring for dust/vapor environments. We minimize downtime by planning installations with surgical precision and conducting detailed diagnostic testing.", "Los entornos industriales requieren sistemas eléctricos de alta potencia y gran resiliencia. Los electricistas industriales de R&E Electrical Contractor Corp poseen capacitación especializada en energía trifásica, controles de motores, gabinetes de PLC y cableado clasificado para entornos de polvo y vapor. Minimizamos el tiempo de inactividad planificando las instalaciones con precisión quirúrgica y realizando pruebas de diagnóstico detalladas.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-xl font-extrabold text-secondary">{t("Our Specialties", "Nuestras Especialidades")}</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {serviceList.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-secondary">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Section */}
              <div className="border-t border-border pt-8">
                <h3 className="font-display text-xl font-extrabold text-secondary mb-6">{t("Frequently Asked Questions", "Preguntas Frecuentes")}</h3>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="group border border-border rounded-2xl bg-muted/20 p-5 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-display text-base font-bold text-secondary">
                        {faq.q}
                        <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-open:rotate-90 text-primary" />
                      </summary>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed border-t border-border/60 pt-3">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: CTA Sidebar */}
            <div className="space-y-8">
              <div className="relative overflow-hidden rounded-3xl border border-border">
                <img
                  src={img}
                  alt="Industrial machinery electrical systems"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">{t("R&E Electrical Industrial", "R&E Electrical Industrial")}</div>
                  <div className="mt-1 font-display text-xl font-extrabold">{t("3-Phase & High-Voltage Systems", "Sistemas Trifásicos y de Alto Voltaje")}</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">{t("Ready to get started?", "¿Listo para comenzar?")}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Book an industrial electrical system assessment. We will review your layouts or single-line drawings.", "Reserve una evaluación del sistema eléctrico industrial. Revisaremos sus diseños o dibujos unifilares.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Request Proposal", "Solicitar Propuesta")}</Link>
                  </Button>
                  <a
                    href="tel:+17863075933"
                    className="flex items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-3 text-sm font-bold text-secondary hover:border-primary hover:text-primary transition"
                  >
                    <Phone className="h-4 w-4" /> (786) 307-5933
                  </a>
                </div>

                <div className="mt-6 space-y-2 text-xs font-semibold text-secondary/80">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" /> {t("Fully Licensed & Insured", "Totalmente Autorizado y Asegurado")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> {t("Estimates Within 24 Hours", "Presupuestos en 24 Horas")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("100% Satisfaction Guaranteed", "Garantía de Satisfacción del 100%")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Process />
      <EmergencyCTA />
    </>
  );
}
