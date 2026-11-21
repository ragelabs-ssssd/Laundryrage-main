import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, Droplets, Wind, Layers, Clock } from 'lucide-react';
import { BRAND } from '../data/brandData';

const CARE_SYMBOLS = [
  { icon: Droplets, label: 'Wash' },
  { icon: Wind, label: 'Steam' },
  { icon: Layers, label: 'Fold' },
  { icon: Clock, label: '<24h Express' },
];

const Footer = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className="relative bg-[#0B0F19] text-slate-300 overflow-hidden border-t border-slate-800/80"
    >
      {/* Tactile Stitched Garment Care-Tag Strip */}
      <div className="border-b border-dashed border-slate-700/80 bg-[#0F172A]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-400">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400" aria-hidden="true" />
            Garment Care Spec • 100% Solo-Drum
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {CARE_SYMBOLS.map(({ icon: Icon, label }, idx) => (
              <div key={label} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <Icon className="w-3.5 h-3.5 text-amber-400" />
                <span>{label}</span>
                {idx < CARE_SYMBOLS.length - 1 && (
                  <span className="text-slate-600 ml-2 hidden sm:inline" aria-hidden="true">
                    •
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Giant Subtle Background Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden opacity-[0.035]"
      >
        <span className="font-display font-extrabold tracking-[-0.04em] text-[18vw] sm:text-[14vw] leading-none text-white whitespace-nowrap">
          LAUNDRYRAGE
        </span>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Brand & Tagline */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-white/[0.06] border border-white/10">
              <img
                src={BRAND.logo}
                alt="LaundryRage"
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="font-display text-lg font-bold tracking-[-0.015em] text-white">
              Tap. Wash. Relax.
            </p>

            <p className="text-[0.9375rem] leading-[1.65] text-slate-300 max-w-sm">
              Bhubaneswar&apos;s hygiene-first doorstep laundry &amp; steam-press app. Individual sanitized drums, transparent pricing, and &lt;24h return.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Instagram
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
              </a>
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                WhatsApp Support
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
              Explore
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a
                  href="#service-tabs"
                  onClick={(e) => scrollToSection(e, 'service-tabs')}
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => scrollToSection(e, 'how-it-works')}
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#pricing-estimator"
                  onClick={(e) => scrollToSection(e, 'pricing-estimator')}
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  Pricing Estimator
                </a>
              </li>
              <li>
                <a
                  href="#faq-section"
                  onClick={(e) => scrollToSection(e, 'faq-section')}
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Live Bhubaneswar Hub Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
              Bhubaneswar Hub
            </h3>
            <ul className="space-y-3.5 text-[0.9375rem] leading-[1.6]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span className="text-slate-300">{BRAND.address}</span>
              </li>
              <li>
                <a
                  href={BRAND.phoneHref}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{BRAND.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{BRAND.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* QR Scan Card */}
          <div className="lg:col-span-3">
            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-4">
              <div className="w-24 h-24 shrink-0 rounded-xl bg-white p-1.5 shadow-md">
                <img
                  src={BRAND.qrImage}
                  alt="Scan QR to download LaundryRage App"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="space-y-2 min-w-0">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Scan to Book
                </span>
                <p className="text-sm font-bold text-white leading-snug">
                  Get the LaundryRage App
                </p>
                <div className="flex flex-col gap-1.5 pt-0.5">
                  <a
                    href={BRAND.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    Google Play &rarr;
                  </a>
                  <a
                    href={BRAND.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    App Store &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-14 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium leading-[1.4] text-slate-400">
          <p>© {new Date().getFullYear()} LaundryRage. All rights reserved.</p>
          <p>Serving Jagamara, Khandagiri, Patia, Saheed Nagar &amp; Nayapalli</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
