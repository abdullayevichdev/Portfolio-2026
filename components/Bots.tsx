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
    <section id="bots" className="py-24 relative overflow-hidden bg-[#0a0f1c]">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-6 backdrop-blur-xl border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <Bot size={40} className="text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Telegram Avtomatlashtirish</h2>
          <p className="text-gray-400 max-w-2xl">
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
              className="group relative bg-slate-900/50 hover:bg-slate-800/80 p-1 rounded-3xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
              
              <div className="relative h-full bg-[#0f172a] rounded-[1.4rem] p-8 border border-white/5 group-hover:border-blue-500/30 flex flex-col overflow-hidden">
                
                {/* Decorative Circuit Lines */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Cpu size={120} className="text-blue-500 transform rotate-12 translate-x-8 -translate-y-8" />
                </div>

                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-colors">
                  <MessageSquare className="text-blue-400" size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {bot.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {bot.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                   <span className="text-xs font-mono text-gray-500 group-hover:text-blue-400 transition-colors">v1.0.RELEASE</span>
                   <div className="flex items-center gap-2 text-white font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Botni ochish <Send size={14} className="text-blue-400" />
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