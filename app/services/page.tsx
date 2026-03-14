import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  HeartHandshake,
  Landmark,
  Scale,
  ShieldCheck,
} from "lucide-react"

const serviceAreas = [
  {
    title: "Derecho civil",
    tag: "Exito demostrado",
    description:
      "Patrocinio y asesoria en conflictos patrimoniales, obligaciones y relaciones civiles con enfoque procesal y preventivo.",
    image:
      "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1400&q=80",
    imagePosition: "center center",
    icon: Scale,
    items: [
      "Contratos. Resolucion e incumplimiento de contratos. Otorgamiento de escritura publica.",
      "Desalojo. Reivindicacion. Retracto. Mejor derecho de propiedad. Interdicto de retener y recobrar.",
      "Division y particion. Rectificacion de areas y linderos. Mejoras. Servidumbres.",
      "Obligacion de dar suma de dinero. Obligaciones de hacer y no hacer. Indemnizaciones. Ofrecimiento de pago.",
      "Sucesiones y testamentos. Peticion de herencia.",
      "Nulidad y anulabilidad de acto juridico. Prescripcion y caducidad.",
    ],
  },
  {
    title: "Derecho de familia",
    tag: "Anos de experiencia",
    description:
      "Acompanamiento legal sensible y tecnico en procesos familiares donde la estrategia debe convivir con el cuidado personal.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=80",
    imagePosition: "center center",
    icon: HeartHandshake,
    items: [
      "Alimentos, tenencia y regimen de visita. Filiacion e impugnacion de paternidad. Divorcio. Exequatur. Gastos de embarazo. Patria potestad.",
      "Violencia familiar. Omision a la asistencia familiar. Indemnizacion.",
      "Adopcion. Patrimonio familiar. Tutela. Curatela e interdiccion. Salvaguardas.",
    ],
  },
  {
    title: "Derecho laboral",
    tag: "Justicia para usted",
    description:
      "Defensa y consultoria en relaciones laborales para prevenir contingencias y actuar con firmeza cuando surgen conflictos.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    imagePosition: "center center",
    icon: BriefcaseBusiness,
    items: [
      "Contratos. Seguridad y salud ocupacional.",
      "Indemnizaciones. Conciliaciones.",
    ],
  },
  {
    title: "Derecho societario",
    tag: "Soluciones empresariales",
    description:
      "Soporte corporativo para la constitucion, reorganizacion y sostenibilidad juridica de la empresa en cada etapa.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
    imagePosition: "center center",
    icon: Building2,
    items: [
      "Titulos valores. Garantias.",
      "Creacion. Reorganizacion de sociedades. Disolucion, liquidacion y extincion de sociedades.",
      "Contratos asociativos. Constitucion de empresas. Estatutos. Reglamentos.",
    ],
  },
  {
    title: "Indecopi",
    tag: "Defensa y proteccion",
    description:
      "Asistencia en procedimientos administrativos y de proteccion empresarial para defender activos intangibles y operaciones.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    imagePosition: "center center",
    icon: ShieldCheck,
    items: [
      "Propiedad intelectual. Derechos de autor. Marcas y patentes.",
      "Barreras burocraticas.",
      "Enterese como podemos ayudarle.",
    ],
  },
  {
    title: "Metodos de solucion de conflictos",
    tag: "Solucion rapida y eficaz",
    description:
      "Mecanismos alternativos para resolver controversias con control del tiempo, del riesgo y del costo del conflicto.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
    imagePosition: "center center",
    icon: Landmark,
    items: [
      "Negociaciones. Conciliaciones. Arbitraje. Mediacion.",
      "Transacciones.",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1800&q=80)",
            }}
          />
          <div className="absolute inset-0 bg-black/48" />
        </div>


        <section className="relative z-10 px-4 pb-10 pt-28 sm:px-6 sm:pt-32 lg:px-10 lg:pb-14 lg:pt-36 xl:px-14">
          <div className="grid min-h-[82vh] grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="text-sm font-semibold tracking-[0.28em] text-white/70 uppercase">
                Areas de practica
              </p>
              <h1 className="mt-5 text-white leading-[0.88] font-extrabold tracking-[-0.095em] uppercase">
                Servicios
              </h1>
              <p className="mt-8 max-w-2xl text-[clamp(1.08rem,1.02rem+0.32vw,1.34rem)] leading-[1.55] text-white/82">
                Estructuramos cada area con criterio estrategico, lectura clara y
                capacidad de ejecucion. Atendemos personas, familias y empresas
                en los asuntos legales que exigen rigor tecnico y decisiones
                oportunas.
              </p>
            </div>

            <div className="grid gap-4 lg:justify-self-end">
              <div className="max-w-md border border-white/14 bg-white/96 p-6 text-black">
                <p className="text-[0.8rem] font-semibold tracking-[0.14em] text-[#0A47E8] uppercase">
                  Cobertura
                </p>
                <p className="mt-3 text-[1.05rem] leading-[1.55] text-black/78">
                  Derecho civil, familia, laboral, societario, Indecopi y
                  metodos de solucion de conflictos.
                </p>
              </div>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-3 self-start rounded-[0.95rem] bg-[#0A47E8] px-6 py-4 text-[0.98rem] font-medium text-white transition hover:bg-[#0939bb]"
              >
                Solicitar asesoria
                <ArrowRight className="size-4" strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#f0f0f0] text-black">
        <section className="px-6 py-12 sm:px-8 lg:px-10 lg:py-16 xl:px-14">
          <div className="grid gap-10 border-b border-black/10 pb-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:pb-16">
            <div>
              <p className="text-[1.1rem] font-medium tracking-[-0.03em] text-[#0A47E8]">
                + Enfoque legal
              </p>
              <h2 className="mt-8 max-w-none text-[clamp(2.9rem,5vw,5.4rem)] leading-[0.94] font-medium tracking-[-0.075em] text-black">
                Asistencia especializada con estructura, claridad y respuesta
                continua
              </h2>
            </div>

            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-[clamp(1.05rem,1rem+0.22vw,1.22rem)] leading-[1.55] tracking-[-0.02em] text-black/72">
                Cada servicio responde a una necesidad concreta y se organiza en
                un formato de lectura editorial para que el usuario identifique
                rapido el alcance de nuestra intervencion.
              </p>
            </div>
          </div>
        </section>
      </div>

      <main className="bg-[#f0f0f0] text-black">
        <section className="px-6 pb-14 sm:px-8 lg:px-10 lg:pb-18 xl:px-14">
          <div className="space-y-6">
            {serviceAreas.map((area, index) => {
              const Icon = area.icon
              const reverse = index % 2 === 1

              return (
                <article
                  key={area.title}
                  className="overflow-hidden rounded-[1.2rem] border border-black/8 bg-white"
                >
                  <div
                    className={`grid gap-0 lg:grid-cols-2 ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative min-h-[320px] bg-[#e8edf8] sm:min-h-[360px] lg:min-h-[100%]">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${area.image})`,
                          backgroundPosition: area.imagePosition,
                        }}
                      />
                    </div>

                    <div className="flex flex-col px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
                      <div className="mb-5 inline-flex items-center gap-3 self-start rounded-[0.85rem] border border-black/10 bg-[#f0f0f0] px-4 py-2 text-[0.78rem] font-semibold tracking-[0.1em] text-[#0A47E8] uppercase">
                        <Icon className="size-4" strokeWidth={1.8} />
                        {area.tag}
                      </div>

                      <div className="flex items-start justify-between gap-4 border-b border-black/8 pb-6">
                        <div>
                          <p className="text-[0.8rem] font-semibold tracking-[0.14em] text-black/42 uppercase">
                            Area {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-3 text-[clamp(2rem,3.6vw,3.7rem)] leading-[0.96] font-medium tracking-[-0.065em] text-black">
                            {area.title}
                          </h3>
                        </div>

                        <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-[0.9rem] bg-[#f0f0f0] text-[#0A47E8]">
                          <BadgeCheck className="size-5" strokeWidth={1.8} />
                        </span>
                      </div>

                      <p className="mt-6 max-w-2xl text-[1.02rem] leading-[1.65] text-black/72">
                        {area.description}
                      </p>

                      <div className="mt-8 space-y-4">
                        {area.items.map((item) => (
                          <div
                            key={item}
                            className="flex gap-4 border-b border-black/6 pb-4 last:border-b-0 last:pb-0"
                          >
                            <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[#0A47E8] text-white">
                              <span className="block size-1.5 rounded-full bg-white" />
                            </span>
                            <p className="text-[0.99rem] leading-[1.65] text-black/78">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-col gap-4 border-t border-black/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-xl text-[0.95rem] leading-[1.6] text-black/54">
                          Evaluamos la mejor via legal segun el caso, el riesgo y
                          el objetivo final del cliente.
                        </p>
                        <Link
                          href="/#contacto"
                          className="inline-flex items-center gap-3 self-start rounded-[0.95rem] bg-[#0A47E8] px-5 py-3.5 text-[0.95rem] font-medium text-white transition hover:bg-[#0939bb]"
                        >
                          Contactenos
                          <ArrowRight className="size-4" strokeWidth={1.8} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}
