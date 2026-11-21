import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { HYGIENE_CHAPTERS } from '../data/brandData';

const Clothespin = () => (
  <span
    aria-hidden="true"
    className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-3.5 h-5 rounded-sm bg-amber-600 border border-amber-950/50 shadow-sm z-20"
  />
);

export default function HygieneShowcase() {
  const [activeChapter, setActiveChapter] = useState(0);
  const chapter = HYGIENE_CHAPTERS[activeChapter];

  return (
    <section className="py-24 md:py-32 bg-white border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-amber-700 mb-3">
            Hygiene Standard
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold font-display leading-[1.15] tracking-tight text-gray-950">
            Never mixed. Sanitized before every load.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-3">
            {HYGIENE_CHAPTERS.map((chap, idx) => (
              <motion.button
                key={chap.id}
                type="button"
                onClick={() => setActiveChapter(idx)}
                whileHover={{ x: 4 }}
                className={`w-full text-left p-5 rounded-2xl transition-all ${
                  activeChapter === idx
                    ? 'bg-[#FACC15] border-2 border-slate-950 shadow-[4px_4px_0px_#0F172A]'
                    : 'bg-white border border-gray-200/80 hover:border-gray-300'
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  {chap.tag}
                </span>
                <h3 className="text-lg font-extrabold font-display text-gray-950 mt-1">
                  {chap.title}
                </h3>
              </motion.button>
            ))}
          </div>

          <motion.div
            animate={{ rotate: [-0.6, 0.6, -0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top center' }}
            className="relative lg:col-span-7 bg-[#FAF9F6] rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-2 border-slate-950 shadow-[6px_6px_0px_#0F172A]"
          >
            <Clothespin />
            <div className="md:col-span-6">
              <img
                src={chapter.img}
                alt={chapter.title}
                className="w-full aspect-[4/3] object-cover rounded-2xl border-2 border-slate-950"
              />
            </div>
            <div className="md:col-span-6 space-y-4">
              <p className="text-sm text-gray-700 leading-relaxed">{chapter.desc}</p>
              <ul className="space-y-2">
                {chapter.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-2 text-xs font-bold text-gray-900">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
