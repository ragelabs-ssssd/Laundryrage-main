import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  RotateCw,
  Droplets,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';
import { HYGIENE_CHAPTERS, STATS } from '../data/brandData';

const OPTIONS = [
  { id: 1, title: 'Mixed Dhobi vs Solo-Drum Flipper', desc: 'Interactive toggle comparing local mixed drums vs LaundryRage sanitized solo drums.' },
  { id: 2, title: 'Spinning Washing-Drum Dial', desc: 'Click the rotary porthole dial to spin through all 3 hygiene stages.' },
  { id: 3, title: 'Live Temp & RO Purity Bar', desc: 'Animated 60°C / 40°C / 115°C telemetry bar that fills per stage.' },
  { id: 4, title: 'Interactive Proof-Pop Stats', desc: 'Click any of the 4 hanging stat badges to reveal live Bhubaneswar proof.' },
  { id: 5, title: 'Steam-Sweep Photo Reveal', desc: 'Click the photo card to sweep a white steam wave and stamp "100% Sanitized".' },
  { id: 6, title: 'Auto-Cycling Stage Progress', desc: 'Auto-cycles through chapters with a smooth yellow progress bar.' },
  { id: 7, title: 'Before / After Comparison Slider', desc: 'Drag slider over the card to compare dull hard-water wash vs RO solo wash.' },
  { id: 8, title: 'Clothesline Cascade Cards', desc: 'All 3 chapters hang side-by-side on a wire; active card pops forward.' },
  { id: 9, title: 'Dark Obsidian Sterilization Lab', desc: '#0F172A lab console with pulsing emerald status LEDs and yellow framing.' },
  { id: 10, title: 'Interactive 3-Point Hygiene Stamp', desc: 'Check off all 3 hygiene standards to unlock a Solo-Drum Verified seal.' },
];

export default function HygienePreview() {
  const [selected, setSelected] = useState(1);
  const [activeChap, setActiveChap] = useState(0);
  const [showRisk, setShowRisk] = useState(false);
  const [statNote, setStatNote] = useState(0);
  const [steamKey, setSteamKey] = useState(0);
  const [sliderPos, setSliderPos] = useState(65);
  const [checked, setChecked] = useState([true, false, false]);

  useEffect(() => {
    if (selected !== 6) return;
    const t = setInterval(() => setActiveChap((c) => (c + 1) % HYGIENE_CHAPTERS.length), 3000);
    return () => clearInterval(t);
  }, [selected]);

  const chapter = HYGIENE_CHAPTERS[activeChap];
  const isDark = selected === 9;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-950">
      <div className="bg-slate-950 text-white px-4 sm:px-8 py-3 flex items-center justify-between">
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
          Next Section — 10 Interactive Hygiene &amp; Stats Options
        </span>
        <Link to="/" className="px-3.5 py-1.5 rounded-lg bg-[#FACC15] text-slate-950 text-xs font-extrabold">
          ← Back to Main Site
        </Link>
      </div>

      {/* Live Preview Section */}
      <section className={`py-14 md:py-20 border-b-4 border-slate-950 transition-colors ${isDark ? 'bg-[#0F172A] text-white' : 'bg-white text-slate-950'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Option 4: Interactive Proof-Pop Stats */}
          {selected === 4 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {STATS.map((s, idx) => (
                  <motion.button
                    key={s.label}
                    type="button"
                    onClick={() => setStatNote(idx)}
                    animate={{ rotate: [-1, 1, -1] }}
                    transition={{ duration: 3 + idx * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                    className={`relative p-5 rounded-2xl border-2 border-slate-950 text-center transition-all ${
                      statNote === idx ? 'bg-[#FACC15] shadow-[5px_5px_0px_#0F172A]' : 'bg-[#FAF9F6] shadow-[3px_3px_0px_#0F172A]'
                    }`}
                  >
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-3 h-4 rounded-sm bg-amber-600 border border-amber-950" />
                    <p className="font-mono text-2xl sm:text-3xl font-extrabold">{s.value}</p>
                    <p className="text-xs font-bold text-slate-700 mt-1">{s.label}</p>
                  </motion.button>
                ))}
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 text-[#FACC15] text-xs font-extrabold text-center">
                {[
                  '5,000+ Bhubaneswar orders washed separately across Patia, Jagamara & Khandagiri.',
                  'Rated 4.7★ across Google Play & Apple App Store.',
                  'Standard Wash & Fold <48h • Premium Priority Wash <24h.',
                  'Zero shared drums. Every customer gets an ozone-sanitized solo cycle.',
                ][statNote]}
              </div>
            </div>
          )}

          {/* Heading + Option 1 Toggle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className={`inline-block text-xs font-bold uppercase tracking-[0.18em] mb-2 ${isDark ? 'text-[#FACC15]' : 'text-amber-700'}`}>
                Hygiene Standard
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
                Never mixed. Sanitized before every load.
              </h2>
            </div>

            {selected === 1 && (
              <div className="inline-flex p-1 rounded-full bg-[#FAF9F6] border-2 border-slate-950 shadow-[4px_4px_0px_#0F172A]">
                <button
                  type="button"
                  onClick={() => setShowRisk(true)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold ${showRisk ? 'bg-rose-500 text-white' : 'text-slate-700'}`}
                >
                  <AlertTriangle className="w-3.5 h-3.5 inline mr-1" /> Mixed Dhobi
                </button>
                <button
                  type="button"
                  onClick={() => setShowRisk(false)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold ${!showRisk ? 'bg-[#FACC15] text-slate-950' : 'text-slate-700'}`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 inline mr-1" /> LaundryRage Solo
                </button>
              </div>
            )}
          </div>

          {/* Main Interactive Area */}
          {selected === 1 && showRisk ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { t: 'Shared Mystery Drums', d: 'Clothes batched with strangers in one tub.' },
                { t: 'Harsh Soda & Bleach', d: 'Cheap detergents fade colors and damage collars.' },
                { t: 'Untreated Hard Water', d: 'Leaves mineral dullness and musty odor.' },
              ].map((r) => (
                <div key={r.t} className="p-6 rounded-3xl bg-rose-50 border-2 border-slate-950 shadow-[5px_5px_0px_#0F172A]">
                  <AlertTriangle className="w-6 h-6 text-rose-600 mb-2" />
                  <h3 className="text-lg font-extrabold font-display text-slate-950">{r.t}</h3>
                  <p className="text-xs text-slate-700 mt-1">{r.d}</p>
                </div>
              ))}
            </div>
          ) : selected === 8 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {HYGIENE_CHAPTERS.map((chap, idx) => (
                <motion.div
                  key={chap.id}
                  onClick={() => setActiveChap(idx)}
                  animate={{ rotate: idx % 2 === 0 ? [-0.8, 0.8, -0.8] : [0.8, -0.8, 0.8], scale: activeChap === idx ? 1.03 : 0.98 }}
                  transition={{ rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
                  className={`relative p-5 rounded-3xl border-2 border-slate-950 cursor-pointer ${
                    activeChap === idx ? 'bg-[#FACC15] shadow-[6px_6px_0px_#0F172A]' : 'bg-[#FAF9F6] shadow-[3px_3px_0px_#0F172A]'
                  }`}
                >
                  <span className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-3.5 h-5 rounded-sm bg-amber-600 border border-amber-950" />
                  <img src={chap.img} alt={chap.title} className="w-full h-40 object-cover rounded-2xl border-2 border-slate-950 mb-4" />
                  <span className="text-xs font-extrabold uppercase text-amber-900">{chap.tag}</span>
                  <h3 className="text-base font-extrabold font-display mt-1">{chap.title}</h3>
                  <p className="text-xs text-slate-800 mt-2">{chap.desc}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-3">
                {selected === 2 ? (
                  <div className="flex flex-col items-center py-4">
                    <motion.button
                      type="button"
                      onClick={() => setActiveChap((c) => (c + 1) % HYGIENE_CHAPTERS.length)}
                      animate={{ rotate: activeChap * 120 }}
                      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                      className="w-48 h-48 rounded-full bg-slate-950 border-4 border-[#FACC15] shadow-[6px_6px_0px_#0F172A] text-white flex flex-col items-center justify-center p-4 cursor-pointer"
                    >
                      <RotateCw className="w-7 h-7 text-[#FACC15] mb-1" />
                      <span className="text-xs font-extrabold text-[#FACC15]">{chapter.tag}</span>
                      <span className="text-xs font-bold mt-1 text-center">Click to Spin Stage</span>
                    </motion.button>
                  </div>
                ) : (
                  HYGIENE_CHAPTERS.map((chap, idx) => (
                    <button
                      key={chap.id}
                      type="button"
                      onClick={() => setActiveChap(idx)}
                      className={`w-full text-left p-5 rounded-2xl border-2 transition-all relative overflow-hidden ${
                        activeChap === idx
                          ? 'bg-[#FACC15] text-slate-950 border-slate-950 shadow-[4px_4px_0px_#0F172A]'
                          : isDark
                          ? 'bg-slate-900 text-white border-slate-700'
                          : 'bg-white text-slate-950 border-gray-200 hover:border-slate-950'
                      }`}
                    >
                      {selected === 6 && activeChap === idx && (
                        <motion.span
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 3, ease: 'linear' }}
                          className="absolute bottom-0 left-0 h-1 bg-slate-950"
                        />
                      )}
                      <span className={`text-xs font-bold uppercase ${activeChap === idx ? 'text-amber-900' : 'text-amber-600'}`}>
                        {chap.tag}
                      </span>
                      <h3 className="text-lg font-extrabold font-display mt-1">{chap.title}</h3>
                    </button>
                  ))
                )}

                {/* Option 3: Live Temp & RO Bar */}
                {selected === 3 && (
                  <div className="p-4 rounded-2xl bg-sky-50 border-2 border-slate-950 space-y-2">
                    <div className="flex items-center justify-between text-xs font-extrabold text-sky-950">
                      <span className="inline-flex items-center gap-1"><Droplets className="w-4 h-4" /> {['60°C Ozone', '40°C Enzyme', '115°C Steam'][activeChap]}</span>
                      <span>RO Purity: 100%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-white border border-slate-950 overflow-hidden">
                      <motion.div
                        animate={{ width: `${(activeChap + 1) * 33.3}%` }}
                        className="h-full bg-sky-500"
                      />
                    </div>
                  </div>
                )}

                {/* Option 10: Interactive 3-Point Checklist */}
                {selected === 10 && (
                  <div className="p-4 rounded-2xl bg-[#FAF9F6] border-2 border-slate-950 space-y-2">
                    <p className="text-xs font-extrabold uppercase text-amber-800">Verify All 3 Standards:</p>
                    {['Ozone Sanitized Drum', 'Bio-Enzyme RO Wash', 'Zero-Scorch Steam Press'].map((item, i) => (
                      <label key={item} className="flex items-center gap-2 text-xs font-bold cursor-pointer">
                        <input
                          type="checkbox"
                          checked={checked[i]}
                          onChange={() => setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)))}
                          className="accent-[#FACC15] w-4 h-4"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                    {checked.every(Boolean) && (
                      <div className="px-3 py-1.5 rounded-xl bg-emerald-400 border border-slate-950 text-xs font-extrabold text-slate-950">
                        ✓ 100% Solo-Drum Verified!
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column Card */}
              <motion.div
                onClick={() => selected === 5 && setSteamKey((k) => k + 1)}
                animate={{ rotate: [-0.6, 0.6, -0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: 'top center' }}
                className={`relative lg:col-span-7 rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-2 ${
                  isDark
                    ? 'bg-slate-900 border-[#FACC15] shadow-[6px_6px_0px_#FACC15]'
                    : 'bg-[#FAF9F6] border-slate-950 shadow-[6px_6px_0px_#0F172A]'
                } ${selected === 5 ? 'cursor-pointer overflow-hidden' : ''}`}
              >
                <span className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-3.5 h-5 rounded-sm bg-amber-600 border border-amber-950 z-20" />
                {selected === 5 && (
                  <motion.div
                    key={steamKey}
                    initial={{ x: '-120%' }}
                    animate={{ x: '150%' }}
                    transition={{ duration: 1.1, ease: 'easeInOut' }}
                    className="absolute inset-y-0 w-36 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12 pointer-events-none z-20"
                  />
                )}
                <div className="md:col-span-6 relative">
                  <img
                    src={chapter.img}
                    alt={chapter.title}
                    className="w-full aspect-[4/3] object-cover rounded-2xl border-2 border-slate-950"
                  />
                  {selected === 5 && (
                    <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-extrabold text-amber-700">
                      <Sparkles className="w-3.5 h-3.5" /> Click card for Steam-Sweep!
                    </span>
                  )}
                  {selected === 7 && (
                    <div className="mt-3 space-y-1">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderPos}
                        onChange={(e) => setSliderPos(Number(e.target.value))}
                        className="w-full accent-[#FACC15]"
                      />
                      <p className="text-[11px] font-extrabold text-slate-700">
                        Solo-Drum Hygiene Score: {sliderPos}% vs Mixed Dhobi ({100 - sliderPos}%)
                      </p>
                    </div>
                  )}
                </div>
                <div className="md:col-span-6 space-y-4">
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                    {chapter.desc}
                  </p>
                  <ul className="space-y-2">
                    {chapter.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-xs font-bold">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Selector Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => {
                setSelected(opt.id);
                setShowRisk(false);
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
