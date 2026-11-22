import React, { useState, useEffect } from 'react';
import { Heart, ArrowRight, Download, Smartphone, ChevronRight, Shirt, Wind, Zap, Gem, Footprints, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PLAY_STORE_LINK = 'https://play.google.com/store/search?q=laundryrage&c=apps&hl=en_IN';
const APP_STORE_LINK = 'https://apps.apple.com/in/app/laundryrage/id6747644693';

const Services = () => {
  const [filter, setFilter] = useState('All');
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = [React.useRef(null), React.useRef(null), React.useRef(null)];

  const backgroundVideos = [
    '/videos/services-bg.mp4',
    '/videos/services-bg-2.mp4',
    '/videos/services-bg-3.mp4'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % backgroundVideos.length);
    }, 12000); // Slightly longer interval
    return () => clearInterval(timer);
  }, []);

  // Effect to slow down video playback for a "steady" feel
  useEffect(() => {
    videoRefs.forEach(ref => {
      if (ref.current) {
        ref.current.playbackRate = 0.8; // 80% speed for smoother motion
      }
    });
  }, [currentVideo]);


  const services = [
    {
      id: 1,
      name: 'Wash & Fold',
      desc: 'Premium machine wash with eco-friendly enzyme detergents. Perfect for everyday clothes. Each order washed separately.',
      cat: 'Wash & Fold',
      img: '/images/wash-fold.jpg',
      icon: <Shirt className="w-4 h-4" />,
      color: 'from-blue-500 to-cyan-400',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 2,
      name: 'Dry Cleaning (Coming Soon)',
      desc: 'Gentle solvent-based cleaning for delicate fabrics. Expert care for ethnic wear, silks, and wools.',
      cat: 'Dry Clean',
      img: '/images/drycleaning-blazer-v1.jpg',
      icon: <Wind className="w-4 h-4" />,
      color: 'from-purple-500 to-indigo-400',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
      isComingSoon: true
    },
    {
      id: 3,
      name: 'Steam Ironing',
      desc: 'Professional steam press for crisp, wrinkle-free finish every time. Gentle on all fabric types.',
      cat: 'Iron',
      img: '/images/ironing-1.jpg',
      icon: <Zap className="w-4 h-4" />,
      color: 'from-orange-500 to-amber-400',
      tagColor: 'bg-orange-50 text-orange-700 border-orange-200'
    },
    {
      id: 4,
      name: 'Premium Care',
      desc: 'Hand-washed with premium organic detergents and fabric softeners. For your most valued garments.',
      cat: 'Premium',
      img: '/images/priority-care.jpg',
      icon: <Gem className="w-4 h-4" />,
      color: 'from-emerald-500 to-teal-400',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
  ];

  const categories = ['All', 'Wash & Fold', 'Dry Clean', 'Iron', 'Premium'];
  const filteredServices = filter === 'All' ? services : services.filter(s => s.cat === filter);

  return (
    <div className="pb-20 min-h-screen bg-stone-50">
      {/* Hero */}
      <div className="relative">
        {/* Fixed Video Background Container */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.video
              key={backgroundVideos[currentVideo]}
              ref={videoRefs[currentVideo]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }} // Faster crossfade to avoid "white delay"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/wash-fold.jpg" // Performance: Poster image for LCP
              className="w-full h-full object-cover scale-105"
              style={{ filter: 'brightness(1.05) contrast(1.05)' }}
            >
              <source src={backgroundVideos[currentVideo]} type="video/mp4" />
            </motion.video>
          </AnimatePresence>
          
          {/* More Transparent Overlay for Clearer Video Visibility */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/20 to-stone-50/90" />
          
          {/* Decorative elements with softer colors */}
          <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-yellow-200/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="section-badge"
            >
              <Star className="w-3.5 h-3.5" /> Premium Quality
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black font-display text-gray-900 mb-6 tracking-tight leading-[1.1]"
            >
              Our <span className="gradient-text">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 font-medium max-w-2xl mx-auto text-base md:text-xl leading-relaxed"
            >
              Experience the pinnacle of garment care. From daily wear to delicate couture, 
              we treat every item with the professional touch it deserves.
            </motion.p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-xl transition-all duration-300 font-bold text-sm ${
                  filter === cat
                    ? 'bg-gray-900 text-yellow-400 shadow-lg'
                    : 'bg-white border border-gray-100 text-gray-500 hover:text-gray-700 hover:border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Service Cards */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
            <AnimatePresence mode="popLayout">
              {filteredServices.map(service => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card overflow-hidden group flex flex-col bg-white"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                    <button 
                      aria-label="Add to favorites"
                      className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-red-500 cursor-pointer transition-all shadow-md hover:scale-110"
                    >
                      <Heart size={16} />
                    </button>

                    <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider border ${service.tagColor}`}>
                      {service.cat}
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2 font-display text-slate-900">{service.name}</h3>
                      <p className="text-slate-600 text-[0.9375rem] mb-4 font-normal leading-[1.65]">{service.desc}</p>
                    </div>

                    <a
                      href={PLAY_STORE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between group/btn"
                    >
                      <span className="text-sm font-bold text-amber-600 group-hover/btn:text-amber-700 transition-colors flex items-center gap-1.5">
                        <Download className="w-3.5 h-3.5" /> Book on App
                      </span>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-900 transition-all shadow-md group-hover/btn:scale-110"
                        style={{ background: 'linear-gradient(135deg, #FACC15, #F59E0B)' }}>
                        <ArrowRight size={16} />
                      </div>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* App-exclusive teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 glass-card bg-white p-6 md:p-8 flex flex-col md:flex-row items-center gap-5 border-dashed border-2 border-yellow-300/50"
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(135deg, #FACC15, #F59E0B)' }}>
              <Smartphone className="w-6 h-6 text-gray-900" />
            </div>
            <div className="text-center md:text-left flex-grow">
              <h3 className="font-extrabold text-gray-900 font-display text-lg mb-1">More Services Available in App!</h3>
              <p className="text-sm text-gray-400 font-medium">
                Shoe cleaning, curtain care, carpet washing, express delivery & more — exclusively on the LaundryRage app.
              </p>
            </div>
            <a
              href={PLAY_STORE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button text-sm shrink-0"
            >
              <Download className="mr-2 w-4 h-4" /> Get the App
            </a>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center rounded-3xl p-10 md:p-12 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #111827, #1F2937)' }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/10 rounded-full blur-[60px]" />
            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #FACC15, #F59E0B)' }}>
                <Smartphone className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold font-display text-white mb-3 tracking-tight">
                Want to book a service?
              </h3>
              <p className="text-gray-400 font-medium mb-7 max-w-lg mx-auto text-sm md:text-base">
                Download the LaundryRage app for the best booking experience,
                real-time tracking, and exclusive app-only offers!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={PLAY_STORE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button text-sm"
                >
                  <Download className="w-4 h-4 mr-2" /> Android App
                </a>
                <a
                  href={APP_STORE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-bold px-7 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm"
                >
                  <Download className="w-4 h-4" /> iOS App
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
