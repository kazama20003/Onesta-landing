"use client"

import Image from "next/image"
import Link from "next/link"
import { MessageCircle, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const menuPanelRef = useRef<HTMLDivElement | null>(null)
  const menuInnerRef = useRef<HTMLDivElement | null>(null)
  const topLineRef = useRef<HTMLSpanElement | null>(null)
  const middleLineRef = useRef<HTMLSpanElement | null>(null)
  const bottomLineRef = useRef<HTMLSpanElement | null>(null)
  const mobileItemRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (isMenuOpen) {
        setIsVisible(true)
        lastScrollY.current = currentScrollY
        return
      }

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
  }, [isMenuOpen])

  useEffect(() => {
    const panel = menuPanelRef.current
    const inner = menuInnerRef.current
    const topLine = topLineRef.current
    const middleLine = middleLineRef.current
    const bottomLine = bottomLineRef.current
    const items = mobileItemRefs.current.filter(Boolean)

    if (!panel || !inner || !topLine || !middleLine || !bottomLine) return

    if (isMenuOpen) {
      gsap.set(panel, {
        display: "block",
      })

      gsap.set(inner, {
        y: 22,
        opacity: 0,
      })

      gsap.fromTo(
        panel,
        {
          autoAlpha: 0,
          yPercent: -6,
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.38,
          ease: "power3.out",
        }
      )

      gsap.to(inner, {
        y: 0,
        opacity: 1,
        duration: 0.34,
        ease: "power2.out",
        delay: 0.06,
      })

      gsap.fromTo(
        items,
        {
          y: 16,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.34,
          stagger: 0.06,
          ease: "power2.out",
          delay: 0.08,
          overwrite: true,
        }
      )

      gsap.to(topLine, {
        y: 7,
        rotate: 45,
        duration: 0.28,
        ease: "power2.out",
      })
      gsap.to(middleLine, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      })
      gsap.to(bottomLine, {
        y: -7,
        rotate: -45,
        duration: 0.28,
        ease: "power2.out",
      })
      document.body.style.overflow = "hidden"
    } else {
      gsap.to(panel, {
        autoAlpha: 0,
        yPercent: -6,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(panel, {
            display: "none",
          })
        },
      })

      gsap.to(topLine, {
        y: 0,
        rotate: 0,
        duration: 0.24,
        ease: "power2.out",
      })
      gsap.to(middleLine, {
        opacity: 1,
        duration: 0.18,
        ease: "power2.out",
      })
      gsap.to(bottomLine, {
        y: 0,
        rotate: 0,
        duration: 0.24,
        ease: "power2.out",
      })
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div
        className={`transition-transform duration-500 ease-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-3.5 lg:px-8 xl:px-10">
          <Link href="/" aria-label="Onesta Abogados" className="relative z-30">
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

          <div className="relative z-30 flex items-center gap-1.5">
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
              className="hidden rounded-[0.95rem] bg-[#0A47E8] px-4.5 py-2.5 text-[0.74rem] font-extrabold tracking-[0.04em] text-white uppercase transition hover:bg-[#0939bb] sm:inline-flex"
            >
              Contactar
            </Link>

            <button
              type="button"
              aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
              className={`inline-flex size-11 items-center justify-center rounded-[0.95rem] border transition lg:hidden ${
                isMenuOpen
                  ? "pointer-events-none opacity-0"
                  : "border-black/10 bg-white text-black shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
              }`}
            >
              <span className="relative h-4 w-5">
                <span
                  ref={topLineRef}
                  className="absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current"
                />
                <span
                  ref={middleLineRef}
                  className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 rounded-full bg-current"
                />
                <span
                  ref={bottomLineRef}
                  className="absolute left-0 bottom-0 h-[2px] w-5 rounded-full bg-current"
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={menuPanelRef}
        className="fixed inset-0 z-20 hidden bg-[#0A47E8] text-white lg:hidden"
      >
        <div
          ref={menuInnerRef}
          className="flex min-h-screen flex-col px-4 pb-8 pt-24 sm:px-5"
        >
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5">
            <Link
              href="/"
              aria-label="Onesta Abogados"
              onClick={() => setIsMenuOpen(false)}
            >
              <BrandMark />
            </Link>

            <button
              type="button"
              aria-label="Cerrar menu"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex size-11 items-center justify-center rounded-[0.95rem] border border-white/18 bg-white/10 text-white transition hover:bg-white/16"
            >
              <X className="size-5" strokeWidth={2} />
            </button>
          </div>

          <nav className="grid gap-3">
            {navigation.map((item, index) => (
              <Link
                key={item.label}
                ref={(element) => {
                  mobileItemRefs.current[index] = element
                }}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-[1rem] border border-white/18 px-4 py-3.5 text-[1rem] font-semibold tracking-[0.08em] text-white uppercase transition hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link
              ref={(element) => {
                mobileItemRefs.current[navigation.length] = element
              }}
              href="/#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-[1rem] bg-white px-4 py-3.5 text-[1rem] font-semibold tracking-[0.08em] text-[#0A47E8] uppercase transition hover:bg-white/92"
            >
              Contactar
            </Link>
          </nav>

          <div className="mt-auto grid gap-3 pt-8">
            <a
              ref={(element) => {
                mobileItemRefs.current[navigation.length + 1] = element
              }}
              href="https://wa.me/51933599301"
              target="_blank"
              rel="noreferrer"
              className="rounded-[1rem] border border-white/18 px-4 py-3.5 text-[0.96rem] font-semibold tracking-[0.06em] text-white uppercase transition hover:bg-white/10"
            >
              WhatsApp
            </a>
            <a
              ref={(element) => {
                mobileItemRefs.current[navigation.length + 2] = element
              }}
              href="tel:+51933599301"
              className="rounded-[1rem] border border-white/18 px-4 py-3.5 text-[0.96rem] font-semibold tracking-[0.06em] text-white uppercase transition hover:bg-white/10"
            >
              +51 933599301
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
