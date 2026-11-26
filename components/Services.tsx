import React from 'react';
import { Palette, ShieldCheck, Globe, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { SectionHeading, StaggerContainer, StaggerItem, TiltCard } from './Animations';

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
        <SectionHeading tag={t.tag} title={t.title} subtitle={t.subtitle} />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((service, index) => {
            const meta = serviceIcons[index] || serviceIcons[0];
            const Icon = meta.icon;
            return (
              <StaggerItem key={service.id} className="h-full">
                <TiltCard className="h-full" intensity={7}>
                <div 
                  className="group glass-card p-7 rounded-[1.75rem] h-full flex flex-col relative overflow-hidden"
                >
                  <span className="absolute top-5 right-6 text-5xl font-black text-slate-900/[0.04] group-hover:text-sky-500/10 transition-colors duration-500">0{index + 1}</span>
                  <div className={`icon-glow w-14 h-14 ${meta.bg} rounded-2xl flex items-center justify-center mb-6 border border-white/70 shadow-[inset_0_1px_0_#fff]`}>
                    <Icon className={`${meta.color}`} size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;