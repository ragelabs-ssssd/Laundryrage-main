import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Instagram, Linkedin, MapPin, Phone } from 'lucide-react';
import { BRAND } from '../data/brandData';
import { StoreButtons } from './SharedUI';
import { BrandLogo } from './BrandMark';

const CLOTHESLINE_ITEMS = [
  { label: BRAND.address, icon: MapPin, href: null },
  { label: BRAND.phoneDisplay, icon: Phone, href: BRAND.phoneHref },
  { label: '@laundryrage', icon: Instagram, href: BRAND.instagram, external: true },
  { label: 'LaundryRage', icon: Linkedin, href: 'https://www.linkedin.com/company/laundryrage', external: true },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="site-footer" className="bg-[#FACC15] border-t-4 border-slate-950 text-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-5 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4">
            <BrandLogo size="lg" />
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-none">
              TAP. WASH. RELAX.
            </h2>
          </div>
          <div className="bg-white p-5 rounded-3xl border-2 border-slate-950 shadow-[6px_6px_0px_#0F172A]">
            <StoreButtons variant="dark" size="md" />
          </div>
        </div>

        {/* Option 1: Clothespin-Hung Swaying Tags (Address, Phone, Instagram, LinkedIn) */}
        <div className="pt-2 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="relative pt-3 flex-1">
            <div className="hidden sm:block absolute top-3 inset-x-4 h-0.5 bg-slate-950/25" />
            <div className="flex flex-wrap gap-3 relative z-10">
              {CLOTHESLINE_ITEMS.map((item, idx) => {
                const Icon = item.icon;
                const Tag = item.href ? motion.a : motion.span;
                const linkProps = item.href
                  ? {
                      href: item.href,
                      ...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                    }
                  : {};

                return (
                  <Tag
                    key={item.label}
                    {...linkProps}
                    animate={{ rotate: idx % 2 === 0 ? [-1, 1, -1] : [1, -1, 1] }}
                    transition={{ duration: 3.2 + idx * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    whileHover={{ y: -3 }}
                    style={{ transformOrigin: 'top center' }}
                    className="relative px-3.5 py-2 rounded-xl bg-white border-2 border-slate-950 shadow-[3px_3px_0px_#0F172A] inline-flex items-center gap-2 text-xs font-extrabold text-slate-950"
                  >
                    <span
                      aria-hidden="true"
                      className="hidden sm:block absolute -top-2.5 left-1/2 -translate-x-1/2 w-2.5 h-3.5 rounded-sm bg-amber-600 border border-amber-950"
                    />
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.label}</span>
                  </Tag>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="self-start lg:self-auto px-4 py-2 rounded-xl bg-slate-950 text-white text-xs font-extrabold inline-flex items-center gap-1.5 hover:bg-slate-800 transition-colors shrink-0"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-4 border-t border-slate-950/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-bold text-slate-900">
          <p>© {new Date().getFullYear()} LaundryRage. All rights reserved.</p>
          <p>* Excluding non-working hours.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
