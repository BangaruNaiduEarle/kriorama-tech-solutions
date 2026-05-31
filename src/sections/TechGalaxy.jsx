import React from 'react';
import { motion } from 'framer-motion';

const tech = [
  { name: 'React',         orbit: 1, angle:   0 },
  { name: 'Vite',          orbit: 1, angle:  72 },
  { name: 'JavaScript',    orbit: 1, angle: 144 },
  { name: 'Tailwind CSS',  orbit: 1, angle: 216 },
  { name: 'GSAP',          orbit: 1, angle: 288 },
  { name: 'HTML5',         orbit: 2, angle:  30 },
  { name: 'CSS3',          orbit: 2, angle: 110 },
  { name: 'Framer Motion', orbit: 2, angle: 190 },
  { name: 'WordPress',     orbit: 2, angle: 270 },
  { name: 'Figma',         orbit: 2, angle: 340 },
];

const orbits = [
  { size: 320, dur: '40s', reverse: false },
  { size: 520, dur: '70s', reverse: true  },
];

export default function TechGalaxy() {
  return (
    <section id="tech" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.18), transparent 60%)' }} />
      </div>

      <header className="mx-auto max-w-3xl text-center mb-16">
        <div className="eyebrow mb-4">Technology Galaxy</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
          A stack that <span className="text-gradient">orbits the craft</span>.
        </h2>
        <p className="mt-6 text-white/60">
          Tools we reach for again and again to build fast, beautiful, durable products.
        </p>
      </header>

      <div className="relative mx-auto h-[600px] md:h-[680px] flex items-center justify-center">
        {/* center sun */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 w-44 h-44 md:w-52 md:h-52 rounded-full flex items-center justify-center text-center p-6"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #A855F7, #6D28D9 60%, #1E1B4B 100%)',
            boxShadow: '0 0 80px rgba(168,85,247,0.6), inset 0 0 40px rgba(255,255,255,0.15)',
          }}
        >
          <div>
            <div className="font-display text-base md:text-lg font-bold">KrioRama</div>
            <div className="text-[10px] md:text-xs text-white/70 mt-1 tracking-widest uppercase">Tech Solutions</div>
          </div>
        </motion.div>

        {/* orbits */}
        {orbits.map((o, idx) => (
          <div key={idx}
               className={`absolute rounded-full border border-white/10 ${o.reverse ? 'animate-spin-reverse' : 'animate-spin-slow'}`}
               style={{ width: o.size, height: o.size, animationDuration: o.dur }}>
            {tech.filter(t => t.orbit === idx + 1).map(t => {
              const rad = (t.angle * Math.PI) / 180;
              const r = o.size / 2;
              const x = Math.cos(rad) * r;
              const y = Math.sin(rad) * r;
              return (
                <div key={t.name}
                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                     style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}>
                  <div className={`${o.reverse ? 'animate-spin-slow' : 'animate-spin-reverse'} `}
                       style={{ animationDuration: o.dur }}>
                    <div className="glass-strong px-3 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap hover:bg-white/10 transition">
                      {t.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {/* responsive scale on mobile */}
        <style>{`
          @media (max-width: 640px) {
            #tech .border-white\\/10 { transform: scale(0.7); }
          }
        `}</style>
      </div>
    </section>
  );
}
