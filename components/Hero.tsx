import React from 'react';
import { ArrowRight, ChevronDown, Rocket, Sparkles, Instagram, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, TextReveal } from './Animations';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 lg:pb-0">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-left relative z-10 pt-10 lg:pt-0">
          <FadeUp delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/30 rounded-full border border-cyan-500/30 backdrop-blur-md">
              <Sparkles size={14} />
              <span>Future Web Engineering</span>
            </div>
          </FadeUp>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            <FadeUp delay={0.2}><span className="block mb-2">Salom, men</span></FadeUp>
            <TextReveal 
              delay={0.4} 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 text-glow pb-2 pr-2"
            >
              Abdulhay Avazxanov
            </TextReveal>
          </h1>
          
          <FadeUp delay={0.6}>
            <p className="text-blue-100/80 text-lg md:text-xl mb-10 leading-relaxed max-w-lg border-l-2 border-blue-500/50 pl-6">
              Media, IT, Robototexnika va Veb-muhandislik sohalarida 3 yillik tajriba. Men oddiy g'oyalarni <span className="text-white font-semibold">premium raqamli reallikka</span> aylantiraman.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a 
                href="#projects" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Loyihalarimni ko'rish</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>
              <motion.button 
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 transition-all text-center backdrop-blur-sm hover:border-white/20 cursor-pointer"
              >
                Bog'lanish
              </motion.button>
            </div>
          </FadeUp>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-12 lg:mt-0"
        >
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto perspective-1000">
             {/* Glowing backdrops */}
             <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-[2rem] opacity-30 blur-2xl animate-pulse-slow"></div>
             
             {/* Main Card */}
             <div className="relative h-full w-full glass-card rounded-[2rem] overflow-hidden border border-white/20 p-3 group transform transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" 
                  alt="Tech Abstract" 
                  className="w-full h-full object-cover rounded-[1.5rem] opacity-90 group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Social Badges Container - Animated */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 flex flex-col gap-3">
                     
                     <motion.a 
                       initial={{ x: -50, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ delay: 1 }}
                       href="https://instagram.com/avazxanov_701" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="glass-card pl-2 pr-4 py-2 rounded-full border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group/insta shadow-lg w-fit"
                     >
                        <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-1.5 rounded-full shadow-md">
                           <Instagram size={14} className="text-white" />
                        </div>
                        <span className="text-xs font-bold text-white tracking-wide group-hover/insta:text-pink-300 transition-colors">avazxanov_701</span>
                     </motion.a>

                     <motion.a 
                       initial={{ x: -50, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ delay: 1.2 }}
                       href="https://t.me/Abdullayevich_design" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="glass-card pl-2 pr-4 py-2 rounded-full border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group/tg shadow-lg w-fit"
                     >
                        <div className="bg-gradient-to-tr from-blue-400 to-blue-600 p-1.5 rounded-full shadow-md">
                           <Send size={14} className="text-white" />
                        </div>
                        <span className="text-xs font-bold text-white tracking-wide group-hover/tg:text-blue-300 transition-colors">Abdullayevich</span>
                     </motion.a>

                     <motion.a 
                       initial={{ x: -50, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ delay: 1.4 }}
                       href="https://t.me/Robotexnika_LSL" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="glass-card pl-2 pr-4 py-2 rounded-full border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group/ch shadow-lg w-fit"
                     >
                        <div className="bg-gradient-to-tr from-cyan-400 to-teal-500 p-1.5 rounded-full shadow-md">
                           <MessageCircle size={14} className="text-white" />
                        </div>
                        <span className="text-xs font-bold text-white tracking-wide group-hover/ch:text-teal-300 transition-colors">Robotexnika_LSL</span>
                     </motion.a>

                </div>

                <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20 glass-card p-3 rounded-2xl border border-white/10">
                    <Rocket className="text-blue-400" size={24} />
                </div>

                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20">
                    <div className="glass-card p-5 rounded-2xl border border-white/10 backdrop-blur-xl">
                        <div className="flex justify-between items-center mb-2">
                             <span className="text-xs font-mono text-cyan-400">SYSTEM STATUS</span>
                             <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                             </span>
                        </div>
                        <p className="font-bold text-white text-lg">Open to Work</p>
                        <p className="text-sm text-gray-400">Available for Freelance & Projects</p>
                    </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>

      <motion.a 
        href="#stats"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white transition-colors cursor-pointer z-20"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;