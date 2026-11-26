import React from 'react';
import { Instagram, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { SOCIALS } from '../data/socials';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer id="contact" className="glass-nav rounded-t-[3rem] pt-20 pb-10 relative z-10 mt-12 overflow-hidden">
      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_20px_rgba(56,189,248,0.9)]"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-sky-400/20 via-violet-400/20 to-pink-400/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-black tracking-tight text-shimmer">AVAZXANOV</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.brandDesc}
            </p>
          </div>

          {/* Contact Direct */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">{t.contactTitle}</h4>
            <a href="tel:+998933223580" className="flex items-center gap-3 text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-sky-500">
              <Phone size={18} />
              <span>+998 93 322 35 80</span>
            </a>
            <div className="flex items-start gap-3 text-slate-600">
              <MapPin size={18} className="mt-1 shrink-0" />
              <span className="text-sm">{t.location}</span>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">{t.socialsTitle}</h4>
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-pink-500">
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
            <a href={SOCIALS.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-sky-500">
              <Send size={18} />
              <span>{t.tgAccount}</span>
            </a>
            <a href={SOCIALS.telegramChannel} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-sky-500">
              <MessageCircle size={18} />
              <span>{t.tgChannel}</span>
            </a>
          </div>

          {/* Newsletter / Form */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">{t.messageTitle}</h4>
             <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="email" 
                    placeholder={t.emailPlaceholder}
                    className="glass-pill rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400/60 focus:shadow-[0_0_25px_rgba(56,189,248,0.45)] transition-shadow text-slate-800 placeholder-slate-400"
                />
                <button className="btn-glow text-white py-3 rounded-xl text-sm font-bold transition-transform hover:scale-[1.02] active:scale-95 cursor-pointer">
                    {t.sendBtn}
                </button>
             </form>
          </div>
        </div>

        <div className="border-t border-slate-200/50 pt-8 text-center">
            <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} {t.copyright}
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;