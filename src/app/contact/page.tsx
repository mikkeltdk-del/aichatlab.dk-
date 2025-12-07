'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    // Simuler indsendelse
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      
      // Reset efter 3 sekunder
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-[var(--text-primary)] tracking-tight">
              Kontakt Os
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              Lad os tage en uforpligtende snak om hvordan AI kan transformere din kundeservice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-8">
                Få Fat i Os
              </h2>
              <p className="text-[var(--text-secondary)] text-lg mb-12 leading-relaxed">
                Vi er klar til at hjælpe dig med at finde den perfekte AI chatbot løsning til din virksomhed.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="text-4xl mr-6">📞</div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                        Telefon
                      </h3>
                      <a href="tel:+4524209963" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition text-lg font-semibold">
                        +45 24 20 99 63
                      </a>
                      <p className="text-[var(--text-light)] text-sm mt-1">Man-Fre: 9:00 - 17:00</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="text-4xl mr-6">📧</div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                        Email
                      </h3>
                      <a href="mailto:mikkelh@aichatlab.dk" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition text-lg font-semibold">
                        mikkelh@aichatlab.dk
                      </a>
                      <p className="text-[var(--text-light)] text-sm mt-1">Svar inden for 24 timer</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="text-4xl mr-6">📍</div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                        Lokation
                      </h3>
                      <p className="text-[var(--text-secondary)] text-lg font-semibold">
                        Danmark, Randers
                      </p>
                      <p className="text-[var(--text-light)] text-sm mt-1">Vi arbejder remote og kommer gerne til jer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mt-12 p-8 bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl hover:shadow-md transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                  Hvorfor Vælge Os?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-bold mr-3 text-xl">✓</span>
                    Gratis konsultation
                  </li>
                  <li className="flex items-center text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-bold mr-3 text-xl">✓</span>
                    Hurtig responstid
                  </li>
                  <li className="flex items-center text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-bold mr-3 text-xl">✓</span>
                    Skræddersyede løsninger
                  </li>
                  <li className="flex items-center text-[var(--text-secondary)]">
                    <span className="text-[var(--text-primary)] font-bold mr-3 text-xl">✓</span>
                    Dansk support 24/7
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-2xl p-10 h-fit sticky top-32">
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8">
                Send Os En Besked
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[var(--text-primary)] font-semibold mb-3 uppercase tracking-wide text-xs">
                    Navn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:border-black focus:outline-none focus:shadow-sm transition placeholder-[var(--text-light)] text-base"
                    placeholder="Dit fulde navn"
                    disabled={submitStatus === 'loading'}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[var(--text-primary)] font-semibold mb-3 uppercase tracking-wide text-xs">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:border-black focus:outline-none focus:shadow-sm transition placeholder-[var(--text-light)] text-base"
                    placeholder="din@email.dk"
                    disabled={submitStatus === 'loading'}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-[var(--text-primary)] font-semibold mb-3 uppercase tracking-wide text-xs">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:border-black focus:outline-none focus:shadow-sm transition placeholder-[var(--text-light)] text-base"
                    placeholder="+45 12 34 56 78"
                    disabled={submitStatus === 'loading'}
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-[var(--text-primary)] font-semibold mb-3 uppercase tracking-wide text-xs">
                    Firma
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:border-black focus:outline-none focus:shadow-sm transition placeholder-[var(--text-light)] text-base"
                    placeholder="Dit firmanavn"
                    disabled={submitStatus === 'loading'}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[var(--text-primary)] font-semibold mb-3 uppercase tracking-wide text-xs">
                    Besked *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white border-2 border-[var(--border-color)] rounded-lg text-[var(--text-primary)] focus:border-black focus:outline-none focus:shadow-sm transition resize-none placeholder-[var(--text-light)] text-base"
                    placeholder="Fortæl os om dit projekt og dine behov..."
                    disabled={submitStatus === 'loading'}
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-green-700 font-semibold text-center">
                    ✓ Tak! Vi kontakter dig hurtigst muligt.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-700 font-semibold text-center">
                    Der opstod en fejl. Prøv venligst igen.
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className={`chrome-button w-full py-4 text-base font-semibold transition-all duration-300 ${
                    submitStatus === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {submitStatus === 'loading' ? 'Sender...' : 'Send Besked'}
                </button>

                <p className="text-[var(--text-light)] text-sm text-center">
                  * Påkrævede felter
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Har du Spørgsmål?
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
            Vi er klar til at hjælpe. Uanset om det er via chat, email eller telefon.
          </p>
          <Link href="/">
            <button className="chrome-button px-12 py-4 text-base">
              Tilbage til Forside
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}