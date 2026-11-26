import React from 'react';
import { Bot, Send, MessageSquare, Cpu, Wallet } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { SOCIALS } from '../data/socials';
import { SectionHeading, StaggerContainer, StaggerItem, TiltCard } from './Animations';

const botLinks = [
  'https://t.me/Abdulhaydev_bot',
  'https://t.me/Wear_Market_bot',
  'https://t.me/Fortex_oil_bot',
  'https://t.me/taklifim_paycheck_bot',
];

const botIcons = [MessageSquare, MessageSquare, MessageSquare, Wallet];

const Bots: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].bots;

  return (
    <section id="bots" className="py-24 relative z-10">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading tag="Telegram" title={t.title} subtitle={t.subtitle} icon={<Bot size={12} />} />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {t.items.map((bot, index) => {
            const url = botLinks[index] || SOCIALS.telegram;
            const Icon = botIcons[index] || MessageSquare;
            const isNew = index === botLinks.length - 1;
            return (
              <StaggerItem key={bot.id} className="h-full">
                <TiltCard className="h-full" intensity={6}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative glass-card rounded-[2rem] p-1 h-full flex overflow-hidden cursor-pointer"
                  >
                    {/* Liquid Hover Blob */}
                    <div className="absolute -inset-full bg-gradient-to-tr from-sky-400/30 via-violet-400/20 to-pink-400/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none group-hover:animate-blob"></div>

                    <div className="relative h-full w-full rounded-[1.8rem] p-8 flex flex-col overflow-hidden z-10">
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-25 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                        <Cpu size={120} className="text-sky-500 transform rotate-12 translate-x-8 -translate-y-8" />
                      </div>

                      <div className="flex items-center justify-between mb-6">
                        <div className="icon-glow w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 flex items-center justify-center shadow-lg shadow-sky-400/40">
                          <Icon className="text-white" size={26} />
                        </div>
                        {isNew && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-pink-500 to-violet-500 shadow-[0_0_18px_rgba(236,72,153,0.6)] animate-pulse">
                            New
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
                        {bot.title}
                      </h3>

                      <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                        {bot.description}
                      </p>

                      <div className="mt-auto pt-6 border-t border-white/60 flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-400 group-hover:text-sky-500 transition-colors">{t.release}</span>
                        <div className="flex items-center gap-2 text-slate-800 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                          {t.openBot} <Send size={14} className="text-sky-500 group-hover:-rotate-12 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </a>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Bots;
