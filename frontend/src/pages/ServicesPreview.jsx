import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, Tag, Zap, Plus, Minus } from 'lucide-react';
import { SERVICES } from '../data/brandData';

const OPTIONS = [
  { id: 1, title: 'Turnaround Filter Pills (<48h vs <24h VIP)', desc: 'Filter cards live by Standard (<48h), Priority (<24h VIP), or Coming Soon.' },
  { id: 2, title: 'Click-to-Expand Garment Breakdown', desc: 'Click any service card to reveal extra fabric & capacity details.' },
  { id: 3, title: 'FIRST50 (50% OFF) Live Price Slash', desc: 'Toggle FIRST50 to slash ₹69/kg → ₹35/kg and ₹15/pc → ₹8/pc live.' },
  { id: 4, title: 'Mini + / - Bag Counter on Cards', desc: 'Add kg or pieces right on the cards to see an instant ₹ estimate.' },
  { id: 5, title: 'Swaying Clothespin + Steam Glint', desc: 'Cards sway gently from a top wire with a crisp steam-sweep hover effect.' },
  { id: 6, title: 'Standard (<48h) vs VIP (<24h) Switch', desc: 'Interactive speed bar spotlighting Standard vs Priority Wash.' },
  { id: 7, title: '"What Fits in 1 kg?" Chip Toggle', desc: 'Switch 1kg / 3kg / 5kg on Wash & Fold to see exact garment counts.' },
  { id: 8, title: 'Dry Cleaning Inline Waitlist Ping', desc: 'Clicking "Notify Me" on Dry Cleaning opens an inline WhatsApp ping.' },
  { id: 9, title: 'Dark Obsidian Showcase Grid', desc: 'High-contrast #0F172A backdrop with #FACC15 brutalist card borders.' },
  { id: 10, title: 'Interactive Care-Symbol Badges', desc: 'Clickable 40°C / Steam / VIP tags showing quick care notes.' },
  { id: 11, title: 'Spin-Cycle 360° Badge Cards', desc: 'Hovering any card spins its price badge like a front-load drum.' },
  { id: 12, title: '1-Tap Laundry Matcher Quiz', desc: 'Tap "Everyday Tees", "Office Formals", or "Urgent <24h" to spotlight the best match.' },
  { id: 13, title: 'Steam-Mist Sweep on Cards', desc: 'Warm white steam-press wave sweeps across the service photos.' },
  { id: 14, title: 'Floating Soap-Bubble Backdrop', desc: 'Iridescent bubbles float behind the 4 cards and pop on click.' },
  { id: 15, title: 'Live Bhubaneswar Slot Chips', desc: 'Shows next available pickup window (Morning 8–10AM / Evening 6–8PM) per card.' },
  { id: 16, title: 'Dhobi vs LaundryRage Flipper', desc: 'Toggle to compare local dhobi risks vs solo-drum bio-enzyme care.' },
  { id: 17, title: 'Priority <24h Dispatch Countdown', desc: 'Live urgency bar showing same-day Priority Wash cutoff window.' },
  { id: 18, title: 'Folded-Collar Angled Cards', desc: 'Crisp folded-shirt collar corner accents that snap straight on hover.' },
  { id: 19, title: 'Hostel Roommate Split-Cost Pill', desc: 'Shows per-student cost when 3 roommates combine a Wash & Fold bag.' },
  { id: 20, title: '1-Tap WhatsApp Service Prefill', desc: 'Clicking any card CTA opens WhatsApp prefilled with that exact service.' },
];

export default function ServicesPreview() {
  const [selected, setSelected] = useState(1);
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState(0);
  const [first50, setFirst50] = useState(true);
  const [kgCount, setKgCount] = useState(3);
  const [pcCount, setPcCount] = useState(4);
  const [speedMode, setSpeedMode] = useState('vip');
  const [weightTier, setWeightTier] = useState(1);
  const [notified, setNotified] = useState(false);
  const [careNote, setCareNote] = useState('40°C Bio-Enzyme Wash');
  const [quizPick, setQuizPick] = useState('priority-care');
  const [dhobiMode, setDhobiMode] = useState(false);
  const [slot, setSlot] = useState('Morning 8–10AM');
  const [split3, setSplit3] = useState(true);

  const isDark = selected === 9;

  const visibleServices =
    selected === 1 && filter !== 'all'
      ? SERVICES.filter((s) =>
          filter === 'vip' ? s.premium : filter === '48h' ? s.turnaround === '<48h' : s.soon
        )
      : SERVICES;

  const displayPrice = (srv) => {
    if (selected !== 3 || !first50) return srv.price;
    if (srv.id === 'wash-fold') return '₹35 / kg';
    if (srv.id === 'steam-ironing') return '₹8 / pc';
    return srv.price;
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-950">
      <div className="bg-slate-950 text-white px-4 sm:px-8 py-3 flex items-center justify-between">
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
          Services Section — 10 Interactive Options
        </span>
        <Link to="/" className="px-3.5 py-1.5 rounded-lg bg-[#FACC15] text-slate-950 text-xs font-extrabold">
          ← Back to Main Site
        </Link>
      </div>

      {/* Live Preview Section */}
      <section className={`py-14 md:py-20 border-b-4 border-slate-950 transition-colors ${isDark ? 'bg-[#0F172A] text-white' : 'bg-[#FAF9F6] text-slate-950'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className={`inline-block text-xs font-bold uppercase tracking-[0.18em] mb-2 ${isDark ? 'text-[#FACC15]' : 'text-amber-700'}`}>
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
                Transparent per-kg, per-piece &amp; premium 24h care.
              </h2>
            </div>

            {selected === 1 && (
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All (4)' },
                  { id: '48h', label: '<48h Standard' },
                  { id: 'vip', label: '<24h VIP' },
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFilter(f.id)}
                    className={`px-4 py-2 rounded-full text-xs font-extrabold border-2 border-slate-950 ${
                      filter === f.id ? 'bg-[#FACC15] text-slate-950' : 'bg-white text-slate-800'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}

            {selected === 3 && (
              <button
                type="button"
                onClick={() => setFirst50((v) => !v)}
                className={`px-4 py-2.5 rounded-2xl border-2 border-slate-950 text-xs font-extrabold shadow-[4px_4px_0px_#0F172A] ${
                  first50 ? 'bg-[#FACC15] text-slate-950' : 'bg-white text-slate-800'
                }`}
              >
                <Tag className="w-3.5 h-3.5 inline mr-1.5" />
                FIRST50 (50% OFF): {first50 ? 'ON' : 'OFF'}
              </button>
            )}

            {selected === 6 && (
              <div className="inline-flex p-1 rounded-full bg-white border-2 border-slate-950">
                <button
                  type="button"
                  onClick={() => setSpeedMode('48h')}
                  className={`px-4 py-1.5 rounded-full text-xs font-extrabold ${
                    speedMode === '48h' ? 'bg-[#FACC15] text-slate-950' : 'text-slate-700'
                  }`}
                >
                  Standard (&lt;48h)
                </button>
                <button
                  type="button"
                  onClick={() => setSpeedMode('vip')}
                  className={`px-4 py-1.5 rounded-full text-xs font-extrabold ${
                    speedMode === 'vip' ? 'bg-slate-950 text-[#FACC15]' : 'text-slate-700'
                  }`}
                >
                  <Zap className="w-3 h-3 inline mr-1" /> Priority (&lt;24h VIP)
                </button>
              </div>
            )}
          </div>

          {selected === 4 && (
            <div className="mb-8 p-4 rounded-2xl bg-[#FACC15] border-2 border-slate-950 shadow-[4px_4px_0px_#0F172A] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs sm:text-sm font-extrabold text-slate-950">
                Bag Estimate: {kgCount} kg Wash + {pcCount} pcs Iron = ₹{kgCount * 69 + pcCount * 15} (₹
                {Math.round((kgCount * 69 + pcCount * 15) * 0.5)} with FIRST50)
              </span>
              <span className="text-xs font-bold text-slate-900">Adjust counts on the cards below ↓</span>
            </div>
          )}

          {selected === 10 && (
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {['40°C Bio-Enzyme Wash', '115°C Zero-Scorch Steam', '100% Solo Drum', '<24h VIP Express'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setCareNote(tag)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold border-2 border-slate-950 ${
                    careNote === tag ? 'bg-[#FACC15] text-slate-950' : 'bg-white text-slate-800'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          {selected === 12 && (
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {[
                { id: 'wash-fold', label: 'Everyday Tees & Jeans' },
                { id: 'steam-ironing', label: 'Crisp Office Formals' },
                { id: 'priority-care', label: 'Urgent <24h Flight/Meeting' },
                { id: 'dry-cleaning', label: 'Silk Saree & Blazer' },
              ].map((q) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setQuizPick(q.id)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold border-2 border-slate-950 ${
                    quizPick === q.id ? 'bg-[#FACC15] text-slate-950 shadow-[3px_3px_0px_#0F172A]' : 'bg-white text-slate-800'
                  }`}
                >
                  {q.label}
                </button>
              ))}
            </div>
          )}

          {selected === 15 && (
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {['Morning 8–10AM', 'Afternoon 1–3PM', 'Evening 6–8PM'].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSlot(s)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold border-2 border-slate-950 ${
                    slot === s ? 'bg-slate-950 text-[#FACC15]' : 'bg-white text-slate-800'
                  }`}
                >
                  Pickup Slot: {s}
                </button>
              ))}
            </div>
          )}

          {selected === 16 && (
            <div className="mb-6">
              <button
                type="button"
                onClick={() => setDhobiMode((d) => !d)}
                className="px-4 py-2 rounded-full bg-slate-950 text-[#FACC15] text-xs font-extrabold border-2 border-slate-950"
              >
                {dhobiMode ? 'Showing: Local Dhobi Risks (Tap to Switch)' : 'Compare: Local Dhobi vs LaundryRage'}
              </button>
            </div>
          )}

          {selected === 17 && (
            <div className="mb-6 px-4 py-3 rounded-2xl bg-slate-950 text-[#FACC15] text-xs font-extrabold flex items-center justify-between">
              <span>⚡ Priority Wash (&lt;24h): Book within 2h 15m for guaranteed tomorrow return</span>
              <span className="hidden sm:inline px-2.5 py-0.5 rounded-full bg-[#FACC15] text-slate-950">BBSR LIVE</span>
            </div>
          )}

          {selected === 19 && (
            <div className="mb-6">
              <button
                type="button"
                onClick={() => setSplit3((s) => !s)}
                className="px-4 py-2 rounded-full bg-[#FACC15] text-slate-950 text-xs font-extrabold border-2 border-slate-950"
              >
                Hostel Roommate Split (3 Students): {split3 ? 'ON (₹23/kg each)' : 'OFF'}
              </button>
            </div>
          )}

          <div className="relative pt-3">
            {selected === 5 && (
              <div className="hidden lg:block absolute top-3 inset-x-8 h-0.5 bg-slate-300 z-0" />
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {visibleServices.map((srv, idx) => {
                const isPremium = Boolean(srv.premium) || (selected === 6 && speedMode === 'vip' && srv.id === 'priority-care');
                const isHighlighted =
                  (selected === 6 && ((speedMode === '48h' && srv.turnaround === '<48h') || (speedMode === 'vip' && srv.premium))) ||
                  (selected === 12 && quizPick === srv.id);

                return (
                  <motion.div
                    key={srv.id}
                    animate={selected === 5 ? { rotate: idx % 2 === 0 ? [-1, 1, -1] : [1, -1, 1] } : { rotate: 0 }}
                    transition={selected === 5 ? { duration: 3.3 + idx * 0.4, repeat: Infinity, ease: 'easeInOut' } : undefined}
                    whileHover={selected === 11 || selected === 18 ? { y: -8, scale: 1.02 } : undefined}
                    onClick={() => selected === 2 && setExpanded(idx)}
                    style={{
                      ...(selected === 5 ? { transformOrigin: 'top center' } : {}),
                      ...(selected === 18 ? { clipPath: 'polygon(0 0, 92% 0, 100% 10%, 100% 100%, 0 100%)' } : {}),
                    }}
                    className={`relative rounded-3xl p-5 border-2 flex flex-col justify-between gap-4 transition-all overflow-hidden ${
                      selected === 2 ? 'cursor-pointer' : ''
                    } ${
                      isPremium
                        ? 'bg-[#0F172A] text-white border-slate-950 shadow-[6px_6px_0px_#FACC15]'
                        : isDark
                        ? 'bg-slate-900 text-white border-slate-700'
                        : 'bg-white text-slate-950 border-slate-950 shadow-[5px_5px_0px_#0F172A]'
                    } ${isHighlighted ? 'ring-4 ring-[#FACC15]' : ''}`}
                  >
                    {selected === 13 && (
                      <motion.div
                        aria-hidden="true"
                        animate={{ x: ['-120%', '160%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.4, ease: 'easeInOut' }}
                        className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none z-20"
                      />
                    )}
                    {selected === 5 && (
                      <span className="hidden lg:block absolute -top-3 left-1/2 -translate-x-1/2 w-3.5 h-5 rounded-sm bg-amber-600 border border-amber-950" />
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 rounded-full bg-[#FACC15] border border-slate-950 text-[11px] font-extrabold text-slate-950">
                          {displayPrice(srv)}
                        </span>
                        <span className={`text-[11px] font-bold ${isPremium || isDark ? 'text-[#FACC15]' : 'text-slate-500'}`}>
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

                      <h3 className="text-lg font-extrabold font-display">{srv.name}</h3>
                      <p className={`text-xs mt-1.5 leading-relaxed ${isPremium || isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                        {srv.desc}
                      </p>

                      {selected === 7 && srv.id === 'wash-fold' && (
                        <div className="mt-3 p-2.5 rounded-xl bg-[#FAF9F6] border border-slate-950 text-slate-950 space-y-2">
                          <div className="flex gap-1.5">
                            {[1, 3, 5].map((w) => (
                              <button
                                key={w}
                                type="button"
                                onClick={() => setWeightTier(w)}
                                className={`px-2 py-0.5 rounded text-[11px] font-extrabold border border-slate-950 ${
                                  weightTier === w ? 'bg-[#FACC15]' : 'bg-white'
                                }`}
                              >
                                {w}kg
                              </button>
                            ))}
                          </div>
                          <p className="text-[11px] font-bold">
                            ≈ {weightTier * 4}–{weightTier * 5} tees, shirts or kurtas
                          </p>
                        </div>
                      )}

                      {selected === 4 && (srv.id === 'wash-fold' || srv.id === 'steam-ironing') && (
                        <div className="mt-3 flex items-center justify-between p-2 rounded-xl bg-[#FAF9F6] border border-slate-950 text-slate-950">
                          <span className="text-[11px] font-extrabold">
                            {srv.id === 'wash-fold' ? `${kgCount} kg` : `${pcCount} pcs`}
                          </span>
                          <div className="flex gap-1.5">
                            <button
                              type="button"
                              onClick={() =>
                                srv.id === 'wash-fold'
                                  ? setKgCount(Math.max(0, kgCount - 1))
                                  : setPcCount(Math.max(0, pcCount - 1))
                              }
                              className="w-6 h-6 rounded bg-white border border-slate-950 flex items-center justify-center"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                srv.id === 'wash-fold' ? setKgCount(kgCount + 1) : setPcCount(pcCount + 1)
                              }
                              className="w-6 h-6 rounded bg-[#FACC15] border border-slate-950 flex items-center justify-center"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      )}

                      <ul className="space-y-1.5 mt-3">
                        {srv.features.map((f) => (
                          <li key={f} className="flex items-start gap-1.5 text-[11px] font-semibold">
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isPremium ? 'text-[#FACC15]' : 'text-amber-600'}`} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      {selected === 2 && expanded === idx && (
                        <div className="mt-3 p-2.5 rounded-xl bg-[#FACC15] text-slate-950 text-[11px] font-extrabold">
                          <Sparkles className="w-3.5 h-3.5 inline mr-1" />
                          100% RO Water + Sanitized Drum Included
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => selected === 8 && srv.soon && setNotified(true)}
                      className={`w-full py-2.5 rounded-xl text-xs font-extrabold border-2 transition-colors ${
                        isPremium
                          ? 'bg-[#FACC15] text-slate-950 border-[#FACC15]'
                          : 'bg-slate-950 text-white border-slate-950'
                      }`}
                    >
                      {srv.soon
                        ? selected === 8 && notified
                          ? '✓ Added to Early List!'
                          : 'Notify Me'
                        : isPremium
                        ? 'Book Priority Wash'
                        : 'Book in App'}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
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
                setNotified(false);
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
