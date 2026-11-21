import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../data/brandData';

export default function StatsStripShowcase() {
  return (
    <section className="py-14 bg-white border-y border-gray-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-4">
          <div className="hidden lg:block absolute top-4 inset-x-8 h-0.5 bg-slate-300" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                animate={{ rotate: [-1.2, 1.2, -1.2] }}
                transition={{ duration: 3 + idx * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: 'top center' }}
                className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center mt-2"
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-4 rounded-sm bg-amber-600 border border-amber-800/40 shadow-xs" />
                <p className="font-mono text-3xl sm:text-4xl font-bold text-gray-950">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs sm:text-sm font-semibold text-gray-600">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
