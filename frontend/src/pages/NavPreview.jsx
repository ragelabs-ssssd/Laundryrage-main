import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarCheck,
  Sparkles,
  Footprints,
  Building2,
  Coins,
  Tag,
  MapPin,
  HeartHandshake,
  Gift,
  Scale,
} from 'lucide-react';
import { BrandLogo, wavyYellowBgStyle } from '../components/BrandMark';

const FRESH_OPTIONS = [
  {
    id: 1,
    title: 'Weekly Pass (Auto-Pickup Subscription)',
    why: 'Turns one-time users into recurring subscribers with set Tuesday/Saturday doorstep pickups.',
    tabLabel: 'Weekly Pass',
    badge: 'SAVE 20%',
    badgeCls: 'bg-slate-950 text-[#FACC15]',
    icon: CalendarCheck,
    interactiveTitle: 'Recurring Wardrobe Autopilot:',
    chips: [
      'Solo Plan (4 pickups/mo) → Fixed weekly slot',
      'Family Plan (8 pickups/mo) → Priority 24h included',
      'Pause or reschedule anytime inside the app',
    ],
  },
  {
    id: 2,
    title: 'Sneaker Spa (Shoe & Bag Deep-Clean)',
    why: 'High-margin add-on tab that attracts college & young professional sneakerheads in Patia/Jagamara.',
    tabLabel: 'Sneaker Spa',
    badge: 'ADD-ON',
    badgeCls: 'bg-[#FACC15] text-slate-950 border border-slate-950',
    icon: Footprints,
    interactiveTitle: 'Foam-Clean & Deodorize:',
    chips: [
      'Canvas & Mesh Sneakers → Midsole brightener + lace wash',
      'Leather & Suede → Dry-brush conditioning',
      'Backpacks & Caps → Sanitizing steam refresh',
    ],
  },
  {
    id: 3,
    title: 'What Fits in 1kg? (Visual Bag Guide)',
    why: 'Removes pricing anxiety by showing exactly how many shirts/jeans equal 1 kg, 3 kg, or 5 kg.',
    tabLabel: 'Weight Guide',
    badge: '1kg = 5 pcs',
    badgeCls: 'bg-slate-950 text-[#FACC15]',
    icon: Scale,
    interactiveTitle: 'Quick Weight Reference:',
    chips: [
      '1 kg (₹69) ≈ 4–5 everyday tees/shirts',
      '3 kg (₹207) ≈ 1 week of single-person laundry',
      'FIRST50 → Cuts your first bag by flat 50%',
    ],
  },
  {
    id: 4,
    title: 'Gift a Wash (Prepaid Laundry Voucher)',
    why: 'Lets parents or friends gift prepaid laundry credits to hostel students & busy professionals.',
    tabLabel: 'Gift a Wash',
    badge: 'GIFT',
    badgeCls: 'bg-rose-500 text-white',
    icon: Gift,
    interactiveTitle: 'Send Crisp Clothes to Someone:',
    chips: [
      '₹250 / ₹500 / ₹1,000 digital wash pass',
      'Instant WhatsApp / App code delivery',
      'Great for hostelers, new parents & exam weeks',
    ],
  },
  {
    id: 5,
    title: 'Coverage Checker (6 Bhubaneswar Hubs)',
    why: 'Interactive neighborhood check so visitors instantly confirm their street is covered.',
    tabLabel: 'Coverage',
    badge: '6 HUBS',
    badgeCls: 'bg-emerald-500 text-slate-950',
    icon: MapPin,
    interactiveTitle: 'Active Bhubaneswar Zones:',
    chips: [
      'Jagamara • Khandagiri • Nayapalli',
      'Patia • Saheed Nagar • IRC Village',
      'Free doorstep pickup & return on app orders',
    ],
  },
  {
    id: 6,
    title: 'Business & PG Tie-Ups (B2B Bulk)',
    why: 'Captures high-volume recurring orders from Airbnbs, gyms, salons, clinics & PG hostels.',
    tabLabel: 'For Business',
    badge: 'B2B',
    badgeCls: 'bg-slate-950 text-[#FACC15]',
    icon: Building2,
    interactiveTitle: 'Commercial & Bulk Linen Care:',
    chips: [
      'Boutique Hotels & Airbnbs → Crisp bedsheets & towels',
      'Salons & Gyms → Sanitized high-temp towel cycles',
      'Dedicated morning pickup + GST invoicing',
    ],
  },
  {
    id: 7,
    title: 'Dry Clean Waitlist (Silk & Blazers)',
    why: 'Captures demand for your upcoming Dry Cleaning launch and notifies users first.',
    tabLabel: 'Dry Clean',
    badge: 'SOON',
    badgeCls: 'bg-amber-300 text-slate-950',
    icon: Sparkles,
    interactiveTitle: 'Upcoming Solvent-Care Line:',
    chips: [
      'Silk Sarees, Lehengas & Heavy Ethnic Wear',
      'Blazers, Suits & Winter Woolens',
      'Join early list for launch 50% OFF',
    ],
  },
  {
    id: 8,
    title: 'Refer & Earn (2,000 Coins Hub)',
    why: 'Puts your ₹20-per-friend referral program one click away from every page.',
    tabLabel: 'Refer & Earn',
    badge: '₹20',
    badgeCls: 'bg-slate-950 text-[#FACC15]',
    icon: Coins,
    interactiveTitle: 'Turn Friends Into Free Washes:',
    chips: [
      '1. Share your app invite code',
      '2. Friend completes first Bhubaneswar wash',
      '3. Both get 2,000 Coins (₹20 credit)',
    ],
  },
  {
    id: 9,
    title: 'FIRST50 Promo Tab (1-Click Copy)',
    why: 'Turns the first-order 50% discount into a persistent navbar conversion trigger.',
    tabLabel: '50% OFF',
    badge: 'FIRST50',
    badgeCls: 'bg-slate-950 text-[#FACC15]',
    icon: Tag,
    interactiveTitle: 'First-Order Offer:',
    chips: [
      'Code: FIRST50 — Flat 50% OFF on Wash & Fold / Steam Iron',
      'Valid across all Bhubaneswar pickup hubs',
      'Stacks with referral wallet coins',
    ],
  },
  {
    id: 10,
    title: 'Inside Our Hub (Why Solo-Drum?)',
    why: 'Builds deep human trust by showing the Jagamara facility, RO water plant & quality checks.',
    tabLabel: 'Our Hub',
    badge: 'BBSR',
    badgeCls: 'bg-white text-slate-950 border border-slate-950',
    icon: HeartHandshake,
    interactiveTitle: 'Behind Every Fresh Bag:',
    chips: [
      'Ozone-sanitized drums before every single customer',
      '5,000+ Bhubaneswar orders & 4.7★ rating',
      'Open 7AM–10PM daily from Jagamara Main Hub',
    ],
  },
];

export default function NavPreview() {
  const [selected, setSelected] = useState(1);
  const current = FRESH_OPTIONS[selected - 1];
  const ActiveIcon = current.icon;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-950">
      {/* Live Wavy-Yellow Navbar Preview */}
      <header style={wavyYellowBgStyle} className="w-full border-b-2 border-slate-950 shadow-sm">
        <div className="max-w-7xl mx-auto h-16 sm:h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <BrandLogo size="sm" />

          <nav className="hidden md:flex items-center gap-7">
            <span className="text-[0.95rem] font-bold text-gray-900 whitespace-nowrap">
              Services
            </span>
            <span className="text-[0.95rem] font-bold text-gray-900 whitespace-nowrap">
              How It Works
            </span>
            <span className="text-[0.95rem] font-bold text-gray-900 whitespace-nowrap">
              FAQs
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border-2 border-slate-950 shadow-[2px_2px_0px_#0F172A] text-[0.88rem] font-extrabold text-slate-950 whitespace-nowrap">
              <ActiveIcon className="w-4 h-4" />
              <span>{current.tabLabel}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${current.badgeCls}`}>
                {current.badge}
              </span>
            </span>
          </nav>

          <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-gray-950 text-white text-sm font-bold whitespace-nowrap">
            Get the App
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700">
              Fresh Navbar Tab Concepts
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display mt-1">
              10 New Feature &amp; Growth Tabs
            </h1>
          </div>
          <Link
            to="/"
            className="self-start px-4 py-2 rounded-xl bg-slate-950 text-white text-xs font-extrabold"
          >
            ← Back to Main Site
          </Link>
        </div>

        {/* Live Interactive Tab Popover Preview */}
        <div className="bg-[#0F172A] text-white rounded-3xl p-6 sm:p-7 border-2 border-slate-950 shadow-[6px_6px_0px_#FACC15] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
              Option {current.id}: What &ldquo;{current.tabLabel}&rdquo; Opens
            </span>
            <span className="text-xs font-bold text-slate-300">{current.interactiveTitle}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.chips.map((chip) => (
              <div
                key={chip}
                className="p-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-100 leading-relaxed"
              >
                {chip}
              </div>
            ))}
          </div>
        </div>

        {/* 10 Concept Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FRESH_OPTIONS.map((opt) => {
            const active = selected === opt.id;
            const Icon = opt.icon;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelected(opt.id)}
                className={`text-left p-5 rounded-2xl border-2 border-slate-950 transition-all ${
                  active
                    ? 'bg-[#FACC15] shadow-[5px_5px_0px_#0F172A]'
                    : 'bg-white hover:bg-amber-50 shadow-[3px_3px_0px_#0F172A]'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-950 text-[#FACC15]">
                    Option {opt.id}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-slate-950">
                    <Icon className="w-3.5 h-3.5" /> {opt.tabLabel}
                  </span>
                </div>
                <h2 className="text-base font-extrabold font-display text-slate-950">{opt.title}</h2>
                <p className="text-xs text-slate-800 mt-1 leading-relaxed">{opt.why}</p>
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
