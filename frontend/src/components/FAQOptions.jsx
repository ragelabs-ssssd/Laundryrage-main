import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FAQS } from '../data/brandData';

const Clothespin = () => (
  <span
    aria-hidden="true"
    className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-3.5 h-5 rounded-sm bg-amber-600 border border-amber-900/40 shadow-sm z-20"
  />
);

export default function FAQShowcase() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white border-t border-gray-200/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-amber-700 mb-3">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold font-display leading-[1.15] tracking-tight text-gray-950">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-3">
            {FAQS.map((faq, idx) => {
              const isActive = openIdx === idx;
              return (
                <button
                  key={faq.q}
                  type="button"
                  onClick={() => setOpenIdx(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 border-slate-950 transition-all flex items-center gap-3.5 ${
                    isActive
                      ? 'bg-[#FACC15] shadow-[5px_5px_0px_#0F172A] -translate-y-0.5'
                      : 'bg-white hover:bg-[#FAF9F6] shadow-[3px_3px_0px_#0F172A]'
                  }`}
                >
                  <span className="font-mono text-xs font-bold px-2 py-1 rounded-md bg-slate-950 text-[#FACC15] shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="text-sm font-extrabold text-slate-950">{faq.q}</span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-6 relative pt-3">
            <motion.div
              key={openIdx}
              initial={{ opacity: 0.7, rotate: -1.5 }}
              animate={{ opacity: 1, rotate: [-0.8, 0.8, -0.8] }}
              transition={{
                opacity: { duration: 0.2 },
                rotate: { duration: 3.8, repeat: Infinity, ease: 'easeInOut' },
              }}
              style={{ transformOrigin: 'top center' }}
              className="relative rounded-3xl bg-[#0F172A] text-white p-8 border-2 border-slate-950 shadow-[8px_8px_0px_#FACC15] space-y-5"
            >
              <Clothespin />
              <span className="inline-block px-3 py-1 rounded-full bg-[#FACC15] text-slate-950 font-mono text-xs font-bold">
                ANSWER 0{openIdx + 1}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold font-display leading-snug text-white">
                {FAQS[openIdx].q}
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {FAQS[openIdx].a}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
