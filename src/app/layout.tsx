import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Chatbot from "@/components/Chatbot";
import { NavigationClient } from "@/components/NavigationClient";

export const metadata: Metadata = {
  title: "AI Chat Lab™ - Skræddersyede AI Chatbots",
  description: "Professionelle AI chatbot løsninger til din virksomhed",
  icons: {
    icon: "/New-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body>
        {/* Header - ultra minimal */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--border-color)]">
          <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-24 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-11 h-11">
                <Image
                  src="/New-logo.png"
                  alt="AI Chat Lab"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                AI Chat Lab
              </span>
            </Link>

            <NavigationClient />
          </nav>
        </header>

        <main className="pt-24">{children}</main>

        <Chatbot />

        {/* Footer */}
        <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-8 h-8">
                    <Image src="/New-logo.png" alt="AI Chat Lab" fill className="object-contain" />
                  </div>
                  <span className="font-bold text-lg text-[var(--text-primary)]">AI Chat Lab</span>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                  Skræddersyede AI chatbots der leverer premium kundeservice uden ventetid.
                </p>
                
                {/* Social Links */}
                <div className="flex gap-4 items-center">
                  <a 
                    href="#" 
                    aria-label="Facebook" 
                    className="relative w-14 h-14 hover:opacity-80 transition-opacity flex items-center justify-center"
                  >
                    <Image 
                      src="/Facebook.png" 
                      alt="Facebook" 
                      fill 
                      className="object-contain"
                    />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Instagram" 
                    className="relative w-14 h-14 hover:opacity-80 transition-opacity flex items-center justify-center"
                  >
                    <Image 
                      src="/Instagram.png" 
                      alt="Instagram" 
                      fill 
                      className="object-contain"
                    />
                  </a>
                  <a 
                    href="#" 
                    aria-label="LinkedIn" 
                    className="relative w-14 h-14 hover:opacity-80 transition-opacity flex items-center justify-center"
                  >
                    <Image 
                      src="/Linkedin.png" 
                      alt="LinkedIn" 
                      fill 
                      className="object-contain"
                    />
                  </a>
                </div>
              </div>

              {/* Links */}
              <div>
                <h4 className="font-semibold mb-4 text-sm text-[var(--text-primary)] uppercase tracking-wide">Navigation</h4>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <Link href="/" className="block hover:text-[var(--text-primary)] transition">Forside</Link>
                  <Link href="/services" className="block hover:text-[var(--text-primary)] transition">Services</Link>
                  <Link href="/portfolio" className="block hover:text-[var(--text-primary)] transition">Portfolio</Link>
                  <Link href="/about" className="block hover:text-[var(--text-primary)] transition">Om os</Link>
                  <Link href="/contact" className="block hover:text-[var(--text-primary)] transition">Kontakt</Link>
                </div>
              </div>

              {/* Kontakt Info */}
              <div>
                <h4 className="font-semibold mb-4 text-sm text-[var(--text-primary)] uppercase tracking-wide">Kontakt</h4>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] mb-1">Telefon</p>
                    <a href="tel:+4524209963" className="hover:text-[var(--text-primary)] transition">
                      +45 24 20 99 63
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] mb-1">Email</p>
                    <a href="mailto:Mikkelh@aichatlab.dk" className="hover:text-[var(--text-primary)] transition">
                      Mikkelh@aichatlab.dk
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] mb-1">Åbningstider</p>
                    <p>Man-Fre: 9:00-17:00</p>
                  </div>
                </div>
              </div>

              {/* Firma Info */}
              <div>
                <h4 className="font-semibold mb-4 text-sm text-[var(--text-primary)] uppercase tracking-wide">Firma</h4>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] mb-1">CVR-nr.</p>
                    <p>46066359</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] mb-1">Adresse</p>
                    <p>Østervold 13<br />8900 Randers<br />Danmark</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[var(--border-color)] pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[var(--text-secondary)]">
                <p>© 2025 AI Chat Lab™ - Ejet af Mikkel Hummel</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                  <Link href="#" className="hover:text-[var(--text-primary)] transition">Vilkår</Link>
                  <Link href="#" className="hover:text-[var(--text-primary)] transition">Privatlivspolitik</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}