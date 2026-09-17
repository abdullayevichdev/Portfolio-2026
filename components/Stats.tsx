import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { Stat } from '../types';

const Stats: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].stats;

  const statsList: Stat[] = [
    { label: t.completed, value: 50, suffix: '+' },
    { label: t.experience, value: 3, suffix: '+' },
    { label: t.clients, value: 100, suffix: '+' },
  ];

  return (
    <section id="stats" className="py-12 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="glass-card rounded-3xl md:rounded-[2rem] p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {statsList.map((stat, index) => (
              <CounterItem key={index} stat={stat} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CounterItem: React.FC<{ stat: Stat; delay: number }> = ({ stat, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center px-4 md:px-12 flex flex-col items-center justify-center py-4 md:py-0"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-3 tracking-wider font-sans">
        {stat.value}{stat.suffix}
      </div>
      <p className="text-slate-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
        {stat.label}
      </p>
    </motion.div>
  );
};

export default Stats;