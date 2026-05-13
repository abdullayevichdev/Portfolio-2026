import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Sparkles, Download } from 'lucide-react';
import { FadeUp } from './Animations';
import CertificateImg from '../assets/Frontend sertificate.jpg';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-slate-50/50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold tracking-widest text-sky-500 uppercase bg-sky-50 border border-sky-100 rounded-full">
              <Award size={12} />
              <span>Achievements</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900">
              Mening <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Sertifikatim</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Dasturlash sohasidagi bilim va ko'nikmalarimni tasdiqlovchi rasmiy sertifikat.
            </p>
          </FadeUp>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative w-full max-w-4xl"
          >
            {/* Decorative Background Glow */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-sky-400/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Certificate Frame */}
            <div className="relative glass-card rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-6 border border-white/60 shadow-2xl overflow-hidden bg-white/40 backdrop-blur-xl">
              <div className="relative rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-inner border border-slate-100 bg-slate-50">
                <img
                  src={CertificateImg}
                  alt="Frontend Development Certificate"
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <motion.a
                    href={CertificateImg}
                    download="Frontend_Certificate.jpg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-2xl cursor-pointer"
                    title="Yuklab olish"
                  >
                    <Download size={24} />
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.open(CertificateImg, '_blank')}
                    className="w-14 h-14 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-2xl cursor-pointer"
                    title="Kattalashtirish"
                  >
                    <ExternalLink size={24} />
                  </motion.button>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 px-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                    <Award size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">Frontend Development</h3>
                    <p className="text-slate-500 text-sm">Professional Kurs Bitiruvchisi</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="px-4 py-2 rounded-xl bg-sky-100 text-sky-600 text-xs font-bold uppercase tracking-wider border border-sky-200">
                    Verified
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider border border-indigo-200">
                    A+ Grade
                  </div>
                </div>
              </div>
            </div>

            {/* Sparkles Effect */}
            <div className="absolute -top-4 -right-4 p-4 bg-white rounded-full shadow-xl text-yellow-400 animate-bounce">
              <Sparkles size={24} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
