import Link from 'next/link';

export default function Portfolio() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-20">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-[var(--text-primary)] tracking-tight">
                Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                Se hvordan vores AI chatbots har transformeret kundeservice for virksomheder
              </p>
            </div>

            {/* Video Cases Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Video Case 1 */}
              <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="bg-gradient-to-br from-[var(--border-color)] to-[var(--bg-secondary)] aspect-video rounded-t-2xl mb-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">▶️</div>
                    <p className="text-[var(--text-light)] uppercase tracking-wider text-sm font-semibold">Video Demo 1</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">E-Commerce Chatbot</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    AI chatbot der hjælper kunder med produktvalg og ordrestatus 24/7
                  </p>
                </div>
              </div>

              {/* Video Case 2 */}
              <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="bg-gradient-to-br from-[var(--border-color)] to-[var(--bg-secondary)] aspect-video rounded-t-2xl mb-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">▶️</div>
                    <p className="text-[var(--text-light)] uppercase tracking-wider text-sm font-semibold">Video Demo 2</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Support Chatbot</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Intelligent support der løser 80% af kundehenvendelser automatisk
                  </p>
                </div>
              </div>

              {/* Video Case 3 */}
              <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="bg-gradient-to-br from-[var(--border-color)] to-[var(--bg-secondary)] aspect-video rounded-t-2xl mb-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">▶️</div>
                    <p className="text-[var(--text-light)] uppercase tracking-wider text-sm font-semibold">Video Demo 3</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Booking Chatbot</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Automatisk booking og kalender styring med SMS bekræftelser
                  </p>
                </div>
              </div>

              {/* Video Case 4 */}
              <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="bg-gradient-to-br from-[var(--border-color)] to-[var(--bg-secondary)] aspect-video rounded-t-2xl mb-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">▶️</div>
                    <p className="text-[var(--text-light)] uppercase tracking-wider text-sm font-semibold">Video Demo 4</p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Lead Generation</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    Kvalificerer leads og booker salgsmøder automatisk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="py-32 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
                Virksomheder der Stoler på Os
              </h2>
              <p className="text-lg text-[var(--text-secondary)]">
                Disse brands bruger AI Chat Lab chatbots
              </p>
            </div>

            {/* Client Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="bg-white border-2 border-[var(--border-color)] rounded-2xl p-8 flex items-center justify-center aspect-square hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-center">
                    <div className="text-5xl mb-3">🏢</div>
                    <p className="text-[var(--text-secondary)] text-sm font-semibold uppercase tracking-wide">
                      Firma {i}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center text-[var(--text-primary)] mb-6">
              Resultater der Taler for Sig Selv
            </h2>
            <p className="text-center text-[var(--text-secondary)] text-lg mb-16">
              Gennemsnitlige resultater for vores klienter
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Result 1 */}
              <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-10 text-center hover:shadow-md transition-shadow duration-300">
                <div className="text-5xl font-bold text-[var(--text-primary)] mb-3">
                  +75%
                </div>
                <p className="text-[var(--text-secondary)] text-lg font-semibold mb-2">
                  Selvbetjening
                </p>
                <p className="text-[var(--text-light)] text-sm">
                  Andel af spørgsmål løst uden human intervention
                </p>
              </div>

              {/* Result 2 */}
              <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-10 text-center hover:shadow-md transition-shadow duration-300">
                <div className="text-5xl font-bold text-[var(--text-primary)] mb-3">
                  -60%
                </div>
                <p className="text-[var(--text-secondary)] text-lg font-semibold mb-2">
                  Supportomkostninger
                </p>
                <p className="text-[var(--text-light)] text-sm">
                  Reduktion i manuelle supportomkostninger
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
              Klar til Din Egen Chatbot?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
              Lad os tage en uforpligtende snak om hvordan AI kan hjælpe din virksomhed
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="chrome-button px-12 py-4 text-base">
                  Kontakt Os
                </button>
              </Link>
              <Link href="/">
                <button className="ghost-button px-12 py-4 text-base">
                  Se Hvad Vi Tilbyder
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}