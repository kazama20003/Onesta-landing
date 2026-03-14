import { ArrowRight, Plus } from "lucide-react"

const services = [
  {
    title: "Derecho societario",
    copy:
      "Asesoria en constitucion, reorganizacion, gobierno corporativo y decisiones clave para la continuidad y crecimiento de la empresa.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "center center",
  },
  {
    title: "Derecho civil",
    copy:
      "Patrocinio y consultoria en obligaciones, contratos, responsabilidad civil y proteccion de derechos patrimoniales.",
    image:
      "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "center center",
  },
  {
    title: "Derecho de familia",
    copy:
      "Acompanamiento legal en procesos de familia con criterio tecnico, sensibilidad humana y enfoque en soluciones sostenibles.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "center center",
  },
  {
    title: "Derecho laboral",
    copy:
      "Prevencion y defensa en relaciones laborales, cumplimiento normativo, desvinculaciones y gestion de contingencias.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "center center",
  },
  {
    title: "Indecopi",
    copy:
      "Asistencia en procedimientos administrativos, proteccion al consumidor, propiedad intelectual y libre competencia.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "center center",
  },
  {
    title: "Metodos de solucion de conflictos",
    copy:
      "Estrategias de negociacion, conciliacion, arbitraje y otras vias para resolver controversias con eficacia y control del riesgo.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    imagePosition: "center center",
  },
]

export default function ServicesSection() {
  return (
    <section className="relative bg-white px-6 py-10 sm:px-8 lg:px-10 lg:py-14 xl:px-14">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-[1.1rem] font-medium tracking-[-0.03em] text-[#0A47E8]">
            <Plus className="size-5" strokeWidth={1.8} />
            Servicios
          </p>
          <h2 className="max-w-none text-[clamp(3rem,5.3vw,5.8rem)] leading-[0.93] font-medium tracking-[-0.075em] text-black">
            Asistencia legal especializada para personas y empresas
          </h2>
        </div>

        <div className="max-w-xl pt-2 lg:justify-self-end">
          <p className="text-[clamp(1.05rem,1rem+0.24vw,1.24rem)] leading-[1.45] tracking-[-0.02em] text-black/76">
            Reunimos nuestras principales areas de practica en un formato
            claro, directo y ordenado para facilitar la lectura de los
            servicios que hoy ofrecemos.
          </p>
        </div>
      </div>

      <div className="mt-14 space-y-4 lg:mt-18">
        {services.map((service, index) => (
          <details
            key={service.title}
            className="group rounded-[1.6rem] border border-black/8 bg-[#f0f0f0] open:bg-[#e9f0ff]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 sm:px-7 lg:px-8 lg:py-7">
              <div className="flex min-w-0 items-center gap-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[0.85rem] font-semibold tracking-[0.08em] text-[#0A47E8] shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="max-w-none text-[clamp(1.5rem,2vw,2.35rem)] leading-[1] font-medium tracking-[-0.05em] text-black">
                  {service.title}
                </h3>
              </div>

              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[#0A47E8] text-white transition group-open:rotate-45">
                <Plus className="size-5" strokeWidth={1.8} />
              </span>
            </summary>

            <div className="px-6 pb-7 sm:px-7 lg:px-8 lg:pb-8">
              <div className="grid gap-6 border-t border-black/8 pt-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8">
                <div className="flex flex-col gap-6 lg:justify-between">
                  <p className="max-w-3xl text-[1.04rem] leading-[1.6] text-black/72">
                    {service.copy}
                  </p>

                  <button
                    type="button"
                    className="inline-flex items-center gap-3 self-start rounded-full bg-white px-5 py-3 text-[0.95rem] font-medium text-black shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition hover:bg-[#0A47E8] hover:text-white"
                  >
                    Contactenos / Contact Us
                    <ArrowRight className="size-4" strokeWidth={1.8} />
                  </button>
                </div>

                <div className="relative h-56 overflow-hidden rounded-[1.35rem] border border-black/8 bg-white shadow-[0_16px_34px_rgba(0,0,0,0.08)] lg:h-full lg:min-h-[220px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-open:scale-[1.04]"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundPosition: service.imagePosition,
                    }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.02)_30%,rgba(0,0,0,0.18)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="inline-flex rounded-full bg-white/92 px-3 py-1 text-[0.76rem] font-semibold tracking-[0.1em] text-[#0A47E8] uppercase">
                      {service.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
