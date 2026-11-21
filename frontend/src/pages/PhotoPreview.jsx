import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { wavyYellowBgStyle } from '../components/BrandMark';

const ALL_40_OPTIONS = [
  // 1-8: Hub & Drums
  { id: 1, cat: 'Hub & Drums', title: 'Indian Laundry Specialist & Solo Drum', src: '/images/indian-hero-1.jpg', ready: true, desc: 'Young Indian specialist in black-and-yellow apron loading kurtas into a steel drum.' },
  { id: 2, cat: 'Hub & Drums', title: 'Sunlit Bhubaneswar Laundry Workshop', src: '/images/indian-hero-2-studio.jpg', ready: true, desc: 'Row of commercial stainless-steel washers inside a bright Indian hub with morning sun.' },
  { id: 3, cat: 'Hub & Drums', title: 'Yellow LaundryRage Bags Lined Up', src: '/images/indian-hero-3-bags.jpg', ready: true, desc: 'Tagged yellow canvas laundry bags in a modern Indian sorting studio.' },
  { id: 4, cat: 'Hub & Drums', title: 'Ozone Sanitize 60°C Close-Up', src: '/images/indian-hero-4-drum.jpg', ready: true, desc: 'Gleaming steel drum door reflecting warm Indian workshop lights & 60°C display.' },
  { id: 5, cat: 'Hub & Drums', title: 'Sorting Table with Indian Fabrics', src: '/images/indian-hero-5-counter.jpg', ready: true, desc: 'Teakwood sorting counter stacked with kurtas, shirts & order slips.' },
  { id: 6, cat: 'Hub & Drums', title: 'RO Water & Bio-Enzyme Station', src: '/images/indian-hero-6-lab.jpg', ready: true, desc: 'Clean Indian laundry lab counter with bio-enzyme bottles beside steel drums.' },
  { id: 7, cat: 'Hub & Drums', title: 'Evening Warm Indian Storefront', src: '/images/indian-hero-7-storefront.jpg', ready: true, desc: 'Golden-hour shot looking into a spotless Bhubaneswar laundry studio.' },
  { id: 8, cat: 'Hub & Drums', title: 'Freshly Unloaded Warm Basket', src: '/images/indian-hero-1.jpg', ready: false, desc: 'Steaming-fresh cotton clothes unloaded into a woven basket.' },

  // 9-16: Indian Wardrobe
  { id: 9, cat: 'Indian Wardrobe', title: 'Indian Kurtas & Office Shirts Stack', src: '/images/indian-hero-2.jpg', ready: true, desc: 'Neatly folded pastel cotton kurtas, crisp white shirts & denims on Indian teakwood.' },
  { id: 10, cat: 'Indian Wardrobe', title: 'Odisha Handloom & Sambalpuri Touch', src: '/images/indian-hero-2.jpg', ready: false, desc: 'Sambalpuri-bordered sarees/dupattas packed in breathable white sleeves.' },
  { id: 11, cat: 'Indian Wardrobe', title: 'Weekend Ethnic & Casual Stack', src: '/images/indian-hero-2.jpg', ready: false, desc: 'Mustard, ivory & navy Indian kurtas folded sharp on terrazzo.' },
  { id: 12, cat: 'Indian Wardrobe', title: 'White Kurta-Pajama Perfection', src: '/images/indian-hero-2.jpg', ready: false, desc: 'Crisp white linen kurta-pajama resting on a cane chair in afternoon light.' },
  { id: 13, cat: 'Indian Wardrobe', title: 'Hanger-Ready Indian Formals', src: '/images/dry-cleaning.jpg', ready: false, desc: 'Nehru jackets, linen kurtas & office shirts on wooden hangers.' },
  { id: 14, cat: 'Indian Wardrobe', title: 'Monsoon-Fresh Towel & Linen Stack', src: '/images/indian-hero-2.jpg', ready: false, desc: 'Fluffy white & saffron bath towels stacked inside an airy Indian flat.' },
  { id: 15, cat: 'Indian Wardrobe', title: 'Festive Silk Saree Care', src: '/images/dry-cleaning.jpg', ready: false, desc: 'Delicate silk saree folded inside a breathable muslin garment cover.' },
  { id: 16, cat: 'Indian Wardrobe', title: 'Denim & Everyday Tee Fold', src: '/images/indian-hero-2.jpg', ready: false, desc: 'Crisp folded college/office tees & jeans tied with a yellow ribbon.' },

  // 17-24: Delivery
  { id: 17, cat: 'Delivery', title: 'Bhubaneswar Doorstep Rider Handover', src: '/images/indian-hero-3.jpg', ready: true, desc: 'Friendly Indian delivery rider handing a yellow-and-kraft laundry bundle at an apartment door.' },
  { id: 18, cat: 'Delivery', title: 'Scooter Pickup in Sunlit Indian Lane', src: '/images/indian-hero-3.jpg', ready: false, desc: 'Electric scooter beside bougainvillea outside an Indian residential society.' },
  { id: 19, cat: 'Delivery', title: 'Balcony Handover at Golden Hour', src: '/images/indian-hero-3.jpg', ready: false, desc: 'Happy resident receiving a crisp sealed parcel in warm evening light.' },
  { id: 20, cat: 'Delivery', title: 'Doorstep Weigh-In & Tagging', src: '/images/indian-hero-3.jpg', ready: false, desc: 'Close-up of Indian rider attaching a barcoded tag to a yellow laundry bag.' },
  { id: 21, cat: 'Delivery', title: 'Fresh Bundle on Indian Cane Table', src: '/images/indian-hero-4.jpg', ready: false, desc: 'Crisp wrapped laundry parcel on a verandah cane table next to masala chai.' },
  { id: 22, cat: 'Delivery', title: 'Morning Gate Pickup', src: '/images/indian-hero-3.jpg', ready: false, desc: 'Morning sunlight at a Bhubaneswar gated community driveway.' },
  { id: 23, cat: 'Delivery', title: 'Hostel Gate Drop-Off', src: '/images/indian-hero-3.jpg', ready: false, desc: 'Indian college student smiling while picking up crisp laundry outside hostel.' },
  { id: 24, cat: 'Delivery', title: 'Zero-Plastic Paper-Wrapped Bundle', src: '/images/indian-hero-3.jpg', ready: false, desc: 'Eco-friendly kraft-and-yellow bundle by a brass-handled Indian door.' },

  // 25-32: Steam Press
  { id: 25, cat: 'Steam Press', title: 'Indian Master Presser at Work', src: '/images/steam-ironing.jpg', ready: false, desc: 'Indian garment-care specialist steam-pressing a crisp white shirt.' },
  { id: 26, cat: 'Steam Press', title: 'Kurta Collar Steam Detail', src: '/images/steam-ironing.jpg', ready: false, desc: 'Commercial steam iron smoothing a crisp linen kurta collar.' },
  { id: 27, cat: 'Steam Press', title: 'Trouser Crease Perfection', src: '/images/steam-ironing.jpg', ready: false, desc: 'Razor-sharp trouser pleat pressed on a commercial board.' },
  { id: 28, cat: 'Steam Press', title: 'Saree Pleat Finishing', src: '/images/steam-ironing.jpg', ready: false, desc: 'Gentle steam mist rising over a vibrant silk/cotton saree.' },
  { id: 29, cat: 'Steam Press', title: 'Hanging Garment Steamer', src: '/images/steam-ironing.jpg', ready: false, desc: 'Vertical steam wand refreshing a blazer & kurta on a chrome rack.' },
  { id: 30, cat: 'Steam Press', title: 'Steam & Sunlight Contrast', src: '/images/steam-ironing.jpg', ready: false, desc: 'Sunbeams cutting through rising white steam in an Indian pressing studio.' },
  { id: 31, cat: 'Steam Press', title: 'Button & Collar Inspection', src: '/images/steam-ironing.jpg', ready: false, desc: 'Hands inspecting a freshly pressed crisp white collar in natural light.' },
  { id: 32, cat: 'Steam Press', title: 'Row of Steamed Shirts for Dispatch', src: '/images/priority-care.jpg', ready: false, desc: 'Aligned crisp shirts on hangers by a sunlit Indian pickup counter.' },

  // 33-40: Home & Chai
  { id: 33, cat: 'Home & Chai', title: 'Sunday Chai + Fresh Laundry Stack', src: '/images/indian-hero-4.jpg', ready: true, desc: 'Steaming masala chai on a sunlit Indian balcony cane table beside crisp folded clothes.' },
  { id: 34, cat: 'Home & Chai', title: 'Indian Rooftop Breeze & Crisp Linen', src: '/images/indian-hero-4.jpg', ready: false, desc: 'Golden-hour Indian terrace with potted tulsi & crisp folded whites.' },
  { id: 35, cat: 'Home & Chai', title: 'Modern Patia / IT-Pro Apartment', src: '/images/indian-hero-4.jpg', ready: false, desc: 'Young Indian techie relaxing on a sofa beside a fresh LaundryRage bundle.' },
  { id: 36, cat: 'Home & Chai', title: 'Hostel Room Transformation', src: '/images/indian-hero-2.jpg', ready: false, desc: 'Neat Indian hostel desk & bed with freshly folded tees and kurtas.' },
  { id: 37, cat: 'Home & Chai', title: 'Monsoon Window Relief', src: '/images/indian-hero-4.jpg', ready: false, desc: 'Raindrops on an Indian apartment window with dry, warm folded clothes indoors.' },
  { id: 38, cat: 'Home & Chai', title: 'Morning Yoga & Fresh Activewear', src: '/images/indian-hero-4.jpg', ready: false, desc: 'Sunlit Indian living room with crisp cotton tees & workout wear.' },
  { id: 39, cat: 'Home & Chai', title: 'Family Wardrobe Calm', src: '/images/indian-hero-2.jpg', ready: false, desc: 'Indian home interior with uniforms, shirts & kurtas stacked on a cane bench.' },
  { id: 40, cat: 'Home & Chai', title: 'Bhubaneswar Sunrise Delivery', src: '/images/indian-hero-4.jpg', ready: false, desc: 'Golden sunrise across a clean Indian balcony with a fresh yellow-tagged bag.' },
];

const CATEGORIES = ['All (40)', 'Hub & Drums', 'Indian Wardrobe', 'Delivery', 'Steam Press', 'Home & Chai'];

export default function PhotoPreview() {
  const [selectedId, setSelectedId] = useState(1);
  const [cat, setCat] = useState('All (40)');

  const current = ALL_40_OPTIONS.find((o) => o.id === selectedId) || ALL_40_OPTIONS[0];
  const visible = cat === 'All (40)' ? ALL_40_OPTIONS : ALL_40_OPTIONS.filter((o) => o.cat === cat);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-950">
      <div className="bg-slate-950 text-white px-4 sm:px-8 py-3 flex items-center justify-between">
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
          40 Indian Hero Photo Concepts — Review Link
        </span>
        <Link to="/" className="px-3.5 py-1.5 rounded-lg bg-[#FACC15] text-slate-950 text-xs font-extrabold">
          ← Back to Main Site
        </Link>
      </div>

      {/* Live Hero Polaroid Preview */}
      <section style={wavyYellowBgStyle} className="py-12 border-b-4 border-slate-950 flex flex-col items-center justify-center px-4">
        <span className="mb-4 px-3.5 py-1 rounded-full bg-white border-2 border-slate-950 text-xs font-extrabold">
          Option #{current.id}: {current.title} {current.ready ? '• Generated Sample' : '• Tell me #' + current.id + ' to generate'}
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
            <span className="px-4 py-2 rounded-full bg-gray-950 text-white text-xs font-bold">Scan QR</span>
          </div>
        </motion.div>
      </section>

      {/* Filter + 40 Options Grid */}
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
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-black uppercase px-2 py-0.5 rounded-full bg-slate-950 text-[#FACC15]">
                  #{opt.id}
                </span>
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${opt.ready ? 'bg-emerald-200 text-emerald-950' : 'bg-slate-100 text-slate-700'}`}>
                  {opt.ready ? 'Sample Ready' : opt.cat}
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
