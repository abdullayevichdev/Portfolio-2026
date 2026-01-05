import React from 'react';
import { Instagram, Phone, MapPin, Send, MessageCircle, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">AVAZXANOV</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Kreativ raqamli yechimlar va kelajak texnologiyalari. Men sizning g'oyalaringizni reallikka aylantirishga tayyorman.
            </p>
          </div>

          {/* Contact Direct */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Bog'lanish</h4>
            <a href="tel:+998933223580" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
              <Phone size={18} />
              <span>+998 93 322 35 80</span>
            </a>
            <div className="flex items-start gap-3 text-gray-400">
              <MapPin size={18} className="mt-1 shrink-0" />
              <span className="text-sm">O'zbekiston, Namangan viloyati, Namangan shahri, Davlatobod tumani, G'irvon mahallasi</span>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Ijtimoiy Tarmoqlar</h4>
            <a href="https://instagram.com/avazxanov_701" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition-colors">
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
            <a href="https://t.me/Abdullayevich_design" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
              <Send size={18} />
              <span>Telegram Akkaunt</span>
            </a>
            <a href="https://t.me/Robotexnika_LSL" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
              <MessageCircle size={18} />
              <span>Telegram Kanal</span>
            </a>
          </div>

          {/* Newsletter / Placeholder */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Xabar yuborish</h4>
             <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="email" 
                    placeholder="Email manzilingiz" 
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                    Yuborish
                </button>
             </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
            <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Abdulhay Avazxanov. Barcha huquqlar himoyalangan.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;