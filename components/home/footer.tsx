import Link from "next/link"
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  Phone,
} from "lucide-react"

const navigation = [
  {
    label: "Nosotros",
    href: "/#nosotros",
  },
  {
    label: "Servicios",
    href: "/services",
  },
  {
    label: "Nuestro equipo",
    href: "/#equipo",
  },
  {
    label: "Proceso",
    href: "/#proceso",
  },
]

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-10 w-16 items-center justify-center rounded-full bg-white">
        <svg
          viewBox="0 0 80 42"
          className="h-5 w-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 33.5H31.5L49 8.5H24.5L7 33.5Z" fill="#0A47E8" />
          <path d="M33 33.5H49L66.5 8.5H50.5L33 33.5Z" fill="#0A47E8" />
        </svg>
      </span>
      <div>
        <p className="text-[0.9rem] font-semibold tracking-[0.18em] text-white uppercase">
          Onesta
        </p>
        <p className="text-[0.78rem] text-white/56 uppercase tracking-[0.12em]">
          Abogados Peru
        </p>
      </div>
    </div>
  )
}

export default function FooterSection() {
  return (
    <footer className="bg-black px-6 py-10 text-white sm:px-8 lg:px-10 lg:py-14 xl:px-14">
      <div className="border-b border-white/10 pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <BrandMark />
            <div className="mt-8 max-w-3xl">
              <h2 className="max-w-none text-[clamp(2.4rem,4.2vw,4.5rem)] leading-[0.95] font-medium tracking-[-0.075em] text-white">
                Defensa, estrategia y acompanamiento legal con criterio claro.
              </h2>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[0.82rem] font-semibold tracking-[0.12em] text-[#8fb0ff] uppercase">
                Navegacion
              </p>
              <div className="mt-5 grid gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center justify-between gap-3 border-b border-white/8 pb-3 text-[1rem] text-white/76 transition hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="size-4" strokeWidth={1.8} />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[0.82rem] font-semibold tracking-[0.12em] text-[#8fb0ff] uppercase">
                Contacto
              </p>
              <div className="mt-5 space-y-4">
                <a
                  href="tel:+51933599301"
                  className="flex items-start gap-3 text-white/76 transition hover:text-white"
                >
                  <Phone className="size-4 text-[#8fb0ff]" strokeWidth={1.8} />
                  <span>+51 933599301 / +51 956335950</span>
                </a>
                <a
                  href="mailto:onestaabogadosperu@gmail.com"
                  className="flex items-start gap-3 text-white/76 transition hover:text-white"
                >
                  <Mail className="size-4 text-[#8fb0ff]" strokeWidth={1.8} />
                  <span>onestaabogadosperu@gmail.com</span>
                </a>
                <a
                  href="mailto:contacto@onestaabogados.org"
                  className="flex items-start gap-3 text-white/76 transition hover:text-white"
                >
                  <Mail className="size-4 text-[#8fb0ff]" strokeWidth={1.8} />
                  <span>contacto@onestaabogados.org</span>
                </a>
                <p className="max-w-sm text-[0.95rem] leading-[1.6] text-white/52">
                  Usted es un cliente muy importante para nosotros.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <Link
                  href="https://www.instagram.com/onestaabogadosperu/?hl=es-la"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition hover:border-[#0A47E8] hover:bg-[#0A47E8]"
                >
                  <Instagram className="size-4" strokeWidth={1.8} />
                </Link>
                <Link
                  href="https://www.facebook.com/onestaperu"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white transition hover:border-[#0A47E8] hover:bg-[#0A47E8]"
                >
                  <Facebook className="size-4" strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-6 text-[0.92rem] text-white/44 sm:flex-row sm:items-center sm:justify-between">
        <p>ONESTA ABOGADOS PERU. Todos los derechos reservados.</p>
        <p>Privacidad y terminos.</p>
      </div>
    </footer>
  )
}
