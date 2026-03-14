import type { Metadata } from "next";
import LenisProvider from "@/components/lenis-provider";
import { Geist_Mono, Public_Sans } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/home/footer";
import Header from "@/components/home/header";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onesta Abogados - Estudio Juridico en Arequipa, Peru",
  description: "Estudio juridico especializado en derecho civil, penal, laboral y corporativo. Brindamos asesoría legal personalizada y defensa efectiva para proteger sus derechos e intereses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${publicSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
           <main className="relative min-h-screen overflow-hidden bg-[#f0f0f0]">
                <Header />
                {children}
                <FooterSection />
              </main>
        </LenisProvider>
      </body>
    </html>
  );
}
