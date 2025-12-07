import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-[var(--text-primary)] tracking-tight">
                Om AI Chat Lab
              </h1>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-semibold mb-4">
                God kundeservice uden ventetid
              </p>
              <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                Vi bygger fremtidens kundeservice med kunstig intelligens
              </p>
            </div>

            {/* Mission Statement */}
            <div className="max-w-4xl mx-auto mb-32">
              <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-12 shadow-md">
                <h2 className="text-5xl font-bold text-[var(--text-primary)] mb-8 text-center">
                  Vores Mission
                </h2>
                <p className="text-2xl text-[var(--text-primary)] leading-relaxed mb-8 font-semibold">
                  Vi gør det nemmere for alle at navigere online.
                </p>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                  Uanset om du vil handle, booke en aftale eller finde information, skal det føles lige så trygt og enkelt som at træde ind i en fysisk butik.
                </p>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                  Derfor udvikler vi chatbots, der fungerer som en hjælpsom medarbejder:
                </p>
                <ul className="space-y-4 mb-8 text-lg text-[var(--text-secondary)]">
                  <li className="flex items-start">
                    <span className="text-[var(--text-primary)] mr-3 text-2xl font-bold">•</span>
                    <span>De guider dig til det, du søger</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--text-primary)] mr-3 text-2xl font-bold">•</span>
                    <span className="font-semibold text-[var(--text-primary)]">God kundeservice uden ventetid</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--text-primary)] mr-3 text-2xl font-bold">•</span>
                    <span>De skaber en rar og behagelig oplevelse, så du føler dig velkommen</span>
                  </li>
                </ul>
                <p className="text-lg text-[var(--text-primary)] font-semibold leading-relaxed">
                  Vores mål er at fjerne stress og gøre den digitale verden mere tilgængelig, venlig og menneskelig.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mb-32">
              <h2 className="text-5xl font-bold text-center mb-6 text-[var(--text-primary)]">
                Vores Værdier
              </h2>
              <p className="text-center text-[var(--text-secondary)] text-lg mb-16">
                Det vi står for
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Value 1 */}
                <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-10 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="text-6xl mb-6">🎯</div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                    Kvalitet Først
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Vi går aldrig på kompromis med kvalitet. Hver chatbot er omhyggeligt testet og optimeret før levering.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-10 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="text-6xl mb-6">🤝</div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                    Ærlighed
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Vi lover kun hvad vi kan levere. Transparent kommunikation og realistiske forventninger er nøglen til succes.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-10 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="text-6xl mb-6">⚡</div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                    Innovation
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Vi holder os opdateret med de nyeste AI-teknologier for at give dig den bedste løsning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-32 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-6 text-[var(--text-primary)]">
              Vores Historie
            </h2>
            <p className="text-center text-[var(--text-secondary)] text-lg mb-16">
              Hvorfor vi startede AI Chat Lab
            </p>

            <div className="bg-white border-2 border-[var(--border-color)] rounded-2xl p-12 shadow-md">
              <div className="space-y-8 text-[var(--text-secondary)] text-lg leading-relaxed">
                <p>
                  Vi ser et enormt potentiale i AI chatbots og er vilde med muligheden for at give online virksomheder en ægte stemme - en måde at møde deres kunder på, der føles personlig og hjælpsom.
                </p>
                <p>
                  Men gang på gang har vi set store og dygtige virksomheder kæmpe med at få de chatbots, de fortjener. Alt for ofte er chatbots kolde og uhjælpsomme. De kan ikke vejlede eller guide kunderne ordenligt, og i bedste fald sender de bare kunderne videre til support med det samme.
                </p>
                <p>
                  <span className="text-[var(--text-primary)] font-semibold">Dette ville vi ændre.</span>
                </p>
                <p>
                  Det er derfor AI Chat Lab blev skabt - for at levere chatbots der faktisk hjælper, guider og skaber værdi for både virksomheder og deres kunder. Chatbots der føles som en naturlig del af kundeservicen, ikke en forhindring.
                </p>
                <p className="text-[var(--text-primary)] font-semibold text-xl border-l-4 border-[var(--text-primary)] pl-6">
                  Vi bygger den AI-kundeservice, som virksomheder har brug for, og som kunderne fortjener.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-6 text-[var(--text-primary)]">
              Hvorfor Vælge Os?
            </h2>
            <p className="text-center text-[var(--text-secondary)] text-lg mb-16">
              Det der gør os unikke
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Reason 1 */}
              <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="text-4xl mr-6 mt-2">🇩🇰</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                      Dansk Service
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      Support på dansk, når du har brug for det. Vi forstår danske virksomheder og deres behov.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reason 2 */}
              <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="text-4xl mr-6 mt-2">🚀</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                      Hurtig Implementering
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      Fra første møde til live chatbot på 2-4 uger. Vi ved at tid er penge.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reason 3 */}
              <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="text-4xl mr-6 mt-2">💰</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                      Fleksible Priser
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      Vælg mellem leje, køb eller skræddersyet løsning. En model der passer til din virksomhed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reason 4 */}
              <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="text-4xl mr-6 mt-2">🔒</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                      Sikkerhed & GDPR
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      Fuld GDPR compliance og dansk datalagring. Dine kunders data er sikre hos os.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-20 text-[var(--text-primary)]">
              AI Chat Lab i Tal
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white border-2 border-[var(--border-color)] rounded-2xl p-8 text-center hover:shadow-md transition-shadow duration-300">
                <div className="text-5xl font-bold text-[var(--text-primary)] mb-4">24/7</div>
                <p className="text-[var(--text-secondary)] uppercase tracking-wide font-semibold text-sm">
                  Support Døgnet Rundt
                </p>
              </div>

              <div className="bg-white border-2 border-[var(--border-color)] rounded-2xl p-8 text-center hover:shadow-md transition-shadow duration-300">
                <div className="text-5xl font-bold text-[var(--text-primary)] mb-4">2-4</div>
                <p className="text-[var(--text-secondary)] uppercase tracking-wide font-semibold text-sm">
                  Ugers Implementering
                </p>
              </div>

              <div className="bg-white border-2 border-[var(--border-color)] rounded-2xl p-8 text-center hover:shadow-md transition-shadow duration-300">
                <div className="text-5xl font-bold text-[var(--text-primary)] mb-4">100%</div>
                <p className="text-[var(--text-secondary)] uppercase tracking-wide font-semibold text-sm">
                  Skræddersyet
                </p>
              </div>

              <div className="bg-white border-2 border-[var(--border-color)] rounded-2xl p-8 text-center hover:shadow-md transition-shadow duration-300">
                <div className="text-5xl font-bold text-[var(--text-primary)] mb-4">🇩🇰</div>
                <p className="text-[var(--text-secondary)] uppercase tracking-wide font-semibold text-sm">
                  Dansk Kvalitet
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
              Klar til at Komme i Gang?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-12">
              Lad os tage en uforpligtende snak om hvordan vi kan hjælpe din virksomhed
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="chrome-button px-12 py-4 text-base">
                  Kontakt Os
                </button>
              </Link>
              <Link href="/services">
                <button className="ghost-button px-12 py-4 text-base">
                  Se Vores Services
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}