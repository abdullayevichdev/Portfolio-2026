import React, { useState } from 'react';
import { ExternalLink, Eye, X, Globe, RefreshCw, MonitorPlay, AlertCircle } from 'lucide-react';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem, TiltCard } from './Animations';

const projects: Project[] = [
  {
    id: 8,
    title: 'Fortex Oil Corporate',
    url: 'https://fortex-oil-sayt.vercel.app/',
    category: 'Biznes',
    status: 'live',
    // Rasm yangilandi: Neft/Gaz sanoati mavzusidagi ishonchliroq rasm
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop',
    description: 'Neft va gaz sanoati uchun ishlab chiqilgan zamonaviy va informativ korporativ veb-sayt.',
    tech: ['React', 'Tailwind', 'Animation']
  },
  {
    id: 1,
    title: 'Mening Birinchi Portfoliom',
    url: 'https://abdullayevichdev.github.io/Portfolio/',
    category: 'Shaxsiy',
    status: 'live',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'HTML va CSS yordamida yaratilgan ilk shaxsiy veb-sayt. Oddiy, ammo samarali dizayn.',
    tech: ['HTML', 'CSS']
  },
  {
    id: 2,
    title: 'Telefon va Aksessuarlar Do\'koni',
    url: 'https://abdullayevichdev.github.io/Abdulhay-Online-Market/',
    category: 'E-Commerce',
    status: 'live',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800', 
    description: 'Mobil qurilmalar va aksessuarlar sotuvi uchun moslashuvchan interfeysga ega onlayn do\'kon.',
    tech: ['JS', 'Bootstrap', 'E-com']
  },
  {
    id: 3,
    title: 'Wear Market - Kiyim Do\'koni',
    url: 'https://abdullayevichdev.github.io/Wear-Market-new/',
    category: 'E-Commerce',
    status: 'live',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    description: 'Zamonaviy kiyim-kechaklar uchun minimalist dizayndagi onlayn savdo platformasi.',
    tech: ['React', 'Tailwind', 'UI/UX']
  },
  {
    id: 4,
    title: 'Onlayn Avtosalon',
    url: 'https://cars-salon-7cib.vercel.app/', 
    category: 'Biznes',
    status: 'live', 
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800',
    description: 'Brauzerda ishlovchi, ma\'lumotlarni local storage da saqlovchi tezkor qaydlar ilovasi.',
    tech: ['JavaScript', 'LocalStorage', 'PWA']
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
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeUp>
            <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-2 block">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Mening Loyihalarim</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          </FadeUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <TiltCard className="h-full">
                <div
                  className="group glass-card rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/30 transition-all duration-500 flex flex-col h-full"
                >
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
                            <span className="bg-black/50 backdrop-blur px-4 py-2 rounded-full text-white font-medium border border-white/20 flex items-center gap-2">
                                <Eye size={16} /> Ko'rish
                            </span>
                        </div>
                    </a>

                    <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-white/10 text-white pointer-events-none">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow relative">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech?.map((t, i) => (
                            <span key={i} className="text-[10px] uppercase text-emerald-300 bg-emerald-900/30 px-2 py-1 rounded border border-emerald-500/20">{t}</span>
                        ))}
                    </div>
                    
                    <div className="mt-auto flex gap-3">
                      <a
                        href={project.url}
                        target={brokenProjectIds.includes(project.id) ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        onClick={(e) => handleProjectClick(e, project)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 rounded-lg text-white font-bold transition-all shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1 cursor-pointer"
                      >
                        Saytni Ochish <ExternalLink size={16} />
                      </a>
                      <button
                            onClick={(e) => handleDetailsClick(e, project)}
                            className="px-3 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all cursor-pointer"
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
              className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              <div className="relative h-64 shrink-0">
                 <img src={selectedDetails.image} className="w-full h-full object-cover" alt="Preview" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>

              <div className="p-8 overflow-y-auto">
                 <h3 className="text-2xl font-bold text-white mb-4">{selectedDetails.title}</h3>
                 
                 <h4 className="text-white font-semibold mb-2">Loyiha Haqida:</h4>
                 <p className="text-gray-400 leading-relaxed mb-6">
                    {selectedDetails.description}
                 </p>
                 
                 <div className="flex gap-2 mb-8">
                    {selectedDetails.tech?.map((t, i) => (
                        <span key={i} className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-gray-300 border border-white/10">{t}</span>
                    ))}
                 </div>

                 <div className="flex justify-end gap-3">
                    <button onClick={() => setSelectedDetails(null)} className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors">
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