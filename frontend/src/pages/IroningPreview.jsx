import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const IRONING_OPTIONS = [
  {
    id: 1,
    src: '/images/ironing-1.jpg',
    title: 'White Cotton Shirt — Commercial Board',
    desc: 'Indian specialist in black & yellow apron steam-pressing a crisp white formal shirt on a padded vacuum board.',
  },
  {
    id: 2,
    src: '/images/ironing-2.jpg',
    title: 'Silk Saree — Gentle Steam Press',
    desc: 'Indian woman in pastel kurti carefully steam-ironing a crimson and gold silk saree with rising steam.',
  },
  {
    id: 3,
    src: '/images/ironing-3.jpg',
    title: 'Linen Kurta Collar — Close-Up Steam',
    desc: 'Close-up of hands guiding a handheld steam iron over an off-white linen kurta collar in warm window light.',
  },
  {
    id: 4,
    src: '/images/ironing-4.jpg',
    title: 'Navy Blazer — Vertical Garment Steamer',
    desc: 'Garment care specialist using a standing vertical steamer to refresh a tailored navy blazer on a hanger.',
  },
  {
    id: 5,
    src: '/images/ironing-5.jpg',
    title: 'Trouser Pleats — Wide Pressing Table',
    desc: 'Specialist in yellow-trimmed uniform pressing razor-sharp pleats on navy trousers beside folded shirts.',
  },
  {
    id: 6,
    src: '/images/ironing-6.jpg',
    title: 'Golden-Hour Backlit Steam — Sky-Blue Shirt',
    desc: 'Sunbeams cutting through crisp white steam clouds as an Indian lady presses a sky-blue dress shirt.',
  },
  {
    id: 7,
    src: '/images/ironing-7.jpg',
    title: 'Airy Balcony Studio — Cotton Kurtas',
    desc: 'Indian woman steam-ironing a peach cotton kurta beside neatly folded stacks and lush potted plants.',
  },
  {
    id: 8,
    src: '/images/ironing-8.jpg',
    title: 'Crisp Cuff Inspection — Quality Check',
    desc: 'Laundry expert inspecting the pressed cuff and placket of a white shirt beside a rack of finished garments.',
  },
  {
    id: 9,
    src: '/images/ironing-9.jpg',
    title: 'Bright Finishing Studio — Wide View',
    desc: 'Wide shot of a sunlit Indian garment-finishing studio with steam pressing and folded wood counter.',
  },
  {
    id: 10,
    src: '/images/ironing-10.jpg',
    title: 'Boiler Steam Table — Light-Blue Formal',
    desc: 'Specialist operating a commercial boiler steam iron table on a light-blue formal shirt with soft steam mist.',
  },
];

export default function IroningPreview() {
  const [selectedId, setSelectedId] = useState(1);
  const selected = IRONING_OPTIONS.find((item) => item.id === selectedId) || IRONING_OPTIONS[0];

  const goPrev = () => {
    setSelectedId((prev) => (prev <= 1 ? IRONING_OPTIONS.length : prev - 1));
  };

  const goNext = () => {
    setSelectedId((prev) => (prev >= IRONING_OPTIONS.length ? 1 : prev + 1));
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
                Steam Ironing — Indian Specialist Options
              </h1>
              <p className="text-xs text-[#71717A]">
                10 unique photos generated • Tell me the option # you want for the Steam Ironing card
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
        {/* Featured Stage + Live Service Card Preview */}
        <section className="mb-10 grid gap-6 rounded-3xl border border-[#E4E4E7] bg-white p-5 shadow-sm lg:grid-cols-12 lg:p-7">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5] aspect-[4/3]">
              <img
                src={selected.src}
                alt={selected.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-3 top-3 rounded-full bg-[#18181B]/85 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                Option #{selected.id} of {IRONING_OPTIONS.length}
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

          {/* Live Service Card Preview */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#E4E4E7] bg-[#FAFAFA] p-5 lg:col-span-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#71717A]">
                Live Service Card Preview
              </p>
              <div className="mt-3 overflow-hidden rounded-2xl border border-[#E4E4E7] bg-white shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F4F4F5]">
                  <img
                    src={selected.src}
                    alt={selected.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[#FACC15] px-2.5 py-1 text-[11px] font-bold text-[#18181B]">
                    Wrinkle-Free Crisp
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-base font-bold text-[#18181B]">Steam Ironing</h3>
                    <span className="text-sm font-bold text-[#18181B]">₹15 / pc</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[#71717A]">
                    High-pressure commercial steam pressing for crisp collars, pleats, sarees &amp; kurtas.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-dashed border-[#D4D4D8] bg-white p-3.5 text-xs text-[#52525B]">
              <span className="font-semibold text-[#18181B]">How to choose:</span> Click any option below to preview it inside the card, then reply with the option number (for example, <code className="rounded bg-[#F4F4F5] px-1.5 py-0.5 font-mono text-[#18181B]">use #4</code>).
            </div>
          </div>
        </section>

        {/* All 10 Options Grid */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-bold text-[#18181B]">
              All {IRONING_OPTIONS.length} Unique Options
            </h2>
            <span className="text-xs text-[#71717A]">
              Click any photo to inspect
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {IRONING_OPTIONS.map((option) => {
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
