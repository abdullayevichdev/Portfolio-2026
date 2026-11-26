import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import logo from '../assets/logo.jpg';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.services, href: '#services' },
    { name: t.projects, href: '#projects' },
    { name: t.certificates, href: '#certificates' },
    { name: t.bots, href: '#bots' },
    { name: t.about, href: '#about' },
    { name: t.skills, href: '#skills' },
    { name: t.contact, href: '#contact' },
  ];

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [language]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const headerOffset = 100;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'pt-3' : 'pt-6'}`}>
      <div className={`mx-auto flex justify-between items-center transition-all duration-500 ${scrolled ? 'glass-nav rounded-full max-w-6xl w-[calc(100%-1.5rem)] px-4 sm:px-6 py-2.5' : 'container px-6 py-2'}`}>
        <a 
          href="#" 
          onClick={handleLogoClick}
          className="group flex items-center gap-3 transition-all cursor-pointer"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg overflow-hidden bg-white shadow-xl transition-transform group-hover:scale-110 duration-300">
              <img src={logo} alt="Abdulhay Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-black tracking-tighter text-slate-900 group-hover:text-sky-500 transition-colors">
              Abdulhay<span className="text-sky-500">.</span>dev
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
              {t.role}
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-5">
          <div className="flex gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-2 rounded-full whitespace-nowrap text-[13px] font-semibold tracking-wide uppercase transition-colors cursor-pointer select-none ${active === link.href ? 'text-sky-700' : 'text-slate-600 hover:text-sky-500'}`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full glass-pill shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Desktop Language Switcher */}
          <div className="flex items-center bg-white/70 border border-slate-200/80 rounded-full p-1 shadow-sm backdrop-blur-md">
            <button
              type="button"
              onClick={() => setLanguage('uz')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                language === 'uz'
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>🇺🇿</span>
              <span>UZ</span>
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                language === 'en'
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>🇬🇧</span>
              <span>EN</span>
            </button>
          </div>
        </div>

        {/* Mobile Actions: Language Switcher + Hamburger */}
        <div className="flex xl:hidden items-center gap-3">
          <div className="flex items-center bg-white/70 border border-slate-200/80 rounded-full p-0.5 shadow-sm backdrop-blur-md">
            <button
              type="button"
              onClick={() => setLanguage('uz')}
              className={`px-2 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                language === 'uz'
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-sm'
                  : 'text-slate-600'
              }`}
            >
              UZ
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-sm'
                  : 'text-slate-600'
              }`}
            >
              EN
            </button>
          </div>

          <button
            className="text-slate-800 p-2 hover:bg-slate-200/50 rounded-lg transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          className="xl:hidden glass-nav absolute left-3 right-3 top-full mt-3 rounded-3xl p-6 flex flex-col gap-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-700 hover:text-sky-500 text-lg font-medium py-2 border-b border-slate-200/60 last:border-0 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;