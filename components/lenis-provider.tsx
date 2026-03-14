"use client"

import { useEffect } from "react"
import Lenis from "lenis"

type LenisProviderProps = {
  children: React.ReactNode
}

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 0.9,
      lerp: 0.085,
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
