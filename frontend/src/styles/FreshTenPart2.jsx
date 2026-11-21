import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Zap, Gift, Sparkles } from 'lucide-react';
import { BRAND, STATS, STEPS, SERVICES, REFERRAL, FAQS } from '../data/brandData';
import { StoreButtons, FAQAccordion } from '../components/SharedUI';
import { TopBrandBar } from './FreshTenPart1';

// 6. CYBER-CLEAN GLASS (Spatial Translucent UI)
export function Option6SpatialGlass() {
  const [openFaq, setOpenFaq] = useState(0);
  const [bagKg, setBagKg] = useState(5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-white to-[#FEF9C3] text-gray-900 font-display">
      <nav id="main-navbar" className="fixed top-4 inset-x-0 z-50 px-4">
        <div className="max-w-5xl mx-auto h-14 px-5 rounded-2xl bg-white/75 backdrop-blur-xl border border-white shadow-lg flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <img src={BRAND.logo} alt="LaundryRage" className="h-9 w-auto object-contain" />
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
            <Link to="/services" className="hover:text-indigo-600">Services</Link>
            <a href="#s6-faq" className="hover:text-indigo-600">FAQs</a>
          </div>
          <a href={BRAND.playStore} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold">
            Get App
          </a>
        </div>
      </nav>

      <main className="pt-28 pb-16 container mx-auto px-6 md:px-12 space-y-14">
        <section className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white p-8 md:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">Spatial Quick-Care • Bhubaneswar</span>
            <h1 className="text-4xl sm:text-5xl font-black leading-[1.08]">{BRAND.tagline}</h1>
            <p className="text-base text-gray-600 leading-relaxed">{BRAND.heroSub}</p>
            <StoreButtons variant="dark" />
          </div>
          <div className="lg:col-span-5 rounded-2xl bg-indigo-950 text-white p-6 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-yellow-400">Live Bag Estimator</p>
            <div className="flex justify-between text-sm font-bold">
              <span>Laundry Weight</span>
              <span>{bagKg} kg</span>
            </div>
            <input type="range" min="1" max="15" value={bagKg} onChange={(e) => setBagKg(Number(e.target.value))} className="w-full accent-yellow-400" />
            <p className="text-xs text-indigo-200">50% OFF applied (up to ₹50) • Returned &lt;24h</p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {STEPS.map((st) => (
            <div key={st.step} className="rounded-2xl bg-white/70 backdrop-blur-md border border-white p-6 shadow-sm">
              <span className="text-xs font-black text-indigo-600">{st.step}</span>
              <h3 className="text-lg font-bold mt-1">{st.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{st.desc}</p>
            </div>
          ))}
        </section>

        <section id="s6-faq" className="max-w-3xl mx-auto">
          <FAQAccordion items={FAQS} openIdx={openFaq} setOpenIdx={setOpenFaq} />
        </section>
      </main>

      <footer id="site-footer" className="bg-indigo-950 text-white py-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>{BRAND.address} • {BRAND.phoneDisplay}</span>
          <span>© 2026 LaundryRage</span>
        </div>
      </footer>
    </div>
  );
}

// 7. NEWSPAPER / BROADSHEET EDITORIAL (The Bhubaneswar Freshness Dispatch)
export function Option7Broadsheet() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#18181B] font-display">
      <header id="main-navbar" className="border-b-2 border-gray-900 bg-[#F4F1EA]">
        <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center">
            <img src={BRAND.logo} alt="LaundryRage" className="h-9 w-auto object-contain" />
          </Link>
          <p className="hidden md:block text-xs font-black uppercase tracking-[0.25em]">
            The Bhubaneswar Freshness Dispatch • Est. 2025
          </p>
          <a href={BRAND.playStore} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-900 text-yellow-400 text-xs font-bold">
            Download App
          </a>
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-12 py-10 space-y-12">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b-2 border-gray-900">
          <div className="lg:col-span-8 space-y-5 lg:pr-8 lg:border-r border-gray-400">
            <span className="text-xs font-black uppercase tracking-widest text-[#B45309]">Front Page • Bhubaneswar</span>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.05] tracking-tight">
              {BRAND.tagline}
            </h1>
            <p className="text-base text-gray-700 leading-relaxed">{BRAND.heroSub}</p>
            <StoreButtons variant="dark" />
          </div>
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-black uppercase tracking-widest border-b border-gray-900 pb-2">By The Numbers</p>
            {STATS.map((s) => (
              <div key={s.label} className="flex justify-between items-baseline border-b border-gray-300 pb-2">
                <span className="text-sm font-semibold text-gray-700">{s.label}</span>
                <span className="text-xl font-black">{s.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-10 border-b border-gray-400">
          {STEPS.map((st) => (
            <div key={st.step} className="space-y-2">
              <span className="text-xs font-black text-[#B45309]">STEP {st.step}</span>
              <h3 className="text-lg font-extrabold">{st.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </section>

        <section className="max-w-3xl mx-auto">
          <FAQAccordion items={FAQS} openIdx={openFaq} setOpenIdx={setOpenFaq} />
        </section>
      </main>

      <footer id="site-footer" className="border-t-2 border-gray-900 py-8 text-xs font-bold">
        <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span>Published from {BRAND.address} • {BRAND.phoneDisplay}</span>
          <span>© 2026 LaundryRage</span>
        </div>
      </footer>
    </div>
  );
}

// 8. ELECTRIC COBALT & VOLT LIME (High-Energy Quick-Commerce)
export function Option8CobaltVolt() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-display">
      <nav id="main-navbar" className="fixed top-0 inset-x-0 z-50 h-16 bg-[#1E40AF] text-white">
        <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          <Link to="/" className="inline-flex items-center">
            <img src={BRAND.logo} alt="LaundryRage" className="h-9 w-auto object-contain brightness-0 invert" />
          </Link>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#D9F99D] text-gray-900 text-xs font-black">
            50% OFF FIRST ORDER
          </span>
          <a href={BRAND.playStore} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-yellow-400 text-gray-900 text-xs font-black">
            Book Now
          </a>
        </div>
      </nav>

      <main className="pt-24 pb-16 space-y-14">
        <section className="bg-[#1E40AF] text-white py-14">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9F99D] text-gray-900 text-xs font-black">
                <Zap className="w-3.5 h-3.5" /> &lt;24H EXPRESS IN BHUBANESWAR
              </span>
              <h1 className="text-4xl sm:text-5xl font-black leading-[1.08]">{BRAND.tagline}</h1>
              <p className="text-base text-blue-100 leading-relaxed">{BRAND.heroSub}</p>
              <StoreButtons variant="light" />
            </div>
            <div className="lg:col-span-5 rounded-3xl bg-white text-gray-900 p-7 space-y-4 shadow-2xl">
              <p className="text-xs font-black uppercase tracking-wider text-[#1E40AF]">Active Coverage</p>
              <div className="flex flex-wrap gap-2">
                {BRAND.areas.map((a) => (
                  <span key={a} className="px-3 py-1 rounded-full bg-blue-50 text-[#1E40AF] text-xs font-bold">{a}</span>
                ))}
              </div>
              <div className="pt-3 border-t border-gray-100 flex items-center gap-4">
                <img src={BRAND.qrImage} alt="QR" className="w-16 h-16 rounded-xl border p-1 object-contain" />
                <p className="text-xs font-bold text-gray-600">Scan to schedule your first 50% OFF pickup.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-5">
          {STEPS.map((st) => (
            <div key={st.step} className="rounded-2xl bg-blue-50/50 border border-blue-100 p-6">
              <span className="text-xs font-black text-[#1E40AF]">{st.step}</span>
              <h3 className="text-lg font-extrabold mt-1">{st.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{st.desc}</p>
            </div>
          ))}
        </section>

        <section className="container mx-auto px-6 md:px-12 max-w-3xl">
          <FAQAccordion items={FAQS} openIdx={openFaq} setOpenIdx={setOpenFaq} />
        </section>
      </main>

      <footer id="site-footer" className="bg-[#1E40AF] text-white py-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>{BRAND.address} • {BRAND.phoneDisplay}</span>
          <span>© 2026 LaundryRage</span>
        </div>
      </footer>
    </div>
  );
}

// 9. MONOCHROME + ONE YELLOW DOT (Apple / Braun Industrial Minimal)
export function Option9BraunMinimal() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-display">
      <nav id="main-navbar" className="fixed top-0 inset-x-0 z-50 h-16 bg-white/80 backdrop-blur-xl border-b border-black/5">
        <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2">
            <img src={BRAND.logo} alt="LaundryRage" className="h-9 w-auto object-contain" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          </Link>
          <a href={BRAND.playStore} target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full bg-[#1D1D1F] text-white text-xs font-bold">
            Get App
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-20 container mx-auto px-6 md:px-12 space-y-20">
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
            <span className="w-2 h-2 rounded-full bg-yellow-400" /> Bhubaneswar
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight">
            {BRAND.tagline}
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">{BRAND.heroSub}</p>
          <div className="flex justify-center">
            <StoreButtons variant="dark" />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {SERVICES.map((svc) => (
            <div key={svc.id} className="rounded-3xl bg-white p-8 space-y-2 shadow-sm">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{svc.name}</h3>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#F5F5F7]">{svc.soon ? 'Soon' : svc.turnaround}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </section>

        <section className="max-w-2xl mx-auto">
          <FAQAccordion items={FAQS} openIdx={openFaq} setOpenIdx={setOpenFaq} />
        </section>
      </main>

      <footer id="site-footer" className="border-t border-black/10 py-10 text-xs text-gray-500">
        <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span>{BRAND.address} • {BRAND.phoneDisplay}</span>
          <span>© 2026 LaundryRage</span>
        </div>
      </footer>
    </div>
  );
}

// 10. SUNSET PLUM & WARM AMBER (Warm Consumer Lifestyle)
export function Option10SunsetPlum() {
  const [friends, setFriends] = useState(2);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#FFF7ED] text-[#1E1B2E] font-display">
      <TopBrandBar accentClass="bg-[#1E1B2E] text-yellow-400" />
      <main className="pt-28 pb-16 container mx-auto px-6 md:px-12 space-y-16">
        <section className="rounded-[2.5rem] bg-[#1E1B2E] text-white p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" /> Flat 50% OFF First Order
            </span>
            <h1 className="text-4xl sm:text-5xl font-black leading-[1.08]">{BRAND.tagline}</h1>
            <p className="text-base text-purple-100/80 leading-relaxed">{BRAND.heroSub}</p>
            <StoreButtons variant="light" />
          </div>
          <div className="lg:col-span-6 rounded-3xl overflow-hidden aspect-video border border-white/10">
            <video autoPlay muted loop playsInline poster="/images/wash-fold.jpg" className="w-full h-full object-cover">
              <source src={BRAND.heroVideo} type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="rounded-3xl bg-white border border-amber-200 p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
              <Gift className="w-4 h-4" /> Roommate Rewards
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">{REFERRAL.title}</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{REFERRAL.desc}</p>
            <div>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span>Friends Invited</span>
                <span className="text-amber-700">{friends} friends</span>
              </div>
              <input type="range" min="1" max="10" value={friends} onChange={(e) => setFriends(Number(e.target.value))} className="w-full accent-[#1E1B2E]" />
            </div>
          </div>
          <div className="lg:col-span-5 rounded-2xl bg-amber-100 p-6 text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-800">You Earn</p>
            <p className="text-4xl font-black text-[#1E1B2E] mt-1">{(friends * 2000).toLocaleString()} Coins</p>
            <p className="text-sm font-bold text-amber-900 mt-1">Worth ₹{friends * 100} in Free Laundry</p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto">
          <FAQAccordion items={FAQS} openIdx={openFaq} setOpenIdx={setOpenFaq} />
        </section>
      </main>

      <footer id="site-footer" className="bg-[#1E1B2E] text-white py-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>{BRAND.address} • {BRAND.phoneDisplay} • {BRAND.email}</span>
          <span>© 2026 LaundryRage</span>
        </div>
      </footer>
    </div>
  );
}
