import React from 'react';
import { Code2, Palette, Database, Layout, Smartphone, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { Skill } from '../types';

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
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-800 tracking-wide">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {skills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                   {skill.icon && <skill.icon className="text-sky-500 group-hover:text-pink-500 transition-colors" size={20} />}
                   <span className="text-lg font-bold text-slate-800 tracking-wide">{skill.name}</span>
                </div>
                <span className="text-slate-500 font-mono text-sm tracking-wider">
                    {skill.name.includes('HTML') ? '40%' : skill.name.includes('JavaScript') ? '30%' : t.expert}
                </span>
              </div>
              <div className="h-1.5 w-full bg-slate-200/50 rounded-full overflow-hidden shadow-inner">
                <div 
                    className="h-full bg-gradient-to-r from-sky-400 via-purple-300 to-pink-400 rounded-full relative overflow-hidden transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                >
                    <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite] transform -skew-x-12"></div>
                </div>
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