import AboutSection from "@/components/home/about";
import ContactSection from "@/components/home/contact";
import Hero from "@/components/home/hero";
import ProcessSection from "@/components/home/process";
import ReviewsSection from "@/components/home/reviews";
import ServicesSection from "@/components/home/services";
import TeamSection from "@/components/home/team";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="nosotros" className="scroll-mt-28">
        <AboutSection />
      </div>
      <div id="servicios-home" className="scroll-mt-28">
        <ServicesSection />
      </div>
      <div id="equipo" className="scroll-mt-28">
        <TeamSection />
      </div>
      <div id="proceso" className="scroll-mt-28">
        <ProcessSection />
      </div>
      <div id="testimonios" className="scroll-mt-28">
        <ReviewsSection />
      </div>
      <div id="contacto" className="scroll-mt-28">
        <ContactSection />
      </div>
    </>
  )
}
