import React from 'react';
import { Instagram, Phone, MapPin, Send, MessageCircle, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="glass-nav border-t border-slate-200/50 pt-20 pb-10 relative z-10 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-800">AVAZXANOV</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Kreativ raqamli yechimlar va kelajak texnologiyalari. Men sizning g'oyalaringizni reallikka aylantirishga tayyorman.
            </p>
          </div>

          {/* Contact Direct */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Bog'lanish</h4>
            <a href="tel:+998933223580" className="flex items-center gap-3 text-slate-600 hover:text-sky-500 transition-colors">
              <Phone size={18} />
              <span>+998 93 322 35 80</span>
            </a>
            <div className="flex items-start gap-3 text-slate-600">
              <MapPin size={18} className="mt-1 shrink-0" />
              <span className="text-sm">O'zbekiston, Namangan viloyati, Namangan shahri, Davlatobod tumani, G'irvon mahallasi</span>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Ijtimoiy Tarmoqlar</h4>
            <a href="https://instagram.com/avazxanov_701" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-pink-500 transition-colors">
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
            <a href="https://t.me/Abdullayevich_dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-sky-500 transition-colors">
              <Send size={18} />
              <span>Telegram Akkaunt</span>
            </a>
            <a href="https://t.me/frontenddevuz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-sky-500 transition-colors">
              <MessageCircle size={18} />
              <span>Telegram Kanal</span>
            </a>
          </div>

          {/* Newsletter / Placeholder */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-800">Xabar yuborish</h4>
             <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="email" 
                    placeholder="Email manzilingiz" 
                    className="bg-white/50 border border-white/80 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-sky-400 text-slate-800 placeholder-slate-400"
                />
                <button className="bg-gradient-to-r from-sky-400 to-pink-400 hover:opacity-90 text-white py-2 rounded-lg text-sm font-bold transition-colors shadow-md">
                    Yuborish
                </button>
             </form>
          </div>
        </div>

        <div className="border-t border-slate-200/50 pt-8 text-center">
            <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Abdulhay Avazxanov. Barcha huquqlar himoyalangan.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;