import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND, SERVICES } from '../data/brandData';
import { StoreButtons } from './SharedUI';
import {
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  Clock,
  Instagram,
  Mail,
  MapPin,
  Phone,
  QrCode,
  Search,
} from 'lucide-react';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

/* 1. KINETIC MARQUEE & ASYMMETRIC STUDIO */
export function FooterV3Opt1Marquee() {
  return (
    <div className="bg-[#111318] text-white overflow-hidden">
      {/* Top Marquee Strip */}
      <div className="border-b border-white/10 py-3 bg-yellow-400 text-gray-950 overflow-hidden">
        <div className="flex whitespace-nowrap gap-10 text-xs font-black uppercase tracking-[0.2em] animate-marquee">
          {[1, 2, 3].map((i) => (
            <span key={i} className="flex items-center gap-10">
              <span>100% Solo-Drum Wash</span>
              <span>•</span>
              <span>Bhubaneswar &lt;24h Express</span>
              <span>•</span>
              <span>RO-Softened Water</span>
              <span>•</span>
              <span>Flat 50% OFF First Order</span>
              <span>•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-12 border-b border-white/10">
          <div className="space-y-5 max-w-lg">
            <div className="flex items-center gap-2.5">
              <img src={BRAND.logo} alt={BRAND.name} className="h-9 w-auto object-contain" />
              <span className="text-lg font-black font-display">LaundryRage</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight leading-[1.06]">
              Tap. Wash. Relax.
            </h2>
            <StoreButtons variant="light" size="sm" />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8">
            <div className="space-y-2 text-sm text-gray-300">
              <p className="text-xs font-bold uppercase tracking-widest text-yellow-400 mb-3">
                Services &amp; Hub
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {SERVICES.map((s) => (
                  <Link key={s.id} to="/services" className="hover:text-white">
                    {s.name}
                  </Link>
                ))}
              </div>
              <p className="pt-2 text-xs text-gray-400">{BRAND.address}</p>
              <a href={BRAND.phoneHref} className="block font-bold text-white">
                {BRAND.phoneDisplay} • {BRAND.email}
              </a>
            </div>

            <div className="bg-white p-2.5 rounded-2xl shrink-0 text-center text-gray-900">
              <img src={BRAND.qrImage} alt="QR" className="w-20 h-20 object-contain" />
              <span className="block mt-1 text-[11px] font-bold">Scan App</span>
            </div>
          </div>
        </div>

        <div className="pt-6 flex items-center justify-between text-xs text-gray-400">
          <span>© {new Date().getFullYear()} {BRAND.name}</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-white font-semibold hover:text-yellow-300"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* 2. INTERACTIVE BHUBANESWAR SLOT FINDER */
export function FooterV3Opt2SlotFinder() {
  const [query, setQuery] = useState('');
  const matches = BRAND.areas.filter((a) =>
    a.name.toLowerCase().includes(query.trim().toLowerCase())
  );
  const active = matches[0] || BRAND.areas[0];

  return (
    <div className="bg-[#F8FAFC] text-gray-950 border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Interactive Slot Finder Card */}
        <div className="bg-white rounded-[28px] border border-gray-200 p-6 sm:p-9 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Live Pickup Availability
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display">
              Check next rider slot in your area.
            </h3>
            <div className="relative max-w-md pt-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 mt-0.5" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type Jagamara, Patia, Khandagiri..."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 text-sm focus:outline-none focus:border-gray-900"
              />
            </div>
          </div>

          <div className="lg:col-span-6 bg-gray-950 text-white rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Express Slots Open
              </div>
              <p className="text-xl font-bold font-display mt-1">{active.name}</p>
              <p className="text-xs text-gray-300 mt-0.5">
                {active.hub} • Pickup in {active.window}
              </p>
            </div>
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-yellow-400 text-gray-950 text-xs font-extrabold hover:bg-yellow-300 inline-flex items-center gap-1.5 shrink-0"
            >
              Book Slot <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Clean Bottom Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-2 text-sm">
          <div className="flex items-center gap-3">
            <img src={BRAND.logo} alt={BRAND.name} className="h-9 w-auto object-contain" />
            <div>
              <span className="font-black font-display block">LaundryRage</span>
              <span className="text-xs text-gray-500">{BRAND.phoneDisplay} • {BRAND.email}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 font-medium text-gray-700">
            {SERVICES.map((s) => (
              <Link key={s.id} to="/services" className="hover:text-gray-950">
                {s.name}
              </Link>
            ))}
          </div>

          <StoreButtons variant="dark" size="sm" />
        </div>
      </div>
    </div>
  );
}

/* 3. BOUTIQUE LAUNDRY DOCKET / RECEIPT */
export function FooterV3Opt3Docket() {
  return (
    <div className="bg-[#F3F4F6] text-gray-950 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-sm p-7 sm:p-10">
        <div className="flex items-center justify-between pb-6 border-b border-dashed border-gray-300">
          <div className="flex items-center gap-2.5">
            <img src={BRAND.logo} alt={BRAND.name} className="h-9 w-auto object-contain" />
            <div>
              <span className="font-black font-display text-lg block leading-none">
                LAUNDRYRAGE
              </span>
              <span className="text-[11px] font-mono text-gray-500">
                DOCKET #BBSR-24H • SOLO DRUM
              </span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-yellow-400 text-xs font-extrabold">
            50% OFF 1ST ORDER
          </span>
        </div>

        <div className="py-6 border-b border-dashed border-gray-300 space-y-2.5 font-mono text-xs sm:text-sm">
          {SERVICES.map((s) => (
            <div key={s.id} className="flex items-center justify-between">
              <span className="text-gray-700">{s.name}</span>
              <span className="font-bold text-gray-950">{s.price}</span>
            </div>
          ))}
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center sm:text-left">
            <p className="text-xs text-gray-600">
              {BRAND.address} • {BRAND.phoneDisplay}
            </p>
            <StoreButtons variant="dark" size="sm" />
          </div>
          <div className="flex items-center gap-3">
            <img
              src={BRAND.qrImage}
              alt="QR"
              className="w-20 h-20 rounded-xl border border-gray-200 p-1 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-6 flex items-center justify-between text-xs text-gray-500">
        <span>© {new Date().getFullYear()} {BRAND.name}</span>
        <button
          type="button"
          onClick={scrollToTop}
          className="font-semibold text-gray-800 hover:text-gray-950 inline-flex items-center gap-1"
        >
          Top <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

/* 4. ASYMMETRIC MAGAZINE PHOTO SPREAD */
export function FooterV3Opt4Magazine() {
  return (
    <div className="bg-white text-gray-950 border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Photo Card */}
        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[260px] bg-gray-900">
          <img
            src="/images/wash-fold.jpg"
            alt="LaundryRage Studio"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-300 uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" /> Open 7 AM – 10 PM
            </span>
            <p className="text-xl font-bold font-display mt-1">{BRAND.address}</p>
            <a
              href={BRAND.phoneHref}
              className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-950 text-xs font-bold"
            >
              <Phone className="w-3.5 h-3.5" /> {BRAND.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Right Editorial Directory */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-8 py-2">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <img src={BRAND.logo} alt={BRAND.name} className="h-9 w-auto object-contain" />
              <span className="text-xl font-black font-display">LaundryRage</span>
            </div>
            <StoreButtons variant="dark" size="sm" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm border-y border-gray-100 py-7">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Services
              </h4>
              <ul className="space-y-2 text-gray-700 font-medium">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <Link to="/services" className="hover:text-gray-950">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Bhubaneswar
              </h4>
              <ul className="space-y-2 text-gray-700 font-medium">
                {BRAND.areas.slice(0, 4).map((a) => (
                  <li key={a.name}>{a.name}</li>
                ))}
              </ul>
            </div>
            <div className="flex sm:justify-end">
              <img
                src={BRAND.qrImage}
                alt="QR"
                className="w-24 h-24 rounded-2xl border border-gray-200 p-1.5 object-contain"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>© {new Date().getFullYear()} {BRAND.name} • {BRAND.email}</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="font-bold text-gray-900 inline-flex items-center gap-1"
            >
              Back to top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 5. ULTRA-COMPACT APPLE ONE-LINER + INLINE QR TOGGLE */
export function FooterV3Opt5AppleWhisper() {
  const [showQr, setShowQr] = useState(false);

  return (
    <div className="bg-white text-gray-900 border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={BRAND.logo} alt={BRAND.name} className="h-9 w-auto object-contain" />
            <div>
              <span className="font-black font-display text-gray-950 block leading-none">
                LaundryRage
              </span>
              <span className="text-xs text-gray-500">
                50% OFF (up to ₹50) on your 1st Bhubaneswar wash
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <StoreButtons variant="dark" size="sm" />
            <button
              type="button"
              onClick={() => setShowQr((v) => !v)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-900 hover:bg-gray-50"
            >
              <QrCode className="w-4 h-4" />
              {showQr ? 'Hide QR' : 'Scan QR'}
            </button>
          </div>
        </div>

        {showQr && (
          <div className="p-5 rounded-2xl bg-[#F5F5F7] flex items-center gap-5">
            <img
              src={BRAND.qrImage}
              alt="QR"
              className="w-20 h-20 rounded-xl bg-white p-1 object-contain"
            />
            <div className="text-sm">
              <p className="font-bold text-gray-950">Point your camera to download</p>
              <p className="text-xs text-gray-600 mt-0.5">
                Available on Google Play &amp; Apple App Store.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-medium text-gray-700">
            {SERVICES.map((s) => (
              <Link key={s.id} to="/services" className="hover:text-gray-950">
                {s.name}
              </Link>
            ))}
            <span>•</span>
            <a href={BRAND.phoneHref} className="font-bold text-gray-950">
              {BRAND.phoneDisplay}
            </a>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            <a href={BRAND.instagram} target="_blank" rel="noreferrer">
              @laundryrage
            </a>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="font-bold text-gray-900 inline-flex items-center gap-1"
          >
            Top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* 6. DARK APP MOCKUP SHOWCASE */
export function FooterV3Opt6AppShowcase() {
  return (
    <div className="bg-[#0B0F19] text-white pt-16 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12 border-b border-white/10">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2.5">
              <img src={BRAND.logo} alt={BRAND.name} className="h-9 w-auto object-contain" />
              <span className="text-lg font-black font-display">LaundryRage</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black font-display leading-tight max-w-lg">
              Your entire laundry routine, in one tap.
            </h3>
            <p className="text-sm text-gray-300 max-w-md">
              Schedule pickup in 15 seconds, track solo-drum progress live, and pay via UPI.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <StoreButtons variant="light" size="sm" />
              <img
                src={BRAND.qrImage}
                alt="QR"
                className="w-12 h-12 rounded-xl bg-white p-1 object-contain"
              />
            </div>
          </div>

          <div className="lg:col-span-5 flex items-end justify-center lg:justify-end gap-6">
            <div className="space-y-2 text-sm text-gray-300 pb-4">
              <p className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                Jagamara Hub
              </p>
              <a href={BRAND.phoneHref} className="block font-bold text-white">
                {BRAND.phoneDisplay}
              </a>
              <a href={`mailto:${BRAND.email}`} className="block text-xs">
                {BRAND.email}
              </a>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs pt-1"
              >
                <Instagram className="w-3.5 h-3.5" /> @laundryrage
              </a>
            </div>
            <img
              src="/mockup-ios-removebg.png"
              alt="LaundryRage iOS"
              className="w-32 sm:w-36 drop-shadow-2xl select-none"
            />
          </div>
        </div>

        <div className="pt-6 flex items-center justify-between text-xs text-gray-400">
          <span>© {new Date().getFullYear()} {BRAND.name} • Bhubaneswar</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="text-white font-semibold inline-flex items-center gap-1"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* 7. GOLDEN HOUR MODERN FINALE — Signature Yellow + Floating Dark App Card */
export function FooterV3Opt7GoldenHour() {
  return (
    <div className="bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-300 text-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12 border-b border-gray-950/15">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2.5">
              <img src={BRAND.logo} alt={BRAND.name} className="h-9 w-auto object-contain" />
              <span className="text-lg font-black font-display">LaundryRage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight leading-tight max-w-lg">
              Fresh clothes. Zero effort. Right across Bhubaneswar.
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-gray-900/90">
              {SERVICES.map((s) => (
                <Link key={s.id} to="/services" className="hover:underline">
                  {s.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-900/80">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {BRAND.address}
              </span>
              <a href={BRAND.phoneHref} className="inline-flex items-center gap-1 hover:underline">
                <Phone className="w-3.5 h-3.5" /> {BRAND.phoneDisplay}
              </a>
              <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-1 hover:underline">
                <Mail className="w-3.5 h-3.5" /> {BRAND.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gray-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center gap-5">
            <img
              src={BRAND.qrImage}
              alt="QR"
              className="w-24 h-24 rounded-2xl bg-white p-1.5 object-contain shrink-0"
            />
            <div className="space-y-3 text-center sm:text-left">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-yellow-400 uppercase tracking-wider">
                Flat 50% OFF
              </span>
              <p className="text-sm font-semibold text-gray-200">
                Scan or tap to book your first pickup.
              </p>
              <StoreButtons variant="light" size="sm" />
            </div>
          </div>
        </div>

        <div className="pt-6 flex items-center justify-between text-xs font-semibold text-gray-900/80">
          <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-gray-950 text-white font-bold"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
