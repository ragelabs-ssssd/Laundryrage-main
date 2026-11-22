import React, { useEffect } from 'react';
import { X, QrCode, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../data/brandData';
import { wavyYellowBgStyle } from './BrandMark';

export const StoreButtons = ({ variant = 'dark', size = 'md' }) => {
  const isDarkBtn = variant === 'dark';
  const pad = size === 'sm' ? 'px-3.5 py-2.5' : 'px-5 py-3';

  return (
    <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-full">
      <a
        href={BRAND.playStore}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full inline-flex items-center justify-center gap-2.5 ${pad} rounded-xl border font-semibold transition-all hover:-translate-y-0.5 shadow-sm ${
          isDarkBtn
            ? 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
            : 'bg-white text-slate-900 border-white hover:bg-slate-100'
        }`}
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" fill="none">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z" fill="#4285F4" />
          <path d="M17.727 8.273L5.504.632A1.002 1.002 0 0 0 3.609 1.814L13.792 12l3.935-3.727z" fill="#EA4335" />
          <path d="M3.609 22.186A1.002 1.002 0 0 0 5.504 23.368l12.223-7.641-3.935-3.727L3.609 22.186z" fill="#34A853" />
          <path d="M21.188 10.634l-3.46-2.361-3.936 3.727 3.935 3.727 3.461-2.361a1.249 1.249 0 0 0 0-2.132z" fill="#FBBC04" />
        </svg>
        <div className="text-left leading-none">
          <span className="text-xs uppercase tracking-wide font-medium leading-[1.35] opacity-80 block whitespace-nowrap">
            GET IT ON
          </span>
          <span className="text-sm font-bold tracking-[-0.01em] block whitespace-nowrap">Google Play</span>
        </div>
      </a>

      <a
        href={BRAND.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full inline-flex items-center justify-center gap-2.5 ${pad} rounded-xl border font-semibold transition-all hover:-translate-y-0.5 shadow-sm ${
          isDarkBtn
            ? 'bg-white text-slate-900 border-slate-900/15 hover:border-slate-900/30'
            : 'bg-[#FACC15] text-slate-900 border-[#FACC15] hover:bg-[#F59E0B]'
        }`}
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="text-left leading-none">
          <span className="text-xs uppercase tracking-wide font-medium leading-[1.35] opacity-80 block whitespace-nowrap">
            DOWNLOAD ON
          </span>
          <span className="text-sm font-bold tracking-[-0.01em] block whitespace-nowrap">App Store</span>
        </div>
      </a>
    </div>
  );
};

export const QRModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm overscroll-contain"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-3xl border-4 border-slate-950 shadow-[10px_10px_0px_#FACC15] overflow-hidden grid grid-cols-1 sm:grid-cols-12 font-display"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close QR modal"
              className="absolute top-3.5 right-3.5 z-20 w-8 h-8 inline-flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div style={wavyYellowBgStyle} className="sm:col-span-7 p-7 sm:p-8 flex flex-col justify-between gap-6 text-slate-950">
              <div>
                <h3 className="text-3xl font-extrabold leading-tight">
                  TAP. WASH. RELAX.
                </h3>
                <p className="text-xs font-bold mt-2">
                  100% Solo-Drum • 48h* Fresh • 24h* Priority
                </p>
                <p className="text-[11px] font-semibold mt-1 opacity-80">
                  * Excluding non-working hours
                </p>
              </div>
              <StoreButtons variant="dark" size="sm" />
            </div>

            <div className="sm:col-span-5 bg-[#0F172A] text-white p-7 sm:p-8 flex flex-col items-center justify-center gap-3">
              <img
                src={BRAND.qrImage}
                alt="Scan QR to download LaundryRage"
                className="w-44 h-44 rounded-2xl bg-white p-2 border-2 border-[#FACC15]"
              />
              <span className="text-xs font-bold text-[#FACC15]">Scan with Camera</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const FAQAccordion = ({ items, openIdx, setOpenIdx, dark = false }) => (
  <div className="space-y-4">
    {items.map((faq, idx) => {
      const isOpen = openIdx === idx;
      return (
        <div
          key={idx}
          className={`rounded-2xl border transition-colors overflow-hidden ${
            dark
              ? 'bg-white/[0.04] border-white/10 text-white'
              : 'bg-white border-slate-900/[0.08] text-slate-900 shadow-sm'
          }`}
        >
          <button
            type="button"
            onClick={() => setOpenIdx(isOpen ? null : idx)}
            aria-expanded={isOpen}
            className="w-full text-left p-6 flex items-center justify-between gap-4"
          >
            <span className="text-base font-bold leading-snug tracking-[-0.01em]">{faq.q}</span>
            <ChevronDown
              className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                isOpen ? 'rotate-180 text-amber-500' : 'text-slate-500'
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className={`text-[0.9375rem] leading-[1.65] ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    })}
  </div>
);
