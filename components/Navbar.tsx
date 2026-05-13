import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Xizmatlar', href: '#services' },
    { name: 'Loyihalar', href: '#projects' },
    { name: 'Sertifikatlar', href: '#certificates' },
    { name: 'Botlar', href: '#bots' },
    { name: 'Men Haqimda', href: '#about' },
    { name: 'Ko\'nikmalar', href: '#skills' },
    { name: 'Bog\'lanish', href: '#contact' },
  ];

  // Maxsus silliq o'tish funksiyasi (Linklar ishlashini kafolatlaydi)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Oddiy sakrashni to'xtatib, o'zimiz boshqaramiz
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const headerOffset = 100; // Navbar balandligini hisobga olamiz
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false); // Mobil menyuni yopish
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
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
              Frontend Engineer
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-600 hover:text-sky-500 transition-colors text-sm font-medium tracking-wide uppercase hover:underline decoration-sky-500 decoration-2 underline-offset-8 cursor-pointer select-none"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-800 p-2 hover:bg-slate-200/50 rounded-lg transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden glass-nav absolute w-full left-0 top-full p-6 flex flex-col gap-4 border-t border-gray-800 animate-in slide-in-from-top-5 duration-200 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-600 hover:text-sky-500 text-lg font-medium py-2 border-b border-slate-200 last:border-0 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;