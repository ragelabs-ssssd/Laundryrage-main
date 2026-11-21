import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RotateCw, Sparkles, Check, QrCode, X } from 'lucide-react';
import { BRAND } from '../data/brandData';
import { wavyYellowBgStyle } from '../components/BrandMark';

const OPTIONS = [
  { id: 1, title: '50/50 Wavy-Yellow & Obsidian Split', desc: 'Bold dual-tone split modal matching your Hero + Footer brand identity.' },
  { id: 2, title: '3D Flip-Card (Offer Front ↔ QR Back)', desc: 'Click the card to flip 180° in 3D between your FIRST50 pass and the QR.' },
  { id: 3, title: 'Interactive Mini-App Phone Preview', desc: 'Tap Wash & Fold / Priority <24h inside a mini phone screen beside the QR.' },
  { id: 4, title: 'Click-to-Scratch Golden Pass', desc: 'Interactive golden foil layer—click to scratch off and reveal FIRST50 + QR.' },
  { id: 5, title: 'Spin-the-Perk Wheel + QR', desc: 'Spin the yellow/obsidian wheel to land on 50% OFF + 2,000 Coins.' },
  { id: 6, title: 'Keep Original Clean QRModal', desc: 'Keep the clean white QRModal you currently have on the site.' },
];

export default function QRPreview() {
  const [selected, setSelected] = useState(1);
  const [flipped, setFlipped] = useState(false);
  const [appTab, setAppTab] = useState('Priority <24h');
  const [scratched, setScratched] = useState(false);
  const [wheelDeg, setWheelDeg] = useState(0);

  const StoreRow = ({ dark = false }) => (
    <div className="grid grid-cols-2 gap-2.5 w-full">
      <a
        href={BRAND.playStore}
        target="_blank"
        rel="noopener noreferrer"
        className={`py-2.5 px-3 rounded-xl text-xs font-extrabold text-center border-2 border-slate-950 ${
          dark ? 'bg-[#FACC15] text-slate-950' : 'bg-slate-950 text-white'
        }`}
      >
        Google Play
      </a>
      <a
        href={BRAND.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className="py-2.5 px-3 rounded-xl bg-white text-slate-950 border-2 border-slate-950 text-xs font-extrabold text-center"
      >
        App Store
      </a>
    </div>
  );

  const renderPreview = () => {
    if (selected === 1) {
      return (
        <div className="w-full max-w-2xl rounded-3xl border-4 border-slate-950 shadow-[10px_10px_0px_#FACC15] overflow-hidden grid grid-cols-1 sm:grid-cols-2">
          <div style={wavyYellowBgStyle} className="p-8 flex flex-col justify-between gap-6 text-slate-950">
            <div>
              <span className="px-3 py-1 rounded-full bg-white border-2 border-slate-950 text-[11px] font-extrabold">
                FIRST50 • 50% OFF
              </span>
              <h3 className="font-display text-3xl font-extrabold mt-4 leading-tight">
                TAP. WASH. RELAX.
              </h3>
              <p className="text-xs font-bold mt-2">
                100% Solo-Drum • &lt;48h Standard • &lt;24h Priority
              </p>
            </div>
            <StoreRow />
          </div>
          <div className="bg-[#0F172A] text-white p-8 flex flex-col items-center justify-center gap-3">
            <img src={BRAND.qrImage} alt="QR" className="w-44 h-44 rounded-2xl bg-white p-2 border-2 border-[#FACC15]" />
            <span className="text-xs font-bold text-[#FACC15]">Scan with Camera</span>
          </div>
        </div>
      );
    }

    if (selected === 2) {
      return (
        <div className="w-full max-w-sm" style={{ perspective: 1000 }}>
          <motion.div
            onClick={() => setFlipped((f) => !f)}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.55 }}
            className="cursor-pointer rounded-3xl border-2 border-slate-950 shadow-[8px_8px_0px_#FACC15] bg-white p-7 text-center space-y-4"
          >
            {!flipped ? (
              <div className="space-y-4 py-4">
                <span className="px-3 py-1 rounded-full bg-[#FACC15] border border-slate-950 text-xs font-extrabold">
                  Tap Card to Flip ↻
                </span>
                <h3 className="font-display text-3xl font-extrabold">50% OFF</h3>
                <p className="text-sm font-bold text-gray-600">
                  Use code <span className="font-mono text-slate-950">FIRST50</span> on your first Bhubaneswar wash.
                </p>
              </div>
            ) : (
              <div style={{ transform: 'rotateY(180deg)' }} className="space-y-4">
                <span className="text-xs font-extrabold text-amber-700">Tap to Flip Back ↻</span>
                <img src={BRAND.qrImage} alt="QR" className="w-36 h-36 mx-auto rounded-2xl border-2 border-slate-950 p-1.5" />
                <StoreRow />
              </div>
            )}
          </motion.div>
        </div>
      );
    }

    if (selected === 3) {
      return (
        <div className="w-full max-w-xl bg-white rounded-3xl p-6 border-2 border-slate-950 shadow-[8px_8px_0px_#0F172A] grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
          <div className="sm:col-span-6 bg-[#0F172A] text-white rounded-[28px] p-4 border-4 border-slate-800 space-y-3">
            <div className="w-14 h-1.5 rounded-full bg-slate-700 mx-auto" />
            <p className="text-xs font-extrabold text-[#FACC15]">LaundryRage App</p>
            <div className="space-y-1.5">
              {['Wash & Fold (<48h)', 'Steam Iron (<48h)', 'Priority <24h'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setAppTab(t)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold ${
                    appTab === t ? 'bg-[#FACC15] text-slate-950' : 'bg-slate-900 text-slate-300'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-emerald-400 font-bold">Selected: {appTab}</p>
          </div>
          <div className="sm:col-span-6 flex flex-col items-center gap-3 text-center">
            <h3 className="text-lg font-extrabold font-display">Book in the App</h3>
            <img src={BRAND.qrImage} alt="QR" className="w-36 h-36 rounded-2xl border-2 border-slate-950 p-1.5" />
            <StoreRow />
          </div>
        </div>
      );
    }

    if (selected === 4) {
      return (
        <div className="w-full max-w-sm bg-white rounded-3xl p-6 border-2 border-slate-950 shadow-[8px_8px_0px_#0F172A] text-center space-y-4">
          <h3 className="text-xl font-extrabold font-display">Scratch Your Welcome Pass</h3>
          {!scratched ? (
            <button
              type="button"
              onClick={() => setScratched(true)}
              className="w-full py-12 rounded-2xl bg-gradient-to-r from-[#FACC15] via-amber-300 to-[#FACC15] border-2 border-dashed border-slate-950 text-sm font-extrabold text-slate-950 cursor-pointer"
            >
              <Sparkles className="w-6 h-6 mx-auto mb-1" />
              Click to Scratch &amp; Reveal QR
            </button>
          ) : (
            <div className="space-y-3">
              <div className="py-1.5 px-3 rounded-lg bg-emerald-100 text-emerald-900 text-xs font-extrabold inline-flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> FIRST50 (50% OFF) Unlocked!
              </div>
              <img src={BRAND.qrImage} alt="QR" className="w-36 h-36 mx-auto rounded-2xl border-2 border-slate-950 p-1.5" />
            </div>
          )}
          <StoreRow />
        </div>
      );
    }

    if (selected === 5) {
      return (
        <div className="w-full max-w-sm bg-white rounded-3xl p-6 border-2 border-slate-950 shadow-[8px_8px_0px_#0F172A] text-center space-y-4">
          <h3 className="text-xl font-extrabold font-display">Spin for Your Welcome Perk</h3>
          <motion.button
            type="button"
            onClick={() => setWheelDeg((d) => d + 540)}
            animate={{ rotate: wheelDeg }}
            transition={{ type: 'spring', stiffness: 80, damping: 14 }}
            className="w-36 h-36 mx-auto rounded-full bg-slate-950 border-4 border-[#FACC15] text-[#FACC15] flex flex-col items-center justify-center gap-1 cursor-pointer"
          >
            <RotateCw className="w-6 h-6" />
            <span className="text-xs font-extrabold">{wheelDeg > 0 ? '50% OFF!' : 'Tap to Spin'}</span>
          </motion.button>
          <img src={BRAND.qrImage} alt="QR" className="w-28 h-28 mx-auto rounded-xl border border-slate-200 p-1" />
          <StoreRow />
        </div>
      );
    }

    return (
      <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-gray-100 text-center font-display">
        <button
          type="button"
          aria-label="Close QR modal"
          className="absolute top-4 right-4 w-8 h-8 inline-flex items-center justify-center rounded-full text-gray-400"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 text-xs font-semibold text-amber-800 mb-3">
          <QrCode className="w-3.5 h-3.5 text-amber-500" />
          Scan to Book in 15s
        </div>
        <h3 className="text-xl font-extrabold text-gray-900">Get the LaundryRage App</h3>
        <p className="text-xs text-gray-500 mt-1 mb-4">
          Flat 50% OFF (up to ₹50) on your first Bhubaneswar order.
        </p>
        <div className="mx-auto w-48 h-48 p-3 rounded-2xl bg-stone-50 border border-gray-200 flex items-center justify-center mb-5">
          <img src={BRAND.qrImage} alt="Scan QR" className="w-full h-full object-contain rounded-lg" />
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <a href={BRAND.playStore} target="_blank" rel="noopener noreferrer" className="py-2.5 px-3 rounded-xl bg-gray-900 text-white text-xs font-bold">
            Google Play
          </a>
          <a href={BRAND.appStore} target="_blank" rel="noopener noreferrer" className="py-2.5 px-3 rounded-xl bg-yellow-400 text-gray-900 text-xs font-bold">
            App Store
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-950">
      <div className="bg-slate-950 text-white px-4 sm:px-8 py-3 flex items-center justify-between">
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
          Get the App — 6 Different Experiences
        </span>
        <Link to="/" className="px-3.5 py-1.5 rounded-lg bg-[#FACC15] text-slate-950 text-xs font-extrabold">
          ← Back to Main Site
        </Link>
      </div>

      {/* Live Preview Stage */}
      <section className="py-14 bg-slate-900 border-b-4 border-slate-950 flex flex-col items-center justify-center px-4">
        <span className="mb-5 text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
          Option {selected}: {OPTIONS[selected - 1].title}
        </span>
        {renderPreview()}
      </section>

      {/* Selector Grid */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => {
                setSelected(opt.id);
                setFlipped(false);
                setScratched(false);
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
