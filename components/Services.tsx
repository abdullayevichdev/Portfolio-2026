import React from 'react';
import { Palette, ShieldCheck, Globe, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { FadeUp, StaggerContainer, StaggerItem } from './Animations';

const serviceIcons = [
  { icon: Globe, color: 'text-sky-500', bg: 'bg-sky-500/20' },
  { icon: Smartphone, color: 'text-pink-500', bg: 'bg-pink-500/20' },
  { icon: Palette, color: 'text-purple-500', bg: 'bg-purple-500/20' },
  { icon: ShieldCheck, color: 'text-teal-500', bg: 'bg-teal-500/20' }
];

const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeUp>
            <span className="text-sky-500 font-mono text-sm tracking-widest uppercase mb-2 block">{t.tag}</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-800">{t.title}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((service, index) => {
            const meta = serviceIcons[index] || serviceIcons[0];
            const Icon = meta.icon;
            return (
              <StaggerItem key={service.id} className="h-full">
                <div 
                  className="group glass-card p-6 rounded-2xl hover:border-sky-400/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.2)] h-full flex flex-col"
                >
                  <div className={`w-14 h-14 ${meta.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`${meta.color}`} size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;