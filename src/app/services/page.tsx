import Link from 'next/link';

export default function Services() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-20">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-[var(--text-primary)] tracking-tight">
                Services
              </h1>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                Vælg den løsning der passer perfekt til din virksomhed
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {/* KØB PAKKE */}
              <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-10 flex flex-col hover:shadow-md transition-shadow duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
                    KØB
                  </h3>
                  <div className="mb-6">
                    <p className="text-[var(--text-light)] text-sm font-semibold mb-2">Fra</p>
                    <div className="text-5xl font-bold text-[var(--text-primary)]">49.999 kr.</div>
                    <p className="text-[var(--text-secondary)] text-base mt-3 font-semibold">engangsbetaling</p>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start">
                    <span className="text-[var(--text-primary)] mr-3 font-bold text-lg">✓</span>
                    <span className="text-[var(--text-secondary)] text-base">Fuld ejerskab af koden</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--text-primary)] mr-3 font-bold text-lg">✓</span>
                    <span className="text-[var(--text-secondary)] text-base">Tilpas selv efter ønske</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--text-primary)] mr-3 font-bold text-lg">✓</span>
                    <span className="text-[var(--text-secondary)] text-base">Kildekode inkluderet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--text-primary)] mr-3 font-bold text-lg">✓</span>
                    <span className="text-[var(--text-secondary)] text-base">Dokumentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--text-primary)] mr-3 font-bold text-lg">✓</span>
                    <span className="text-[var(--text-secondary)] text-base">30 dages support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--text-primary)] mr-3 font-bold text-lg">✓</span>
                    <span className="text-[var(--text-secondary)] text-base">Gratis konsultation</span>
                  </li>
                </ul>

                <Link href="/contact">
                  <button className="w-full py-4 text-base font-semibold rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[#f0f0f0] transition-colors duration-300 border-2 border-[var(--border-color)]">
                    Kontakt Os
                  </button>
                </Link>
              </div>

              {/* LEJE PAKKE - FEATURED I MIDTEN */}
              <div className="bg-gradient-to-br from-[#1e5a96] to-[#051f2e] text-white border-2 border-[#1a4d7a] rounded-2xl p-10 flex flex-col hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                {/* Glint/shine effect */}
                <div className="absolute top-0 left-1/3 w-1/3 h-1/3 bg-white/10 rounded-full blur-2xl"></div>
                
                <div className="text-center mb-8 relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    LEJE
                  </h3>
                  <div className="mb-6">
                    <p className="text-blue-100 text-sm font-semibold mb-2">Fra</p>
                    <div className="text-5xl font-bold text-white">1.500 kr.</div>
                    <p className="text-blue-100 text-base mt-3 font-semibold">per måned</p>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-10 flex-grow relative z-10">
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3 font-bold text-lg">✓</span>
                    <span className="text-blue-50 text-base">Fuld vedligeholdelse inkluderet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3 font-bold text-lg">✓</span>
                    <span className="text-blue-50 text-base">Løbende opdateringer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3 font-bold text-lg">✓</span>
                    <span className="text-blue-50 text-base">24/7 teknisk support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3 font-bold text-lg">✓</span>
                    <span className="text-blue-50 text-base">Opsigelse når du vil</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3 font-bold text-lg">✓</span>
                    <span className="text-blue-50 text-base">Hosting inkluderet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-300 mr-3 font-bold text-lg">✓</span>
                    <span className="text-blue-50 text-base">Gratis konsultation</span>
                  </li>
                </ul>

                <Link href="/contact" className="relative z-10">
                  <button className="w-full py-4 text-base font-semibold rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[#f0f0f0] transition-colors duration-300 border-2 border-[var(--border-color)]">
                    Kontakt Os
                  </button>
                </Link>
              </div>

              {/* SKRÆDDERSYET PAKKE */}
              <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-10 flex flex-col hover:shadow-md transition-shadow duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
                    SKRÆDDERSYET
                  </h3>
                  <div className="mb-6">
                    <p className="text-[var(--text-light)] text-sm font-semibold mb-2">Individuelt tilbud</p>
                    <div className="text-5xl font-bold text-[var(--text-primary)]">100%</div>
                    <p className="text-[var(--text-secondary)] text-base mt-3 font-semibold">Tilpasset dine behov</p>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-start">
                    <span className="text-[var(--text-primary)] mr-3 font-bold text-lg">✓</span>
                    <span className="text-[var(--text-secondary)] text-base">100% skræddersyet løsning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--text-primary)] mr-3 font-bold text-lg">✓</span>
                    <span className="text-[var(--text-secondary)] text-base">Avancerede integrationer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--text-primary)] mr-3 font-bold text-lg">✓</span>
                    <span className="text-[var(--text-secondary)] text-base">Dedicated projekt manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--text-primary)] mr-3 font-bold text-lg">✓</span>
                    <span className="text-[var(--text-secondary)] text-base">On-site implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--text-primary)] mr-3 font-bold text-lg">✓</span>
                    <span className="text-[var(--text-secondary)] text-base">Custom design & features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--text-primary)] mr-3 font-bold text-lg">✓</span>
                    <span className="text-[var(--text-secondary)] text-base">Prioriteret support</span>
                  </li>
                </ul>

                <Link href="/contact">
                  <button className="w-full py-4 text-base font-semibold rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[#f0f0f0] transition-colors duration-300 border-2 border-[var(--border-color)]">
                    Få Et Tilbud
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-32 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center text-[var(--text-primary)] mb-6">
              Hvad Er Inkluderet?
            </h2>
            <p className="text-center text-[var(--text-secondary)] text-lg mb-16">
              Sammenligning af vores pakker
            </p>

            <div className="bg-white border-2 border-[var(--border-color)] rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-[var(--bg-secondary)] border-b-2 border-[var(--border-color)]">
                    <tr>
                      <th className="p-6 text-[var(--text-primary)] font-bold uppercase tracking-wide text-sm">Feature</th>
                      <th className="p-6 text-center text-[var(--text-primary)] font-bold uppercase tracking-wide text-sm">Køb</th>
                      <th className="p-6 text-center text-[var(--text-primary)] font-bold uppercase tracking-wide text-sm">Leje</th>
                      <th className="p-6 text-center text-[var(--text-primary)] font-bold uppercase tracking-wide text-sm">Skræddersyet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-color)] hover:bg-[var(--bg-secondary)] transition">
                      <td className="p-6 text-[var(--text-primary)] font-semibold">AI Chatbot</td>
                      <td className="p-6 text-center text-[var(--text-primary)] text-xl">✓</td>
                      <td className="p-6 text-center text-[var(--text-primary)] text-xl">✓</td>
                      <td className="p-6 text-center text-[var(--text-primary)] text-xl">✓</td>
                    </tr>
                    <tr className="border-b border-[var(--border-color)] hover:bg-[var(--bg-secondary)] transition">
                      <td className="p-6 text-[var(--text-primary)] font-semibold">Vedligeholdelse</td>
                      <td className="p-6 text-center text-[var(--text-light)]">—</td>
                      <td className="p-6 text-center text-[var(--text-primary)] text-xl">✓</td>
                      <td className="p-6 text-center text-[var(--text-primary)] text-xl">✓</td>
                    </tr>
                    <tr className="border-b border-[var(--border-color)] hover:bg-[var(--bg-secondary)] transition">
                      <td className="p-6 text-[var(--text-primary)] font-semibold">Kildekode</td>
                      <td className="p-6 text-center text-[var(--text-primary)] text-xl">✓</td>
                      <td className="p-6 text-center text-[var(--text-light)]">—</td>
                      <td className="p-6 text-center text-[var(--text-primary)] text-xl">✓</td>
                    </tr>
                    <tr className="border-b border-[var(--border-color)] hover:bg-[var(--bg-secondary)] transition">
                      <td className="p-6 text-[var(--text-primary)] font-semibold">24/7 Support</td>
                      <td className="p-6 text-center text-[var(--text-secondary)]">30 dage</td>
                      <td className="p-6 text-center text-[var(--text-primary)] text-xl">✓</td>
                      <td className="p-6 text-center text-[var(--text-primary)] text-xl">✓</td>
                    </tr>
                    <tr className="border-b border-[var(--border-color)] hover:bg-[var(--bg-secondary)] transition">
                      <td className="p-6 text-[var(--text-primary)] font-semibold">Hosting</td>
                      <td className="p-6 text-center text-[var(--text-light)]">—</td>
                      <td className="p-6 text-center text-[var(--text-primary)] text-xl">✓</td>
                      <td className="p-6 text-center text-[var(--text-primary)] text-xl">✓</td>
                    </tr>
                    <tr className="hover:bg-[var(--bg-secondary)] transition">
                      <td className="p-6 text-[var(--text-primary)] font-semibold">Custom Features</td>
                      <td className="p-6 text-center text-[var(--text-light)]">—</td>
                      <td className="p-6 text-center text-[var(--text-light)]">—</td>
                      <td className="p-6 text-center text-[var(--text-primary)] text-xl">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center text-[var(--text-primary)] mb-6">
              Ofte Stillede Spørgsmål
            </h2>
            <p className="text-center text-[var(--text-secondary)] text-lg mb-16">
              Find svar på dine spørgsmål om vores services
            </p>

            <div className="space-y-4">
              {[
                {
                  q: "Hvor lang tid tager det at implementere?",
                  a: "Typisk 1-2 uger fra vi starter. Kompleksere løsninger kan tage 3-4 uger. Vi tilpasser tidslisten til dine behov."
                },
                {
                  q: "Kan jeg skifte pakke senere?",
                  a: "Ja! Du kan skifte fra køb til leje eller tilføje funktioner når som helst. Vi hjælper dig med overgangen."
                },
                {
                  q: "Hvad hvis jeg vil have noget helt særligt?",
                  a: "Det er der skræddersyet-pakken til! Vi kan bygge næsten hvad som helst. Kontakt os for at diskutere dine behov."
                },
                {
                  q: "Inkluderer prisen integration med mit system?",
                  a: "Basispakken inkluderer standard integrationer. Avancerede integrationer kan tilkøbes separat."
                }
              ].map((faq, i) => (
                <details key={i} className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-lg p-6 cursor-pointer group hover:shadow-md transition-shadow duration-300">
                  <summary className="flex items-center justify-between font-bold text-[var(--text-primary)] text-lg">
                    {faq.q}
                    <span className="text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-[var(--text-secondary)] mt-4 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
              Klar til at Komme i Gang?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-12">
              Book en gratis konsultation og få et uforpligtende tilbud
            </p>
            <Link href="/contact">
              <button className="px-12 py-4 text-base font-semibold rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[#f0f0f0] transition-colors duration-300 border-2 border-[var(--border-color)]">
                Book Gratis Konsultation
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}