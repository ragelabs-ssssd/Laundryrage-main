import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const DRY_CLEANING_OPTIONS = [
  {
    id: 1,
    src: '/images/dry-cleaning.jpg',
    title: 'Current Dry Cleaning Card Photo',
    desc: 'Existing Dry Cleaning visual currently used on the service card.',
  },
  {
    id: 2,
    src: '/images/ironing-4.jpg',
    title: 'Tailored Navy Blazer — Vertical Care',
    desc: 'Indian garment specialist refreshing a tailored navy blazer on a wooden hanger in a boutique studio.',
  },
  {
    id: 3,
    src: '/images/drycleaning-blazer-v2.jpg',
    title: 'Boutique Suit & Blazer Care (Angle 2)',
    desc: 'Alternate studio framing of an Indian specialist tending to formal blazers on wooden hangers.',
  },
  {
    id: 4,
    src: '/images/drycleaning-blazer-v1.jpg',
    title: 'Formal Jacket Vertical Refresh (Angle 3)',
    desc: 'Close studio perspective of vertical steam finishing for structured wool blazers and suits.',
  },
  {
    id: 5,
    src: '/images/ironing-2.jpg',
    title: 'Silk Saree & Delicate Zari Care',
    desc: 'Indian specialist gently finishing a rich crimson and gold silk saree with careful temperature control.',
  },
  {
    id: 6,
    src: '/images/indian-hero-6-lab.jpg',
    title: 'Solvent & Stain Pre-Treatment Lab',
    desc: 'Spotless Indian garment-care lab counter with amber fabric-care bottles and RO treatment setup.',
  },
  {
    id: 7,
    src: '/images/ironing-8.jpg',
    title: 'Garment Rack & Quality Inspection',
    desc: 'Indian female specialist inspecting crisp fabric finish beside a boutique rack of pressed formals.',
  },
  {
    id: 8,
    src: '/images/drycleaning-studio-alt.jpg',
    title: 'Sunlit Indian Boutique Studio (Wide)',
    desc: 'Bright Indian garment-finishing studio featuring racks of hung kurtas, sarees, and folded counter.',
  },
  {
    id: 9,
    src: '/images/indian-hero-7-storefront.jpg',
    title: 'Golden-Hour Boutique Storefront',
    desc: 'Warm evening look into a spotless Bhubaneswar garment care & dry-cleaning boutique.',
  },
  {
    id: 10,
    src: '/images/priority-care.jpg',
    title: 'Classic Hanger-Ready Garment Finish',
    desc: 'Clean, breathable formalwear presentation ready for wardrobe delivery.',
  },
];

export default function DryCleaningPreview() {
  const [selectedId, setSelectedId] = useState(2);
  const selected =
    DRY_CLEANING_OPTIONS.find((item) => item.id === selectedId) || DRY_CLEANING_OPTIONS[0];

  const goPrev = () => {
    setSelectedId((prev) => (prev <= 1 ? DRY_CLEANING_OPTIONS.length : prev - 1));
  };

  const goNext = () => {
    setSelectedId((prev) => (prev >= DRY_CLEANING_OPTIONS.length ? 1 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#18181B]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-[#E4E4E7] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E4E7] bg-white px-3 py-1.5 text-xs font-semibold text-[#18181B] transition hover:border-[#18181B]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Site
            </Link>
            <div>
              <h1 className="text-base font-bold tracking-tight sm:text-lg">
                Dry Cleaning — Photo Options
              </h1>
              <p className="text-xs text-[#71717A]">
                10 curated Indian studio &amp; formalwear options • Reply with the option # to apply to Dry Cleaning
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-[#FEF9C3] px-3.5 py-1.5 text-xs font-semibold text-[#854D0E]">
            <Sparkles className="h-3.5 w-3.5" />
            Selected: Option #{selected.id}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {/* Featured Stage + Live Dry Cleaning Service Card Preview */}
        <section className="mb-10 grid gap-6 rounded-3xl border border-[#E4E4E7] bg-white p-5 shadow-sm lg:grid-cols-12 lg:p-7">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] aspect-[4/3]">
              <img
                src={selected.src}
                alt={selected.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-3 top-3 rounded-full bg-[#18181B]/85 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                Option #{selected.id} of {DRY_CLEANING_OPTIONS.length}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-[#18181B]">{selected.title}</h2>
                <p className="mt-0.5 text-sm text-[#71717A]">{selected.desc}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="inline-flex items-center gap-1 rounded-full border border-[#E4E4E7] bg-white px-3.5 py-2 text-xs font-semibold text-[#18181B] transition hover:border-[#18181B]"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Prev
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex items-center gap-1 rounded-full bg-[#18181B] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[#27272A]"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Live Dry Cleaning Service Card Preview */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E4E4E7] bg-[#FAFAFA] p-5 lg:col-span-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#71717A]">
                Live Dry Cleaning Card Preview
              </p>
              <div className="mt-3 overflow-hidden rounded-2xl border border-[#E4E4E7] bg-white shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F4F4F5]">
                  <img
                    src={selected.src}
                    alt={selected.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[#18181B] px-2.5 py-1 text-[11px] font-bold text-[#FACC15]">
                    Soon • 48h
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-base font-bold text-[#18181B]">Dry Cleaning</h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#71717A]">
                      Coming Soon
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[#71717A]">
                    Gentle solvent-based care for silk sarees, blazers, lehengas, and woolens.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-dashed border-[#D4D4D8] bg-white p-3.5 text-xs text-[#52525B]">
              <span className="font-semibold text-[#18181B]">How to choose:</span> Click any option below to preview it inside the Dry Cleaning card, then reply with the option number (e.g., <code className="rounded bg-[#F4F4F5] px-1.5 py-0.5 font-mono text-[#18181B]">use #2 for dry cleaning</code>).
            </div>
          </div>
        </section>

        {/* All 10 Options Grid */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-bold text-[#18181B]">
              All {DRY_CLEANING_OPTIONS.length} Options
            </h2>
            <span className="text-xs text-[#71717A]">
              Click any photo to inspect
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DRY_CLEANING_OPTIONS.map((option) => {
              const isSelected = option.id === selected.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSelectedId(option.id)}
                  className={`group overflow-hidden rounded-2xl border text-left transition ${
                    isSelected
                      ? 'border-[#18181B] bg-white ring-2 ring-[#FACC15]'
                      : 'border-[#E4E4E7] bg-white hover:border-[#A1A1AA]'
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F4F4F5]">
                    <img
                      src={option.src}
                      alt={option.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                    <span
                      className={`absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${
                        isSelected
                          ? 'bg-[#FACC15] text-[#18181B]'
                          : 'bg-[#18181B]/80 text-white backdrop-blur-sm'
                      }`}
                    >
                      {isSelected && <Check className="h-3 w-3" />}
                      #{option.id}
                    </span>
                  </div>
                  <div className="p-3.5">
                    <h3 className="text-sm font-bold text-[#18181B]">{option.title}</h3>
                    <p className="mt-1 line-clamp-2 text-xs text-[#71717A]">{option.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
