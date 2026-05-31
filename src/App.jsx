import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Cursor from './components/Cursor.jsx';
import Hero from './sections/Hero.jsx';
import Story from './sections/Story.jsx';
import Services from './sections/Services.jsx';
import Projects from './sections/Projects.jsx';
import Process from './sections/Process.jsx';
import TechGalaxy from './sections/TechGalaxy.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    // Smooth anchor scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative bg-ink-950 text-white overflow-hidden">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Services />
        <Projects />
        <Process />
        <TechGalaxy />
        <Testimonials />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}
