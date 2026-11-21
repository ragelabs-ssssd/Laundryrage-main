import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Tag, Copy, Check, ArrowRight, X } from 'lucide-react';
import { BRAND } from '../data/brandData';

const WHATSAPP_NUMBER = '919937032631';
const WHATSAPP_MESSAGE = 'Hi LaundryRage! I have a question about your laundry services.';

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText('FIRST50');
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3" id="whatsapp-widget">
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
                LaundryRage Concierge • 7AM–10PM
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close support menu"
                className="text-slate-500 hover:text-slate-950"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-extrabold flex items-center justify-between transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={BRAND.phoneHref}
                className="w-full py-2.5 px-3.5 rounded-xl bg-[#FAF9F6] hover:bg-amber-50 border border-slate-950 text-slate-950 text-xs font-extrabold flex items-center justify-between transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-600" /> Call {BRAND.phoneDisplay}
                </span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full py-2.5 px-3.5 rounded-xl bg-[#FACC15] hover:bg-amber-300 border border-slate-950 text-slate-950 text-xs font-extrabold flex items-center justify-between transition-colors"
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

      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="px-4 py-2.5 rounded-full bg-slate-950 text-white border-2 border-[#FACC15] shadow-[4px_4px_0px_#0F172A] text-xs font-extrabold inline-flex items-center gap-2"
        aria-label="Open LaundryRage Support"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span>7AM–10PM • Support</span>
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;
