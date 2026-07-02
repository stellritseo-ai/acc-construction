import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-ev.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/ev-charger")({
  head: () => ({
    meta: [
      { title: "EV Charger Installation | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed Level 2 home EV charger installations. Certified Tesla, ChargePoint, and generic charger setup in Florida." },
      { property: "og:title", content: "EV Charger Installation | R&E Electrical" },
      { property: "og:description", content: "Get your home or business Level 2 EV charging ready." },
    ],
  }),
  component: EvChargerPage,
});

function EvChargerPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Tesla Wall Connector Installation", "Instalación de Conector de Pared Tesla"),
    t("Universal Level 2 Home Charger Setups", "Configuración de Cargador de Hogar Universal Nivel 2"),
    t("NEMA 14-50 240V Outlet Installations", "Instalaciones de Tomacorrientes NEMA 14-50 240V"),
    t("Commercial EV Fleet Charging Stations", "Estaciones de Carga EV para Flotas Comerciales"),
    t("Load Management & Sub-Panel Wiring", "Gestión de Carga y Cableado de Sub-paneles"),
    t("Multi-Family & Condo EV Charging Systems", "Sistemas de Carga EV para Condominios y Multifamiliares"),
    t("City Permit & Safety Compliance Inspections", "Inspecciones de Permiso de la Ciudad y Cumplimiento de Seguridad"),
    t("Smart Wi-Fi Enabled Charger Setup", "Configuración de Cargador Inteligente Habilitado para Wi-Fi"),
  ];

  const faqs = [
    {
      q: t("What is the difference between Level 1 and Level 2 charging?", "¿Cuál es la diferencia entre la carga de Nivel 1 y Nivel 2?"),
      a: t("Level 1 uses a standard 120V outlet and adds only 3-5 miles of range per hour. Level 2 uses a 240V circuit and adds 25-50 miles of range per hour, fully charging most vehicles overnight.", "El Nivel 1 usa un tomacorriente estándar de 120V y agrega solo 3-5 millas de rango por hora. El Nivel 2 usa un circuito de 240V y agrega de 25 a 50 millas de rango por hora, cargando completamente la mayoría de los vehículos durante la noche.")
    },
    {
      q: t("Will I need to upgrade my electrical panel for an EV charger?", "¿Necesitaré actualizar mi panel eléctrico para un cargador EV?"),
      a: t("Not always. We perform a load calculation on your current panel. If you have a 200-amp panel, you usually have room. For 100-amp panels, a load-shedding device or minor upgrade might be needed.", "No siempre. Realizamos un cálculo de carga en su panel actual. Si tiene un panel de 200 amperios, generalmente tiene espacio. Para paneles de 100 amperios, podría ser necesario un dispositivo de desconexión de carga o una actualización menor.")
    },
    {
      q: t("Are there tax credits or utility rebates available?", "¿Hay créditos fiscales o reembolsos de servicios públicos disponibles?"),
      a: t("Yes. The federal government offers credits for residential EV infrastructure, and local utilities like FPL occasionally run rebate programs for off-peak EV charging setup.", "Sí. El gobierno federal ofrece créditos para infraestructura de EV residencial, y las empresas de servicios públicos locales como FPL ocasionalmente ejecutan programas de reembolso para la configuración de carga de EV en horas de menor actividad.")
    }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("EV Charging", "Carga de EV")}
        title={t("Fast & Secure EV Charger Installations", "Instalaciones Rápidas y Seguras de Cargadores EV")}
        subtitle={t("Wake up to a full charge. We install certified home and commercial Level 2 EV chargers, mapped perfectly to your vehicle's requirements.", "Despiértese con una carga completa. Instalamos cargadores EV Nivel 2 certificados para el hogar y el comercio, adaptados perfectamente a los requisitos de su vehículo.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  {t("High-Speed Charging at Your Convenience", "Carga de Alta Velocidad a su Conveniencia")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {t("Electric vehicles are the future, and charging at home is the most convenient way to fuel them. R&E Electrical Contractor Corp installs Level 2 charging equipment from all major brands (Tesla, ChargePoint, Wallbox, Emporia, and more). Our certified electricians ensure that your wiring, breakers, and receptacles are sized correctly to prevent overheating and electrical fire risks.", "Los vehículos eléctricos son el futuro, y cargarlos en casa es la forma más conveniente de abastecerlos. R&E Electrical Contractor Corp instala equipos de carga Nivel 2 de todas las marcas principales (Tesla, ChargePoint, Wallbox, Emporia y más). Nuestros electricistas certificados se aseguran de que su cableado, disyuntores y tomacorrientes tengan el tamaño correcto para evitar el sobrecalentamiento y los riesgos de incendio eléctrico.")}
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
                  alt="Installing EV charging station"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">{t("R&E Electrical EV", "R&E Electrical EV")}</div>
                  <div className="mt-1 font-display text-xl font-extrabold">{t("Tesla & Universal Level 2 Chargers", "Cargadores Tesla y Universales Nivel 2")}</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">{t("Ready to get started?", "¿Listo para comenzar?")}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Book an EV charger site review. We'll verify your panel capacity and provide a quote for the install.", "Reserve una revisión del sitio del cargador EV. Verificaremos la capacidad de su panel y proporcionaremos una cotización para la instalación.")}
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
