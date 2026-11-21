import React, { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PLAY_STORE_LINK = 'https://play.google.com/store/search?q=laundryrage&c=apps&hl=en_IN';

const StickyDownloadBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;
      const footer = document.getElementById('site-footer');
      const footerTop = footer ? footer.getBoundingClientRect().top : Infinity;
      const nearFooter = footerTop <= window.innerHeight + 20;
      setIsVisible(window.scrollY > 600 && !nearFooter);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isDismissed]);

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="sticky-bar"
          id="sticky-download-bar"
        >
          <div className="container mx-auto px-4 md:px-12 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, #FACC15, #F59E0B)' }}>
                <Download className="w-4 h-4 text-gray-900" />
              </div>
              <div className="min-w-0 hidden sm:block">
                <p className="text-white font-bold text-sm truncate">Get LaundryRage App</p>
                <p className="text-gray-400 text-xs truncate">50% OFF your first order!</p>
              </div>
              <p className="text-white font-bold text-sm sm:hidden truncate">50% OFF first order!</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={PLAY_STORE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-gray-900 transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #FACC15, #F59E0B)',
                  boxShadow: '0 2px 8px rgba(250,204,21,0.4)'
                }}
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
              <button
                onClick={() => setIsDismissed(true)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyDownloadBar;
