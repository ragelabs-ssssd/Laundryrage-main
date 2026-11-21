import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Clock, Copy, Check } from 'lucide-react';
import { BRAND } from '../data/brandData';
import { StoreButtons } from './SharedUI';
import { wavyYellowBgStyle } from './BrandMark';

const FLIP_WORDS = ['Weekend', 'Sunday', 'Date Night', 'Chill Time'];

const Clothespin = () => (
  <span
    aria-hidden="true"
    className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-3.5 h-5 rounded-sm bg-amber-600 border border-amber-900/40 shadow-sm z-20"
  />
);

export default function HeroShowcase({ onOpenQR }) {
  const [copied, setCopied] = useState(false);
  const [burstCount, setBurstCount] = useState(0);
  const [flipIdx, setFlipIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setFlipIdx((i) => (i + 1) % FLIP_WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('FIRST50');
    } catch {
      // Ignore clipboard errors
    }
    setCopied(true);
    setBurstCount((c) => c + 1);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section
      id="hero-section"
      className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden text-gray-950"
      style={wavyYellowBgStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left 7 Columns */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative inline-block">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-950 border-2 border-slate-950 shadow-[3px_3px_0px_#0F172A] text-xs font-extrabold uppercase tracking-wider transition-transform hover:-translate-y-0.5"
              >
                <span className="font-mono">FLAT 50% OFF YOUR FIRST WASH • CODE: FIRST50</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-70" />
                )}
              </button>
              {burstCount > 0 && (
                <motion.span
                  key={burstCount}
                  initial={{ opacity: 1, y: 0, scale: 0.9 }}
                  animate={{ opacity: 0, y: -36, scale: 1.2 }}
                  transition={{ duration: 0.9 }}
                  className="absolute -top-6 right-0 px-2.5 py-0.5 rounded-full bg-slate-950 text-[#FACC15] text-[11px] font-extrabold pointer-events-none"
                >
                  +50% OFF COPIED!
                </motion.span>
              )}
            </div>

            <h1 className="font-black font-display text-gray-950">
              Your{' '}
              <span className="inline-block min-w-[190px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={flipIdx}
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: -90, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="inline-block bg-slate-950 text-[#FACC15] px-3 py-0.5 rounded-xl"
                  >
                    {FLIP_WORDS[flipIdx]}
                  </motion.span>
                </AnimatePresence>
              </span>{' '}
              Isn’t Made for{' '}
              <span className="relative inline-block bg-white px-3 py-0.5 rounded-xl border-2 border-slate-950 shadow-[4px_4px_0px_#0F172A] -rotate-2">
                <span
                  aria-hidden="true"
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-2.5 h-4 rounded-sm bg-amber-600 border border-amber-950/50"
                />
                Laundry.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-900 font-medium leading-relaxed max-w-xl">
              {BRAND.heroSub}
            </p>

            <div className="pt-2">
              <StoreButtons variant="dark" size="md" />
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-bold text-gray-900">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-slate-950" /> 100% Separate Drums
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-950" /> &lt;24h Doorstep Return
              </span>
            </div>
          </div>

          {/* Right 5 Columns: Clothespin Brutalist Photo Card */}
          <div className="lg:col-span-5">
            <motion.div
              animate={{ rotate: [-1.1, 1.1, -1.1] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top center' }}
              className="relative rounded-3xl p-4 bg-white border-2 border-slate-950 shadow-[8px_8px_0px_#0F172A]"
            >
              <Clothespin />
              <img
                src="/images/indian-hero-3-bags.jpg"
                alt="Tagged yellow LaundryRage laundry bags in Bhubaneswar studio"
                className="w-full aspect-[4/3] object-cover rounded-2xl"
              />
              <div className="mt-4 flex items-center justify-between gap-4 px-2 pb-1">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    First Order Offer
                  </p>
                  <p className="text-sm font-extrabold text-gray-950">
                    Use code FIRST50 for 50% OFF
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
