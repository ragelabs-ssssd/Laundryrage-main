import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QrCode, Phone, Zap, MapPin, CheckCircle2, ArrowUpRight, Menu, X, MessageCircle } from 'lucide-react';
import { BRAND, STATS, STEPS, SERVICES, REFERRAL, FAQS } from '../data/brandData';
import { StoreButtons, QRModal, FAQAccordion } from '../components/SharedUI';

const ORDER_STAGES = [
  { label: 'Rider Assigned', time: '09:15 AM', detail: 'Rider Rajesh is 4 mins away from Jagamara.' },
  { label: 'Solo Drum Wash', time: '11:30 AM', detail: 'Washing 100% separately in sanitized Drum #07.' },
  { label: 'Steam Pressed', time: '04:20 PM', detail: 'Crisp steam press & quality check complete.' },
  { label: 'Out for Delivery', time: '05:45 PM', detail: 'Arriving at your doorstep in 12 mins.' },
];

export default function Style4DarkTech() {
  const [stageIdx, setStageIdx] = useState(1);
  const [qrOpen, setQrOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-gray-900 font-display">
      {/* Utility Header with Desktop QR Modal */}
      <nav id="main-navbar" className="fixed top-0 inset-x-0 z-50 h-16 md:h-[72px] bg-[#090D16]/95 backdrop-blur-md border-b border-white/10 text-white">
        <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-flex items-center shrink-0">
              <img src={BRAND.logo} alt="LaundryRage" className="h-9 w-auto object-contain brightness-0 invert shrink-0" />
            </Link>
            <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 text-xs font-bold">
              <Zap className="w-3.5 h-3.5" /> &lt;24h Express
            </span>
          </div>

          <div className="hidden md:flex items-center gap-7 text-[14px] font-medium text-gray-300">
            <Link to="/services" className="hover:text-white">Services</Link>
            <a href="#s4-areas" className="hover:text-white">Coverage</a>
            <a href="#s4-steps" className="hover:text-white">Process</a>
            <a href="#s4-faq" className="hover:text-white">FAQs</a>
          </div>

          <div className="flex items-center gap-3">
            <a href={BRAND.phoneHref} className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white">
              <Phone className="w-3.5 h-3.5 text-yellow-400" /> {BRAND.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={() => setQrOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-yellow-400 text-gray-900 text-xs font-bold hover:bg-yellow-300"
            >
              <QrCode className="w-4 h-4" /> Book on App
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-10 h-10 inline-flex items-center justify-center rounded-xl text-gray-300 hover:bg-white/10"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-[#090D16] border-b border-white/10 px-6 py-4 space-y-2">
            <Link to="/services" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-semibold text-gray-200">Services</Link>
            <a href="#s4-areas" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-semibold text-gray-200">Coverage</a>
            <a href="#s4-faq" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-semibold text-gray-200">FAQs</a>
          </div>
        )}
      </nav>

      {/* Deep-Slate Hero with Live Order Journey Simulator */}
      <section className="bg-[#090D16] text-white pt-28 pb-16">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-yellow-400 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" /> Built for Bhubaneswar
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.08] tracking-tight">
              {BRAND.tagline}
            </h1>
            <p className="text-base text-gray-300 leading-relaxed max-w-xl">
              {BRAND.heroSub}
            </p>
            <StoreButtons variant="light" />
          </div>

          {/* Interactive 4-Stage Order Journey Simulator */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white/[0.04] border border-white/10 p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Live App Journey Simulator</span>
                <span className="text-xs text-gray-400">Order #LR-4092</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {ORDER_STAGES.map((st, idx) => (
                  <button
                    key={st.label}
                    type="button"
                    onClick={() => setStageIdx(idx)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      stageIdx === idx
                        ? 'bg-yellow-400 text-gray-900 border-yellow-400 font-bold'
                        : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/25'
                    }`}
                  >
                    <p className="text-[11px] opacity-75">{st.time}</p>
                    <p className="text-xs font-extrabold mt-0.5">{st.label}</p>
                  </button>
                ))}
              </div>

              <div className="rounded-2xl bg-black/50 border border-white/10 p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{ORDER_STAGES[stageIdx].label}</p>
                  <p className="text-xs text-gray-300 mt-0.5">{ORDER_STAGES[stageIdx].detail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Content Sections */}
      <main className="py-14 space-y-16">
        <section className="container mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white border border-gray-200 p-5 text-center">
              <p className="text-2xl md:text-3xl font-black text-gray-900">{s.value}</p>
              <p className="text-xs font-semibold text-gray-600 mt-1">{s.label}</p>
            </div>
          ))}
        </section>

        {/* Bhubaneswar Neighborhood Coverage Pills */}
        <section id="s4-areas" className="container mx-auto px-6 md:px-12">
          <div className="rounded-3xl bg-white border border-gray-200 p-7 md:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600">
                <MapPin className="w-3.5 h-3.5" /> Active Bhubaneswar Zones
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Doorstep Pickup Across Bhubaneswar
              </h2>
              <div className="flex flex-wrap gap-2 pt-1">
                {BRAND.areas.map((area) => (
                  <span key={area} className="px-3.5 py-1.5 rounded-full bg-stone-100 border border-gray-200 text-xs font-bold text-gray-800">
                    ● {area}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={`${BRAND.whatsapp}?text=${encodeURIComponent('Hi LaundryRage! Can you confirm pickup in my Bhubaneswar area?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 shrink-0"
            >
              <MessageCircle className="w-4 h-4" /> Check My Area on WhatsApp
            </a>
          </div>
        </section>

        {/* Steps & Services */}
        <section id="s4-steps" className="container mx-auto px-6 md:px-12 space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((st) => (
              <div key={st.step} className="rounded-2xl bg-white border border-gray-200 p-6 space-y-2">
                <span className="text-xs font-black text-amber-600">{st.step}</span>
                <h3 className="text-lg font-bold">{st.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc) => (
              <div key={svc.id} className="rounded-2xl bg-white border border-gray-200 p-6 space-y-2">
                <span className="text-xs font-bold text-amber-700">{svc.badge} • {svc.turnaround}</span>
                <h3 className="text-lg font-bold">{svc.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Referral & FAQ */}
        <section id="s4-faq" className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 rounded-3xl bg-[#090D16] text-white p-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">{REFERRAL.badge}</span>
            <h3 className="text-2xl font-black leading-tight">{REFERRAL.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{REFERRAL.desc}</p>
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion items={FAQS} openIdx={openFaq} setOpenIdx={setOpenFaq} />
          </div>
        </section>
      </main>

      {/* Asymmetric 50/50 Gold & Obsidian Split Footer */}
      <footer id="site-footer" className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-yellow-400 text-gray-900 p-8 md:p-12 flex flex-col justify-between gap-6">
          <div className="space-y-3">
            <img src={BRAND.logo} alt="LaundryRage" className="h-10 w-auto object-contain" />
            <h3 className="text-2xl font-black">{BRAND.tagline}</h3>
            <p className="text-sm font-semibold text-gray-900/80">{BRAND.address} • {BRAND.phoneDisplay}</p>
          </div>
          <p className="text-xs font-bold">© 2026 LaundryRage. All rights reserved.</p>
        </div>

        <div className="bg-[#090D16] text-white p-8 md:p-12 flex flex-col justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={BRAND.qrImage} alt="QR" className="w-20 h-20 rounded-xl bg-white p-1.5 object-contain shrink-0" />
            <StoreButtons variant="light" size="sm" />
          </div>
          <div className="flex justify-between items-center text-xs text-gray-400">
            <span>{BRAND.email}</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-1 font-bold text-yellow-400">
              Back to Top <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      <QRModal isOpen={qrOpen} onClose={() => setQrOpen(false)} />
    </div>
  );
}
