import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Smartphone, Tag, Droplets, PackageCheck, ArrowRight, RotateCw, CheckCircle2 } from 'lucide-react';
import { STEPS } from '../data/brandData';

const STEP_META = [
  { time: '15 sec', icon: Smartphone, note: 'App Slot Booked' },
  { time: '2 min', icon: Tag, note: 'Doorstep Weigh-In' },
  { time: 'Solo Cycle', icon: Droplets, note: '60°C Ozone + RO' },
  { time: '<48h / <24h VIP', icon: PackageCheck, note: 'Wardrobe Ready' },
];

const OPTIONS = [
  { id: 1, title: 'Interactive "Simulate Pickup" Stepper', desc: 'Click "Next Step →" or any card to advance the live pickup progress bar.' },
  { id: 2, title: 'Spin-the-Cycle Drum Dial', desc: 'Rotary washing-drum dial rotates 90° per step as you walk through the flow.' },
  { id: 3, title: 'Hover-Reveal Hub & Telemetry Badges', desc: 'Hovering any step reveals extra Bhubaneswar hub & quality details.' },
  { id: 4, title: 'Auto-Playing Conveyor Belt', desc: 'Highlights steps 01→04 automatically every 2.5s like a laundry conveyor.' },
  { id: 5, title: 'Interactive Bag Checklist', desc: 'Check off all 4 steps to unlock a "4.5 hrs/week Reclaimed!" badge.' },
  { id: 6, title: 'Springy Tilt Clothespin Cards', desc: 'Enhanced playful hover lift and clothespin sway on the 4 bento cards.' },
  { id: 7, title: 'Steam-Sweep Active Card', desc: 'Warm white steam wave sweeps across the active step card.' },
  { id: 8, title: 'Standard (<48h) vs Priority (<24h) Toggle', desc: 'Flip Step 04 between Standard <48h and Priority Wash <24h VIP.' },
  { id: 9, title: 'Dark Obsidian Dispatch Mode', desc: '#0F172A dark backdrop with #FACC15 active step framing.' },
  { id: 10, title: '15s Slot-Picker Inside Step 01', desc: 'Click quick Bhubaneswar pickup slots right inside Step 01.' },
];

export default function StepsPreview() {
  const [selected, setSelected] = useState(1);
  const [activeStep, setActiveStep] = useState(0);
  const [doneSteps, setDoneSteps] = useState([true, true, false, false]);
  const [vipMode, setVipMode] = useState(true);
  const [slot, setSlot] = useState('8:30 AM • Jagamara');

  useEffect(() => {
    if (selected !== 4) return;
    const t = setInterval(() => setActiveStep((s) => (s + 1) % STEPS.length), 2400);
    return () => clearInterval(t);
  }, [selected]);

  const isDark = selected === 9;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-950">
      <div className="bg-slate-950 text-white px-4 sm:px-8 py-3 flex items-center justify-between">
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
          How It Works — 10 Interactive Options
        </span>
        <Link to="/" className="px-3.5 py-1.5 rounded-lg bg-[#FACC15] text-slate-950 text-xs font-extrabold">
          ← Back to Main Site
        </Link>
      </div>

      {/* Live Preview Section */}
      <section className={`py-14 md:py-20 border-b-4 border-slate-950 transition-colors ${isDark ? 'bg-[#0F172A] text-white' : 'bg-white text-slate-950'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className={`inline-block text-xs font-bold uppercase tracking-[0.18em] ${isDark ? 'text-[#FACC15]' : 'text-amber-700'}`}>
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
              From hamper to crisp wardrobe in four calm steps.
            </h2>

            {selected === 1 && (
              <div className="pt-2 flex flex-col items-center gap-3">
                <div className="w-full max-w-md h-2.5 rounded-full bg-slate-200 border border-slate-950 overflow-hidden">
                  <motion.div
                    animate={{ width: `${((activeStep + 1) / 4) * 100}%` }}
                    className="h-full bg-[#FACC15]"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setActiveStep((s) => (s + 1) % 4)}
                  className="px-4 py-2 rounded-xl bg-slate-950 text-[#FACC15] text-xs font-extrabold inline-flex items-center gap-1.5"
                >
                  Simulate Next Step (Step 0{activeStep + 1}) <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {selected === 2 && (
              <div className="pt-2 flex justify-center">
                <motion.button
                  type="button"
                  onClick={() => setActiveStep((s) => (s + 1) % 4)}
                  animate={{ rotate: activeStep * 90 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                  className="w-24 h-24 rounded-full bg-slate-950 border-4 border-[#FACC15] text-[#FACC15] flex flex-col items-center justify-center cursor-pointer shadow-md"
                >
                  <RotateCw className="w-5 h-5 mb-0.5" />
                  <span className="text-[11px] font-extrabold">STEP 0{activeStep + 1}</span>
                </motion.button>
              </div>
            )}

            {selected === 8 && (
              <div className="pt-2 inline-flex p-1 rounded-full bg-[#FAF9F6] border-2 border-slate-950">
                <button
                  type="button"
                  onClick={() => setVipMode(false)}
                  className={`px-4 py-1.5 rounded-full text-xs font-extrabold ${!vipMode ? 'bg-[#FACC15] text-slate-950' : 'text-slate-700'}`}
                >
                  Standard (&lt;48h)
                </button>
                <button
                  type="button"
                  onClick={() => setVipMode(true)}
                  className={`px-4 py-1.5 rounded-full text-xs font-extrabold ${vipMode ? 'bg-slate-950 text-[#FACC15]' : 'text-slate-700'}`}
                >
                  Priority Wash (&lt;24h VIP)
                </button>
              </div>
            )}
          </div>

          <div className="relative pt-2">
            <div className="hidden md:block absolute top-2 inset-x-10 h-0.5 bg-slate-300 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 relative z-10">
              {STEPS.map((item, idx) => {
                const Icon = STEP_META[idx].icon;
                const wide = idx === 0 || idx === 3;
                const isActive = activeStep === idx;
                const cardDark = idx === 2 || isDark;

                return (
                  <motion.div
                    key={item.step}
                    onClick={() => setActiveStep(idx)}
                    animate={{ rotate: idx % 2 === 0 ? [-0.7, 0.7, -0.7] : [0.7, -0.7, 0.7] }}
                    transition={{ duration: 3.4 + idx * 0.45, repeat: Infinity, ease: 'easeInOut' }}
                    whileHover={selected === 6 ? { y: -10, scale: 1.02 } : { y: -5 }}
                    style={{ transformOrigin: 'top center' }}
                    className={`relative rounded-3xl p-7 flex flex-col justify-between gap-5 border-2 border-slate-950 cursor-pointer overflow-hidden ${
                      wide ? 'md:col-span-7' : 'md:col-span-5'
                    } ${
                      cardDark
                        ? 'bg-gray-950 text-white shadow-[6px_6px_0px_#FACC15]'
                        : idx === 0 || ((selected === 1 || selected === 2 || selected === 4) && isActive)
                        ? 'bg-[#FACC15] text-gray-950 shadow-[6px_6px_0px_#0F172A]'
                        : 'bg-[#FAF9F6] text-gray-950 shadow-[6px_6px_0px_#0F172A]'
                    } ${(selected === 1 || selected === 4) && isActive ? 'ring-4 ring-slate-950' : ''}`}
                  >
                    <span className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-3.5 h-5 rounded-sm bg-amber-600 border border-amber-900/40 shadow-sm" />

                    {selected === 7 && isActive && (
                      <motion.div
                        aria-hidden="true"
                        animate={{ x: ['-120%', '160%'] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute inset-y-0 w-28 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none"
                      />
                    )}

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-white text-slate-950 border border-slate-950 -rotate-2">
                        Step {item.step} • {idx === 3 && selected === 8 ? (vipMode ? '<24h VIP' : '<48h') : STEP_META[idx].time}
                      </span>
                      <Icon className="w-5 h-5 opacity-85" />
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold font-display">{item.title}</h3>
                      <p className={`mt-2 text-sm leading-relaxed ${cardDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {item.desc}
                      </p>

                      {selected === 3 && (
                        <span className="mt-3 inline-block px-2.5 py-1 rounded-lg bg-white/90 border border-slate-950 text-[11px] font-extrabold text-slate-950">
                          {STEP_META[idx].note}
                        </span>
                      )}

                      {selected === 5 && (
                        <label className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold cursor-pointer">
                          <input
                            type="checkbox"
                            checked={doneSteps[idx]}
                            onChange={() => setDoneSteps((prev) => prev.map((v, i) => (i === idx ? !v : v)))}
                            className="accent-slate-950 w-4 h-4"
                          />
                          <span>{doneSteps[idx] ? 'Completed ✓' : 'Mark Done'}</span>
                        </label>
                      )}

                      {selected === 10 && idx === 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {['8:30 AM • Jagamara', '1:30 PM • Khandagiri', '6:00 PM • Patia'].map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSlot(s);
                              }}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold border border-slate-950 ${
                                slot === s ? 'bg-slate-950 text-[#FACC15]' : 'bg-white text-slate-950'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {selected === 5 && doneSteps.every(Boolean) && (
            <div className="mt-6 p-4 rounded-2xl bg-emerald-400 border-2 border-slate-950 text-center text-xs font-extrabold text-slate-950">
              <CheckCircle2 className="w-4 h-4 inline mr-1" /> All 4 steps complete — 4.5 hours of weekend time reclaimed!
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
              onClick={() => setSelected(opt.id)}
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
