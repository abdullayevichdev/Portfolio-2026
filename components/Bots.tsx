import React from 'react';
import { Bot, Send, MessageSquare, Zap, Cpu } from 'lucide-react';
import { Bot as BotType } from '../types';

const bots: BotType[] = [
  {
    id: 1,
    title: 'Ingliz Tili Test Boti',
    url: 'https://t.me/Abdulhaydev_bot',
    description: 'Ingliz tili darajasini aniqlash uchun AI-asosli interaktiv test tizimi.'
  },
  {
    id: 2,
    title: 'Avtosalon Manager',
    url: 'https://t.me/Wear_Market_bot',
    description: 'Avtomatlashtirilgan savdo va mijozlar bazasi (CRM) integratsiyasi.'
  },
  {
    id: 3,
    title: 'Fortex Oil Corporate',
    url: 'https://t.me/Fortex_oil_bot',
    description: 'Neft kompaniyasi xodimlari va mijozlari uchun korporativ ma\'lumot tizimi.'
  }
];

const Bots: React.FC = () => {
  return (
    <section id="bots" className="py-24 relative z-10">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-6 backdrop-blur-xl border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <Bot size={40} className="text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-800">Telegram Avtomatlashtirish</h2>
          <p className="text-slate-500 max-w-2xl">
            Biznes jarayonlarini tezlashtiruvchi va mijozlar bilan aloqani osonlashtiruvchi aqlli botlar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bots.map((bot, index) => (
            <a
              key={bot.id}
              href={bot.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass-card rounded-[2rem] p-1 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] overflow-hidden"
            >
              {/* Liquid Hover Blob */}
              <div className="absolute -inset-full bg-gradient-to-tr from-sky-400/30 to-pink-400/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none group-hover:animate-blob"></div>
              
              <div className="relative h-full rounded-[1.8rem] p-8 flex flex-col overflow-hidden z-10">
                
                {/* Decorative Circuit Lines */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                   <Cpu size={120} className="text-blue-500 transform rotate-12 translate-x-8 -translate-y-8" />
                </div>

                <div className="w-12 h-12 bg-sky-100/50 rounded-lg flex items-center justify-center mb-6 border border-sky-200 group-hover:bg-sky-200/50 group-hover:border-sky-300 transition-colors">
                  <MessageSquare className="text-sky-500" size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
                  {bot.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {bot.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-200 flex items-center justify-between">
                   <span className="text-xs font-mono text-slate-400 group-hover:text-sky-500 transition-colors">v1.0.RELEASE</span>
                   <div className="flex items-center gap-2 text-slate-800 font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Botni ochish <Send size={14} className="text-sky-500" />
                   </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bots;