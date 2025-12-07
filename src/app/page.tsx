'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Chatbot = dynamic(() => import('@/components/Chatbot'), { ssr: false });

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setShowArrow(entry.isIntersecting));
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes pulse-bounce {
          0%, 100% { transform: translateY(0) scale(1); opacity: 1; }
          50% { transform: translateY(-12px) scale(1.05); opacity: 0.8; }
        }
        .arrow-bounce {
          animation: pulse-bounce 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero - tekst venstre, video højre */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="max-w-xl space-y-6">
            <p className="text-xs uppercase tracking-[0.08em] text-[var(--text-secondary)]">
              AI-DREVET KUNDESERVICE
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight text-[var(--text-primary)]">
              Skræddersyede
              <br />
              AI chatbots
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed">
              Vi bygger, driver og optimerer jeres AI-assistent og vi ved hvor vigtigt det er at det altid virker.
            </p>
            <div className="flex flex-wrap gap-4">
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-[var(--text-light)]">
              <span>✓ Go-live på 2-4 uger</span>
              <span>✓ 24/7 kritisk support</span>
              <span>✓ Sikkerhed & GDPR</span>
            </div>
          </div>

          <div className="relative h-[520px] w-full rounded-2xl overflow-hidden shadow-md">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/new-logo.png"
            >
              <source src="/robot1.mp4" type="video/mp4" />
              <source src="/robot2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>


      {/* Value props */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">24/7 kritisk support</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Hvis der opstår problemer, er vores team klar til at hjælpe — dag og nat. 
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Skræddersyede chatbots</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Få jeres egen AI-assistent, der forstår jeres unikke kunderspørgsmål og behov.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Sikkerhed & GDPR</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Vi prioriterer datasikkerhed og overholder alle gældende GDPR-regler.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs mb-4">VORES PROCES</p>
          <h2 className="text-5xl font-bold mb-16">Fra første samtale til jeres AI-assistent er live</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl font-bold mb-4 text-[var(--text-light)]">01</div>
              <h3 className="text-xl font-bold mb-3">første samtale</h3>
              <p className="text-[var(--text-secondary)]">
                Vi tager en snak om jeres ønsker og behov og ser på en ca. pris.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-4 text-[var(--text-light)]">02</div>
              <h3 className="text-xl font-bold mb-3">opsætning</h3>
              <p className="text-[var(--text-secondary)]">
                Vi laver en Chatbot baseret på jeres ønsker og behov og præsentere den for jer.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-4 text-[var(--text-light)]">03</div>
              <h3 className="text-xl font-bold mb-3">Go-live</h3>
              <p className="text-[var(--text-secondary)]">
                Jeres chatbot bliver sat live på jeres side og vi sørger for at alt fungerer som det skal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6" ref={ctaRef}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold">
            Klar til at se en demo?
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Vi har en af vores chatbots klar til at i kan teste og vurdere. den står klar til at hjælpe jer rundt på siden og hjælpe jer med at tage kontakt til os hvis i ønsker det.
          </p>
          <p className="text-sm text-[var(--text-light)]">
            Brug chat-ikonet nederst til højre for at starte en demo-chat.
          </p>
        </div>
      </section>

      {/* Flydende pil der peger på chatbotten */}
      {showArrow && (
        <div className="pointer-events-none fixed bottom-24 right-28 z-40 arrow-bounce">
          <div className="flex items-center gap-3 text-[var(--text-primary)]">
            <span className="text-4xl font-bold">Prøv chatbotten</span>
            <span className="text-7xl">↘</span>
          </div>
        </div>
      )}

      <Chatbot isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} showPulse={showArrow} />
    </div>
  );
}