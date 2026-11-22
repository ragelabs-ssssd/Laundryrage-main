import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Copy,
  Check,
  Clock,
  ShieldCheck,
  Tag,
  ArrowRight,
  Gift,
  Star,
  Smartphone,
} from 'lucide-react';
import { BRAND, REVIEWS, FAQS } from '../data/brandData';
import { StoreButtons, QRModal, FAQAccordion } from '../components/SharedUI';

const HERO_METRICS = [
  { value: '3,000+', label: 'Households Served' },
  { value: '4.7★', label: 'App Store & Play Rating' },
  { value: '48 Hrs*', label: 'Fresh Return (24h* Priority)' },
  { value: '100%', label: 'Individual Sanitized Wash' },
];

const SERVICE_TABS = [
  {
    id: 'wash-fold',
    tabLabel: 'Wash & Fold',
    title: 'Everyday Wash & Fold',
    price: '₹69 / kg',
    turnaround: '48h* Turnaround',
    img: '/wash-fold.jpg',
    fallbackImg: '/images/wash-fold.jpg',
    desc: 'Daily wear sorted by color and fabric, washed 100% separately in ozone-sanitized drums, and returned crisply folded for your wardrobe.',
    specs: [
      '100% solo-drum wash — never mixed with other orders',
      'pH-balanced bio-enzyme detergent & fabric conditioner',
      'Color-safe temperature control for cottons & activewear',
      'Breathable, moisture-sealed wardrobe-ready folding',
    ],
  },
  {
    id: 'steam-ironing',
    tabLabel: 'Steam Ironing',
    title: 'Precision Steam Ironing',
    price: '₹15 / pc',
    turnaround: '48h* Turnaround',
    img: '/images/ironing-1.jpg',
    fallbackImg: '/images/ironing-1.jpg',
    desc: 'Commercial temperature-regulated steam pressing for office shirts, trousers, kurtas, and uniforms—zero scorch marks or collar shine.',
    specs: [
      'Calibrated steam jets for crisp collars & cuffs',
      'Zero direct-plate shine on dark formals & linens',
      'Choose hanger-ready or flat-packed crease-free return',
      'Delivered in 48 hours* across Bhubaneswar',
    ],
  },
  {
    id: 'priority-care',
    tabLabel: 'Priority Care (24h*)',
    title: 'Priority Care (24h*)',
    price: 'Express',
    turnaround: 'Fast-Track 24h*',
    img: '/images/priority-care.jpg',
    fallbackImg: '/images/priority-care.jpg',
    desc: 'Need crisp outfits for tomorrow morning? Your bag jumps straight to the front of the wash, dry, and steam-press queue.',
    specs: [
      'First-in-line wash & steam-press dispatch',
      'Dedicated pickup slot in Jagamara, Patia & Saheed Nagar',
      'Live order stage tracking from pickup to doorstep',
      'Delivered within 24 hours* (fast-track)',
    ],
  },
  {
    id: 'dry-cleaning',
    tabLabel: 'Dry Cleaning',
    soon: true,
    title: 'Signature Dry Cleaning',
    price: 'Launching Soon',
    turnaround: '48h* Care',
    img: '/images/drycleaning-blazer-v1.jpg',
    fallbackImg: '/images/drycleaning-blazer-v1.jpg',
    desc: 'Gentle hydrocarbon & solvent care engineered for silk sarees, tailored blazers, lehengas, and winter woolens.',
    specs: [
      'Targeted pre-spotting for oil, coffee & festive stains',
      'Structured pressing to preserve blazer & suit drape',
      'Protective breathable garment covers included',
      'Launching shortly across all Bhubaneswar hubs',
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Tap & Schedule (15s)',
    desc: 'Choose your pickup window in the LaundryRage app across Jagamara, Patia, Khandagiri, or Saheed Nagar.',
  },
  {
    step: '02',
    title: 'Doorstep Digital Tagging',
    desc: 'Our rider weighs and digitally tags your bag right at your doorstep with transparent per-kg pricing.',
  },
  {
    step: '03',
    title: 'Sanitized Solo-Wash',
    desc: 'Your clothes enter an individually sanitized drum with bio-enzyme detergent—never mixed with anyone else’s.',
  },
  {
    step: '04',
    title: 'Crisp Wardrobe Return',
    desc: 'Steam-pressed or neatly folded and delivered back to your door in 48 hours* (24 hours* with Priority).',
  },
];

const TRACKING_CHECKLIST = [
  'Instant pickup & doorstep weight confirmation',
  'Live wash, steam-press & quality-check alerts',
  '1-tap reorder & UPI / wallet coin checkout',
];

const Home = () => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [washKg, setWashKg] = useState(5);
  const [ironPcs, setIronPcs] = useState(6);
  const [activeTabId, setActiveTabId] = useState('wash-fold');
  const [openFaqIdx, setOpenFaqIdx] = useState(0);
  const [qrOpen, setQrOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = '16px';
    return () => {
      document.documentElement.style.fontSize = '';
    };
  }, []);

  const washSubtotal = washKg * 69;
  const ironSubtotal = ironPcs * 15;
  const rawSubtotal = washSubtotal + ironSubtotal;
  const first50Discount = Math.min(50, Math.round(rawSubtotal * 0.5));
  const finalEstimate = Math.max(0, rawSubtotal - first50Discount);

  const activeService = SERVICE_TABS.find((s) => s.id === activeTabId) || SERVICE_TABS[0];

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText('FIRST50');
    } catch {
      // Fallback for restricted clipboard contexts
    }
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2200);
  };

  const handleAppAction = () => {
    const ua = navigator.userAgent || '';
    if (/iPad|iPhone|iPod/i.test(ua)) {
      window.open(BRAND.appStore, '_blank', 'noopener,noreferrer');
      return;
    }
    if (/Android/i.test(ua)) {
      window.open(BRAND.playStore, '_blank', 'noopener,noreferrer');
      return;
    }
    setQrOpen(true);
  };

  return (
    <div className="v2-scope bg-[#FAFAFA] text-slate-900 overflow-x-hidden">
      {/* 1. ASYMMETRIC INTERACTIVE BENTO HERO */}
      <section id="hero-section" className="pt-28 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left 7 Columns: Value Proposition & Conversion */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-900/10 shadow-sm text-xs font-semibold leading-[1.4] text-slate-800">
                <span className="text-amber-500" aria-hidden="true">⚡</span>
                <span>#1 Rated Garment Care in Bhubaneswar • 4.7★</span>
              </div>

              <h1 className="font-display font-extrabold text-[calc(clamp(2.35rem,4.5vw,3.5rem)*var(--h1-scale))] tracking-[var(--display-tracking)] leading-[var(--display-leading)] text-slate-900">
                Skip Laundry Day.{' '}
                <span className="text-[#1D4ED8]">Wear Fresh Every Day.</span>
              </h1>

              <p className="text-[1rem] md:text-[1.125rem] font-medium leading-[1.6] max-w-[58ch] text-slate-600">
                Doorstep pickup across Jagamara, Patia, Khandagiri &amp; Saheed Nagar. Washed 100% separately in sanitized drums, steam-pressed, and returned fresh in 48 hours* (24 hours* with Priority).
              </p>

              {/* Offer Callout Pill with 1-Click Copy */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#FEF3C7] border border-[#F59E0B]/40 text-left transition-all hover:border-[#F59E0B]"
                >
                  <span className="px-2.5 py-1 rounded-lg bg-[#0F172A] text-[#FACC15] font-mono text-xs font-semibold tracking-wider">
                    FIRST50
                  </span>
                  <span className="text-sm font-semibold text-slate-900 leading-snug">
                    Flat 50% OFF (up to ₹50) on your first app order
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D4ED8] ml-1">
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </span>
                </button>
              </div>

              {/* Dual Store Buttons */}
              <div className="pt-1">
                <StoreButtons variant="dark" size="md" />
              </div>

              {/* Verified Avatar Social Proof */}
              <div className="flex items-center gap-3.5 pt-2">
                <div className="flex -space-x-2.5" aria-hidden="true">
                  {['AM', 'RD', 'SP', 'NK'].map((initials, i) => (
                    <div
                      key={initials}
                      className={`w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold shadow-sm ${
                        i % 2 === 0
                          ? 'bg-slate-900 text-[#FACC15]'
                          : 'bg-[#1D4ED8] text-white'
                      }`}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold text-slate-700 leading-snug">
                  Trusted by <span className="text-slate-900 font-bold">3,000+</span> Bhubaneswar households
                </p>
              </div>
            </div>

            {/* Right 5 Columns: Visual & Interactive Proof */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden bg-slate-900 border border-slate-900/10 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                {/* Fallback crisp photography underneath video */}
                <img
                  src="/images/wash-fold.jpg"
                  alt="Freshly folded LaundryRage garments"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <video
                  src={BRAND.heroVideo}
                  poster="/images/wash-fold.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative z-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-slate-950/25 pointer-events-none" />

                {/* Floating Glass Card 1: Live Turnaround Pill */}
                <div className="absolute top-5 left-5 right-5 z-10 flex justify-start">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-900/10 shadow-lg">
                    <span className="w-8 h-8 rounded-xl bg-[#FACC15] text-slate-900 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </span>
                    <div className="text-left">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 leading-[1.4]">
                        Live Turnaround
                      </p>
                      <p className="text-sm font-bold text-slate-900 leading-tight">
                        48h* Fresh Delivery &bull; 24h* Priority
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Glass Card 2: Hygiene Guarantee */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-900/10 shadow-xl flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1D4ED8] text-white flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-slate-900 leading-snug">
                        100% Solo-Drum Wash • Never Mixed
                      </p>
                      <p className="text-xs font-medium text-slate-600 leading-[1.4]">
                        Ozone-sanitized drum before every single household load
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED METRICS RIBBON */}
      <section className="bg-white border-y border-slate-900/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
            {HERO_METRICS.map((item) => (
              <div key={item.label} className="space-y-1.5">
                <div className="font-mono text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-slate-600">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE "SMART BAG" SAVINGS ESTIMATOR */}
      <section id="pricing-estimator" className="py-20 md:py-28 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
              Smart Bag Estimator
            </span>
            <h2 className="font-display font-extrabold text-[clamp(1.85rem,3.2vw,2.65rem)] tracking-[-0.025em] leading-[1.15] text-slate-900">
              See your exact bill before pickup.
            </h2>
            <p className="mt-4 text-[1rem] md:text-[1.125rem] font-medium leading-[1.6] max-w-[58ch] text-slate-600">
              Slide your weekly load to calculate transparent per-kg and per-piece pricing with your <strong className="text-slate-900">FIRST50</strong> welcome discount applied live.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
            {/* Sliders Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-900/[0.08] p-6 md:p-8 shadow-sm flex flex-col justify-between space-y-8">
              {/* Slider 1: Wash & Fold */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg md:text-[1.375rem] font-bold tracking-[-0.015em] leading-[1.25] text-slate-900">
                      Everyday Wash &amp; Fold (kg)
                    </h3>
                    <p className="text-[0.9375rem] font-normal leading-[1.65] text-slate-600">
                      ₹69 / kg • ~3–4 outfits per kg
                    </p>
                  </div>
                  <span className="px-4 py-2 rounded-xl bg-slate-100 font-display text-lg font-extrabold text-slate-900 shrink-0">
                    {washKg} kg
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  value={washKg}
                  onChange={(e) => setWashKg(Number(e.target.value))}
                  aria-label="Everyday Wash and Fold in kilograms"
                  className="w-full h-2.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-[#0F172A]"
                />
                <div className="flex justify-between text-xs font-medium text-slate-500">
                  <span>1 kg</span>
                  <span>8 kg (Weekly Family Load)</span>
                  <span>15 kg</span>
                </div>
              </div>

              {/* Slider 2: Steam Ironing */}
              <div className="space-y-4 pt-6 border-t border-slate-900/[0.08]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg md:text-[1.375rem] font-bold tracking-[-0.015em] leading-[1.25] text-slate-900">
                      Steam Ironing (pcs)
                    </h3>
                    <p className="text-[0.9375rem] font-normal leading-[1.65] text-slate-600">
                      ₹15 / pc • Shirts, trousers &amp; kurtas
                    </p>
                  </div>
                  <span className="px-4 py-2 rounded-xl bg-slate-100 font-display text-lg font-extrabold text-slate-900 shrink-0">
                    {ironPcs} pcs
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={30}
                  value={ironPcs}
                  onChange={(e) => setIronPcs(Number(e.target.value))}
                  aria-label="Steam Ironing in pieces"
                  className="w-full h-2.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-[#1D4ED8]"
                />
                <div className="flex justify-between text-xs font-medium text-slate-500">
                  <span>0 pcs</span>
                  <span>15 pcs</span>
                  <span>30 pcs</span>
                </div>
              </div>
            </div>

            {/* Live Summary Card */}
            <div className="lg:col-span-5 bg-[#0F172A] text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FACC15]/15 border border-[#FACC15]/30 text-xs font-semibold text-[#FACC15] mb-4">
                  <Tag className="w-3.5 h-3.5" />
                  <span>FIRST50 Discount Active</span>
                </div>
                <h3 className="font-display text-xl font-bold tracking-[-0.015em] leading-[1.25] text-white">
                  Estimated Bag Summary
                </h3>

                <div className="mt-6 space-y-3.5 text-[0.9375rem]">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Wash &amp; Fold ({washKg} kg × ₹69)</span>
                    <span className="font-semibold text-white">₹{washSubtotal}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Steam Ironing ({ironPcs} pcs × ₹15)</span>
                    <span className="font-semibold text-white">₹{ironSubtotal}</span>
                  </div>
                  <div className="flex items-center justify-between text-emerald-400 pt-3 border-t border-white/10">
                    <span className="font-medium">FIRST50 (50% OFF up to ₹50)</span>
                    <span className="font-bold">-₹{first50Discount}</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-white/15 space-y-5">
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-300">
                      Estimated Total
                    </p>
                    <p className="text-xs font-medium text-slate-400">
                      Free doorstep pickup &amp; delivery
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm line-through text-slate-400 mr-2">
                      ₹{rawSubtotal}
                    </span>
                    <span className="font-display text-3xl md:text-4xl font-extrabold text-[#FACC15]">
                      ₹{finalEstimate}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAppAction}
                  className="w-full py-3.5 px-5 rounded-full bg-[#FACC15] hover:bg-[#F59E0B] text-slate-900 text-sm font-bold leading-none tracking-[-0.01em] inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Book This Load in App</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SERVICE SHOWCASE (#service-tabs) */}
      <section id="service-tabs" className="py-20 md:py-28 bg-white border-t border-slate-900/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
                Our Services
              </span>
              <h2 className="font-display font-extrabold text-[clamp(1.85rem,3.2vw,2.65rem)] tracking-[-0.025em] leading-[1.15] text-slate-900">
                Tailored care for every garment you own.
              </h2>
            </div>

            {/* Segmented Pill Tabs */}
            <div
              role="tablist"
              aria-label="Laundry Services"
              className="inline-flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#FAFAFA] border border-slate-900/[0.08]"
            >
              {SERVICE_TABS.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold leading-none tracking-[-0.01em] transition-all ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-white'
                    }`}
                  >
                    <span>{tab.tabLabel}</span>
                    {tab.soon && (
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold leading-[1.4] ${
                          isActive
                            ? 'bg-[#FACC15] text-slate-900'
                            : 'bg-amber-100 text-amber-900'
                        }`}
                      >
                        Launching Soon
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Split Service Card */}
          <div className="bg-[#FAFAFA] rounded-3xl border border-slate-900/[0.08] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 border border-slate-900/[0.08]">
                <img
                  src={activeService.img}
                  alt={activeService.title}
                  onError={(e) => {
                    if (e.currentTarget.src !== window.location.origin + activeService.fallbackImg) {
                      e.currentTarget.src = activeService.fallbackImg;
                    }
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-900/10 text-xs font-bold text-slate-900 shadow-sm">
                  <span>{activeService.price}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-[#1D4ED8]">{activeService.turnaround}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl md:text-[1.75rem] font-extrabold tracking-[-0.02em] leading-[1.2] text-slate-900">
                    {activeService.title}
                  </h3>
                  {activeService.soon && (
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold leading-[1.4]">
                      Launching Soon
                    </span>
                  )}
                </div>
                <p className="text-[1rem] md:text-[1.125rem] font-medium leading-[1.6] max-w-[58ch] text-slate-600">
                  {activeService.desc}
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activeService.specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-2.5 text-[0.9375rem] font-normal leading-[1.65] text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleAppAction}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold leading-none tracking-[-0.01em] transition-all"
                >
                  <span>{activeService.soon ? 'Notify Me in App' : 'Schedule in App'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4-STEP CONNECTED PROCESS TIMELINE (#how-it-works) */}
      <section id="how-it-works" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-slate-900/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
              How It Works
            </span>
            <h2 className="font-display font-extrabold text-[clamp(1.85rem,3.2vw,2.65rem)] tracking-[-0.025em] leading-[1.15] text-slate-900">
              From hamper to crisp wardrobe in four calm steps.
            </h2>
          </div>

          <div className="relative">
            {/* Connecting horizontal track on desktop */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-0.5 bg-slate-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
              {PROCESS_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-2xl border border-slate-900/[0.08] p-6 md:p-8 shadow-sm flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0F172A] text-[#FACC15] font-display text-lg font-extrabold flex items-center justify-center mb-6 shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="font-display text-lg md:text-[1.25rem] font-bold tracking-[-0.015em] leading-[1.25] text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-[0.9375rem] font-normal leading-[1.65] text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. REFERRAL REWARDS & APP DOWNLOAD SHOWCASE */}
      <section className="py-20 md:py-28 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Phone Visual & App Checklist */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#FACC15]">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Live App Tracking</span>
                </span>
                <h2 className="font-display font-extrabold text-[clamp(1.85rem,3.2vw,2.65rem)] tracking-[-0.025em] leading-[1.15] text-white">
                  Track every wash cycle from your pocket.
                </h2>
                <p className="text-[1rem] md:text-[1.125rem] font-medium leading-[1.6] max-w-[58ch] text-slate-300">
                  Know the exact minute your bag is picked up, sanitized, steam-pressed, and out for doorstep delivery.
                </p>
              </div>

              <ul className="space-y-3.5">
                {TRACKING_CHECKLIST.map((line) => (
                  <li key={line} className="flex items-center gap-3 text-[0.9375rem] text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <StoreButtons variant="light" size="md" />
              </div>
            </div>

            {/* Right: Bento Phone + Referral Card */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5 flex justify-center">
                <img
                  src="/hand-phone.png"
                  alt="LaundryRage App live tracking interface"
                  onError={(e) => {
                    e.currentTarget.src = '/phone-mockup.png';
                  }}
                  className="w-full max-w-[240px] rounded-3xl object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
                />
              </div>

              <div className="sm:col-span-7 bg-white/[0.06] border border-white/15 rounded-3xl p-6 md:p-8 space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-[#FACC15] text-slate-900 flex items-center justify-center">
                  <Gift className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.14em] text-[#FACC15]">
                    2,000 Coins Reward
                  </span>
                  <h3 className="font-display text-xl md:text-[1.375rem] font-bold tracking-[-0.015em] leading-[1.25] text-white">
                    Give ₹50, Earn 2,000 Coins
                  </h3>
                  <p className="text-[0.9375rem] font-normal leading-[1.65] text-slate-300">
                    Invite roommates or neighbors in Bhubaneswar. Once they complete their first order, you both unlock 2,000 wallet coins (₹20 credit).
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleAppAction}
                  className="w-full py-3.5 px-5 rounded-full bg-[#FACC15] hover:bg-[#F59E0B] text-slate-900 text-sm font-bold leading-none tracking-[-0.01em] inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Unlock Referral in App</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER SOCIAL PROOF */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-900/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
              Trusted Across Bhubaneswar
            </span>
            <h2 className="font-display font-extrabold text-[clamp(1.85rem,3.2vw,2.65rem)] tracking-[-0.025em] leading-[1.15] text-slate-900">
              Loved by busy professionals, families, and students.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {REVIEWS.map((rev) => (
              <div
                key={rev.name}
                className="p-6 md:p-8 rounded-3xl bg-[#FAFAFA] border border-slate-900/[0.08] flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4" aria-label="5 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-[0.9375rem] font-normal leading-[1.65] text-slate-700">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-900/[0.08]">
                  <p className="text-sm font-bold text-slate-900">{rev.name}</p>
                  <p className="text-xs font-medium text-slate-600 leading-[1.4]">
                    {rev.role} • {rev.area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ACCESSIBLE FAQ ACCORDION (#faq-section) */}
      <section id="faq-section" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-slate-900/[0.08]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
              Questions &amp; Answers
            </span>
            <h2 className="font-display font-extrabold text-[clamp(1.85rem,3.2vw,2.65rem)] tracking-[-0.025em] leading-[1.15] text-slate-900">
              Everything you need to know.
            </h2>
          </div>

          <FAQAccordion
            items={FAQS}
            openIdx={openFaqIdx}
            setOpenIdx={setOpenFaqIdx}
          />
        </div>
      </section>

      <QRModal isOpen={qrOpen} onClose={() => setQrOpen(false)} />
    </div>
  );
};

export default Home;
