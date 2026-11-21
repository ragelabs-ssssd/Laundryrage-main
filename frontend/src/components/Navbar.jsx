import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { QRModal } from './SharedUI';
import { BrandLogo, wavyYellowBgStyle } from './BrandMark';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'For Business', href: '#business', badge: 'B2B' },
  { label: 'FAQs', href: '#faq' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header id="main-navbar" className="fixed top-0 inset-x-0 z-50 transition-all duration-300 pointer-events-none">
        <div
          style={!scrolled ? wavyYellowBgStyle : undefined}
          className={`pointer-events-auto transition-all duration-300 ${
            scrolled
              ? 'max-w-5xl mx-auto mt-3 px-5 sm:px-6 rounded-full bg-white/95 backdrop-blur-xl border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
              : 'w-full border-b border-black/10 shadow-sm'
          }`}
        >
          <div
            className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'h-14 sm:h-16 px-0' : 'h-16 sm:h-20 px-4 sm:px-6 lg:px-8'
            }`}
          >
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center shrink-0"
              aria-label="LaundryRage Home"
            >
              <BrandLogo size={scrolled ? 'sm' : 'nav'} />
            </a>

            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="inline-flex items-center gap-1.5 text-[0.95rem] font-bold text-gray-900 hover:text-black transition-colors whitespace-nowrap"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-slate-950 text-[#FACC15] text-[10px] font-extrabold leading-none">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setQrOpen(true)}
                className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-gray-950 text-white text-sm font-bold hover:bg-gray-800 transition-colors shadow-sm whitespace-nowrap"
              >
                Get the App
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle Menu"
                className="md:hidden w-10 h-10 rounded-full bg-black/10 text-gray-950 flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="pointer-events-auto md:hidden mx-4 mt-2 p-4 rounded-2xl bg-white border border-gray-200 shadow-xl space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold text-gray-800 hover:bg-gray-50"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 rounded-full bg-slate-950 text-[#FACC15] text-[10px] font-extrabold">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setQrOpen(true);
              }}
              className="w-full py-3 rounded-xl bg-gray-950 text-white text-sm font-bold"
            >
              Get the App
            </button>
          </div>
        )}
      </header>

      <QRModal isOpen={qrOpen} onClose={() => setQrOpen(false)} />
    </>
  );
};

export default Navbar;
