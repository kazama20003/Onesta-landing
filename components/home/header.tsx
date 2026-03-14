"use client"

import Image from "next/image"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Servicios",
    href: "/services",
  },
  {
    label: "Nuestro Equipo",
    href: "/#equipo",
  },
  {
    label: "Testimonios",
    href: "/#testimonios",
  },
]

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-10 w-20 items-center justify-center overflow-hidden rounded-[0.95rem] border border-black/10 bg-white shadow-[0_10px_30px_rgba(4,17,35,0.12)]">
        <Image
          src="https://res.cloudinary.com/demzflxgq/image/upload/v1773451288/464201992_990587359749631_5833191509006131418_n_suxobg.jpg"
          alt="Onesta Abogados"
          width={80}
          height={40}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span className="hidden text-sm font-semibold tracking-[0.26em] text-white/92 uppercase md:inline-block">
        Onesta
      </span>
    </div>
  )
}

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 24) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY.current + 8) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY.current - 8) {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-transform duration-500 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-3.5 lg:px-8 xl:px-10">
        <Link href="/" aria-label="Onesta Abogados">
          <BrandMark />
        </Link>

        <nav className="hidden items-center gap-0.5 rounded-[0.95rem] border border-black/10 bg-white p-1 shadow-[0_18px_40px_rgba(0,0,0,0.10)] lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-[0.8rem] px-4 py-2.5 text-[0.74rem] font-extrabold tracking-[0.04em] text-black uppercase transition hover:bg-[#f0f0f0]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            href="tel:+51901206784"
            className="hidden items-center gap-2.5 rounded-[0.95rem] border border-black/10 bg-white px-4 py-2.5 text-[0.74rem] font-extrabold tracking-[0.04em] text-black uppercase shadow-[0_18px_40px_rgba(0,0,0,0.10)] transition hover:bg-[#f0f0f0] sm:flex"
          >
            <span className="inline-flex size-2.5 rounded-full bg-[#ea4335] shadow-[0_0_0_4px_rgba(234,67,53,0.15)]" />
            +51901206784
          </Link>

          <Link
            href="https://wa.me/51933599301"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="inline-flex size-11 items-center justify-center rounded-[0.95rem] border border-black/10 bg-white text-black shadow-[0_18px_40px_rgba(0,0,0,0.10)] transition hover:bg-[#f0f0f0]"
          >
            <MessageCircle className="size-4" strokeWidth={1.8} />
          </Link>

          <Link
            href="/#contacto"
            className="rounded-[0.95rem] bg-[#0A47E8] px-4.5 py-2.5 text-[0.74rem] font-extrabold tracking-[0.04em] text-white uppercase transition hover:bg-[#0939bb]"
          >
            Contactar
          </Link>
        </div>
      </div>
    </header>
  )
}
