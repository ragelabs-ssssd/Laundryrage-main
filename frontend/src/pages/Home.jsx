import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Star,
  ArrowRight,
} from 'lucide-react';
import {
  REVIEWS,
} from '../data/brandData';
import { QRModal } from '../components/SharedUI';
import HeroShowcase from '../components/HeroOptions';
import HowItWorksShowcase from '../components/HowItWorksOptions';
import ReferralBannerShowcase from '../components/ReferralOptions';
import StatsStripShowcase from '../components/StatsStripOptions';
import HygieneShowcase from '../components/HygieneOptions';
import ServicesShowcase from '../components/ServicesOptions';
import FAQShowcase from '../components/FAQOptions';

const Clothespin = () => (
  <span
    aria-hidden="true"
    className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-3.5 h-5 rounded-sm bg-amber-600 border border-amber-900/40 shadow-sm z-20"
  />
);

const Home = () => {
  const [qrOpen, setQrOpen] = useState(false);

  const vibe = 5;
  const hasPins = true;
  const isSpin = false;
  const isArcade = true;
  const isCareLabel = false;

  const cardSurfaceCls = 'border-2 border-slate-950 shadow-[6px_6px_0px_#0F172A]';

  return (
    <div id="top" className="bg-white text-gray-950 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <HeroShowcase onOpenQR={() => setQrOpen(true)} />

      {/* 2. STATS STRIP (Option 7 Hanging Clothespin Badges locked in) */}
      <StatsStripShowcase />

      {/* 3. HYGIENE CHAPTERS */}
      <HygieneShowcase />

      {/* 4. SERVICES */}
      <ServicesShowcase onOpenQR={() => setQrOpen(true)} />

      {/* 5. HOW IT WORKS */}
      <HowItWorksShowcase vibe={vibe} />

      {/* 6. CUSTOMER REVIEWS */}
      <section className="py-24 md:py-32 bg-white border-t border-gray-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-none mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-amber-700 mb-3">
              Trusted Across Bhubaneswar
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] lg:whitespace-nowrap font-extrabold font-display leading-[1.15] tracking-tight text-gray-950">
              Loved by busy professionals, families, and students.
            </h2>
          </div>

          <div className="relative pt-3">
            {hasPins && (
              <div className="hidden md:block absolute top-3 inset-x-10 h-0.5 bg-slate-300 z-0" />
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {REVIEWS.map((rev, idx) => (
                <motion.div
                  key={rev.name}
                  animate={
                    hasPins
                      ? { rotate: idx === 1 ? [1, -1, 1] : [-1, 1, -1] }
                      : isSpin
                      ? { y: [0, -5, 0] }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{
                    duration: 3.4 + idx * 0.5,
                    repeat: hasPins || isSpin ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                  whileHover={{ y: -6 }}
                  style={hasPins ? { transformOrigin: 'top center' } : undefined}
                  className={`relative p-7 rounded-3xl bg-[#FAF9F6] flex flex-col justify-between ${cardSurfaceCls}`}
                >
                  {hasPins && <Clothespin />}

                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-6">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-gray-950">{rev.name}</p>
                    <p className="text-xs text-gray-500">
                      {rev.role} • {rev.area}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. REFERRAL BANNER */}
      <section className="py-16 md:py-20 bg-[#FAF9F6] border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReferralBannerShowcase onInvite={() => setQrOpen(true)} />
        </div>
      </section>

      {/* 7B. FOR BUSINESS (B2B) */}
      <section id="business" className="py-20 md:py-24 bg-[#0F172A] text-white border-t-4 border-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FACC15] text-slate-950 text-xs font-extrabold uppercase tracking-wider mb-3">
                B2B Bulk &amp; Commercial Care
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
                LaundryRage for Hotels, Salons, Gyms &amp; PGs.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Dedicated morning bulk pickups across Bhubaneswar with sanitized high-temperature cycles, crisp linen finishing, and monthly GST invoicing.
              </p>
            </div>
            <a
              href="https://wa.me/919937032631?text=Hi%20LaundryRage!%20We%20want%20a%20B2B%20commercial%20laundry%20quote."
              target="_blank"
              rel="noreferrer"
              className="self-start lg:self-auto px-6 py-3.5 rounded-xl bg-[#FACC15] hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-extrabold border-2 border-white shadow-[4px_4px_0px_#FFFFFF] inline-flex items-center gap-2 transition-colors"
            >
              <span>Request B2B Quote on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Boutique Hotels & Airbnbs',
                desc: 'Crisp bedsheets, pillowcases, duvet covers, and guest bath towels with scheduled turnover.',
                tag: 'Linen & Bedding',
              },
              {
                title: 'Salons, Spas & Gyms',
                desc: 'High-temperature ozone-sanitized towel cycles with bio-enzyme stain & oil removal.',
                tag: 'Sanitized Towels',
              },
              {
                title: 'Hostels, PGs & Clinics',
                desc: 'Bulk student & staff laundry bundles with dedicated pickup windows and GST billing.',
                tag: 'Monthly Plans',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-900 rounded-3xl p-6 border-2 border-slate-700 hover:border-[#FACC15] transition-colors space-y-3"
              >
                <span className="inline-block px-2.5 py-1 rounded-full bg-slate-800 text-[#FACC15] text-[11px] font-extrabold uppercase tracking-wider">
                  {item.tag}
                </span>
                <h3 className="text-lg font-extrabold font-display text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <FAQShowcase />

      <QRModal isOpen={qrOpen} onClose={() => setQrOpen(false)} />
    </div>
  );
};

export default Home;
