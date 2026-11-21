import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Download, Sparkles, Check, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { BRAND, STATS, STEPS, SERVICES, REFERRAL, FAQS } from '../data/brandData';
import { StoreButtons, FAQAccordion } from '../components/SharedUI';

export default function Style2Editorial() {
  const [careTab, setCareTab] = useState('after');
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F172A] font-display">
      {/* Split-Island Frosted Header */}
      <nav id="main-navbar" className="fixed top-4 inset-x-0 z-50 pointer-events-none px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="pointer-events-auto h-13 px-4 py-2 rounded-2xl bg-white/85 backdrop-blur-md border border-gray-200/70 shadow-sm flex items-center gap-3">
            <Link to="/" className="inline-flex items-center shrink-0">
              <img src={BRAND.logo} alt="LaundryRage" className="h-9 w-auto object-contain shrink-0" />
            </Link>
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" /> 4.7★
            </span>
          </div>

          <div className="pointer-events-auto h-13 px-4 py-2 rounded-2xl bg-white/85 backdrop-blur-md border border-gray-200/70 shadow-sm flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 text-[14px] font-medium text-gray-600">
              <Link to="/services" className="hover:text-gray-900">Services</Link>
              <a href="#s2-care" className="hover:text-gray-900">Fabric Care</a>
              <a href="#s2-timeline" className="hover:text-gray-900">Process</a>
              <a href="#s2-faq" className="hover:text-gray-900">FAQs</a>
            </div>
            <a
              href={BRAND.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-yellow-400 text-gray-900 text-xs font-bold hover:bg-yellow-300"
            >
              <Download className="w-3.5 h-3.5" /> Get App
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-9 h-9 inline-flex items-center justify-center rounded-xl text-gray-700 hover:bg-gray-100"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden pointer-events-auto mt-2 rounded-2xl bg-white border border-gray-200 shadow-xl p-4 space-y-2">
            <Link to="/services" onClick={() => setMobileOpen(false)} className="block px-4 py-2 rounded-xl text-sm font-semibold">Services</Link>
            <a href="#s2-care" onClick={() => setMobileOpen(false)} className="block px-4 py-2 rounded-xl text-sm font-semibold">Fabric Care</a>
            <a href="#s2-faq" onClick={() => setMobileOpen(false)} className="block px-4 py-2 rounded-xl text-sm font-semibold">FAQs</a>
          </div>
        )}
      </nav>

      {/* Editorial Hero with Framed Architectural Video Window */}
      <main className="pt-28 pb-16">
        <section className="container mx-auto px-6 md:px-12 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700">
                <Sparkles className="w-3.5 h-3.5" /> Bhubaneswar Garment Atelier
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.06] tracking-tight text-[#0F172A]">
                {BRAND.tagline}
              </h1>
              <p className="text-base text-gray-600 leading-relaxed max-w-lg">
                {BRAND.heroSub}
              </p>
              <StoreButtons variant="dark" />
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-2xl aspect-[4/3] bg-gray-900">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/images/wash-fold.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src={BRAND.heroVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-yellow-400">Sanitized Solo-Drum</p>
                    <p className="text-lg font-extrabold">Zero Mixing. &lt;24h Return.</p>
                  </div>
                  <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold">
                    50% OFF First Order
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="border-y border-gray-200/80 bg-white">
          <div className="container mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-[#0F172A]">{s.value}</p>
                <p className="text-xs font-semibold text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Before / After Fabric Care Showcase */}
        <section id="s2-care" className="container mx-auto px-6 md:px-12 py-16">
          <div className="rounded-3xl bg-[#0F172A] text-white p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Fabric Science</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Compare Home Wash vs. LaundryRage Care
              </h2>
              <div className="inline-flex p-1 rounded-xl bg-white/10">
                <button
                  type="button"
                  onClick={() => setCareTab('before')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                    careTab === 'before' ? 'bg-white text-gray-900' : 'text-gray-300'
                  }`}
                >
                  Typical Home Wash
                </button>
                <button
                  type="button"
                  onClick={() => setCareTab('after')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                    careTab === 'after' ? 'bg-yellow-400 text-gray-900' : 'text-gray-300'
                  }`}
                >
                  LaundryRage Enzyme Care
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 space-y-4">
              {careTab === 'before' ? (
                <>
                  <h3 className="text-xl font-bold text-gray-200">Mixed Loads &amp; Harsh Detergents</h3>
                  <ul className="space-y-2.5 text-sm text-gray-300">
                    <li>• Color bleeding from mixed darks and whites</li>
                    <li>• Hours spent sorting, drying, and ironing</li>
                    <li>• Hard water residue dulling cotton fibers</li>
                  </ul>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-yellow-400">100% Solo-Drum &amp; Steam Pressed</h3>
                  <ul className="space-y-2.5 text-sm text-gray-200">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-400" /> Separate sanitized drum per order</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-400" /> Bio-enzyme detergents gentle on colors</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yellow-400" /> Crisp steam-press returned in &lt;24 hours</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Horizontal 4-Step Timeline Track */}
        <section id="s2-timeline" className="container mx-auto px-6 md:px-12 pb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">Four-Step Ritual</h2>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400" />
            {STEPS.map((st) => (
              <div key={st.step} className="relative bg-white rounded-2xl border border-gray-200 p-6 pt-8">
                <div className="w-10 h-10 rounded-full bg-yellow-400 text-gray-900 font-black text-xs flex items-center justify-center mb-4 shadow-md">
                  {st.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{st.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services + Referral + FAQs */}
        <section className="container mx-auto px-6 md:px-12 pb-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc) => (
              <div key={svc.id} className="rounded-2xl bg-white border border-gray-200 overflow-hidden flex flex-col">
                <img src={svc.img} alt={svc.name} className="h-40 w-full object-cover" />
                <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-amber-700 mb-1">
                      <span>{svc.badge}</span>
                      <span>{svc.turnaround}</span>
                    </div>
                    <h3 className="text-lg font-bold">{svc.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">{svc.desc}</p>
                  </div>
                  <Link to="/services" className="inline-flex items-center gap-1 text-xs font-bold text-gray-900 hover:text-amber-600">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div id="s2-faq" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 rounded-3xl bg-amber-100/70 border border-amber-200 p-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-800">{REFERRAL.badge}</span>
              <h3 className="text-2xl font-black text-gray-900">{REFERRAL.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{REFERRAL.desc}</p>
            </div>
            <div className="lg:col-span-7">
              <FAQAccordion items={FAQS} openIdx={openFaq} setOpenIdx={setOpenFaq} />
            </div>
          </div>
        </section>
      </main>

      {/* Giant Architectural Wordmark Footer */}
      <footer id="site-footer" className="bg-[#0F172A] text-white pt-14 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 space-y-10">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src={BRAND.qrImage} alt="QR" className="w-16 h-16 rounded-xl bg-white p-1 object-contain shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-yellow-400">50% OFF First Order</p>
                <h3 className="text-xl font-extrabold">{BRAND.tagline}</h3>
              </div>
            </div>
            <StoreButtons variant="light" size="sm" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 pb-4">
            <p>{BRAND.address} • {BRAND.phoneDisplay} • {BRAND.email}</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-1 font-bold text-gray-300 hover:text-yellow-400">
              Back to Top <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        <div className="select-none pointer-events-none text-center -mb-4">
          <span className="text-[13vw] font-black tracking-tighter leading-[0.82] text-white/[0.06] block">
            LAUNDRYRAGE
          </span>
        </div>
      </footer>
    </div>
  );
}
