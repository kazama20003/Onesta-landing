import { Quote, Star } from "lucide-react"

const reviews = [
  {
    name: "Mariana Lopez",
    role: "Gerente General",
    quote:
      "Tuvimos acompanamiento claro, preciso y estrategico durante todo el proceso. El equipo respondio con rapidez y criterio.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=320&q=80",
  },
  {
    name: "Ricardo Salas",
    role: "Director Comercial",
    quote:
      "Valoro especialmente su capacidad para traducir asuntos legales complejos en decisiones concretas para la empresa.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=320&q=80",
  },
  {
    name: "Lucia Fernandez",
    role: "Emprendedora",
    quote:
      "Transmiten seguridad, orden y un trato humano poco comun. Se nota la experiencia desde la primera reunion.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=320&q=80",
  },
]

function GoogleBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
      <span className="text-[1.05rem] font-semibold tracking-[-0.04em]">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </span>
      <span className="text-[0.86rem] font-medium text-black/70">Reviews</span>
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section className="relative bg-white px-6 py-10 sm:px-8 lg:px-10 lg:py-16 xl:px-14">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="max-w-4xl">
          <p className="text-[1.1rem] font-medium tracking-[-0.03em] text-[#0A47E8]">
            + Comentarios
          </p>
          <div className="mt-8">
            <h2 className="max-w-none text-[clamp(3rem,5vw,5.5rem)] leading-[0.93] font-medium tracking-[-0.08em] text-black">
              Comentarios de clientes con estandar Google
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <GoogleBadge />
            <div className="inline-flex items-center gap-3 rounded-full bg-[#f0f0f0] px-4 py-2">
              <div className="flex items-center gap-1 text-[#0A47E8]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-current"
                    strokeWidth={1.8}
                  />
                ))}
              </div>
              <span className="text-[0.92rem] font-medium text-black">4.9 / 5</span>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#f0f0f0] p-6 shadow-[0_22px_48px_rgba(0,0,0,0.06)] sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-[0.86rem] font-semibold tracking-[0.12em] text-[#0A47E8] uppercase">
                Valoracion general
              </p>
              <p className="mt-3 max-w-md text-[1.02rem] leading-[1.6] text-black/72">
                Opiniones que reflejan confianza, claridad en la estrategia y
                acompanamiento permanente.
              </p>
            </div>
            <Quote className="size-10 text-[#0A47E8]" strokeWidth={1.6} />
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="rounded-[1.8rem] border border-black/8 bg-[#f8f8f8] p-6 shadow-[0_18px_38px_rgba(0,0,0,0.05)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="size-14 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${review.avatar})` }}
                />
                <div>
                  <p className="text-[1rem] font-semibold tracking-[-0.02em] text-black">
                    {review.name}
                  </p>
                  <p className="text-[0.84rem] font-medium tracking-[0.1em] text-black/46 uppercase">
                    {review.role}
                  </p>
                </div>
              </div>
              <GoogleBadge />
            </div>

            <div className="mt-6 flex items-center gap-1 text-[#0A47E8]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="size-4 fill-current"
                  strokeWidth={1.8}
                />
              ))}
            </div>

            <p className="mt-5 text-[1.02rem] leading-[1.72] text-black/72">
              {review.quote}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
