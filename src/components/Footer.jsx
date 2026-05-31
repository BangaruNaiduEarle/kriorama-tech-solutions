import React from 'react';

const social = [
  { label: 'Email',    href: 'mailto:hello@kriorama.com' },
  { label: 'WhatsApp', href: 'https://wa.me/910000000000' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram',href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-10 px-6">
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 rounded-lg" style={{ background: 'conic-gradient(from 210deg, #6D28D9, #A855F7, #EC4899, #F97316, #6D28D9)' }} />
            <span className="font-display text-lg font-semibold">KrioRama<span className="text-white/40">.</span></span>
          </div>
          <p className="text-white/55 text-sm max-w-sm">
            Transforming ambitious ideas into exceptional digital experiences. Crafted with care since 2019.
          </p>
        </div>
        {/* <div>
          <div className="eyebrow mb-4">Navigate</div>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="#story" className="hover:text-white">Story</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#projects" className="hover:text-white">Work</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div> */}
        <div>
          {/* <div className="eyebrow mb-4">Connect</div>
          <ul className="space-y-2 text-white/70 text-sm">
            {social.map(s => (
              <li key={s.label}><a href={s.href} className="hover:text-white">{s.label} →</a></li>
            ))}
          </ul> */}
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
        <span>© {new Date().getFullYear()} KrioRama Tech Solutions. All rights reserved.</span>
        <span>Designed & engineered in-house.</span>
      </div>
    </footer>
  );
}
