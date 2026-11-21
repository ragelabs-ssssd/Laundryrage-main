import React from 'react';
import { REFERRAL } from '../data/brandData';
import { ArrowRight, Coins, Gift, Share2, Users } from 'lucide-react';

export default function ReferralBannerShowcase({ onInvite }) {
  return (
    <div id="download-app-section" className="bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
      <div className="lg:col-span-8 p-8 sm:p-11 flex flex-col justify-between gap-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Gift className="w-3.5 h-3.5" /> {REFERRAL.badge}
          </span>
          <h2
            style={{ fontFamily: "'Sora', sans-serif" }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 leading-tight"
          >
            Refer Roommates &amp; Friends — Earn{' '}
            <span
              style={{ clipPath: 'polygon(0 0, 92% 0, 100% 34%, 100% 100%, 0 100%)' }}
              className="inline-block bg-[#FACC15] px-3 py-0.5 text-slate-950"
            >
              2,000 Coins
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-[15px] text-gray-600 leading-relaxed max-w-xl">
            {REFERRAL.desc}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-bold text-gray-700">
          <span className="inline-flex items-center gap-1.5">
            <Share2 className="w-4 h-4 text-amber-600" /> 1. Share Invite
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="w-4 h-4 text-amber-600" /> 2. Friend Washes
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Coins className="w-4 h-4 text-amber-600" /> 3. Both Get 2,000 Coins
          </span>
        </div>
      </div>

      <div className="lg:col-span-4 bg-[#0A0D14] text-white p-8 sm:p-10 border-t lg:border-t-0 lg:border-l border-dashed border-gray-700 flex flex-col justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
            Instant Wallet Credit
          </span>
          <p className="text-4xl font-black font-display text-white mt-2">2,000 Coins</p>
        </div>
        <button
          type="button"
          onClick={onInvite}
          className="w-full py-3.5 px-5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-gray-950 text-sm font-extrabold transition-colors inline-flex items-center justify-center gap-2"
        >
          Invite Friends on App <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
