import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Projects from './components/Projects';
import Bots from './components/Bots';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Bots />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;