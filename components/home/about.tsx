import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="relative bg-[#f0f0f0] text-black">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex min-h-[50vh] flex-col px-6 py-10 sm:px-8 lg:px-10 lg:py-12 xl:px-14">
          <p className="text-[1.1rem] font-medium tracking-[-0.03em] text-[#0A47E8]">
            + Nosotros
          </p>

          <div className="mt-10 max-w-3xl">
            <h2 className="max-w-none text-[clamp(2.9rem,4.8vw,5.25rem)] leading-[0.95] font-medium tracking-[-0.07em] text-black">
              ONESTA ABOGADOS PERU
            </h2>
          </div>

          <div className="mt-auto max-w-2xl pt-16 lg:pt-24">
            <p className="max-w-xl text-[clamp(1.05rem,1rem+0.35vw,1.35rem)] leading-[1.45] tracking-[-0.02em] text-black/82">
              Somos un Estudio Juridico integrado por un equipo de abogados con
              amplia experiencia, comprometidos en resolver con excelencia los
              asuntos legales mas relevantes de nuestros clientes.
            </p>

            <p className="mt-6 max-w-xl text-[clamp(1rem,0.98rem+0.18vw,1.12rem)] leading-[1.6] text-black/68">
              Nuestra tradicion de seriedad y compromiso nos respalda,
              ofreciendo un servicio de la mas alta calidad. Sabemos que cada
              caso conlleva retos y presion, por eso acompanamos a nuestros
              clientes en cada etapa del proceso con un enfoque estrategico y
              humano.
            </p>

            <Link
              href="/"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#0A47E8] px-6 py-4 text-[0.98rem] font-medium text-white transition hover:bg-[#0939bb]"
            >
              Conocer mas
              <ArrowRight className="size-4" strokeWidth={1.8} />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[52vh] bg-[#f0f0f0] px-0 pt-5 lg:pt-6">
          <div className="relative h-full min-h-[calc(52vh-1.25rem)] overflow-hidden lg:min-h-[calc(100vh-1.5rem)]">
            <Image
              src="https://res.cloudinary.com/demzflxgq/image/upload/v1773442859/pexels-rdne-7841474_ov8jg7.jpg"
              alt="Interior profesional de oficina"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_24%,rgba(10,71,232,0.08)_66%,rgba(0,0,0,0.18)_100%)]" />
          </div>
        </div>
      </div>
    </section>
  )
}
