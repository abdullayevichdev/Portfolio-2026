import React, { useState } from 'react';
import { ExternalLink, Eye, X, Globe, RefreshCw, MonitorPlay, AlertCircle, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { SectionHeading, StaggerContainer, StaggerItem, TiltCard } from './Animations';

import scanforgeImg from '../assets/ScanForge.jpg';
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
    id: 14,
    title: 'ScanForge.uz',
    titleEn: 'ScanForge.uz',
    url: 'https://www.scanforge.uz/',
    category: 'Yangi / Platforma',
    categoryEn: 'New / Platform',
    status: 'live',
    accent: 'from-sky-400 via-indigo-500 to-violet-600',
    description: "ScanForge'ning o'z domenidagi rasmiy platformasi — QR kodlarni tez, chiroyli va professional darajada yaratish uchun zamonaviy veb-xizmat.",
    descriptionEn: 'The official ScanForge platform on its own domain — a modern web service for creating beautiful, professional QR codes in seconds.',
    tech: ['React', 'TypeScript', 'Tailwind', 'UI/UX']
  },
  {
    id: 15,
    title: 'Tashrifim.uz',
    titleEn: 'Tashrifim.uz',
    url: 'https://tashrifim.uz/',
    category: 'Yangi / Platforma',
    categoryEn: 'New / Platform',
    status: 'live',
    accent: 'from-pink-400 via-fuchsia-500 to-violet-600',
    description: "Tashrifim.uz — foydalanuvchilar uchun qulay va zamonaviy interfeysga ega o'zbek veb-platformasi.",
    descriptionEn: 'Tashrifim.uz — an Uzbek web platform with a clean, modern and user-friendly interface.',
    tech: ['React', 'Tailwind', 'UI/UX']
  },
  {
    id: 13,
    title: 'ScanForge — QR Code Builder',
    titleEn: 'ScanForge — QR Code Builder',
    url: 'https://scanforge-abdulhay.vercel.app/',
    category: 'Asboblar / Web App',
    categoryEn: 'Tools / Web App',
    status: 'live',
    image: scanforgeImg,
    description: 'Brauzerda yuqori sifatli va sozlanuvchi QR kodlar yaratuvchi zamonaviy veb-platforma. Apple uslubidagi glassmorphism dizayn, maxsus gradientlar va tezkor eksport.',
    descriptionEn: 'A modern browser-based web application for creating beautiful, high-quality, customizable QR codes. Features Apple-inspired glass design, custom gradients, and instant export.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Canvas', 'Vite']
  },
  {
    id: 8,
    title: 'Fortex Oil Corporate',
    titleEn: 'Fortex Oil Corporate',
    url: 'https://fortex-oil-sayt.vercel.app/',
    category: 'Biznes',
    categoryEn: 'Business',
    status: 'live',
    image: fortexImg,
    description: 'Neft va gaz sanoati uchun ishlab chiqilgan zamonaviy va informativ korporativ veb-sayt.',
    descriptionEn: 'A modern and informative corporate website engineered for the oil and gas industry.',
    tech: ['React', 'Tailwind', 'Animation']
  },
  {
    id: 1,
    title: 'Mening Birinchi Portfoliom',
    titleEn: 'My First Portfolio',
    url: 'https://abdullayevichdev.github.io/Portfolio/',
    category: 'Shaxsiy',
    categoryEn: 'Personal',
    status: 'live',
    image: portfolioImg,
    description: 'HTML va CSS yordamida yaratilgan ilk shaxsiy veb-sayt. Oddiy, ammo samarali dizayn.',
    descriptionEn: 'My first personal website built using pure HTML & CSS. Simple yet effective design.',
    tech: ['HTML', 'CSS']
  },
  {
    id: 2,
    title: 'Telefon va Aksessuarlar Do\'koni',
    titleEn: 'Phone & Accessories Store',
    url: 'https://abdullayevichdev.github.io/Abdulhay-Online-Market/',
    category: 'E-Commerce',
    categoryEn: 'E-Commerce',
    status: 'live',
    image: phoneMarketImg, 
    description: 'Mobil qurilmalar va aksessuarlar sotuvi uchun moslashuvchan interfeysga ega onlayn do\'kon.',
    descriptionEn: 'An e-commerce store with responsive UI for selling mobile devices and tech accessories.',
    tech: ['JS', 'Bootstrap', 'E-com']
  },
  {
    id: 3,
    title: 'Wear Market - Kiyim Do\'koni',
    titleEn: 'Wear Market - Clothing Store',
    url: 'https://abdullayevichdev.github.io/Wear-Market-new/',
    category: 'E-Commerce',
    categoryEn: 'E-Commerce',
    status: 'live',
    image: wearMarketImg,
    description: 'Zamonaviy kiyim-kechaklar uchun minimalist dizayndagi onlayn savdo platformasi.',
    descriptionEn: 'A minimalist online retail marketplace designed for trendy clothing and fashion.',
    tech: ['React', 'Tailwind', 'UI/UX']
  },
  {
    id: 4,
    title: 'Onlayn Avtosalon',
    titleEn: 'Online Car Dealership',
    url: 'https://cars-salon-7cib.vercel.app/', 
    category: 'Biznes',
    categoryEn: 'Business',
    status: 'live', 
    image: carsSalonImg,
    description: 'Premium avtomobillar savdosi va ijarasi uchun mo\'ljallangan boshqaruv paneli va vitrina.',
    descriptionEn: 'Showcase storefront and management dashboard designed for luxury car sales and rentals.',
    tech: ['Vercel', 'React', 'Dashboard']
  },
  {
    id: 5,
    title: 'Maktab Boshqaruv Tizimi',
    titleEn: 'School Management System',
    url: 'https://students-grades.vercel.app/',
    category: 'Ta\'lim',
    categoryEn: 'Education',
    status: 'live',
    image: schoolSysImg,
    description: 'O\'quvchilar davomati, baholar va jadvallarni nazorat qilish uchun maxsus CRM tizimi.',
    descriptionEn: 'Custom educational CRM system for tracking student attendance, grades, and schedules.',
    tech: ['CRM', 'Analytics', 'Admin']
  },
  {
    id: 6,
    title: 'Abdulhay Reklama Platformasi',
    titleEn: 'Abdulhay Advertising Platform',
    url: 'https://t.me/Robotexnika_LSL/358',
    category: 'Marketing',
    categoryEn: 'Marketing',
    status: 'live',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800',
    description: 'Ijtimoiy tarmoqlar uchun raqamli marketing kampaniyasi va vizual materiallar.',
    descriptionEn: 'Digital marketing campaign and visual assets developed for social media advertising.',
    tech: ['Telegram', 'Ads', 'Design']
  },
  {
    id: 7,
    title: 'Notepad Pro Web App',
    titleEn: 'Notepad Pro Web App',
    url: 'https://abdullayevichdev.github.io/Notepad_Pro/',
    category: 'Tools',
    categoryEn: 'Tools',
    status: 'live',
    image: notepadImg,
    description: 'Brauzerda ishlovchi, ma\'lumotlarni local storage da saqlovchi tezkor qaydlar ilovasi.',
    descriptionEn: 'A fast browser-based note-taking app that stores and synchronizes data via LocalStorage.',
    tech: ['JavaScript', 'LocalStorage', 'PWA']
  },
  {
    id: 9,
    title: 'Tahqiq Platform',
    titleEn: 'Tahqiq Platform',
    url: 'https://tahqiqofficial.vercel.app/',
    category: 'Platforma',
    categoryEn: 'Platform',
    status: 'live',
    image: tahqiqImg,
    description: 'Zamonaviy tadqiqotlar va professional faoliyat uchun maxsus ishlab chiqilgan platforma.',
    descriptionEn: 'Specialized platform crafted for contemporary scientific research and professional projects.',
    tech: ['React', 'Tailwind', 'i18next']
  },
  {
    id: 10,
    title: 'Iqub Qurilish',
    titleEn: 'Iqub Construction',
    url: 'https://iqub-eosin.vercel.app/',
    category: 'Biznes',
    categoryEn: 'Business',
    status: 'live',
    image: iqubImg,
    description: 'Qurilish sanoati korxonalari uchun maxsus veb platforma.',
    descriptionEn: 'Dedicated web portal tailored for construction industry enterprises and contractors.',
    tech: ['React', 'Tailwind', 'UI/UX']
  },
  {
    id: 11,
    title: 'Qulupnay.uz',
    titleEn: 'Qulupnay.uz',
    url: 'https://qulupnay-uz.vercel.app/',
    category: 'E-Commerce',
    categoryEn: 'E-Commerce',
    status: 'live',
    image: qulupnayImg,
    description: 'Shirinliklar tayyorlaydigan korxona uchun onlayn buyurtma platformasi.',
    descriptionEn: 'Online ordering web shop engineered for a confectionery and pastry enterprise.',
    tech: ['React', 'E-Commerce', 'Vercel']
  },
  {
    id: 12,
    title: 'Freelance & Freelancer',
    titleEn: 'Freelance & Freelancer',
    url: 'https://work-time-three.vercel.app/',
    category: 'Platforma',
    categoryEn: 'Platform',
    status: 'live',
    image: freelanceImg,
    description: 'Frilanserlar va mijozlarni bog\'lovchi professional ishlash platformasi.',
    descriptionEn: 'A collaborative freelance marketplace connecting independent talents with global clients.',
    tech: ['React', 'Dashboard', 'Firebase']
  }
];

// Rasmi yo'q loyihalar uchun animatsion "brauzer" muqova
const GeneratedCover: React.FC<{ project: Project }> = ({ project }) => {
  const domain = project.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${project.accent || 'from-sky-400 via-violet-500 to-pink-500'} overflow-hidden`}>
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/30 blur-2xl animate-blob" style={{ borderRadius: '42% 58% 61% 39% / 45% 39% 61% 55%' }}></div>
      <div className="absolute -bottom-12 -right-8 w-56 h-56 bg-white/20 blur-2xl animate-blob" style={{ animationDelay: '-3s', borderRadius: '68% 32% 38% 62% / 55% 64% 36% 45%' }}></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-x-6 top-6 bottom-0 rounded-t-2xl bg-white/20 backdrop-blur-xl border border-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-transform duration-700 group-hover:-translate-y-2">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/30">
          <span className="w-2.5 h-2.5 rounded-full bg-white/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white/60"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white/40"></span>
          <span className="ml-3 flex-1 h-5 rounded-full bg-white/30 text-[10px] text-white/90 font-medium flex items-center px-3 truncate">{domain}</span>
        </div>
        <div className="flex flex-col items-center justify-center h-[calc(100%-44px)] text-white">
          <Globe size={30} className="mb-2 drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-[spin_12s_linear_infinite]" />
          <span className="text-2xl font-black tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]">{project.title}</span>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;

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

  const getTitle = (p: Project) => (language === 'en' && p.titleEn ? p.titleEn : p.title);
  const getDesc = (p: Project) => (language === 'en' && p.descriptionEn ? p.descriptionEn : p.description);
  const getCat = (p: Project) => (language === 'en' && p.categoryEn ? p.categoryEn : p.category);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading tag={t.tag} title={t.title} />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <TiltCard className="h-full">
                <div
                  className="group glass-card rounded-[2rem] overflow-hidden p-2 flex flex-col h-full relative"
                >
                  {/* Liquid Hover Blob */}
                  <div className="absolute -inset-full bg-gradient-to-tr from-sky-500/30 to-pink-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none group-hover:animate-blob"></div>
                  <div className="relative h-52 overflow-hidden rounded-[1.6rem]">
                    <a 
                      href={project.url} 
                      target={brokenProjectIds.includes(project.id) ? undefined : "_blank"}
                      rel="noopener noreferrer" 
                      onClick={(e) => handleProjectClick(e, project)}
                      className="block w-full h-full cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                        {project.image ? (
                          <img
                              src={project.image}
                              alt={getTitle(project)}
                              loading="lazy"
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <GeneratedCover project={project} />
                        )}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                            <span className="bg-white/70 backdrop-blur px-4 py-2 rounded-full text-slate-800 font-medium border border-white/80 flex items-center gap-2 shadow-lg">
                                <Eye size={16} /> {t.viewAction}
                            </span>
                        </div>
                    </a>

                    <div className="absolute top-4 right-4 z-20 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-white/50 text-slate-800 pointer-events-none shadow-sm flex items-center gap-1.5">
                      {(project.id === 13 || !project.image) && <Sparkles size={12} className="text-amber-500 animate-pulse" />}
                      <span>{getCat(project)}</span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow relative">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors">
                      {getTitle(project)}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                      {getDesc(project)}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech?.map((tItem, i) => (
                            <span key={i} className="text-[10px] font-semibold uppercase tracking-wider text-sky-700 bg-white/50 px-2.5 py-1 rounded-full border border-white/80 shadow-[inset_0_1px_0_#fff]">{tItem}</span>
                        ))}
                    </div>
                    
                    <div className="mt-auto flex gap-3">
                      <a
                        href={project.url}
                        target={brokenProjectIds.includes(project.id) ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        onClick={(e) => handleProjectClick(e, project)}
                        className="btn-glow flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-bold transition-transform hover:-translate-y-1 active:scale-95 cursor-pointer"
                      >
                        {t.openSite} <ExternalLink size={16} />
                      </a>
                      <button
                        onClick={(e) => handleDetailsClick(e, project)}
                        className="glass-pill px-3 py-3 rounded-xl text-slate-700 transition-all cursor-pointer hover:text-sky-600 hover:shadow-[0_0_22px_rgba(56,189,248,0.5)]"
                        title={t.details}
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
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              className="relative w-full max-w-2xl glass-card rounded-[2rem] overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              <div className="relative h-64 shrink-0">
                 {selectedDetails.image ? (
                   <img src={selectedDetails.image} className="w-full h-full object-cover" alt="Preview" />
                 ) : (
                   <GeneratedCover project={selectedDetails} />
                 )}
                 <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
              </div>

              <div className="p-8 overflow-y-auto">
                 <h3 className="text-2xl font-bold text-slate-800 mb-4">{getTitle(selectedDetails)}</h3>
                 
                 <h4 className="text-slate-800 font-semibold mb-2">{t.modalAbout}</h4>
                 <p className="text-slate-500 leading-relaxed mb-6">
                    {getDesc(selectedDetails)}
                 </p>
                 
                 <div className="flex flex-wrap gap-2 mb-8">
                    {selectedDetails.tech?.map((tItem, i) => (
                        <span key={i} className="text-xs font-mono bg-sky-100/50 px-2 py-1 rounded text-sky-700 border border-sky-200">{tItem}</span>
                    ))}
                 </div>

                 <div className="flex justify-end gap-3">
                    <a
                      href={selectedDetails.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-pink-500 text-white font-medium transition-opacity hover:opacity-90 flex items-center gap-2"
                    >
                      {t.openSite} <ExternalLink size={16} />
                    </a>
                    <button onClick={() => setSelectedDetails(null)} className="px-5 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium transition-colors cursor-pointer">
                      {t.modalClose}
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
                             <span>{t.demoAlertTitle}</span>
                          </div>
                          <p className="text-sm text-gray-300 text-center max-w-md">
                             {t.demoAlertDesc}
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