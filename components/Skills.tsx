import React from 'react';
import { Code2, Palette, Database, Layout, Smartphone, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { Skill } from '../types';
import { motion } from 'framer-motion';
import { SectionHeading } from './Animations';

const skills: Skill[] = [
  { name: 'HTML5', level: 90, icon: Layout },
  { name: 'CSS / Frontend Design', level: 85, icon: Palette },
  { name: 'JavaScript', level: 30, icon: Code2 },
  { name: 'Python (Backend)', level: 45, icon: Database },
  { name: 'React', level: 60, icon: Zap },
  { name: 'Telegram Bot Dev', level: 75, icon: Smartphone },
];

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <SectionHeading tag="Skills" title={t.title} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="group glass-card rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                   {skill.icon && <span className="icon-glow w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 flex items-center justify-center shadow-md shadow-sky-400/40"><skill.icon className="text-white" size={18} /></span>}
                   <span className="text-lg font-bold text-slate-800 tracking-wide">{skill.name}</span>
                </div>
                <span className="text-slate-500 font-mono text-sm tracking-wider">
                    {skill.name.includes('HTML') ? '40%' : skill.name.includes('JavaScript') ? '30%' : t.expert}
                </span>
              </div>
              <div className="h-2 w-full bg-white/50 rounded-full shadow-inner border border-white/70">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 rounded-full relative overflow-hidden shadow-[0_0_14px_rgba(139,92,246,0.6)]"
                >
                    <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.7)_50%,transparent_70%)] bg-[length:200%_100%] animate-shimmer"></div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skill Cards for Graphic Design */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="glass-card p-6 rounded-2xl flex items-center gap-5 group cursor-default">
              <div className="w-14 h-14 rounded-full bg-pink-100/50 border border-pink-200 flex items-center justify-center text-pink-500 group-hover:scale-110 group-hover:bg-pink-200/50 transition-all">
                  <Palette size={24} />
              </div>
              <div>
                  <h4 className="font-bold text-slate-800 text-lg tracking-wide mb-1">{t.card1Title}</h4>
                  <p className="text-sm text-slate-500">{t.card1Desc}</p>
              </div>
           </div>
           <div className="glass-card p-6 rounded-2xl flex items-center gap-5 group cursor-default">
              <div className="w-14 h-14 rounded-full bg-sky-100/50 border border-sky-200 flex items-center justify-center text-sky-500 group-hover:scale-110 group-hover:bg-sky-200/50 transition-all">
                  <Database size={24} />
              </div>
              <div>
                  <h4 className="font-bold text-slate-800 text-lg tracking-wide mb-1">{t.card2Title}</h4>
                  <p className="text-sm text-slate-500">{t.card2Desc}</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;