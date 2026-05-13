import React, { useState } from 'react';
import { ExternalLink, Eye, X, Globe, RefreshCw, MonitorPlay, AlertCircle } from 'lucide-react';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem, TiltCard } from './Animations';

import fortexImg from '../assets/Fortex Oil Corporate.jpg';
import portfolioImg from '../assets/Mening Birinchi Portfoliom.png';
import phoneMarketImg from "../assets/Telefon va Aksessuarlar Do'koni.jpeg";
import wearMarketImg from '../assets/Oline Wear Market.png';
import carsSalonImg from '../assets/Onlayn Avtosalon.jpg';
import schoolSysImg from '../assets/School management system.png';
import notepadImg from '../assets/Notepad Pro Web App.jpg';
import tahqiqImg from '../assets/Tahqiq Platform.jpeg';
import iqubImg from '../assets/Iqub Qurilish Sanoati uchun maxsus platforma.jpg';
import qulupnayImg from '../assets/Qulupnay.uz Shrinliklar tayyorlaydigan korhona uchun platforma.jpg';
import freelanceImg from '../assets/Freelance & Freelancer.png';

const projects: Project[] = [
  {
    id: 8,
    title: 'Fortex Oil Corporate',
    url: 'https://fortex-oil-sayt.vercel.app/',
    category: 'Biznes',
    status: 'live',
    image: fortexImg,
    description: 'Neft va gaz sanoati uchun ishlab chiqilgan zamonaviy va informativ korporativ veb-sayt.',
    tech: ['React', 'Tailwind', 'Animation']
  },
  {
    id: 1,
    title: 'Mening Birinchi Portfoliom',
    url: 'https://abdullayevichdev.github.io/Portfolio/',
    category: 'Shaxsiy',
    status: 'live',
    image: portfolioImg,
    description: 'HTML va CSS yordamida yaratilgan ilk shaxsiy veb-sayt. Oddiy, ammo samarali dizayn.',
    tech: ['HTML', 'CSS']
  },
  {
    id: 2,
    title: 'Telefon va Aksessuarlar Do\'koni',
    url: 'https://abdullayevichdev.github.io/Abdulhay-Online-Market/',
    category: 'E-Commerce',
    status: 'live',
    image: phoneMarketImg, 
    description: 'Mobil qurilmalar va aksessuarlar sotuvi uchun moslashuvchan interfeysga ega onlayn do\'kon.',
    tech: ['JS', 'Bootstrap', 'E-com']
  },
  {
    id: 3,
    title: 'Wear Market - Kiyim Do\'koni',
    url: 'https://abdullayevichdev.github.io/Wear-Market-new/',
    category: 'E-Commerce',
    status: 'live',
    image: wearMarketImg,
    description: 'Zamonaviy kiyim-kechaklar uchun minimalist dizayndagi onlayn savdo platformasi.',
    tech: ['React', 'Tailwind', 'UI/UX']
  },
  {
    id: 4,
    title: 'Onlayn Avtosalon',
    url: 'https://cars-salon-7cib.vercel.app/', 
    category: 'Biznes',
    status: 'live', 
    image: carsSalonImg,
    description: 'Premium avtomobillar savdosi va ijarasi uchun mo\'ljallangan boshqaruv paneli va vitrina.',
    tech: ['Vercel', 'React', 'Dashboard']
  },
  {
    id: 5,
    title: 'Maktab Boshqaruv Tizimi',
    // Yangi Vercel link qo'yildi
    url: 'https://students-grades.vercel.app/',
    category: 'Ta\'lim',
    status: 'live',
    image: schoolSysImg,
    description: 'O\'quvchilar davomati, baholar va jadvallarni nazorat qilish uchun maxsus CRM tizimi.',
    tech: ['CRM', 'Analytics', 'Admin']
  },
  {
    id: 6,
    title: 'Abdulhay Reklama Platformasi',
    url: 'https://t.me/Robotexnika_LSL/358',
    category: 'Marketing',
    status: 'live',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800',
    description: 'Ijtimoiy tarmoqlar uchun raqamli marketing kampaniyasi va vizual materiallar.',
    tech: ['Telegram', 'Ads', 'Design']
  },
  {
    id: 7,
    title: 'Notepad Pro Web App',
    url: 'https://abdullayevichdev.github.io/Notepad_Pro/',
    category: 'Tools',
    status: 'live',
    image: notepadImg,
    description: 'Brauzerda ishlovchi, ma\'lumotlarni local storage da saqlovchi tezkor qaydlar ilovasi.',
    tech: ['JavaScript', 'LocalStorage', 'PWA']
  },
  {
    id: 9,
    title: 'Tahqiq Platform',
    url: 'https://tahqiqofficial.vercel.app/',
    category: 'Platforma',
    status: 'live',
    image: tahqiqImg,
    description: 'Zamonaviy tadqiqotlar va professional faoliyat uchun maxsus ishlab chiqilgan platforma.',
    tech: ['React', 'Tailwind', 'i18next']
  },
  {
    id: 10,
    title: 'Iqub Qurilish',
    url: 'https://iqub-eosin.vercel.app/',
    category: 'Biznes',
    status: 'live',
    image: iqubImg,
    description: 'Qurilish sanoati korxonalari uchun maxsus veb platforma.',
    tech: ['React', 'Tailwind', 'UI/UX']
  },
  {
    id: 11,
    title: 'Qulupnay.uz',
    url: 'https://qulupnay-uz.vercel.app/',
    category: 'E-Commerce',
    status: 'live',
    image: qulupnayImg,
    description: 'Shirinliklar tayyorlaydigan korxona uchun onlayn buyurtma platformasi.',
    tech: ['React', 'E-Commerce', 'Vercel']
  },
  {
    id: 12,
    title: 'Freelance & Freelancer',
    url: 'https://work-time-three.vercel.app/',
    category: 'Platforma',
    status: 'live',
    image: freelanceImg,
    description: 'Frilanserlar va mijozlarni bog\'lovchi professional ishlash platformasi.',
    tech: ['React', 'Dashboard', 'Firebase']
  }
];

const Projects: React.FC = () => {
  const brokenProjectIds: number[] = [];
  const [simulationProject, setSimulationProject] = useState<Project | null>(null);
  const [selectedDetails, setSelectedDetails] = useState<Project | null>(null);

  const handleProjectClick = (e: React.MouseEvent, project: Project) => {
    if (brokenProjectIds.includes(project.id)) {
      e.preventDefault();
      setSimulationProject(project);
    }
  };

  const handleDetailsClick = (e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedDetails(project);
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeUp>
            <span className="text-sky-500 font-mono text-sm tracking-widest uppercase mb-2 block">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-800">Mening Loyihalarim</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-sky-400 to-pink-400 mx-auto rounded-full"></div>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <TiltCard className="h-full">
                <div
                  className="group glass-card rounded-[2rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(56,189,248,0.2)] hover:border-sky-400/50 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative"
                >
                  {/* Liquid Hover Blob */}
                  <div className="absolute -inset-full bg-gradient-to-tr from-sky-500/30 to-pink-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none group-hover:animate-blob"></div>
                  <div className="relative h-52 overflow-hidden">
                    <a 
                      href={project.url} 
                      target={brokenProjectIds.includes(project.id) ? undefined : "_blank"}
                      rel="noopener noreferrer" 
                      onClick={(e) => handleProjectClick(e, project)}
                      className="block w-full h-full cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                            <span className="bg-white/50 backdrop-blur px-4 py-2 rounded-full text-slate-800 font-medium border border-white/80 flex items-center gap-2 shadow-lg">
                                <Eye size={16} /> Ko'rish
                            </span>
                        </div>
                    </a>

                    <div className="absolute top-4 right-4 z-20 bg-white/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-white/50 text-slate-800 pointer-events-none shadow-sm">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow relative">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech?.map((t, i) => (
                            <span key={i} className="text-[10px] uppercase text-sky-600 bg-sky-100/50 px-2 py-1 rounded border border-sky-300/50">{t}</span>
                        ))}
                    </div>
                    
                    <div className="mt-auto flex gap-3">
                      <a
                        href={project.url}
                        target={brokenProjectIds.includes(project.id) ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        onClick={(e) => handleProjectClick(e, project)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-sky-500 to-pink-500 hover:opacity-90 rounded-lg text-white font-bold transition-all shadow-lg shadow-sky-500/20 transform hover:-translate-y-1 cursor-pointer"
                      >
                        Saytni Ochish <ExternalLink size={16} />
                      </a>
                      <button
                            onClick={(e) => handleDetailsClick(e, project)}
                            className="px-3 py-3 bg-white/40 hover:bg-white/60 border border-white/60 rounded-lg text-slate-800 transition-all cursor-pointer shadow-sm"
                            title="Batafsil ma'lumot"
                          >
                            <MonitorPlay size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* DETALIZATSIYA MODAL */}
      <AnimatePresence>
        {selectedDetails && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDetails(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl glass-card rounded-[2rem] overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              <div className="relative h-64 shrink-0">
                 <img src={selectedDetails.image} className="w-full h-full object-cover" alt="Preview" />
                 <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
              </div>

              <div className="p-8 overflow-y-auto">
                 <h3 className="text-2xl font-bold text-slate-800 mb-4">{selectedDetails.title}</h3>
                 
                 <h4 className="text-slate-800 font-semibold mb-2">Loyiha Haqida:</h4>
                 <p className="text-slate-500 leading-relaxed mb-6">
                    {selectedDetails.description}
                 </p>
                 
                 <div className="flex gap-2 mb-8">
                    {selectedDetails.tech?.map((t, i) => (
                        <span key={i} className="text-xs font-mono bg-sky-100/50 px-2 py-1 rounded text-sky-700 border border-sky-200">{t}</span>
                    ))}
                 </div>

                 <div className="flex justify-end gap-3">
                    <button onClick={() => setSelectedDetails(null)} className="px-5 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium transition-colors">
                        Yopish
                    </button>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SIMULATION BROWSER MODAL */}
      <AnimatePresence>
        {simulationProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full h-full max-w-7xl bg-white rounded-lg overflow-hidden flex flex-col shadow-2xl relative"
            >
               {/* Browser Toolbar (Fake) */}
               <div className="h-12 bg-slate-100 border-b border-gray-300 flex items-center px-4 gap-4">
                  <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer" onClick={() => setSimulationProject(null)}></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex gap-4 text-gray-400 mx-2">
                      <div className="cursor-not-allowed"><i className="arrow-left">←</i></div>
                      <div className="cursor-not-allowed"><i className="arrow-right">→</i></div>
                      <RefreshCw size={14} className="cursor-pointer hover:animate-spin text-gray-600" />
                  </div>
                  <div className="flex-1 bg-white border border-gray-300 rounded-md h-8 flex items-center px-3 text-sm text-gray-700 shadow-sm">
                      <Globe size={14} className="text-gray-400 mr-2" />
                      <span className="truncate selection:bg-blue-200">
                          {simulationProject.url}
                      </span>
                  </div>
               </div>

               {/* Browser Content */}
               <div className="flex-1 overflow-y-auto bg-gray-100 relative">
                  <div className="absolute inset-0">
                      <img 
                          src={simulationProject.image} 
                          alt="Website Preview" 
                          className="w-full h-auto min-h-full object-cover object-top"
                      />
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[90%] md:w-auto bg-slate-900/90 text-white px-6 py-4 rounded-xl backdrop-blur-md border border-red-500/30 shadow-2xl flex flex-col items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-700">
                          <div className="flex items-center gap-2 text-amber-400 font-bold">
                             <AlertCircle size={20} />
                             <span>Demo Rejimi (Server javob bermayapti)</span>
                          </div>
                          <p className="text-sm text-gray-300 text-center max-w-md">
                             Ushbu saytning Netlify serveri vaqtinchalik o'chirilgan. Saytning vizual ko'rinishi saqlab qolingan.
                          </p>
                      </div>
                  </div>
               </div>

               <button 
                  onClick={() => setSimulationProject(null)}
                  className="absolute top-16 right-6 md:top-4 md:right-4 z-50 bg-black/80 hover:bg-red-600 text-white p-2 rounded-full transition-colors shadow-xl"
               >
                  <X size={24} />
               </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;