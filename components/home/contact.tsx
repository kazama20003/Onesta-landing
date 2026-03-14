import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  Phone,
} from "lucide-react"

const contactHighlights = [
  {
    icon: Phone,
    label: "Telefonos",
    value: "+51 933599301 / +51 956335950",
  },
  {
    icon: Mail,
    label: "Correos",
    value: "onestaabogadosperu@gmail.com",
  },
  {
    icon: Mail,
    label: "Correo institucional",
    value: "contacto@onestaabogados.org",
  },
  {
    icon: Phone,
    label: "Contacto directo",
    value: "933599301 / 956335950",
  },
]

export default function ContactSection() {
  return (
    <section className="relative bg-[#f0f0f0] text-black">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex min-h-[50vh] flex-col px-6 py-10 sm:px-8 lg:px-10 lg:py-12 xl:px-14">
          <p className="text-[1.1rem] font-medium tracking-[-0.03em] text-[#0A47E8]">
            + Contactenos / Contact Us
          </p>

          <div className="mt-10 max-w-4xl">
            <h2 className="max-w-none text-[clamp(2.9rem,4.9vw,5.25rem)] leading-[0.95] font-medium tracking-[-0.075em] text-black">
              Usted es un cliente muy importante para nosotros
            </h2>
          </div>

          <div className="mt-auto max-w-2xl pt-14 lg:pt-22">
            <p className="max-w-xl text-[clamp(1.04rem,1rem+0.28vw,1.24rem)] leading-[1.55] tracking-[-0.02em] text-black/76">
              Envienos un email indicando sus nombres, numero de contacto y un
              breve resumen de su consulta. Un miembro de nuestro equipo se
              comunicara con usted lo antes posible.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactHighlights.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="rounded-[1.4rem] bg-white px-5 py-5 shadow-[0_14px_34px_rgba(0,0,0,0.06)]"
                  >
                    <div className="flex items-center gap-4">
                      <span className="inline-flex size-11 items-center justify-center rounded-full bg-[#f0f0f0] text-[#0A47E8]">
                        <Icon className="size-4" strokeWidth={1.8} />
                      </span>
                      <div>
                        <p className="text-[0.82rem] font-semibold tracking-[0.12em] text-black/44 uppercase">
                          {item.label}
                        </p>
                        <p className="mt-1 text-[0.98rem] font-medium text-black">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/onestaperu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-[0.95rem] border border-black/10 bg-white px-4 py-3 text-[0.9rem] font-medium text-black transition hover:border-[#0A47E8] hover:text-[#0A47E8]"
              >
                <Facebook className="size-4" strokeWidth={1.8} />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/onestaabogadosperu/?hl=es-la"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-[0.95rem] border border-black/10 bg-white px-4 py-3 text-[0.9rem] font-medium text-black transition hover:border-[#0A47E8] hover:text-[#0A47E8]"
              >
                <Instagram className="size-4" strokeWidth={1.8} />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[52vh] bg-[#f0f0f0] pt-5 lg:pt-6">
          <div className="flex h-full min-h-[calc(52vh-1.25rem)] items-center lg:min-h-[calc(100vh-1.5rem)]">
            <div className="w-full rounded-none bg-white px-6 py-8 shadow-[0_22px_54px_rgba(0,0,0,0.08)] sm:px-8 lg:min-h-[76%] lg:px-10 lg:py-10">
              <div className="border-b border-black/8 pb-6">
                <p className="text-[0.88rem] font-semibold tracking-[0.12em] text-[#0A47E8] uppercase">
                  Formulario
                </p>
                <p className="mt-3 max-w-xl text-[1rem] leading-[1.6] text-black/68">
                  Tambien puede escribir directamente a
                  {" "}
                  <span className="font-medium text-black">
                    onestaabogadosperu@gmail.com
                  </span>
                  {" "}
                  o
                  {" "}
                  <span className="font-medium text-black">
                    contacto@onestaabogados.org
                  </span>
                  .
                </p>
              </div>

              <form className="mt-8 grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-[0.82rem] font-semibold tracking-[0.1em] text-black/44 uppercase">
                      Nombre
                    </span>
                    <input
                      type="text"
                      placeholder="Su nombre"
                      className="h-14 border-b border-black/12 bg-transparent px-0 text-black outline-none transition focus:border-[#0A47E8]"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-[0.82rem] font-semibold tracking-[0.1em] text-black/44 uppercase">
                      Correo
                    </span>
                    <input
                      type="email"
                      placeholder="correo@empresa.com"
                      className="h-14 border-b border-black/12 bg-transparent px-0 text-black outline-none transition focus:border-[#0A47E8]"
                    />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-[0.82rem] font-semibold tracking-[0.1em] text-black/44 uppercase">
                      Telefono
                    </span>
                    <input
                      type="tel"
                      placeholder="+51 ..."
                      className="h-14 border-b border-black/12 bg-transparent px-0 text-black outline-none transition focus:border-[#0A47E8]"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-[0.82rem] font-semibold tracking-[0.1em] text-black/44 uppercase">
                      Servicio
                    </span>
                    <select className="h-14 border-b border-black/12 bg-transparent px-0 text-black outline-none transition focus:border-[#0A47E8]">
                      <option>Seleccione un servicio</option>
                      <option>Derecho societario</option>
                      <option>Derecho civil</option>
                      <option>Derecho de familia</option>
                      <option>Derecho laboral</option>
                      <option>Indecopi</option>
                      <option>Metodos de solucion de conflictos</option>
                    </select>
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-[0.82rem] font-semibold tracking-[0.1em] text-black/44 uppercase">
                    Mensaje
                  </span>
                  <textarea
                    rows={6}
                    placeholder="Cuentenos brevemente en que podemos ayudarle."
                    className="border-b border-black/12 bg-transparent px-0 py-4 text-black outline-none transition focus:border-[#0A47E8]"
                  />
                </label>

                <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-[0.95rem] leading-[1.6] text-black/54">
                    Al enviar este formulario, acepta ser contactado por nuestro
                    equipo para atender su consulta.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 self-start rounded-[0.95rem] bg-[#0A47E8] px-6 py-4 text-[0.98rem] font-medium text-white transition hover:bg-[#0939bb]"
                  >
                    Enviar consulta
                    <ArrowRight className="size-4" strokeWidth={1.8} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
