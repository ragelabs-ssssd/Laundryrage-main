import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Tag, Droplets, PackageCheck } from 'lucide-react';
import { STEPS } from '../data/brandData';

const STEP_META = [
  { time: '15 sec', icon: Smartphone },
  { time: '2 min', icon: Tag },
  { time: 'Solo Cycle', icon: Droplets },
  { time: '<24 hrs', icon: PackageCheck },
];

export default function HowItWorksShowcase() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-none mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-amber-700 mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:whitespace-nowrap font-extrabold font-display leading-[1.15] tracking-tight text-gray-950">
            From hamper to crisp wardrobe in four calm steps.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1 inset-x-10 h-0.5 bg-slate-300 z-0" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 relative z-10">
            {STEPS.map((item, idx) => {
              const Icon = STEP_META[idx].icon;
              const wide = idx === 0 || idx === 3;
              const dark = idx === 2;
              return (
                <motion.div
                  key={item.step}
                  animate={{ rotate: idx % 2 === 0 ? [-0.7, 0.7, -0.7] : [0.7, -0.7, 0.7] }}
                  transition={{ duration: 3.4 + idx * 0.45, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  style={{ transformOrigin: 'top center' }}
                  className={`relative rounded-3xl p-8 flex flex-col justify-between gap-6 border-2 border-slate-950 shadow-[6px_6px_0px_#0F172A] ${
                    wide ? 'md:col-span-7' : 'md:col-span-5'
                  } ${
                    dark
                      ? 'bg-gray-950 text-white'
                      : idx === 0
                      ? 'bg-[#FACC15] text-gray-950'
                      : 'bg-[#FAF9F6] text-gray-950'
                  }`}
                >
                  <span className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-3.5 h-5 rounded-sm bg-amber-600 border border-amber-900/40 shadow-sm" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-white text-slate-950 border border-slate-950 -rotate-2">
                      Step {item.step} • {STEP_META[idx].time}
                    </span>
                    <Icon className="w-5 h-5 opacity-85" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold font-display">{item.title}</h3>
                    <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
