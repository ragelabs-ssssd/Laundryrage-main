import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  Clock,
  Star,
  Sparkles,
  CheckCircle2,
  Droplets,
  Wind,
  Shirt,
  Zap,
  Gift,
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react';
import { BRAND, STATS, STEPS, SERVICES, REFERRAL, FAQS } from '../data/brandData';
import { StoreButtons, FAQAccordion } from '../components/SharedUI';

export default function Style1Bento() {
  const [washKg, setWashKg] = useState(4);
  const [ironPcs, setIronPcs] = useState(6);
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const basePrice = washKg * 69 + ironPcs * 15;
  const discount = Math.min(50, Math.round(basePrice * 0.5));
  const finalPrice = Math.max(0, basePrice - discount);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900 font-display">
      {/* Floating Pill Header */}
      <nav id="main-navbar" className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto h-14 px-4 sm:px-6 rounded-full bg-white/90 backdrop-blur-xl border border-gray-200/80 shadow-lg flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <Link to="/" className="inline-flex items-center shrink-0">
              <img src={BRAND.logo} alt="LaundryRage" className="h-9 w-auto object-contain shrink-0" />
            </Link>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Express Slots Open
            </span>
          </div>

          <div className="hidden md:flex items-center gap-7 text-[14px] font-semibold text-gray-600">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-900">Home</button>
            <Link to="/services" className="hover:text-gray-900">Services</Link>
            <button onClick={() => scrollTo('s1-calculator')} className="hover:text-gray-900">Estimator</button>
            <button onClick={() => scrollTo('s1-faq')} className="hover:text-gray-900">FAQs</button>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={BRAND.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-[13.5px] font-bold hover:bg-gray-800 whitespace-nowrap"
            >
              <Download className="w-4 h-4 text-yellow-400" />
              Download App
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-10 h-10 inline-flex items-center justify-center rounded-xl text-gray-700 hover:bg-gray-100"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-white border border-gray-200 shadow-xl p-4 space-y-2">
            <Link to="/services" onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50">Services</Link>
            <button onClick={() => scrollTo('s1-calculator')} className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50">Savings Estimator</button>
            <button onClick={() => scrollTo('s1-faq')} className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50">FAQs</button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        {/* Hero Bento */}
        <section className="container mx-auto px-4 sm:px-6 md:px-12 pt-4 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Main Hero Card */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-gray-200/80 p-7 sm:p-10 flex flex-col justify-between shadow-sm">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Bhubaneswar&apos;s #1 Solo-Wash App
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-gray-900 leading-[1.08] tracking-tight mb-4">
                  {BRAND.tagline}
                </h1>
                <p className="text-[15px] md:text-base text-gray-600 font-medium leading-relaxed mb-7 max-w-xl">
                  {BRAND.heroSub}
                </p>
              </div>
              <div className="space-y-4">
                <StoreButtons variant="dark" />
                <p className="text-xs text-gray-500 font-medium">
                  Serving {BRAND.areas.join(', ')} • No minimum order required.
                </p>
              </div>
            </div>

            {/* Right Stacked Bento Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              {/* Live Turnaround Estimator Card */}
              <div className="rounded-3xl bg-gray-900 text-white p-6 flex items-center justify-between gap-4 shadow-lg">
                <div className="space-y-1.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-yellow-400">
                    <Clock className="w-3.5 h-3.5" /> Live Turnaround Estimator
                  </span>
                  <p className="text-lg font-extrabold">Order now → Delivered by Tomorrow 6 PM</p>
                  <p className="text-xs text-gray-300">Pickup from Jagamara &amp; Patia hubs in 30 mins</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-gray-900 font-black text-sm flex items-center justify-center shrink-0">
                  &lt;24h
                </div>
              </div>

              {/* Rating + QR Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-3xl bg-yellow-400 text-gray-900 p-6 flex flex-col justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
                    ))}
                  </div>
                  <div className="mt-4">
                    <p className="text-3xl font-black">4.7★</p>
                    <p className="text-xs font-bold text-gray-900/80 mt-0.5">3,000+ Bhubaneswar Customers</p>
                  </div>
                </div>

                <div className="rounded-3xl bg-white border border-gray-200/80 p-5 flex items-center gap-4 shadow-sm">
                  <img src={BRAND.qrImage} alt="Scan QR" className="w-20 h-20 rounded-xl border border-gray-200 p-1 object-contain shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-600">Quick Scan</p>
                    <p className="text-sm font-extrabold text-gray-900">Get 50% OFF</p>
                    <p className="text-xs text-gray-500 mt-0.5">iOS &amp; Android</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="container mx-auto px-4 sm:px-6 md:px-12 pb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white border border-gray-200/80 p-5 text-center">
                <p className="text-2xl md:text-3xl font-black text-gray-900">{s.value}</p>
                <p className="text-xs font-semibold text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Quick-Estimate Calculator */}
        <section id="s1-calculator" className="container mx-auto px-4 sm:px-6 md:px-12 pb-16">
          <div className="rounded-3xl bg-white border border-gray-200/80 p-7 md:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Instant Price Preview</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1 tracking-tight">
                  Quick-Estimate Calculator
                </h2>
                <p className="text-[15px] text-gray-600 mt-1 leading-relaxed">
                  Slide to estimate your first-order savings with Flat 50% OFF (up to ₹50).
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span>Wash &amp; Fold (₹69/kg)</span>
                    <span className="text-amber-700">{washKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    value={washKg}
                    onChange={(e) => setWashKg(Number(e.target.value))}
                    className="w-full accent-gray-900 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span>Steam Ironing (₹15/pc)</span>
                    <span className="text-amber-700">{ironPcs} pcs</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="25"
                    value={ironPcs}
                    onChange={(e) => setIronPcs(Number(e.target.value))}
                    className="w-full accent-gray-900 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-gray-900 text-white p-7 space-y-4">
              <div className="flex justify-between text-sm text-gray-300">
                <span>Standard Estimate</span>
                <span className="line-through">₹{basePrice}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-yellow-400">
                <span>First-Order 50% OFF (up to ₹50)</span>
                <span>-₹{discount}</span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold text-gray-300">Estimated Total</span>
                <span className="text-4xl font-black text-white">₹{finalPrice}</span>
              </div>
              <a
                href={BRAND.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-yellow-400 text-gray-900 font-bold text-sm hover:bg-yellow-300 transition-colors"
              >
                <Download className="w-4 h-4" /> Lock This Offer on App
              </a>
            </div>
          </div>
        </section>

        {/* 4 Steps & Services Bento */}
        <section className="container mx-auto px-4 sm:px-6 md:px-12 pb-16 space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">How LaundryRage Works</h2>
            <p className="text-[15px] text-gray-600 mt-2 leading-relaxed">
              Four crisp steps from your doorstep in Bhubaneswar back to your wardrobe.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((st) => (
              <div key={st.step} className="rounded-2xl bg-white border border-gray-200/80 p-6 space-y-3">
                <span className="inline-block px-2.5 py-1 rounded-lg bg-yellow-100 text-amber-900 text-xs font-black">
                  {st.step}
                </span>
                <h3 className="text-lg font-bold text-gray-900">{st.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
            {SERVICES.map((svc) => (
              <div key={svc.id} className="rounded-2xl bg-white border border-gray-200/80 p-6 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-stone-100 text-xs font-bold text-gray-800">{svc.turnaround}</span>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${svc.soon ? 'bg-amber-100 text-amber-800' : 'bg-emerald-50 text-emerald-700'}`}>
                      {svc.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{svc.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{svc.desc}</p>
                  <ul className="space-y-1.5">
                    {svc.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Referral & FAQ */}
        <section className="container mx-auto px-4 sm:px-6 md:px-12 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 rounded-3xl bg-gray-900 text-white p-8 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/15 text-yellow-400 text-xs font-bold uppercase tracking-wider">
                <Gift className="w-3.5 h-3.5" /> {REFERRAL.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black leading-tight">{REFERRAL.title}</h2>
              <p className="text-sm text-gray-300 leading-relaxed">{REFERRAL.desc}</p>
            </div>
            <StoreButtons variant="light" size="sm" />
          </div>

          <div id="s1-faq" className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
            <FAQAccordion items={FAQS} openIdx={openFaq} setOpenIdx={setOpenFaq} />
          </div>
        </section>
      </main>

      {/* Care-Label Bento Footer */}
      <footer id="site-footer" className="bg-gray-900 text-white border-t-2 border-dashed border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 py-10 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-dashed border-gray-700">
            <img src={BRAND.logo} alt="LaundryRage" className="h-9 w-auto object-contain brightness-0 invert" />
            <div className="flex flex-wrap items-center gap-5 text-xs font-semibold text-gray-300">
              <span className="inline-flex items-center gap-1.5"><Droplets className="w-3.5 h-3.5 text-yellow-400" /> Solo-Drum Wash</span>
              <span className="inline-flex items-center gap-1.5"><Wind className="w-3.5 h-3.5 text-yellow-400" /> Steam Press</span>
              <span className="inline-flex items-center gap-1.5"><Shirt className="w-3.5 h-3.5 text-yellow-400" /> Crisp Fold</span>
              <span className="inline-flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-yellow-400" /> &lt;24h Express</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-gray-300">
            <p>{BRAND.address} • {BRAND.phoneDisplay} • {BRAND.email}</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1 font-bold text-yellow-400 hover:underline"
            >
              Back to Top <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
