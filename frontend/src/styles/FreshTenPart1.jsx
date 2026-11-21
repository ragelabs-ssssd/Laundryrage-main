import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Check, Sparkles, Clock, ShieldCheck, Droplets } from 'lucide-react';
import { BRAND, STATS, STEPS, REFERRAL, FAQS } from '../data/brandData';
import { StoreButtons, FAQAccordion } from '../components/SharedUI';

export const TopBrandBar = ({ dark = false, accentClass = 'bg-gray-900 text-white', rightBadge }) => (
  <nav
    id="main-navbar"
    className={`fixed top-0 inset-x-0 z-50 h-16 border-b backdrop-blur-md font-display ${
      dark
        ? 'bg-[#07090E]/90 border-white/10 text-white'
        : 'bg-white/90 border-gray-200/80 text-gray-900'
    }`}
  >
    <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Link to="/" className="inline-flex items-center shrink-0">
          <img
            src={BRAND.logo}
            alt="LaundryRage"
            className={`h-9 w-auto object-contain shrink-0 ${dark ? 'brightness-0 invert' : ''}`}
          />
        </Link>
        {rightBadge}
      </div>
      <div className="hidden md:flex items-center gap-7 text-sm font-semibold opacity-80">
        <Link to="/services" className="hover:opacity-100">Services</Link>
        <a href="#sec-steps" className="hover:opacity-100">How It Works</a>
        <a href="#sec-faq" className="hover:opacity-100">FAQs</a>
      </div>
      <a
        href={BRAND.playStore}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap ${accentClass}`}
      >
        <Download className="w-3.5 h-3.5" /> Get App
      </a>
    </div>
  </nav>
);

// 1. NORDIC CRISP LINEN (Scandinavian Minimalist)
export function Option1Nordic() {
  const [openFaq, setOpenFaq] = useState(0);
  const [checked, setChecked] = useState([true, true, true]);
  const checklist = ['100% Separate Sanitized Drum', 'Eco-Friendly Enzyme Wash', '<24h Doorstep Return'];

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-[#14332A] font-display">
      <TopBrandBar
        accentClass="bg-[#14332A] text-white"
        rightBadge={
          <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-[#E6EFEA] text-[#14332A] text-xs font-bold">
            Bhubaneswar
          </span>
        }
      />
      <main className="pt-28 pb-16 container mx-auto px-6 md:px-12 space-y-20">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#14332A]/70">
              Jagamara • Patia • Khandagiri
            </p>
            <h1 className="text-4xl sm:text-5xl font-black leading-[1.08] tracking-tight">
              {BRAND.tagline}
            </h1>
            <p className="text-base text-gray-600 leading-relaxed max-w-lg">{BRAND.heroSub}</p>
            <StoreButtons variant="dark" />
          </div>
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
            <img
              src="/images/wash-fold.jpg"
              alt="Crisp folded laundry"
              className="rounded-3xl h-72 w-full object-cover border border-[#14332A]/10"
            />
            <div className="rounded-3xl bg-[#E6EFEA] p-6 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#14332A]">Care Standard</p>
              {checklist.map((item, i) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)))}
                  className="w-full flex items-center gap-2.5 text-left text-sm font-semibold"
                >
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center ${checked[i] ? 'bg-[#14332A] text-white' : 'bg-white border border-gray-300'}`}>
                    {checked[i] && <Check className="w-3.5 h-3.5" />}
                  </span>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-[#14332A]/15">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black">{s.value}</p>
              <p className="text-xs font-semibold text-gray-600 mt-1">{s.label}</p>
            </div>
          ))}
        </section>

        <section id="sec-steps" className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {STEPS.map((st) => (
            <div key={st.step} className="bg-white rounded-2xl p-6 border border-[#14332A]/10 space-y-2">
              <span className="text-xs font-black text-[#14332A]/60">{st.step}</span>
              <h3 className="text-lg font-bold">{st.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </section>

        <section id="sec-faq" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 rounded-3xl bg-[#14332A] text-white p-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">{REFERRAL.badge}</span>
            <h2 className="text-2xl font-black">{REFERRAL.title}</h2>
            <p className="text-sm text-emerald-100/80 leading-relaxed">{REFERRAL.desc}</p>
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion items={FAQS} openIdx={openFaq} setOpenIdx={setOpenFaq} />
          </div>
        </section>
      </main>

      <footer id="site-footer" className="bg-[#14332A] text-white py-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-bold text-sm">{BRAND.address} • {BRAND.phoneDisplay}</p>
            <p className="text-xs text-emerald-200/70">© 2026 LaundryRage. 50% OFF (up to ₹50) first order.</p>
          </div>
          <StoreButtons variant="light" size="sm" />
        </div>
      </footer>
    </div>
  );
}

// 2. SWISS BAUHAUS GRID (High-Contrast Modernist)
export function Option2Bauhaus() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-white text-gray-950 font-display">
      <TopBrandBar
        accentClass="bg-yellow-400 text-gray-950 border border-gray-950"
        rightBadge={<span className="hidden sm:inline-block text-xs font-black uppercase tracking-widest">BBSR • 01</span>}
      />
      <main className="pt-20">
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-gray-950">
          <div className="lg:col-span-7 p-8 md:p-14 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-950 space-y-6">
            <span className="inline-block px-3 py-1 bg-[#1D4ED8] text-white text-xs font-black uppercase tracking-widest">
              Flat 50% OFF First Order
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.05] tracking-tight uppercase">
              {BRAND.tagline}
            </h1>
            <p className="text-base text-gray-700 leading-relaxed max-w-xl">{BRAND.heroSub}</p>
            <StoreButtons variant="dark" />
          </div>
          <div className="lg:col-span-5 grid grid-rows-2">
            <div className="bg-yellow-400 p-8 border-b-2 border-gray-950 flex flex-col justify-between">
              <span className="text-xs font-black uppercase tracking-widest">Turnaround</span>
              <p className="text-4xl font-black">&lt;24 HOURS</p>
              <p className="text-sm font-bold">Pickup &amp; Delivery across Bhubaneswar</p>
            </div>
            <div className="bg-gray-950 text-white p-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-yellow-400">Scan to Start</p>
                <p className="text-xl font-black mt-1">3,000+ Locals</p>
                <p className="text-xs text-gray-400">4.7★ App Rating</p>
              </div>
              <img src={BRAND.qrImage} alt="QR" className="w-20 h-20 bg-white p-1.5 object-contain shrink-0" />
            </div>
          </div>
        </section>

        <section id="sec-steps" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b-2 border-gray-950">
          {STEPS.map((st, idx) => (
            <div key={st.step} className={`p-7 ${idx < 3 ? 'border-b-2 lg:border-b-0 lg:border-r-2 border-gray-950' : ''}`}>
              <p className="text-3xl font-black text-[#1D4ED8] mb-3">{st.step}</p>
              <h3 className="text-lg font-extrabold mb-2">{st.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </section>

        <section id="sec-faq" className="container mx-auto px-6 md:px-12 py-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-yellow-400 border-2 border-gray-950 p-8 space-y-4">
            <h2 className="text-2xl font-black">{REFERRAL.title}</h2>
            <p className="text-sm font-semibold leading-relaxed">{REFERRAL.desc}</p>
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion items={FAQS} openIdx={openFaq} setOpenIdx={setOpenFaq} />
          </div>
        </section>
      </main>

      <footer id="site-footer" className="bg-gray-950 text-white border-t-2 border-gray-950 py-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold">
          <span>LAUNDRYRAGE • {BRAND.address} • {BRAND.phoneDisplay}</span>
          <span className="text-yellow-400">© 2026 ALL RIGHTS RESERVED</span>
        </div>
      </footer>
    </div>
  );
}

// 3. OBSIDIAN & LIQUID GOLD (Luxury Concierge Dark)
export function Option3Obsidian() {
  const [slot, setSlot] = useState('Evening 6–8 PM');
  const [openFaq, setOpenFaq] = useState(0);
  const slots = ['Morning 9–11 AM', 'Afternoon 2–4 PM', 'Evening 6–8 PM'];

  return (
    <div className="min-h-screen bg-[#07090E] text-white font-display">
      <TopBrandBar dark accentClass="bg-yellow-400 text-gray-950" />
      <main className="pt-28 pb-16 container mx-auto px-6 md:px-12 space-y-16">
        <section className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" /> VIP Garment Concierge • Bhubaneswar
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.08] tracking-tight">
              {BRAND.tagline}
            </h1>
            <p className="text-base text-gray-300 leading-relaxed max-w-xl">{BRAND.heroSub}</p>
            <StoreButtons variant="light" />
          </div>
          <div className="lg:col-span-5 rounded-2xl bg-black/60 border border-white/15 p-6 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-yellow-400">Select Preferred Pickup Slot</p>
            <div className="space-y-2">
              {slots.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSlot(s)}
                  className={`w-full px-4 py-3 rounded-xl text-left text-sm font-bold flex items-center justify-between border transition-all ${
                    slot === s ? 'bg-yellow-400 text-gray-950 border-yellow-400' : 'bg-white/5 text-gray-300 border-white/10'
                  }`}
                >
                  <span>{s}</span>
                  <Clock className="w-4 h-4" />
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-400">Selected: <span className="text-white font-bold">{slot}</span> • &lt;24h Return</p>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 text-center">
              <p className="text-2xl md:text-3xl font-black text-yellow-400">{s.value}</p>
              <p className="text-xs text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </section>

        <section id="sec-steps" className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {STEPS.map((st) => (
            <div key={st.step} className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 space-y-2">
              <span className="text-xs font-black text-yellow-400">{st.step}</span>
              <h3 className="text-lg font-bold">{st.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </section>

        <section id="sec-faq" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 rounded-3xl bg-yellow-400 text-gray-950 p-8 space-y-3">
            <h2 className="text-2xl font-black">{REFERRAL.title}</h2>
            <p className="text-sm font-semibold leading-relaxed">{REFERRAL.desc}</p>
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion items={FAQS} openIdx={openFaq} setOpenIdx={setOpenFaq} dark />
          </div>
        </section>
      </main>

      <footer id="site-footer" className="border-t border-yellow-400/20 py-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <span>{BRAND.address} • {BRAND.phoneDisplay} • {BRAND.email}</span>
          <span>© 2026 LaundryRage</span>
        </div>
      </footer>
    </div>
  );
}

// 4. FRESH MINT & SKY (Clinical Hygiene Focus)
export function Option4MintHygiene() {
  const [openFaq, setOpenFaq] = useState(0);
  const [hygieneStep, setHygieneStep] = useState(0);
  const stages = [
    { title: 'Drum Sanitization', desc: 'Hot-water ozone rinse before every single customer batch.' },
    { title: 'Solo-Wash Cycle', desc: 'Zero garment mixing. Only your clothes inside the drum.' },
    { title: 'Bio-Enzyme Rinse', desc: 'Removes 99.9% bacteria while keeping colors vibrant.' },
  ];

  return (
    <div className="min-h-screen bg-[#F0FDFA] text-gray-900 font-display">
      <TopBrandBar
        accentClass="bg-[#0F766E] text-white"
        rightBadge={<span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-teal-100 text-[#0F766E] text-xs font-bold">100% Sanitized</span>}
      />
      <main className="pt-28 pb-16 container mx-auto px-6 md:px-12 space-y-16">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-[#0F766E] text-xs font-bold">
              <ShieldCheck className="w-4 h-4" /> Clinical Solo-Drum Hygiene
            </span>
            <h1 className="text-4xl sm:text-5xl font-black leading-[1.08]">{BRAND.tagline}</h1>
            <p className="text-base text-gray-600 leading-relaxed">{BRAND.heroSub}</p>
            <StoreButtons variant="dark" />
          </div>

          <div className="lg:col-span-6 rounded-3xl bg-white border border-teal-200 p-7 shadow-sm space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F766E]">
              <Droplets className="w-4 h-4" /> Interactive Hygiene Inspector
            </div>
            <div className="flex flex-wrap gap-2">
              {stages.map((s, idx) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setHygieneStep(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold ${
                    hygieneStep === idx ? 'bg-[#0F766E] text-white' : 'bg-teal-50 text-[#0F766E]'
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>
            <div className="p-5 rounded-2xl bg-[#F0FDFA] border border-teal-100">
              <h3 className="text-lg font-extrabold text-[#0F766E]">{stages[hygieneStep].title}</h3>
              <p className="text-sm text-gray-700 mt-1">{stages[hygieneStep].desc}</p>
            </div>
          </div>
        </section>

        <section id="sec-steps" className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {STEPS.map((st) => (
            <div key={st.step} className="rounded-2xl bg-white border border-teal-100 p-6 space-y-2">
              <span className="text-xs font-black text-[#0F766E]">{st.step}</span>
              <h3 className="text-lg font-bold">{st.title}</h3>
              <p className="text-sm text-gray-600">{st.desc}</p>
            </div>
          ))}
        </section>

        <section id="sec-faq" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 rounded-3xl bg-[#0F766E] text-white p-8 space-y-3">
            <h2 className="text-2xl font-black">{REFERRAL.title}</h2>
            <p className="text-sm text-teal-100 leading-relaxed">{REFERRAL.desc}</p>
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion items={FAQS} openIdx={openFaq} setOpenIdx={setOpenFaq} />
          </div>
        </section>
      </main>

      <footer id="site-footer" className="bg-[#0F766E] text-white py-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>{BRAND.address} • {BRAND.phoneDisplay} • {BRAND.email}</span>
          <span>© 2026 LaundryRage</span>
        </div>
      </footer>
    </div>
  );
}

// 5. TERRACOTTA & WARM CLAY (Boutique Hotel Valet)
export function Option5Terracotta() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#FDF8F3] text-[#292524] font-display">
      <TopBrandBar accentClass="bg-[#C2410C] text-white" />
      <main className="pt-28 pb-16 container mx-auto px-6 md:px-12 space-y-16">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C2410C]">
              Hotel-Grade Valet Laundry • Bhubaneswar
            </span>
            <h1 className="text-4xl sm:text-5xl font-black leading-[1.08]">{BRAND.tagline}</h1>
            <p className="text-base text-stone-600 leading-relaxed">{BRAND.heroSub}</p>
            <StoreButtons variant="dark" />
          </div>
          <div className="lg:col-span-6">
            <img
              src="/images/priority-care.jpg"
              alt="Priority garment care"
              className="rounded-3xl h-80 w-full object-cover shadow-lg border border-stone-200"
            />
          </div>
        </section>

        <section id="sec-steps" className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {STEPS.map((st) => (
            <div key={st.step} className="rounded-2xl bg-white border border-stone-200 p-6 space-y-2">
              <span className="text-xs font-black text-[#C2410C]">{st.step}</span>
              <h3 className="text-lg font-bold">{st.title}</h3>
              <p className="text-sm text-stone-600">{st.desc}</p>
            </div>
          ))}
        </section>

        <section id="sec-faq" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 rounded-3xl bg-[#292524] text-white p-8 space-y-3">
            <h2 className="text-2xl font-black text-amber-300">{REFERRAL.title}</h2>
            <p className="text-sm text-stone-300 leading-relaxed">{REFERRAL.desc}</p>
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion items={FAQS} openIdx={openFaq} setOpenIdx={setOpenFaq} />
          </div>
        </section>
      </main>

      <footer id="site-footer" className="bg-[#292524] text-stone-200 py-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>{BRAND.address} • {BRAND.phoneDisplay} • {BRAND.email}</span>
          <span>© 2026 LaundryRage</span>
        </div>
      </footer>
    </div>
  );
}
