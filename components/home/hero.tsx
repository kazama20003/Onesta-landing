export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://res.cloudinary.com/demzflxgq/video/upload/v1773442024/8061656-uhd_2560_1440_25fps_jhdryc.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/8" />
      </div>

      <div className="relative z-20 flex min-h-screen w-full flex-col px-4 pb-5 pt-32 sm:px-6 sm:pt-36 lg:px-10 lg:pt-40 xl:px-14">
        <div className="mt-[16vh] flex items-end justify-between gap-8 border-b border-white/70 pb-3 text-white/95">
          <p className="max-w-[18rem] text-[clamp(1.05rem,1rem+0.55vw,1.2rem)] leading-[1.45] text-white/92">
            Servicio profesional juridico, que prioriza al cliente en la mejor
            solucion de sus problemas legales.
          </p>
          <p className="hidden text-[clamp(1rem,0.9rem+0.35vw,1.25rem)] font-medium tracking-[0.06em] sm:block">
            48&deg;52&apos;41&Prime;N 2&deg;18&apos;41&Prime;E
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold tracking-[0.28em] text-white/70 uppercase">
              Estudio Juridico
            </p>
            <h1 className="max-w-none text-[clamp(4.25rem,11vw,10.5rem)] leading-[0.86] font-extrabold tracking-[-0.095em] text-white uppercase">
              Onesta Abogados
            </h1>
          </div>

          <div className="hidden max-w-xs rounded-[1.5rem] border border-black/10 bg-[#f0f0f0] p-5 text-black shadow-[0_24px_60px_rgba(0,0,0,0.16)] xl:block">
            <p className="text-[0.72rem] font-bold tracking-[0.12em] text-[#0A47E8] uppercase">
              Enfoque
            </p>
            <p className="mt-3 text-base leading-7 text-black">
              Estrategia, defensa y asesoria legal con una presencia sobria,
              institucional y clara.
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-white/72 sm:hidden">
          <span className="font-semibold tracking-[0.18em] uppercase">
            AREQUIPA
          </span>
          <span>12&deg;02&apos;35&Prime;S 77&deg;01&apos;42&Prime;W</span>
        </div>
      </div>
    </section>
  )
}
