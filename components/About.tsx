import React from 'react';
import { User, BookOpen, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp } from './Animations';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
       {/* Decorative Elements */}
       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-96 bg-purple-900/20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             {/* Photo Frame Effect */}
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-30 blur-lg"></div>
             <div className="relative glass-card rounded-2xl p-2 border border-white/20">
                <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" 
                    alt="Working Space" 
                    className="w-full h-auto rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </motion.div>

          <div>
            <FadeUp>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Men Haqimda</h2>
            </FadeUp>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <FadeUp delay={0.2}>
                  <p>
                    Men <strong className="text-white">Abdulhay Avazxanov</strong>man, LSL maktabining 8-B sinf o'quvchisiman. 
                    Men zamonaviy, tezkor va kuchli raqamli mahsulotlar yaratishga qaratilgan kreativ veb-dizayner va veb-dasturchiman.
                  </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                  <p>
                    Men 6 yil davomida davlat maktabida o'qib, maktabdan keyin LSL o'quv markazlarida ta'lim oldim.
                  </p>
              </FadeUp>
              
              <FadeUp delay={0.4}>
                  <div className="glass-card p-6 rounded-xl border-l-4 border-blue-500 mt-8">
                    <div className="flex items-start gap-4">
                      <Cpu className="text-blue-400 mt-1 shrink-0" size={24} />
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">Muhandislik Ustozim</h4>
                        <p className="text-gray-400">
                          LSLdagi birinchi muhandislik ustozim <span className="text-blue-300">Rasuljon Sharipov</span> bo'lganlar. Ular mening IT sohasidagi dastlabki qadamlarimda katta hissa qo'shganlar.
                        </p>
                      </div>
                    </div>
                  </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.6}>
                <div className="mt-10 flex gap-4">
                   <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                       <User size={18} className="text-purple-400"/>
                       <span className="text-sm font-medium">8-B Sinf</span>
                   </div>
                   <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                       <BookOpen size={18} className="text-blue-400"/>
                       <span className="text-sm font-medium">LSL School</span>
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