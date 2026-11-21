import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { wavyYellowBgStyle } from '../components/BrandMark';

const UNIQUE_PHOTOS = [
  { id: 1, cat: 'Indian Hub', title: 'Indian Specialist & Solo Drum', src: '/images/indian-hero-1.jpg', desc: 'Young Indian specialist in black-and-yellow apron loading kurtas into a steel drum.' },
  { id: 2, cat: 'Indian Hub', title: 'Sunlit Bhubaneswar Washer Studio', src: '/images/indian-hero-2-studio.jpg', desc: 'Row of commercial stainless-steel washers inside a bright Indian hub.' },
  { id: 3, cat: 'Indian Hub', title: 'Tagged Yellow LaundryRage Bags', src: '/images/indian-hero-3-bags.jpg', desc: 'Neat row of tagged bright yellow canvas laundry bags in an Indian sorting studio.' },
  { id: 4, cat: 'Indian Hub', title: 'Ozone Sanitize 60°C Drum Close-Up', src: '/images/indian-hero-4-drum.jpg', desc: 'Gleaming steel drum door reflecting warm workshop lights & 60°C display.' },
  { id: 5, cat: 'Indian Hub', title: 'Teakwood Sorting Counter', src: '/images/indian-hero-5-counter.jpg', desc: 'Teakwood sorting counter stacked with folded kurtas, shirts & order slips.' },
  { id: 6, cat: 'Indian Hub', title: 'RO Water & Bio-Enzyme Lab', src: '/images/indian-hero-6-lab.jpg', desc: 'Spotless Indian laundry lab counter with amber bio-enzyme bottles & RO pipes.' },
  { id: 7, cat: 'Indian Hub', title: 'Golden-Hour Bhubaneswar Storefront', src: '/images/indian-hero-7-storefront.jpg', desc: 'Warm evening shot looking into a spotless Bhubaneswar laundry storefront.' },
  { id: 8, cat: 'Indian Wardrobe', title: 'Folded Kurtas & Office Shirts', src: '/images/indian-hero-2.jpg', desc: 'Pastel cotton kurtas, crisp white shirts & indigo denims on Indian teakwood.' },
  { id: 9, cat: 'Delivery', title: 'Indian Doorstep Rider Handover', src: '/images/indian-hero-3.jpg', desc: 'Friendly Indian delivery rider handing a yellow-and-kraft bundle at an apartment door.' },
  { id: 10, cat: 'Home & Chai', title: 'Sunday Chai + Fresh Laundry Stack', src: '/images/indian-hero-4.jpg', desc: 'Steaming masala chai on a sunlit Indian balcony cane table beside crisp clothes.' },
  { id: 11, cat: 'Original', title: 'Wash & Fold Commercial Drums', src: '/images/wash-fold.jpg', desc: 'Original stainless-steel front-load washer row.' },
  { id: 12, cat: 'Original', title: 'Steam Ironing Press', src: '/images/steam-ironing.jpg', desc: 'Precision steam ironing finish.' },
  { id: 13, cat: 'Original', title: 'Priority Care Express', src: '/images/priority-care.jpg', desc: 'Express garment care & hanger prep.' },
  { id: 14, cat: 'Original', title: 'Dry Cleaning & Formals', src: '/images/dry-cleaning.jpg', desc: 'Solvent care for blazers, sarees & delicate wear.' },
];

const CATEGORIES = ['All (14 Unique)', 'Indian Hub', 'Indian Wardrobe', 'Delivery', 'Home & Chai', 'Original'];

export default function PhotoPreview() {
  const [selectedId, setSelectedId] = useState(1);
  const [cat, setCat] = useState('All (14 Unique)');

  const current = UNIQUE_PHOTOS.find((o) => o.id === selectedId) || UNIQUE_PHOTOS[0];
  const visible = cat === 'All (14 Unique)' ? UNIQUE_PHOTOS : UNIQUE_PHOTOS.filter((o) => o.cat === cat);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-950">
      <div className="bg-slate-950 text-white px-4 sm:px-8 py-3 flex items-center justify-between">
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
          14 Unique Photos — Zero Duplicates
        </span>
        <Link to="/" className="px-3.5 py-1.5 rounded-lg bg-[#FACC15] text-slate-950 text-xs font-extrabold">
          ← Back to Main Site
        </Link>
      </div>

      {/* Live Hero Polaroid Preview */}
      <section style={wavyYellowBgStyle} className="py-12 border-b-4 border-slate-950 flex flex-col items-center justify-center px-4">
        <span className="mb-4 px-3.5 py-1 rounded-full bg-white border-2 border-slate-950 text-xs font-extrabold">
          Photo #{current.id}: {current.title}
        </span>

        <motion.div
          animate={{ rotate: [-1.1, 1.1, -1.1] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top center' }}
          className="relative w-full max-w-md rounded-3xl p-4 bg-white border-2 border-slate-950 shadow-[8px_8px_0px_#0F172A]"
        >
          <span className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 w-3.5 h-5 rounded-sm bg-amber-600 border border-amber-900/40 shadow-sm z-20" />
          <img src={current.src} alt={current.title} className="w-full aspect-[4/3] object-cover rounded-2xl" />
          <div className="mt-4 flex items-center justify-between gap-4 px-2 pb-1">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700">First Order Offer</p>
              <p className="text-sm font-extrabold text-gray-950">Use code FIRST50 for 50% OFF</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Filter + Unique Photos Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-xs font-extrabold border-2 border-slate-950 ${
                cat === c ? 'bg-[#FACC15] text-slate-950' : 'bg-white text-slate-800'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visible.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedId(opt.id)}
              className={`text-left p-4 rounded-2xl border-2 border-slate-950 transition-all ${
                selectedId === opt.id
                  ? 'bg-[#FACC15] shadow-[5px_5px_0px_#0F172A]'
                  : 'bg-white hover:bg-amber-50 shadow-[3px_3px_0px_#0F172A]'
              }`}
            >
              <img
                src={opt.src}
                alt={opt.title}
                className="w-full aspect-[4/3] object-cover rounded-xl border border-slate-950 mb-3"
              />
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-black uppercase px-2 py-0.5 rounded-full bg-slate-950 text-[#FACC15]">
                  #{opt.id}
                </span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {opt.cat}
                </span>
              </div>
              <h2 className="text-sm font-extrabold font-display text-slate-950">{opt.title}</h2>
              <p className="text-xs text-slate-800 mt-1 leading-snug">{opt.desc}</p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
