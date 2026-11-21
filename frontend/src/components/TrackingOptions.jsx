import React, { useState } from 'react';
import { BRAND } from '../data/brandData';
import { StoreButtons } from './SharedUI';
import {
  Check,
  Clock,
  Droplets,
  ShieldCheck,
  Star,
  X,
} from 'lucide-react';

const OPTIONS = [
  { id: 1, name: 'Us vs Local Wash' },
  { id: 2, name: 'Fabric Care Guide' },
  { id: 3, name: 'Time Saved' },
  { id: 4, name: 'Jagamara Studio' },
  { id: 5, name: '3 Bold Pillars' },
  { id: 6, name: 'Stain Rescue' },
  { id: 7, name: 'App + QR Spotlight' },
];

const FABRICS = [
  {
    name: 'Everyday Cotton',
    temp: '30°C Cool RO',
    detergent: 'Bio-Enzyme Gentle',
    finish: 'Crisp Fold',
    note: 'Prevents shrinking and color fade while lifting everyday Bhubaneswar dust and sweat.',
  },
  {
    name: 'Office Formals',
    temp: '30°C Delicate',
    detergent: 'Color-Lock Care',
    finish: 'Pressurized Steam',
    note: 'Collar and cuff pre-treatment followed by wrinkle-free hanger or flat steam finish.',
  },
  {
    name: 'Gym & Activewear',
    temp: '40°C Sanitize',
    detergent: 'Odor-Neutralizing',
    finish: 'Low-Heat Air Dry',
    note: 'Breaks down trapped sweat bacteria in dry-fit synthetics without damaging elasticity.',
  },
  {
    name: 'Bedsheets & Towels',
    temp: '60°C Hygienic',
    detergent: 'Deep Linen Wash',
    finish: 'Fluff & Fold',
    note: 'High-temp solo-drum sanitize for hotel-fresh, allergen-free bedding.',
  },
];

const HOUSEHOLDS = [
  { label: 'Solo / Hostel', loads: '1 load / wk', hoursYr: '130 hrs', waterSaved: '1,800 L' },
  { label: 'Couple', loads: '2 loads / wk', hoursYr: '210 hrs', waterSaved: '3,400 L' },
  { label: 'Family of 4', loads: '3+ loads / wk', hoursYr: '340 hrs', waterSaved: '5,200 L' },
];

const STAINS = [
  {
    name: 'Coffee & Tea',
    method: 'Cold RO Tannin Flush',
    result: 'Zero yellowing on white & pastel shirts',
  },
  {
    name: 'Collar & Sweat',
    method: 'Targeted Bio-Enzyme Pre-Treat',
    result: 'Lifts protein buildup without harsh bleach',
  },
  {
    name: 'Street Dust & Mud',
    method: 'Double-Rinse Soft Water Cycle',
    result: 'Deep fiber lift without fabric abrasion',
  },
  {
    name: 'Food & Curry Oil',
    method: 'Plant-Based Surfactant Spot Care',
    result: 'Safe on cottons, linens, and everyday wear',
  },
];

export default function TrackingShowcase() {
  const [opt, setOpt] = useState(1);
  const [fabricIdx, setFabricIdx] = useState(0);
  const [houseIdx, setHouseIdx] = useState(0);
  const [stainIdx, setStainIdx] = useState(0);

  const fabric = FABRICS[fabricIdx];
  const house = HOUSEHOLDS[houseIdx];
  const stain = STAINS[stainIdx];

  return (
    <div className="space-y-4">
      {/* Compact Preview Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1">
        <span className="text-xs font-semibold text-gray-500">
          Section Idea ({opt}/7):{' '}
          <strong className="text-gray-950">{OPTIONS.find((o) => o.id === opt)?.name}</strong>
        </span>
        <div className="flex flex-wrap gap-1.5">
          {OPTIONS.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => setOpt(o.id)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                opt === o.id
                  ? 'bg-gray-950 text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-400'
              }`}
            >
              {o.id}. {o.name}
            </button>
          ))}
        </div>
      </div>

      {/* OPTION 1: Us vs Local Wash Comparison */}
      {opt === 1 && (
        <div className="bg-white rounded-[32px] border border-gray-200 p-7 sm:p-12 shadow-sm">
          <div className="max-w-2xl mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-amber-700 mb-2">
              Why Switch
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-950">
              Not all laundry is washed the same.
            </h3>
          </div>

          <div className="divide-y divide-gray-100 border-t border-gray-100 text-sm">
            <div className="py-3 grid grid-cols-12 gap-4 text-xs font-bold uppercase tracking-wider text-gray-400">
              <span className="col-span-4">Standard</span>
              <span className="col-span-4">Local Dhobi / Shared</span>
              <span className="col-span-4 text-gray-950">LaundryRage</span>
            </div>
            {[
              ['Drum Hygiene', 'Mixed with strangers’ loads', '100% Solo Stainless Drum'],
              ['Water Quality', 'Hard borewell water', 'RO-Softened Fresh Water'],
              ['Turnaround', '3–4 unpredictable days', 'Under 24 Hours Guaranteed'],
              ['Pressing', 'Heavy iron scorching risk', 'Gentle Pressurized Steam'],
              ['Pricing', 'Ad-hoc & cash only', 'Transparent In-App + UPI'],
            ].map(([label, bad, good]) => (
              <div key={label} className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center">
                <span className="sm:col-span-4 font-bold text-gray-950">{label}</span>
                <span className="sm:col-span-4 inline-flex items-center gap-1.5 text-gray-500">
                  <X className="w-4 h-4 text-rose-400 shrink-0" /> {bad}
                </span>
                <span className="sm:col-span-4 inline-flex items-center gap-1.5 font-semibold text-gray-950">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" /> {good}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* OPTION 2: Interactive Fabric Care Guide */}
      {opt === 2 && (
        <div className="bg-white rounded-[32px] border border-gray-200 p-7 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
              Fabric Intelligence
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-950">
              Tailored cycle for every fabric.
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Tap a fabric category to see the exact wash temperature, detergent, and steam finish
              used at our Jagamara hub.
            </p>
            <div className="flex flex-wrap gap-2">
              {FABRICS.map((f, i) => (
                <button
                  key={f.name}
                  type="button"
                  onClick={() => setFabricIdx(i)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                    i === fabricIdx
                      ? 'bg-gray-950 text-white'
                      : 'bg-[#FAF9F6] border border-gray-200 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {f.name}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#0A0D14] text-white rounded-3xl p-7 sm:p-9 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold font-display">{fabric.name}</span>
              <span className="px-3 py-1 rounded-full bg-yellow-400 text-gray-950 text-xs font-extrabold">
                {fabric.temp}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10 text-sm">
              <div>
                <span className="text-xs text-gray-400 block">Detergent</span>
                <span className="font-bold text-white">{fabric.detergent}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Finish</span>
                <span className="font-bold text-white">{fabric.finish}</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">{fabric.note}</p>
          </div>
        </div>
      )}

      {/* OPTION 3: Time & Water Saved Calculator */}
      {opt === 3 && (
        <div className="bg-white rounded-[32px] border border-gray-200 p-7 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
              Reclaim Your Weekends
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-950">
              See how many hours you get back every year.
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {HOUSEHOLDS.map((h, i) => (
                <button
                  key={h.label}
                  type="button"
                  onClick={() => setHouseIdx(i)}
                  className={`px-4 py-2.5 rounded-full text-sm font-bold transition-colors ${
                    i === houseIdx
                      ? 'bg-gray-950 text-white'
                      : 'bg-[#FAF9F6] border border-gray-200 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {h.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500">Based on {house.loads} of sorting, washing, drying, and ironing.</p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-7 rounded-3xl bg-yellow-400 text-gray-950">
              <Clock className="w-5 h-5 mb-4" />
              <p className="text-3xl sm:text-4xl font-black font-display">{house.hoursYr}</p>
              <p className="text-xs font-bold mt-1">Saved every year</p>
            </div>
            <div className="p-7 rounded-3xl bg-gray-950 text-white">
              <Droplets className="w-5 h-5 text-yellow-400 mb-4" />
              <p className="text-3xl sm:text-4xl font-black font-display">{house.waterSaved}</p>
              <p className="text-xs text-gray-300 mt-1">Water saved vs home wash</p>
            </div>
          </div>
        </div>
      )}

      {/* OPTION 4: Inside Our Jagamara Care Studio */}
      {opt === 4 && (
        <div className="bg-white rounded-[32px] border border-gray-200 p-7 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
              Inside Our Facility
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-950 leading-tight">
              Built for Bhubaneswar’s climate and water.
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Hard water and humid monsoons ruin good clothes. Our Jagamara studio runs on
              multi-stage RO water and temperature-controlled steam dryers.
            </p>
            <div className="space-y-2.5 text-sm font-semibold text-gray-800">
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Hospital-grade drum sanitization
              </p>
              <p className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-emerald-600" /> 100% RO-softened wash cycles
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Zero-bleach enzymatic spot care
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <img
              src="/images/steam-ironing.jpg"
              alt="Steam Finishing"
              className="rounded-3xl aspect-[3/4] object-cover w-full"
            />
            <img
              src="/images/priority-care.jpg"
              alt="Priority Care"
              className="rounded-3xl aspect-[3/4] object-cover w-full translate-y-4"
            />
          </div>
        </div>
      )}

      {/* OPTION 5: 3 Bold Pillars (Dark Obsidian) */}
      {opt === 5 && (
        <div className="bg-[#0A0D14] text-white rounded-[32px] p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              {
                num: '100%',
                title: 'Solo-Drum Wash',
                desc: 'Your laundry is never mixed with another household’s clothes. Ever.',
              },
              {
                num: '<24h',
                title: 'Express Delivery',
                desc: 'Doorstep pickup and crisp folded or steamed return by the next day.',
              },
              {
                num: '₹0',
                title: 'Hidden Pickup Fees',
                desc: 'Transparent per-kg and per-piece rates right inside the mobile app.',
              },
            ].map((item, i) => (
              <div key={item.title} className={i > 0 ? 'pt-6 md:pt-0 md:pl-8' : ''}>
                <span className="text-4xl sm:text-5xl font-black font-display text-yellow-400">
                  {item.num}
                </span>
                <h4 className="mt-3 text-lg font-bold text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* OPTION 6: Interactive Stain & Odor Rescue */}
      {opt === 6 && (
        <div className="bg-white rounded-[32px] border border-gray-200 p-7 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
              Stain Rescue
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-950">
              Gentle on fibers. Ruthless on stains.
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {STAINS.map((s, i) => (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => setStainIdx(i)}
                  className={`p-3.5 rounded-2xl border text-left text-sm font-bold transition-all ${
                    i === stainIdx
                      ? 'bg-gray-950 text-white border-gray-950'
                      : 'bg-[#FAF9F6] text-gray-800 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#FAF9F6] rounded-3xl border border-gray-200 p-7 sm:p-9 space-y-4">
            <span className="px-3 py-1 rounded-full bg-yellow-400 text-gray-950 text-xs font-extrabold">
              {stain.name}
            </span>
            <h4 className="text-xl font-bold font-display text-gray-950">{stain.method}</h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{stain.result}</p>
          </div>
        </div>
      )}

      {/* OPTION 7: App + QR Spotlight */}
      {opt === 7 && (
        <div className="bg-white rounded-[32px] border border-gray-200 p-7 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> 4.7 Rated in
              Bhubaneswar
            </div>
            <h3 className="text-2xl sm:text-4xl font-black font-display text-gray-950 leading-tight">
              Book a pickup in 15 seconds on iOS &amp; Android.
            </h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed">
              Get Flat 50% OFF (up to ₹50) automatically applied on your first app order.
            </p>
            <div className="flex flex-wrap items-center gap-5 pt-1">
              <StoreButtons variant="dark" size="sm" />
              <img
                src={BRAND.qrImage}
                alt="QR"
                className="w-16 h-16 rounded-xl border border-gray-200 p-1 object-contain"
              />
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <img
              src="/mockup-ios-removebg.png"
              alt="LaundryRage App"
              className="w-44 sm:w-52 drop-shadow-2xl select-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}
