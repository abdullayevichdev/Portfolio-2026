import React from 'react';
import { motion } from 'framer-motion';
import { Stat } from '../types';

const stats: Stat[] = [
  { label: 'Bajarilgan Loyihalar', value: 50, suffix: '+' },
  { label: 'Yillik Tajriba', value: 3, suffix: '+' },
  { label: 'Mamnun Mijozlar', value: 100, suffix: '+' },
];

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-3xl p-10 border border-white/10 shadow-2xl bg-gradient-to-b from-white/5 to-transparent">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => (
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
      className="text-center p-4"
    >
      <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 mb-2 font-mono">
        {stat.value}{stat.suffix}
      </div>
      <p className="text-blue-200 text-lg uppercase tracking-widest text-xs font-semibold">
        {stat.label}
      </p>
    </motion.div>
  );
};

export default Stats;