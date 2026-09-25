import React from 'react';
import InteractiveBackground from './components/InteractiveBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-app">
      {/* Dynamic Constellation Particle Canvas */}
      <InteractiveBackground />

      {/* Floating Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Sleek Footer */}
      <Footer />
    </div>
  );
}

export default App;
