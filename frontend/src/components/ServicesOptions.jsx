import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/brandData';

export default function ServicesShowcase({ onOpenQR }) {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAF9F6] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-amber-700 mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold font-display leading-[1.15] tracking-tight text-gray-950">
            Transparent per-kg, per-piece &amp; premium 24h care.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv) => {
            const isPremium = Boolean(srv.premium);
            return (
              <div
                key={srv.id}
                className={`rounded-3xl p-5 border-2 flex flex-col justify-between gap-4 ${
                  isPremium
                    ? 'bg-[#0F172A] text-white border-slate-950 shadow-[6px_6px_0px_#FACC15]'
                    : 'bg-white text-slate-950 border-slate-950 shadow-[5px_5px_0px_#0F172A]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    {srv.price ? (
                      <span className="px-3 py-1 rounded-full bg-[#FACC15] border border-slate-950 text-[11px] font-extrabold text-slate-950">
                        {srv.price}
                      </span>
                    ) : (
                      <span />
                    )}
                    <span
                      className={`text-[11px] font-bold ${
                        isPremium ? 'text-[#FACC15]' : 'text-slate-500'
                      }`}
                    >
                      {srv.turnaround}
                    </span>
                  </div>
                  <img
                    src={srv.img}
                    alt={srv.name}
                    className={`w-full h-40 object-cover rounded-2xl border-2 mb-4 ${
                      isPremium ? 'border-[#FACC15]' : 'border-slate-950'
                    }`}
                  />
                  <h3
                    className={`text-lg font-extrabold font-display ${
                      isPremium ? 'text-white' : 'text-slate-950'
                    }`}
                  >
                    {srv.name}
                  </h3>
                  <p
                    className={`text-xs mt-1.5 leading-relaxed ${
                      isPremium ? 'text-slate-300' : 'text-gray-600'
                    }`}
                  >
                    {srv.desc}
                  </p>
                  <ul className="space-y-1.5 mt-3">
                    {srv.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-1.5 text-[11px] font-semibold ${
                          isPremium ? 'text-slate-200' : 'text-slate-700'
                        }`}
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isPremium ? 'text-[#FACC15]' : 'text-amber-600'
                          }`}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={onOpenQR}
                  className={`w-full py-2.5 rounded-xl text-xs font-extrabold border-2 transition-colors ${
                    isPremium
                      ? 'bg-[#FACC15] hover:bg-amber-300 text-slate-950 border-[#FACC15]'
                      : 'bg-slate-950 hover:bg-[#FACC15] text-white hover:text-slate-950 border-slate-950'
                  }`}
                >
                  {srv.soon ? 'Notify Me' : isPremium ? 'Book Priority Wash' : 'Book in App'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
