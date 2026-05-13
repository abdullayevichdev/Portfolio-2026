import React from 'react';
import { User, BookOpen, Cpu, Sparkles, GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp } from './Animations';
import IAM from '../assets/IAM.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-sky-200/20 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center"
          >
             {/* Complex Frame Design */}
             <div className="relative group perspective-1000 w-full max-w-[320px] sm:max-w-[440px] lg:max-w-[560px]">
                {/* Outer Glow */}
                <div className="absolute -inset-6 sm:-inset-12 bg-gradient-to-tr from-sky-400/20 via-pink-400/20 to-purple-400/20 rounded-[2rem] sm:rounded-[3rem] blur-[60px] sm:blur-[100px] opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                
                {/* Main Image Wrapper */}
                <div className="relative glass-card rounded-[2.5rem] sm:rounded-[3.5rem] p-2.5 sm:p-3.5 border border-white/60 shadow-2xl overflow-hidden">
                    <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden aspect-[4/5]">
                        <img 
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" 
                            alt="Professional Coding Setup" 
                            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80"></div>
                    </div>
                </div>

                {/* Floating Info Badges */}
                <motion.div 
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -right-4 sm:-right-8 top-8 sm:top-12 glass-card py-2.5 px-4 sm:py-4 sm:px-6 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 border border-white/80 shadow-2xl z-20"
                >
                    <div className="p-2 sm:p-2.5 bg-sky-100 rounded-lg sm:rounded-xl">
                        <GraduationCap className="text-sky-500" size={18} />
                    </div>
                    <div>
                        <p className="text-[8px] sm:text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">Education</p>
                        <p className="text-xs sm:text-base font-bold text-slate-800">LSL School</p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="absolute -left-4 sm:-left-8 bottom-8 sm:bottom-12 glass-card py-2.5 px-4 sm:py-4 sm:px-6 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 border border-white/80 shadow-2xl z-20"
                >
                    <div className="p-2 sm:p-2.5 bg-pink-100 rounded-lg sm:rounded-xl">
                        <MapPin className="text-pink-500" size={18} />
                    </div>
                    <div>
                        <p className="text-[8px] sm:text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">Location</p>
                        <p className="text-xs sm:text-base font-bold text-slate-800">Namangan, UZB</p>
                    </div>
                </motion.div>
             </div>
          </motion.div>

          {/* Text Column */}
          <div className="relative mt-12 lg:mt-0">
            <FadeUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold tracking-widest text-sky-500 uppercase bg-sky-50 border border-sky-100 rounded-full">
                    <Sparkles size={12} />
                    <span>Who I Am</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 sm:mb-10 leading-tight text-slate-900">
                    Men haqimda <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500">
                        qisqacha
                    </span>
                </h2>
            </FadeUp>
            
            <div className="space-y-8 text-lg text-slate-500 leading-relaxed">
              <FadeUp delay={0.2}>
                  <p>
                    Men <strong className="text-slate-800">Abdulhay Avazxanov</strong>man, LSL maktabining 8-B sinf o'quvchisiman. 
                    Men zamonaviy, tezkor va kuchli raqamli mahsulotlar yaratishga qaratilgan kreativ veb-dizayner va veb-dasturchiman.
                  </p>
              </FadeUp>
              
              <FadeUp delay={0.3}>
                  <p>
                    Mening maqsadim — texnologiyalar orqali insonlar hayotini osonlashtirish va yuqori darajadagi foydalanuvchi tajribasini (UX) taqdim etuvchi interfeyslar yaratish.
                  </p>
              </FadeUp>
              
              <FadeUp delay={0.4}>
                  <div className="glass-card p-8 rounded-[2rem] border border-white/60 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Cpu size={80} />
                    </div>
                    <div className="flex items-start gap-5 relative z-10">
                      <div className="p-3 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl shadow-lg shadow-sky-200">
                        <Cpu className="text-white" size={28} />
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-extrabold text-xl mb-2">Muhandislik Ustozim</h4>
                        <p className="text-slate-500 leading-relaxed">
                          LSLdagi birinchi muhandislik ustozim <span className="text-sky-600 font-bold">Rasuljon Sharipov</span> bo'lganlar. Ular mening IT sohasidagi dastlabki qadamlarimda katta hissa qo'shganlar.
                        </p>
                      </div>
                    </div>
                  </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.6}>
                <div className="mt-12 flex flex-wrap gap-4">
                   <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm hover:shadow-md transition-all">
                       <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                       <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">8-B Sinf</span>
                   </div>
                   <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm hover:shadow-md transition-all">
                       <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                       <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">LSL School</span>
                   </div>
                </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;