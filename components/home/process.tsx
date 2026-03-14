import Image from "next/image"
import { Pause } from "lucide-react"

const processSteps = [
  {
    number: "01",
    title: "Descubrimiento y Consulta",
    copy:
      "Analizamos su situacion legal actual, identificamos riesgos y oportunidades y definimos una hoja de ruta estrategica.",
  },
  {
    number: "02",
    title: "Desarrollo de Estrategia",
    copy:
      "Disenamos una estrategia legal personalizada alineada con sus objetivos empresariales.",
  },
  {
    number: "03",
    title: "Ejecucion y Soporte",
    copy:
      "Implementamos la estrategia con seguimiento continuo y ajustes segun sea necesario.",
  },
]

export default function ProcessSection() {
  return (
    <section className="relative bg-[#f0f0f0] text-black">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[52vh] bg-[#f0f0f0] pt-5 lg:pt-6">
          <div className="relative h-full min-h-[calc(52vh-1.25rem)] overflow-hidden lg:min-h-[calc(100vh-1.5rem)]">
            <Image
              src="https://res.cloudinary.com/demzflxgq/image/upload/v1773442859/pexels-rdne-7841474_ov8jg7.jpg"
              alt="Reunion de trabajo y analisis estrategico"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_24%,rgba(10,71,232,0.06)_68%,rgba(0,0,0,0.14)_100%)]" />
          </div>
        </div>

        <div className="flex min-h-[50vh] flex-col px-6 py-10 sm:px-8 lg:px-10 lg:py-12 xl:px-14">
          <p className="text-[1.1rem] font-medium tracking-[-0.03em] text-[#0A47E8]">
            + Nuestro proceso
          </p>

          <div className="mt-10 max-w-4xl">
            <h2 className="max-w-none text-[clamp(2.9rem,4.9vw,5.3rem)] leading-[0.95] font-medium tracking-[-0.075em] text-black">
              Un enfoque estrategico estructurado y continuo
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[0.92rem] font-medium text-black shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
              <Pause className="size-4 text-[#0A47E8]" strokeWidth={1.8} />
              Pausado
            </span>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-[0.92rem] font-medium text-black shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
              4 / 4
            </span>
          </div>

          <div className="mt-12 space-y-0 border-t border-black/8">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="grid gap-4 border-b border-black/8 py-6 sm:grid-cols-[3rem_minmax(0,1fr)]"
              >
                <span className="text-[0.9rem] font-semibold tracking-[0.12em] text-[#0A47E8] uppercase">
                  {step.number}
                </span>
                <div>
                  <h3 className="max-w-none text-[clamp(1.45rem,1.75vw,2rem)] leading-[1.05] font-medium tracking-[-0.045em] text-black">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[1rem] leading-[1.65] text-black/70">
                    {step.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-auto pt-8">
            <div className="max-w-3xl border-l-4 border-[#0A47E8] pl-6">
              <p className="text-[0.88rem] font-semibold tracking-[0.12em] text-[#0A47E8] uppercase">
                04 / Cumplimiento Continuo
              </p>
              <h3 className="mt-4 max-w-none text-[clamp(2.1rem,3vw,3.7rem)] leading-[0.96] font-medium tracking-[-0.06em] text-black">
                Cumplimiento Continuo
              </h3>
              <p className="mt-5 max-w-xl text-[1.05rem] leading-[1.72] text-black/72">
                Monitoreamos y aseguramos el cumplimiento normativo de forma
                permanente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
