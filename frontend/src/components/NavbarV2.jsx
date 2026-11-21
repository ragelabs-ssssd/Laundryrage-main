import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BRAND } from '../data/brandData';
import { QRModal } from './SharedUI';

const NAV_LINKS = [
  { label: 'Services', href: '#service-tabs' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing Estimator', href: '#pricing-estimator' },
  { label: 'FAQs', href: '#faq-section' },
];

const Navbar = () => {
  const [qrOpen, setQrOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetApp = () => {
    setMobileMenuOpen(false);
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
    <>
      <nav
        id="main-navbar"
        aria-label="Primary Navigation"
        className="fixed top-4 inset-x-0 z-50 w-[calc(100%-2rem)] max-w-6xl mx-auto h-14 px-4 sm:px-6 rounded-full bg-white/90 backdrop-blur-xl border border-slate-900/10 shadow-[0_8px_30px_rgb(15,23,42,0.06)] grid grid-cols-[auto_1fr_auto] items-center"
      >
        {/* Left: Brand Logo + Live Bhubaneswar Indicator */}
        <div className="flex items-center gap-3 min-w-0">
          <a
            href="#hero-section"
            onClick={(e) => handleNavClick(e, '#hero-section')}
            className="flex items-center shrink-0 focus:outline-none"
            aria-label="LaundryRage Home"
          >
            <img
              src={BRAND.logo}
              alt="LaundryRage"
              className="h-9 w-auto object-contain"
            />
          </a>

          <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-medium leading-[1.4] text-emerald-800 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            Express Open
          </span>
        </div>

        {/* Center: Dead-center navigation links on desktop */}
        <div className="hidden md:flex items-center justify-center gap-7 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-semibold leading-none tracking-[-0.01em] text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile spacer */}
        <div className="md:hidden" />

        {/* Right: Get App CTA + Mobile Menu Toggle */}
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={handleGetApp}
            className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-5 py-2.5 text-sm font-bold leading-none tracking-[-0.01em] transition-all hover:shadow-md whitespace-nowrap"
          >
            Get App
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Sheet */}
      {mobileMenuOpen && (
        <div className="fixed top-20 inset-x-4 z-40 md:hidden rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-900/10 shadow-xl p-4 space-y-1">
          <div className="px-3 py-2 flex items-center gap-2 border-b border-slate-100 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span className="text-xs font-medium text-emerald-800">Bhubaneswar Express Open</span>
          </div>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <QRModal isOpen={qrOpen} onClose={() => setQrOpen(false)} />
    </>
  );
};

export default Navbar;
