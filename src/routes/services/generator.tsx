import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-generator.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/generator")({
  head: () => ({
    meta: [
      { title: "Whole-Home Generator Installation | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed backup generator installations. Generac and Kohler certified installers. Automatic transfer switches in Florida." },
      { property: "og:title", content: "Generator Installation | R&E Electrical" },
      { property: "og:description", content: "Never lose power again with R&E Electrical Contractor Corp standby generator systems." },
    ],
  }),
  component: GeneratorPage,
});

function GeneratorPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Whole-Home Standby Generator Setup", "Instalación de Generador de Respaldo para Todo el Hogar"),
    t("Generac & Kohler Certified Installs", "Instalaciones Certificadas Generac y Kohler"),
    t("Automatic Transfer Switch (ATS) Wiring", "Cableado de Interruptor de Transferencia Automática (ATS)"),
    t("Manual Transfer Switch Receptacles", "Receptáculos de Interruptor de Transferencia Manual"),
    t("Interlock Kit Installations (Portable Generators)", "Instalaciones de Kit de Enclavamiento (Generadores Portátiles)"),
    t("Annual Maintenance & Testing Audits", "Auditorías de Mantenimiento y Pruebas Anuales"),
    t("Propane or Natural Gas Line Coordination", "Coordinación de Líneas de Gas Propano o Natural"),
    t("Surge Protection & Safety Grounding", "Protección contra Sobretensiones y Conexión a Tierra de Seguridad"),
  ];

  const faqs = [
    {
      q: t("How does a standby generator work?", "¿Cómo funciona un generador de respaldo?"),
      a: t("A standby generator is permanently installed outside your home, similar to an AC unit. It connects to your home's fuel source (natural gas or liquid propane) and monitors incoming utility power. Within seconds of an outage, it starts automatically and transfer switches shift your home's load to the generator.", "Un generador de respaldo se instala permanentemente fuera de su hogar, similar a una unidad de aire acondicionado. Se conecta a la fuente de combustible de su hogar (gas natural o propano líquido) y monitorea la energía de la red pública entrante. A los pocos segundos de un corte de energía, arranca automáticamente y los interruptores de transferencia cambian la carga de su hogar al generador.")
    },
    {
      q: t("What size generator do I need for my home?", "¿Qué tamaño de generador necesito para mi hogar?"),
      a: t("This depends on what appliances you want to run. A 20-22kW standby generator can power a typical medium-to-large Miami home, including central air conditioning, refrigeration, and cooking appliances. We perform a precise sizing audit on-site.", "Esto depende de qué electrodomésticos quiera hacer funcionar. Un generador de respaldo de 20-22kW puede alimentar una casa típica de tamaño mediano a grande en Miami, incluyendo aire acondicionado central, refrigeración y electrodomésticos de cocina. Realizamos una auditoría de dimensionamiento precisa en el sitio.")
    },
    {
      q: t("Do you handle city permits and concrete pads?", "¿Se encargan de los permisos de la ciudad y las plataformas de concreto?"),
      a: t("Yes. In South Florida, code dictates strict concrete pads and anchoring requirements due to hurricanes. R&E Electrical Contractor Corp handles all mechanical pad installation, plumbing coordination, and electrical engineering permits.", "Sí. En el sur de Florida, el código dicta estrictas plataformas de concreto y requisitos de anclaje debido a los huracanes. R&E Electrical Contractor Corp se encarga de toda la instalación de la plataforma mecánica, la coordinación de plomería y los permisos de ingeniería eléctrica.")
    }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Backup Generators", "Generadores de Respaldo")}
        title={t("Uninterrupted Power with Standby Generators", "Energía Ininterrumpida con Generadores de Respaldo")}
        subtitle={t("Protect your family and property from Florida storm outages. We install and maintain premium standby generator systems with automatic transfer switches.", "Proteja a su familia y propiedad de los cortes de energía por tormentas en Florida. Instalamos y mantenemos sistemas de generadores de respaldo premium con interruptores de transferencia automática.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  {t("Complete Hurricane-Season Protection", "Protección Completa para la Temporada de Huracanes")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {t("Power outages in South Florida can last for days or weeks during major storm events. A standby generator keeps your AC running, food fresh, and security systems active. R&E Electrical Contractor Corp is a certified installer for top standby generator manufacturers (Generac, Kohler, Briggs & Stratton). We design and install the entire system, including load-shedding modules and automatic transfer switches.", "Los cortes de energía en el sur de Florida pueden durar días o semanas durante tormentas importantes. Un generador de respaldo mantiene su aire acondicionado funcionando, los alimentos frescos y los sistemas de seguridad activos. R&E Electrical Contractor Corp es instalador certificado de los principales fabricantes de generadores de respaldo (Generac, Kohler, Briggs & Stratton). Diseñamos e instalamos todo el sistema, incluyendo módulos de desconexión de carga e interruptores de transferencia automática.")}
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
                  alt="Installing backup standby generator"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">{t("R&E Electrical Backup Power", "Energía de Respaldo R&E Electrical")}</div>
                  <div className="mt-1 font-display text-xl font-extrabold">{t("Generac & Kohler Certified Installers", "Instaladores Certificados Generac y Kohler")}</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">{t("Ready to get started?", "¿Listo para comenzar?")}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Book a free on-site standby generator layout and load review. We'll map your system and provide a complete quote.", "Reserve una revisión gratuita de carga y diseño de generador de respaldo en el sitio. Trazaremos su sistema y proporcionaremos una cotización completa.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Request Estimate", "Solicitar Presupuesto")}</Link>
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
