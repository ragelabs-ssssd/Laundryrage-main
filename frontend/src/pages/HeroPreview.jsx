import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Clock, Copy, Check, Sparkles, Zap, Radio } from 'lucide-react';
import { BRAND } from '../data/brandData';
import { StoreButtons } from '../components/SharedUI';
import { wavyYellowBgStyle } from '../components/BrandMark';

const HERO_OPTIONS = [
  { id: 1, title: 'Floating Soap Bubbles (Click to Pop)', desc: 'Translucent bubbles float up across the yellow hero and pop on click.' },
  { id: 2, title: 'Interactive Stain-Zap Eraser', desc: 'A funky Haldi/Coffee stain badge over "Laundry." zaps clean on hover/click.' },
  { id: 3, title: 'Spinning Drum Porthole "O" + RPM', desc: 'Replaces the "o" in "for" with a spinning water-filled washing porthole.' },
  { id: 4, title: 'Swaying Clothesline Live Ticker', desc: 'Mini swaying garment tags above the headline showing live BBSR pickups.' },
  { id: 5, title: 'Steam-Press Mist Sweep', desc: 'Animated warm white steam wave sweeps across the headline to crisp-press it.' },
  { id: 6, title: 'Bouncing Foam-Suds Letters', desc: 'Each letter in "Laundry." bounces independently with springy suds physics.' },
  { id: 7, title: '3D Flipping "Weekend / Sunday" Word', desc: 'Auto-flipping word card cycles Weekend → Sunday → Date Night → Chill Time.' },
  { id: 8, title: 'Live Bhubaneswar Hub Radar Strip', desc: 'Pulsing radar pills showing Jagamara, Khandagiri & Patia pickup windows.' },
  { id: 9, title: 'Coin-Burst FIRST50 Button', desc: 'Clicking the FIRST50 pill launches a burst of golden 50% OFF / Coin sparks.' },
  { id: 10, title: 'Unfolding Origami Shirt Badge', desc: 'Interactive folded-shirt badge that unfolds on hover to show <24h VIP & <48h tiers.' },
];

const FLIP_WORDS = ['Weekend', 'Sunday', 'Date Night', 'Chill Time'];

export default function HeroPreview() {
  const [selected, setSelected] = useState(1);
  const [copied, setCopied] = useState(false);
  const [popped, setPopped] = useState([]);
  const [zapped, setZapped] = useState(false);
  const [flipIdx, setFlipIdx] = useState(0);
  const [burstCount, setBurstCount] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setFlipIdx((i) => (i + 1) % FLIP_WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);

  const handleCopy = () => {
    navigator.clipboard?.writeText('FIRST50');
    setCopied(true);
    setBurstCount((c) => c + 1);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-950">
      {/* Top Bar */}
      <div className="bg-slate-950 text-white px-4 sm:px-8 py-3 flex items-center justify-between">
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
          Hero Section — 10 Funky Animated Options
        </span>
        <Link to="/" className="px-3.5 py-1.5 rounded-lg bg-[#FACC15] text-slate-950 text-xs font-extrabold">
          ← Back to Main Site
        </Link>
      </div>

      {/* Live Hero Preview Canvas */}
      <section className="py-14 md:py-20 relative overflow-hidden text-gray-950 border-b-4 border-slate-950" style={wavyYellowBgStyle}>
        {/* Option 1: Floating Soap Bubbles */}
        {selected === 1 &&
          [0, 1, 2, 3, 4, 5].map((b) =>
            popped.includes(b) ? null : (
              <motion.button
                key={b}
                type="button"
                aria-label="Pop soap bubble"
                onClick={() => setPopped((p) => [...p, b])}
                animate={{ y: [0, -28, 0], x: [0, b % 2 === 0 ? 10 : -10, 0] }}
                transition={{ duration: 3.5 + b * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ left: `${10 + b * 15}%`, top: `${15 + (b % 3) * 24}%` }}
                className="absolute w-10 h-10 rounded-full border-2 border-white/80 bg-white/35 backdrop-blur-xs shadow-sm z-20 cursor-pointer hover:scale-125 transition-transform"
              />
            )
          )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Option 4: Swaying Clothesline Ticker */}
              {selected === 4 && (
                <motion.div
                  animate={{ rotate: [-0.8, 0.8, -0.8] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950 text-[#FACC15] text-xs font-extrabold border-2 border-white shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  14 Pickups Booked Today in Bhubaneswar
                </motion.div>
              )}

              {/* Option 8: Live Hub Radar Strip */}
              {selected === 8 && (
                <div className="flex flex-wrap gap-2">
                  {['Jagamara • 25m', 'Khandagiri • 35m', 'Patia • 40m'].map((hub) => (
                    <span
                      key={hub}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 text-white text-[11px] font-extrabold"
                    >
                      <Radio className="w-3 h-3 text-emerald-400 animate-pulse" /> {hub}
                    </span>
                  ))}
                </div>
              )}

              {/* FIRST50 Pill (with Option 9 Coin Burst) */}
              <div className="relative inline-block">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-950 border-2 border-slate-950 shadow-[3px_3px_0px_#0F172A] text-xs font-extrabold uppercase tracking-wider"
                >
                  <span className="font-mono">FLAT 50% OFF YOUR FIRST WASH • CODE: FIRST50</span>
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5 opacity-70" />}
                </button>
                {selected === 9 && burstCount > 0 && (
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

              {/* Headline */}
              <div className="relative overflow-hidden">
                {selected === 5 && (
                  <motion.div
                    aria-hidden="true"
                    animate={{ x: ['-120%', '140%'] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
                    className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/75 to-transparent skew-x-12 pointer-events-none z-20"
                  />
                )}

                <h1 className="font-black font-display text-gray-950">
                  Your{' '}
                  {selected === 7 ? (
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
                    </span>
                  ) : (
                    'Weekend'
                  )}{' '}
                  Isn’t Made f
                  {selected === 3 ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      className="inline-flex items-center justify-center w-[0.75em] h-[0.75em] rounded-full border-[3.5px] border-slate-950 bg-sky-100 align-baseline mx-[1px] overflow-hidden relative"
                    >
                      <span className="absolute bottom-0 inset-x-0 h-1/2 bg-sky-400/75" />
                    </motion.span>
                  ) : (
                    'o'
                  )}
                  r{' '}
                  <span
                    onClick={() => selected === 2 && setZapped((z) => !z)}
                    className={`relative inline-block bg-white px-3 py-0.5 rounded-xl border-2 border-slate-950 shadow-[4px_4px_0px_#0F172A] -rotate-2 ${
                      selected === 2 ? 'cursor-pointer' : ''
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-2.5 h-4 rounded-sm bg-amber-600 border border-amber-950/50"
                    />
                    {selected === 2 && !zapped && (
                      <span className="absolute -top-3 -right-3 px-2 py-0.5 rounded-full bg-amber-800 text-white text-[10px] font-extrabold rotate-12 shadow">
                        <Zap className="w-3 h-3 inline" /> Stain! Tap
                      </span>
                    )}
                    {selected === 6 ? (
                      <span className="inline-flex">
                        {'Laundry.'.split('').map((ch, idx) => (
                          <motion.span
                            key={idx}
                            animate={{ y: idx % 2 === 0 ? [-3, 2, -3] : [2, -3, 2] }}
                            transition={{ duration: 1.8 + idx * 0.12, repeat: Infinity, ease: 'easeInOut' }}
                            className="inline-block"
                          >
                            {ch}
                          </motion.span>
                        ))}
                      </span>
                    ) : (
                      'Laundry.'
                    )}
                  </span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-gray-900 font-medium leading-relaxed max-w-xl">
                {BRAND.heroSub}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <StoreButtons variant="dark" size="md" />
                {selected === 10 && (
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    className="px-4 py-2.5 rounded-2xl bg-white border-2 border-slate-950 shadow-[4px_4px_0px_#0F172A] -rotate-2 text-xs font-extrabold"
                  >
                    <Sparkles className="w-3.5 h-3.5 inline text-amber-600 mr-1" />
                    &lt;48h Standard • &lt;24h VIP
                  </motion.div>
                )}
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

            <div className="lg:col-span-5">
              <motion.div
                animate={{ rotate: [-1.1, 1.1, -1.1] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: 'top center' }}
                className="relative rounded-3xl p-4 bg-white border-2 border-slate-950 shadow-[8px_8px_0px_#0F172A]"
              >
                <span className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-3.5 h-5 rounded-sm bg-amber-600 border border-amber-900/40 shadow-sm z-20" />
                <img
                  src="/images/wash-fold.jpg"
                  alt="Freshly folded laundry delivered by LaundryRage"
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
                  <span className="px-4 py-2 rounded-full bg-gray-950 text-white text-xs font-bold">
                    Scan QR
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Option Selector Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {HERO_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => {
                setSelected(opt.id);
                setPopped([]);
                setZapped(false);
              }}
              className={`text-left p-5 rounded-2xl border-2 border-slate-950 transition-all ${
                selected === opt.id
                  ? 'bg-[#FACC15] shadow-[5px_5px_0px_#0F172A]'
                  : 'bg-white hover:bg-amber-50 shadow-[3px_3px_0px_#0F172A]'
              }`}
            >
              <span className="inline-block text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-950 text-[#FACC15] mb-2">
                Option {opt.id}
              </span>
              <h2 className="text-base font-extrabold font-display text-slate-950">{opt.title}</h2>
              <p className="text-xs text-slate-800 mt-1 leading-relaxed">{opt.desc}</p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
