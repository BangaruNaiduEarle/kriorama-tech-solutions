import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#story', label: 'Story' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on(); window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
          scrolled ? 'glass-strong shadow-[0_10px_50px_-15px_rgba(168,85,247,0.35)]' : ''
        }`}>
          <a href="#top" className="flex items-center gap-2">
            <span className="relative inline-block w-8 h-8 rounded-lg" style={{
              background: 'conic-gradient(from 210deg, #6D28D9, #A855F7, #EC4899, #F97316, #6D28D9)'
            }} />
            <span className="font-display text-lg font-semibold tracking-tight">
              KrioRama<span className="text-white/40">.</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href}
                 className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/5">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex btn-primary !py-2.5 !px-5 text-sm">
            Start a Project →
          </a>
          <button onClick={() => setOpen(o => !o)} className="md:hidden glass p-2 rounded-lg" aria-label="Menu">
            <div className="w-5 h-0.5 bg-white mb-1.5" />
            <div className="w-5 h-0.5 bg-white mb-1.5" />
            <div className="w-5 h-0.5 bg-white" />
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                 className="py-2 text-white/80 hover:text-white">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3 justify-center">Start a Project</a>
          </div>
        )}
      </div>
    </motion.header>
  );
}
