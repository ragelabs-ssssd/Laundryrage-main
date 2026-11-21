import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, Ticket, Shirt, ShieldCheck, ArrowUpRight, Menu, X, Download } from 'lucide-react';
import { BRAND, STATS, STEPS, SERVICES, REFERRAL, FAQS } from '../data/brandData';
import { StoreButtons, FAQAccordion } from '../components/SharedUI';

export default function Style3Ticket() {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const copyCoupon = () => {
    navigator.clipboard?.writeText(BRAND.couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-gray-900 font-display">
      {/* Two-Tier Promo Header with Copyable FIRST50 Pill */}
      <nav id="main-navbar" className="fixed top-0 inset-x-0 z-50">
        <div className="h-9 bg-[#2563EB] text-white px-4 flex items-center justify-center gap-2.5 text-xs font-bold">
          <span className="truncate">50% OFF (up to ₹50) first Bhubaneswar order — Use code:</span>
          <button
            type="button"
            onClick={copyCoupon}
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-yellow-400 text-gray-900 font-black text-[11px] hover:bg-yellow-300 shrink-0"
          >
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? 'COPIED!' : BRAND.couponCode}
          </button>
        </div>

        <div className="h-16 bg-white/95 backdrop-blur-md border-b border-gray-200">
          <div className="container mx-auto px-6 md:px-12 h-full flex items-center justify-between gap-4">
            <Link to="/" className="inline-flex items-center shrink-0">
              <img src={BRAND.logo} alt="LaundryRage" className="h-9 w-auto object-contain shrink-0" />
            </Link>

            <div className="hidden md:flex items-center gap-7 text-[14px] font-semibold text-gray-600">
              <Link to="/services" className="hover:text-gray-900">Service Menu</Link>
              <a href="#s3-steps" className="hover:text-gray-900">How It Works</a>
              <a href="#s3-faq" className="hover:text-gray-900">FAQs</a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={BRAND.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-yellow-400 text-xs font-bold hover:bg-gray-800"
              >
                <Download className="w-4 h-4" /> Get App
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
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-2 shadow-lg">
            <Link to="/services" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-bold">Service Menu</Link>
            <a href="#s3-steps" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-bold">How It Works</a>
            <a href="#s3-faq" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-bold">FAQs</a>
          </div>
        )}
      </nav>

      <main className="pt-28 pb-16">
        {/* Hero Digital Laundry Bag Ticket */}
        <section className="container mx-auto px-6 md:px-12 pt-4 pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-extrabold uppercase tracking-wider">
                <Ticket className="w-3.5 h-3.5" /> Digital Laundry Slip • Bhubaneswar
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.08] tracking-tight text-gray-900">
                {BRAND.tagline}
              </h1>
              <p className="text-base text-gray-600 leading-relaxed max-w-xl">
                {BRAND.heroSub}
              </p>
              <StoreButtons variant="dark" />
            </div>

            {/* Tactile Ticket-Styled Hero Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white border-2 border-gray-900 shadow-[8px_8px_0px_#111827] overflow-hidden">
                <div className="bg-[#2563EB] text-white px-6 py-4 flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-widest">Bag Tag #LR-BBSR</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-yellow-400 text-gray-900 text-xs font-black">50% OFF</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-gray-500">Pickup Hub</span>
                    <span>Jagamara, Bhubaneswar</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-gray-500">Wash Standard</span>
                    <span className="text-emerald-700">100% Solo-Drum</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-gray-500">Next Slot</span>
                    <span className="text-[#2563EB]">Today • Within 45 mins</span>
                  </div>
                </div>
                <div className="border-t-2 border-dashed border-gray-300 bg-yellow-50 p-5 flex items-center gap-4">
                  <img src={BRAND.qrImage} alt="QR" className="w-16 h-16 rounded-xl border border-gray-300 bg-white p-1 object-contain shrink-0" />
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-gray-900">Perforated Voucher Stub</p>
                    <p className="text-xs text-gray-600 mt-0.5">Scan QR or tap store button to claim ₹50 off.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-6 md:px-12 pb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white border-2 border-gray-900 p-5 text-center shadow-[4px_4px_0px_#FACC15]">
                <p className="text-2xl md:text-3xl font-black">{s.value}</p>
                <p className="text-xs font-bold text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Service Menu Board */}
        <section className="container mx-auto px-6 md:px-12 pb-16">
          <div className="rounded-3xl bg-gray-900 text-white p-7 md:p-10 border-2 border-gray-900">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-dashed border-gray-700">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Care Menu Board</span>
                <h2 className="text-3xl sm:text-4xl font-black mt-1">Garment Care Services</h2>
              </div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-bold">
                <ShieldCheck className="w-4 h-4" /> Solo-Wash Hygiene Guaranteed
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SERVICES.map((svc) => (
                <div key={svc.id} className="rounded-2xl bg-white/5 border border-white/10 p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-yellow-400 text-gray-900 flex items-center justify-center shrink-0">
                    <Shirt className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-lg font-extrabold">{svc.name}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#2563EB] text-white text-xs font-bold">
                        {svc.soon ? 'Soon' : svc.turnaround}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps + Referral + FAQs */}
        <section id="s3-steps" className="container mx-auto px-6 md:px-12 pb-16 space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((st) => (
              <div key={st.step} className="rounded-2xl bg-white border-2 border-gray-900 p-6 space-y-2">
                <span className="text-xs font-black px-2.5 py-1 rounded bg-yellow-400 text-gray-900 inline-block">{st.step}</span>
                <h3 className="text-lg font-extrabold">{st.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <div id="s3-faq" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 rounded-3xl bg-[#2563EB] text-white p-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-300">{REFERRAL.badge}</span>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight">{REFERRAL.title}</h3>
              <p className="text-sm text-blue-100 leading-relaxed">{REFERRAL.desc}</p>
            </div>
            <div className="lg:col-span-7">
              <FAQAccordion items={FAQS} openIdx={openFaq} setOpenIdx={setOpenFaq} />
            </div>
          </div>
        </section>
      </main>

      {/* Perforated Fresh Receipt Footer */}
      <footer id="site-footer" className="bg-yellow-400 text-gray-900 border-t-2 border-gray-900 py-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="rounded-3xl bg-white border-2 border-gray-900 shadow-[6px_6px_0px_#111827] p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <img src={BRAND.logo} alt="LaundryRage" className="h-9 w-auto object-contain mx-auto lg:mx-0" />
              <p className="text-sm font-bold">{BRAND.address} • {BRAND.phoneDisplay} • {BRAND.email}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <img src={BRAND.qrImage} alt="QR" className="w-16 h-16 rounded-xl border-2 border-gray-900 p-1 bg-white object-contain" />
              <StoreButtons variant="dark" size="sm" />
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center text-xs font-bold">
            <span>© 2026 LaundryRage. All rights reserved.</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-1 underline">
              Back to Top <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
