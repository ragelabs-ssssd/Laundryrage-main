import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Instagram,
  MessageCircle,
  Youtube,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Check,
} from 'lucide-react';
import { BRAND } from '../data/brandData';
import { BrandLogo } from '../components/BrandMark';
import { StoreButtons } from '../components/SharedUI';

const SOCIALS = [
  { name: 'Instagram', handle: '@laundryrage', short: 'IG', icon: Instagram, href: BRAND.instagram },
  { name: 'WhatsApp', handle: '+91 9937032631', short: 'WA', icon: MessageCircle, href: BRAND.whatsapp },
  { name: 'YouTube', handle: '@laundryrage', short: 'YT', icon: Youtube, href: '#youtube' },
  { name: 'X / Twitter', handle: '@laundryrage', short: 'X', icon: Twitter, href: '#x' },
  { name: 'LinkedIn', handle: 'LaundryRage', short: 'IN', icon: Linkedin, href: '#linkedin' },
];

const OPTIONS = [
  { id: 1, title: 'Clothespin-Hung Swaying Handle Tags', desc: 'Social handles hang from wooden clothespins with gentle laundry sway.' },
  { id: 2, title: 'Spinning Porthole Icon Buttons', desc: 'Circular washing-drum portholes that expand to reveal @laundryrage on hover.' },
  { id: 3, title: 'Woven Garment Care-Label Strip', desc: 'Dashed fabric-tag container with mono [FOLLOW] care-label typography.' },
  { id: 4, title: 'Buoyant Soap-Bubble Social Cluster', desc: 'Floating white soap-bubble icons that bob gently above the copyright line.' },
  { id: 5, title: 'Folded-Collar Ticket Handle Pills', desc: 'Angled clip-path dark & white claim-ticket badges with handles.' },
  { id: 6, title: 'Obsidian "Follow the Spin" Card', desc: 'High-contrast #0F172A dock inside the yellow footer with #FACC15 links.' },
  { id: 7, title: '1-Click Copy Handle Stamp Pills', desc: 'Click any social pill to copy @laundryrage with an instant Copied! flash.' },
  { id: 8, title: 'Hanger-Hooked Mini Handle Cards', desc: 'Social cards suspended from circular hanger loops along a horizontal bar.' },
  { id: 9, title: 'Live Pulse Handle Bar', desc: 'Pulsing green-dot live social strip pairing handles with Jagamara hub info.' },
  { id: 10, title: 'Rotated Rubber-Stamp Seals', desc: 'Tilted brutalist stamp seals that snap straight on hover.' },
];

export default function SocialPreview() {
  const [selected, setSelected] = useState(1);
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = (idx, handle) => {
    navigator.clipboard?.writeText(handle);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1400);
  };

  const renderSocialStrip = () => {
    if (selected === 1) {
      return (
        <div className="relative pt-4">
          <div className="hidden sm:block absolute top-4 inset-x-4 h-0.5 bg-slate-950/30" />
          <div className="flex flex-wrap gap-3 relative z-10">
            {SOCIALS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  animate={{ rotate: idx % 2 === 0 ? [-1, 1, -1] : [1, -1, 1] }}
                  transition={{ duration: 3.2 + idx * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ transformOrigin: 'top center' }}
                  className="relative px-3.5 py-2 rounded-xl bg-white border-2 border-slate-950 shadow-[3px_3px_0px_#0F172A] inline-flex items-center gap-2 text-xs font-extrabold"
                >
                  <span className="hidden sm:block absolute -top-2.5 left-1/2 -translate-x-1/2 w-2.5 h-3.5 rounded-sm bg-amber-600 border border-amber-950" />
                  <Icon className="w-3.5 h-3.5" />
                  <span>{s.handle}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      );
    }

    if (selected === 2) {
      return (
        <div className="flex flex-wrap items-center gap-3">
          {SOCIALS.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 pr-3 pl-1.5 py-1.5 rounded-full bg-slate-950 text-white border-2 border-white shadow-[3px_3px_0px_#0F172A] text-xs font-extrabold hover:bg-white hover:text-slate-950 transition-colors"
              >
                <span className="w-7 h-7 rounded-full bg-[#FACC15] text-slate-950 flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span>{s.handle}</span>
              </a>
            );
          })}
        </div>
      );
    }

    if (selected === 3) {
      return (
        <div className="p-4 rounded-2xl bg-white border-2 border-dashed border-slate-950 shadow-[4px_4px_0px_#0F172A] flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-800">
            [CARE TAG • FOLLOW US]
          </span>
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-slate-950 hover:underline"
                >
                  <Icon className="w-3.5 h-3.5" /> {s.handle}
                </a>
              );
            })}
          </div>
        </div>
      );
    }

    if (selected === 4) {
      return (
        <div className="flex flex-wrap items-center gap-3">
          {SOCIALS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2.4 + idx * 0.25, repeat: Infinity, ease: 'easeInOut' }}
                className="px-3.5 py-2 rounded-full bg-white/85 backdrop-blur-sm border-2 border-slate-950/30 shadow-sm inline-flex items-center gap-2 text-xs font-extrabold text-slate-950 hover:bg-white"
              >
                <Icon className="w-4 h-4" />
                <span>{s.handle}</span>
              </motion.a>
            );
          })}
        </div>
      );
    }

    if (selected === 5) {
      return (
        <div className="flex flex-wrap gap-2.5">
          {SOCIALS.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{ clipPath: 'polygon(0 0, 90% 0, 100% 34%, 100% 100%, 0 100%)' }}
                className="px-3.5 py-2 bg-slate-950 text-[#FACC15] text-xs font-extrabold inline-flex items-center gap-2 hover:bg-white hover:text-slate-950 transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{s.short}: {s.handle}</span>
              </a>
            );
          })}
        </div>
      );
    }

    if (selected === 6) {
      return (
        <div className="bg-[#0F172A] text-white rounded-2xl p-4 border-2 border-slate-950 shadow-[5px_5px_0px_#FFFFFF] flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
            Follow the Spin →
          </span>
          <div className="flex flex-wrap gap-2.5">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#FACC15] text-xs font-bold inline-flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>{s.handle}</span>
                </a>
              );
            })}
          </div>
        </div>
      );
    }

    if (selected === 7) {
      return (
        <div className="flex flex-wrap gap-2.5">
          {SOCIALS.map((s, idx) => {
            const Icon = s.icon;
            const isCopied = copiedIdx === idx;
            return (
              <button
                key={s.name}
                type="button"
                onClick={() => handleCopy(idx, s.handle)}
                className="px-3.5 py-2 rounded-xl bg-white border-2 border-slate-950 shadow-[3px_3px_0px_#0F172A] text-xs font-extrabold inline-flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Icon className="w-3.5 h-3.5" />}
                <span>{isCopied ? 'Copied!' : `${s.name}: ${s.handle}`}</span>
              </button>
            );
          })}
        </div>
      );
    }

    if (selected === 8) {
      return (
        <div className="relative pt-4">
          <div className="hidden sm:block absolute top-1 inset-x-0 h-1 rounded-full bg-slate-950" />
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative px-3.5 py-2 rounded-2xl bg-white border-2 border-slate-950 shadow-[3px_3px_0px_#0F172A] text-xs font-extrabold inline-flex items-center gap-2"
                >
                  <span className="hidden sm:block absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-slate-950 bg-[#FACC15]" />
                  <Icon className="w-3.5 h-3.5" />
                  <span>{s.handle}</span>
                </a>
              );
            })}
          </div>
        </div>
      );
    }

    if (selected === 9) {
      return (
        <div className="px-4 py-3 rounded-2xl bg-slate-950 text-white flex flex-wrap items-center gap-4 text-xs font-extrabold">
          <span className="inline-flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            CONNECT:
          </span>
          {SOCIALS.map((s) => {
            const Icon = s.icon;
            return (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#FACC15]">
                <Icon className="w-3.5 h-3.5 text-[#FACC15]" /> {s.handle}
              </a>
            );
          })}
        </div>
      );
    }

    return (
      <div className="flex flex-wrap gap-3">
        {SOCIALS.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ rotate: 0, scale: 1.05 }}
              style={{ rotate: idx % 2 === 0 ? -2 : 2 }}
              className="px-3.5 py-2 rounded-xl bg-white border-2 border-slate-950 shadow-[4px_4px_0px_#0F172A] text-xs font-extrabold inline-flex items-center gap-2"
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{s.short} • {s.handle}</span>
            </motion.a>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-950">
      <div className="bg-slate-950 text-white px-4 sm:px-8 py-3 flex items-center justify-between">
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
          Footer Social Icons &amp; Handles — 10 Out-of-the-Box Options
        </span>
        <Link to="/" className="px-3.5 py-1.5 rounded-lg bg-[#FACC15] text-slate-950 text-xs font-extrabold">
          ← Back to Main Site
        </Link>
      </div>

      {/* Live Footer Preview */}
      <footer className="bg-[#FACC15] border-b-4 border-slate-950 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-5 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <BrandLogo size="lg" />
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-none">
                TAP. WASH. RELAX.
              </h2>
            </div>
            <div className="bg-white p-4 rounded-3xl border-2 border-slate-950 shadow-[6px_6px_0px_#0F172A]">
              <StoreButtons variant="dark" size="md" />
            </div>
          </div>

          <div className="pt-5 border-t-2 border-slate-950/20 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm font-bold">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4" />{BRAND.address}</span>
              <span className="inline-flex items-center gap-1.5"><Phone className="w-4 h-4" />{BRAND.phoneDisplay}</span>
              <span className="inline-flex items-center gap-1.5"><Mail className="w-4 h-4" />{BRAND.email}</span>
            </div>
            <span className="self-start px-4 py-2 rounded-xl bg-slate-950 text-white text-xs font-extrabold inline-flex items-center gap-1.5">
              Back to top <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Live Social Strip */}
          {renderSocialStrip()}

          <div className="pt-4 border-t border-slate-950/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-bold text-slate-900">
            <p>© 2025 LaundryRage. All rights reserved.</p>
            <p>Jagamara / Khandagiri / Patia / Saheed Nagar / Nayapalli</p>
          </div>
        </div>
      </footer>

      {/* Option Selector Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelected(opt.id)}
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
