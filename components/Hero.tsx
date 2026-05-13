import React from 'react';
import { ArrowRight, ChevronDown, Rocket, Sparkles, Instagram, Send, MessageCircle, Github, Code, Download, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp } from './Animations';
import IAM from '../assets/IAM.jpg';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-32">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="text-left relative z-10 pt-10 lg:pt-0">
          <FadeUp delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-sky-600 uppercase bg-sky-100/50 rounded-full border border-sky-300/50 backdrop-blur-md">
              <Sparkles size={14} />
              <span>Frontend Developer</span>
            </div>
          </FadeUp>
          
          <h1 className="text-5xl md:text-[5rem] font-extrabold mb-8 leading-[1.1] tracking-tight text-slate-900">
            <FadeUp delay={0.2}><span className="block mb-2">Salom, men</span></FadeUp>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 pb-2 pr-2">
              Abdulhay Avazxanov
            </span>
          </h1>
          
          <FadeUp delay={0.6}>
            <p className="text-slate-500 text-lg md:text-xl mb-12 leading-relaxed max-w-xl">
              Zamonaviy va interaktiv foydalanuvchi interfeyslarini yaratuvchi <span className="text-slate-800 font-bold">Veb-Muhandisman</span>. 
              G'oyalarni raqamli reallikka aylantirish — mening asosiy maqsadim.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.8}>
            <div className="flex flex-wrap gap-5 mb-16">
              <motion.a 
                href="#projects" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-sky-400 to-pink-400 rounded-2xl text-white font-bold transition-all shadow-lg shadow-sky-400/25 flex items-center justify-center gap-3"
              >
                Loyihalarimni ko'rish <ArrowRight size={20} />
              </motion.a>
              <motion.button 
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/60 border border-slate-200 rounded-2xl text-slate-800 font-bold hover:bg-white transition-all shadow-sm backdrop-blur-md"
              >
                Bog'lanish
              </motion.button>
            </div>
          </FadeUp>

          {/* Social Links */}
          <FadeUp delay={1}>
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Follow Me</span>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram size={20} />, href: "https://instagram.com/avazxanov_701" },
                  { icon: <Send size={20} />, href: "https://t.me/Abdullayevich_dev" },
                  { icon: <MessageCircle size={20} />, href: "https://t.me/frontenddevuz" },
                  { icon: <Github size={20} />, href: "https://github.com/abdullayevichdev" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, color: '#0ea5e9' }}
                    className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-slate-400 transition-colors border border-white/60"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Right Column - Redesigned Image Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-center lg:-translate-x-20 px-4 sm:px-0"
        >
          <div className="relative w-full aspect-[4/5] max-w-[320px] sm:max-w-[400px] lg:max-w-[500px]">
             {/* Complex Background Glow */}
             <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-tr from-sky-400/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[60px] sm:blur-[80px] opacity-60 animate-pulse-slow"></div>
             
             {/* Main Image Frame */}
             <div className="relative h-full w-full rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden border-4 sm:border-8 border-white/40 shadow-2xl bg-white/20 backdrop-blur-md">
                <img 
                  src={IAM} 
                  alt="Abdulhay Avazxanov" 
                  className="w-full h-full object-cover transform transition-transform duration-1000 hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>

                {/* Floating Role Badge (Bottom) */}
                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-20">
                    <div className="glass-card p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] border border-white/80 shadow-2xl flex items-center justify-between">
                        <div>
                             <p className="text-[8px] sm:text-[10px] font-bold text-sky-500 uppercase tracking-widest mb-0.5 sm:mb-1">Current Role</p>
                             <p className="font-extrabold text-slate-800 text-sm sm:text-xl leading-tight">Frontend Developer</p>
                        </div>
                        <motion.a 
                            href={IAM}
                            download="Abdulhay_Avazxanov.jpg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 sm:p-3 bg-sky-500 rounded-xl sm:rounded-2xl text-white shadow-lg shadow-sky-500/30 cursor-pointer"
                            title="Rasm yuklab olish"
                        >
                            <Download size={18} className="sm:w-5 sm:h-5" />
                        </motion.a>
                    </div>
                </div>
             </div>

             {/* Floating Dynamic Cards - Adjusted for Mobile */}
             <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute top-1/4 -left-6 sm:-left-12 z-30 glass-card pl-3 pr-4 sm:pl-4 sm:pr-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 shadow-xl border border-white/60"
             >
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)] animate-pulse"></div>
                <div className="flex flex-col">
                    <span className="text-[10px] sm:text-xs font-bold text-slate-800">Available</span>
                    <span className="text-[8px] sm:text-[9px] text-slate-500">for Projects</span>
                </div>
             </motion.div>

             <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="absolute top-1/2 -right-4 sm:-right-8 z-30 bg-slate-900/80 backdrop-blur-xl pl-3 pr-4 sm:pl-4 sm:pr-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 shadow-xl border border-white/10"
             >
                <div className="p-1.5 sm:p-2 bg-sky-500/20 rounded-lg sm:rounded-xl">
                    <Code size={16} className="text-sky-400 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] sm:text-xs font-bold text-white">3+ Years</span>
                    <span className="text-[8px] sm:text-[9px] text-slate-400">Experience</span>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a 
        href="#stats"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-sky-500 transition-colors cursor-pointer z-20"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;