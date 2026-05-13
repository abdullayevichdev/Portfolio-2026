import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Projects from './components/Projects';
import Bots from './components/Bots';
import About from './components/About';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-slate-800 selection:bg-sky-300/50 selection:text-slate-900 font-sans">
      {/* Global Background Orbs */}
      <div className="bg-orb-1"></div>
      <div className="bg-orb-2"></div>
      <div className="bg-orb-3"></div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Bots />
        <About />
        <Certificates />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;