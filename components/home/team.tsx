"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { ArrowRight, Plus } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const teamMembers = [
  {
    name: "ALESSANDRO NINA B.",
    role: "ABOGADO ASOCIADO SENIOR",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    imagePosition: "center top",
  },
  {
    name: "KARLA POSTIGO J.",
    role: "ABOGADO ASOCIADO SENIOR",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    imagePosition: "center top",
  },
  {
    name: "SOFIA RAMIREZ M.",
    role: "ABOGADA ASOCIADA",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
    imagePosition: "center top",
  },
  {
    name: "DIEGO SALAZAR C.",
    role: "ABOGADO ASOCIADO",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    imagePosition: "center top",
  },
]

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-team-card]")

      cards.forEach((card, index) => {
        const media = card.querySelector<HTMLElement>("[data-team-media]")
        const wash = card.querySelector<HTMLElement>("[data-team-wash]")
        const content = card.querySelector<HTMLElement>("[data-team-content]")
        const cta = card.querySelector<HTMLElement>("[data-team-cta]")

        if (!media || !wash || !content || !cta) return

        gsap.set([media, content, cta], {
          y: 42,
          opacity: 0,
        })

        gsap.set(wash, {
          opacity: 0.72,
        })

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 78%",
          },
          defaults: {
            ease: "power3.out",
          },
        })

        timeline
          .to(media, {
            y: 0,
            opacity: 1,
            duration: 0.85,
          })
          .to(
            wash,
            {
              opacity: 0.1,
              duration: 1.05,
            },
            0.08
          )
          .to(
            content,
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
            },
            0.18
          )
          .to(
            cta,
            {
              y: 0,
              opacity: 1,
              duration: 0.68,
            },
            0.28 + index * 0.03
          )
      })
    }, sectionRef)

    return () => {
      context.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f0f0f0] px-6 py-10 sm:px-8 lg:px-10 lg:py-14 xl:px-14"
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="max-w-4xl">
          <p className="mb-4 flex items-center gap-3 text-[1.1rem] font-medium tracking-[-0.03em] text-[#0A47E8]">
            <Plus className="size-5" strokeWidth={1.8} />
            Nuestro equipo
          </p>
          <h2 className="max-w-none text-[clamp(3.4rem,6vw,6.3rem)] leading-[0.92] font-medium tracking-[-0.08em] text-black">
            Experiencia y estrategia para cada caso relevante
          </h2>
        </div>

        <div className="max-w-xl pt-2 lg:justify-self-end">
          <p className="text-[clamp(1.05rem,1rem+0.25vw,1.28rem)] leading-[1.42] tracking-[-0.025em] text-black/80">
            Conozca a parte de nuestro equipo legal. Cada integrante combina
            rigor tecnico, criterio estrategico y cercania en el acompanamiento
            de nuestros clientes.
          </p>
        </div>
      </div>

      <div className="mt-14 space-y-10 lg:mt-20">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            data-team-card
            className="group relative rounded-[2rem] px-4 py-4 lg:px-5 lg:py-5"
          >
            <div className="absolute inset-0 z-0 rounded-[2rem] border border-black/0 bg-white/0 shadow-none transition-all duration-500 ease-out group-hover:border-black/8 group-hover:bg-white group-hover:shadow-[0_22px_48px_rgba(0,0,0,0.08)]" />

            <div className="relative z-10 grid gap-5 lg:grid-cols-[184px_minmax(0,1fr)_auto] lg:items-end lg:gap-6">
              <div
                data-team-media
                className="relative h-52 overflow-hidden rounded-[1.2rem] bg-[#d7def0] shadow-[0_22px_54px_rgba(0,0,0,0.12)] lg:h-60"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundPosition: member.imagePosition,
                  }}
                />
                <div
                  data-team-wash
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.28)_34%,rgba(255,255,255,0.08)_100%)]"
                />
              </div>

              <div data-team-content className="pb-2">
                <h3 className="max-w-none text-[clamp(2.7rem,5vw,4.6rem)] leading-[0.95] font-medium tracking-[-0.07em] text-black">
                  {member.name}
                </h3>
                <p className="mt-3 text-[0.88rem] font-semibold tracking-[0.12em] text-black/58 uppercase">
                  {member.role}
                </p>
              </div>

              <Link
                data-team-cta
                href="/"
                className="inline-flex items-center justify-between gap-4 rounded-full bg-white px-6 py-4 text-[0.98rem] font-medium text-black shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition hover:bg-[#e7eefc] lg:min-w-[220px]"
              >
                <span className="leading-tight">contactenos / Contact Us</span>
                <ArrowRight
                  className="size-4 shrink-0 text-[#0A47E8]"
                  strokeWidth={1.8}
                />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
