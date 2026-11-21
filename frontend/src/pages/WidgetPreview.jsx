import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  Zap,
  AlertCircle,
  Radio,
  Sparkles,
  Tag,
  Gift,
  X,
  RotateCw,
  ArrowRight,
  Copy,
  Check,
  QrCode,
  Droplets,
  Building2,
  Coins,
} from 'lucide-react';
import { BRAND } from '../data/brandData';

const WIDGET_OPTIONS = [
  {
    id: 1,
    title: 'Expandable Laundry Concierge Dock',
    desc: 'Brutalist #FACC15 & #0F172A pill that opens a 3-action menu (WhatsApp, Priority 24h, Call Hub).',
  },
  {
    id: 2,
    title: 'Spinning Wash-Drum Porthole',
    desc: 'Rotating washing-machine porthole button that opens a quick support & pickup card.',
  },
  {
    id: 3,
    title: 'Clothespin-Clipped Help Tag',
    desc: 'Tactile swaying tag with a miniature clothespin that reveals WhatsApp + FIRST50 copy.',
  },
  {
    id: 4,
    title: 'Stain SOS + WhatsApp Split Pill',
    desc: 'Dual-action pill offering instant Haldi/Coffee stain tips alongside direct WhatsApp chat.',
  },
  {
    id: 5,
    title: 'Live Bhubaneswar Rider Status',
    desc: 'Dark obsidian pill with pulsing green dot showing active Jagamara & Patia riders.',
  },
  {
    id: 6,
    title: 'Soap-Bubble Floating Action',
    desc: 'Buoyant frosted sky-blue bubble button that opens a clean QR & WhatsApp concierge card.',
  },
  {
    id: 7,
    title: 'Folded-Collar Ticket Button',
    desc: 'Angled clip-path yellow claim-ticket button for quick pickup & store links.',
  },
  {
    id: 8,
    title: 'WhatsApp + 5-Min Callback Capsule',
    desc: 'Split capsule letting users either chat on WhatsApp or call +91 9937032631 directly.',
  },
  {
    id: 9,
    title: 'FIRST50 Gift-Tag Concierge',
    desc: 'High-converting yellow tag that lets users copy FIRST50 or ask a question on WhatsApp.',
  },
  {
    id: 10,
    title: 'Minimal Obsidian Brand Drawer',
    desc: 'Sleek dark circular concierge button with #FACC15 ring that slides open a 3-link drawer.',
  },
  {
    id: 11,
    title: 'Hanger-Hooked Concierge Pill',
    desc: 'Pill suspended from a tiny circular hanger hook for instant pickup & support.',
  },
  {
    id: 12,
    title: 'Steam-Press Puff Button',
    desc: 'Crisp white button with animated steam-puff accents that opens the concierge card.',
  },
  {
    id: 13,
    title: '24h VIP vs 48h Speed Pill',
    desc: 'Shows <24h VIP & <48h turnaround badges right on the floating launcher.',
  },
  {
    id: 14,
    title: 'QR Quick-Scan Floating Cube',
    desc: 'Compact #FACC15 square with a QrCode icon for instant app scan or WhatsApp chat.',
  },
  {
    id: 15,
    title: 'Detergent Drop Floating Pill',
    desc: 'Fresh sky-blue & obsidian droplet badge ("Fresh Help") with buoyant motion.',
  },
  {
    id: 16,
    title: 'B2B / Bulk Express Launcher',
    desc: 'Dark #0F172A pill ("Bulk / B2B?") tailored for hotels, PGs, and salons.',
  },
  {
    id: 17,
    title: '2,000 Coins Reward Pill',
    desc: 'Gold-and-black pill ("Earn 2,000 Coins") that opens referral & WhatsApp help.',
  },
  {
    id: 18,
    title: 'Woven Care-Tag Square',
    desc: 'Dashed fabric-label button ("[40°C] HELP") styled like an inner-collar tag.',
  },
  {
    id: 19,
    title: 'LaundryRage Flame Circle',
    desc: 'Circular #FACC15 launcher featuring the /logo-new.png brand mark.',
  },
  {
    id: 20,
    title: 'Compact 7AM–10PM Hub Pill',
    desc: 'Minimal corner pill showing live Bhubaneswar hub hours + instant chat.',
  },
];

export default function WidgetPreview() {
  const [selected, setSelected] = useState(1);
  const [open, setOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const current = WIDGET_OPTIONS[selected - 1];
  const waUrl = `https://wa.me/919937032631?text=${encodeURIComponent(
    'Hi LaundryRage! I have a question about pickup.'
  )}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText('FIRST50');
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const renderLiveWidgetButton = () => {
    if (selected === 1) {
      return (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="px-4 py-3 rounded-2xl bg-[#FACC15] text-slate-950 border-2 border-slate-950 shadow-[4px_4px_0px_#0F172A] text-xs font-extrabold inline-flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Need Help?</span>
        </button>
      );
    }

    if (selected === 2) {
      return (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-14 h-14 rounded-full bg-slate-950 text-[#FACC15] border-4 border-[#FACC15] shadow-[4px_4px_0px_#0F172A] flex items-center justify-center"
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          >
            <RotateCw className="w-6 h-6" />
          </motion.span>
        </button>
      );
    }

    if (selected === 3) {
      return (
        <motion.button
          type="button"
          onClick={() => setOpen((o) => !o)}
          animate={{ rotate: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top center' }}
          className="relative px-4 py-2.5 rounded-2xl bg-white text-slate-950 border-2 border-slate-950 shadow-[4px_4px_0px_#0F172A] text-xs font-extrabold"
        >
          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-2.5 h-4 rounded-sm bg-amber-600 border border-amber-950" />
          Chat • 7AM–10PM
        </motion.button>
      );
    }

    if (selected === 4) {
      return (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center rounded-full border-2 border-slate-950 shadow-[4px_4px_0px_#0F172A] overflow-hidden text-xs font-extrabold"
        >
          <span className="px-3 py-2.5 bg-rose-600 text-white inline-flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> Stain SOS
          </span>
          <span className="px-3 py-2.5 bg-[#25D366] text-white inline-flex items-center gap-1">
            <MessageCircle className="w-3.5 h-3.5" /> Chat
          </span>
        </button>
      );
    }

    if (selected === 5) {
      return (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="px-4 py-3 rounded-full bg-[#0F172A] text-white border-2 border-[#FACC15] shadow-[4px_4px_0px_#FACC15] text-xs font-extrabold inline-flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Riders Active in BBSR</span>
        </button>
      );
    }

    if (selected === 6) {
      return (
        <motion.button
          type="button"
          onClick={() => setOpen((o) => !o)}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-14 h-14 rounded-full bg-sky-100 text-sky-950 border-2 border-sky-400 shadow-lg flex items-center justify-center"
        >
          <Sparkles className="w-6 h-6 text-sky-600" />
        </motion.button>
      );
    }

    if (selected === 7) {
      return (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          style={{ clipPath: 'polygon(0 0, 88% 0, 100% 34%, 100% 100%, 0 100%)' }}
          className="px-5 py-3 bg-[#FACC15] text-slate-950 border-2 border-slate-950 text-xs font-extrabold inline-flex items-center gap-1.5"
        >
          <Zap className="w-4 h-4" /> Quick Pickup
        </button>
      );
    }

    if (selected === 8) {
      return (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="px-4 py-2.5 rounded-full bg-white text-slate-950 border-2 border-slate-950 shadow-[4px_4px_0px_#0F172A] text-xs font-extrabold inline-flex items-center gap-2.5"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>Chat</span>
          <span className="text-slate-300">|</span>
          <Phone className="w-4 h-4 text-amber-600" />
          <span>Call</span>
        </button>
      );
    }

    if (selected === 9) {
      return (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="px-4 py-2.5 rounded-2xl bg-[#FACC15] text-slate-950 border-2 border-slate-950 shadow-[4px_4px_0px_#0F172A] text-xs font-extrabold inline-flex items-center gap-1.5"
        >
          <Gift className="w-4 h-4" /> 50% OFF + Help
        </button>
      );
    }

    if (selected === 10) {
      return (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-14 h-14 rounded-full bg-[#0F172A] text-[#FACC15] border-2 border-[#FACC15] shadow-[4px_4px_0px_#0F172A] flex items-center justify-center"
        >
          <Radio className="w-6 h-6" />
        </button>
      );
    }

    if (selected === 11) {
      return (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="relative px-4 py-2.5 rounded-2xl bg-white text-slate-950 border-2 border-slate-950 shadow-[4px_4px_0px_#0F172A] text-xs font-extrabold"
        >
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-slate-950 bg-[#FACC15]" />
          Help &amp; Pickup
        </button>
      );
    }

    if (selected === 12) {
      return (
        <motion.button
          type="button"
          onClick={() => setOpen((o) => !o)}
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2.5 rounded-full bg-white text-slate-950 border-2 border-slate-950 shadow-lg text-xs font-extrabold inline-flex items-center gap-1.5"
        >
          <Sparkles className="w-4 h-4 text-amber-500" /> Steam Help
        </motion.button>
      );
    }

    if (selected === 13) {
      return (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="px-3.5 py-2.5 rounded-full bg-[#0F172A] text-white border-2 border-[#FACC15] shadow-[4px_4px_0px_#0F172A] text-[11px] font-extrabold inline-flex items-center gap-2"
        >
          <span className="text-[#FACC15]">&lt;24h VIP</span>
          <span className="text-slate-500">|</span>
          <span>&lt;48h</span>
        </button>
      );
    }

    if (selected === 14) {
      return (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-14 h-14 rounded-2xl bg-[#FACC15] text-slate-950 border-2 border-slate-950 shadow-[4px_4px_0px_#0F172A] flex items-center justify-center"
        >
          <QrCode className="w-6 h-6" />
        </button>
      );
    }

    if (selected === 15) {
      return (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="px-4 py-2.5 rounded-full bg-sky-100 text-sky-950 border-2 border-sky-600 shadow-md text-xs font-extrabold inline-flex items-center gap-1.5"
        >
          <Droplets className="w-4 h-4 text-sky-600" /> Fresh Help
        </button>
      );
    }

    if (selected === 16) {
      return (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="px-4 py-2.5 rounded-xl bg-[#0F172A] text-[#FACC15] border-2 border-white shadow-[4px_4px_0px_#0F172A] text-xs font-extrabold inline-flex items-center gap-1.5"
        >
          <Building2 className="w-4 h-4" /> Bulk / B2B?
        </button>
      );
    }

    if (selected === 17) {
      return (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="px-4 py-2.5 rounded-full bg-[#FACC15] text-slate-950 border-2 border-slate-950 shadow-[4px_4px_0px_#0F172A] text-xs font-extrabold inline-flex items-center gap-1.5"
        >
          <Coins className="w-4 h-4" /> Earn 2,000 Coins
        </button>
      );
    }

    if (selected === 18) {
      return (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="px-4 py-2.5 rounded-xl bg-white text-slate-950 border-2 border-dashed border-slate-950 shadow-[4px_4px_0px_#0F172A] font-mono text-xs font-bold"
        >
          [40°C] HELP
        </button>
      );
    }

    if (selected === 19) {
      return (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-14 h-14 rounded-full bg-[#FACC15] border-2 border-slate-950 shadow-[4px_4px_0px_#0F172A] p-2 flex items-center justify-center overflow-hidden"
        >
          <img src="/logo-new.png" alt="LaundryRage" className="w-full h-full object-contain" />
        </button>
      );
    }

    return (
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="px-4 py-2.5 rounded-full bg-slate-950 text-white border-2 border-[#FACC15] shadow-md text-xs font-extrabold"
      >
        7AM–10PM • Support
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-950 pb-32">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700">
              Floating Widget Preview
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display mt-1">
              10 Alternatives to the Green WhatsApp Circle
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Select any option below and test the live interactive widget at the bottom-right corner.
            </p>
          </div>
          <Link
            to="/"
            className="self-start px-4 py-2 rounded-xl bg-slate-950 text-white text-xs font-extrabold"
          >
            ← Back to Main Site
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WIDGET_OPTIONS.map((opt) => {
            const active = selected === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setSelected(opt.id);
                  setOpen(true);
                }}
                className={`text-left p-5 rounded-2xl border-2 border-slate-950 transition-all ${
                  active
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
            );
          })}
        </div>
      </main>

      {/* Live Interactive Bottom-Right Preview */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              className="w-72 sm:w-80 bg-white rounded-3xl p-4 border-2 border-slate-950 shadow-[6px_6px_0px_#0F172A] space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700">
                  Option {current.id}: {current.title}
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-slate-500 hover:text-slate-950"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-3.5 rounded-xl bg-emerald-500 text-white text-xs font-extrabold flex items-center justify-between"
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={BRAND.phoneHref}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[#FAF9F6] border border-slate-950 text-slate-950 text-xs font-extrabold flex items-center justify-between"
                >
                  <span className="inline-flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-600" /> Call {BRAND.phoneDisplay}
                  </span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-[#FACC15] border border-slate-950 text-slate-950 text-xs font-extrabold flex items-center justify-between"
                >
                  <span className="inline-flex items-center gap-2">
                    <Tag className="w-4 h-4" /> {copied ? 'Copied FIRST50!' : 'Copy FIRST50 (50% OFF)'}
                  </span>
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {renderLiveWidgetButton()}
      </div>
    </div>
  );
}
