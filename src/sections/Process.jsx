import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { n: '01', t: 'Discover', d: 'We listen, ask, and align on the why.' },
  { n: '02', t: 'Research', d: 'Users, market, technology — we study the terrain.' },
  { n: '03', t: 'Design',   d: 'Wireframes, motion, identity. The product begins to feel.' },
  { n: '04', t: 'Develop',  d: 'Pixel-perfect engineering with care for performance.' },
  { n: '05', t: 'Optimize', d: 'Measure, refine, iterate. Every shipped detail earns its place.' },
  { n: '06', t: 'Launch',   d: 'Go live with confidence — and a plan for what comes next.' },
];

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-55%']);

  return (
    <section id="process" ref={ref} className="relative py-32 overflow-hidden">
      <div className="px-6">
        <header className="mx-auto max-w-7xl mb-16">
          <div className="eyebrow mb-4">How we work</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            A process that <span className="text-gradient">moves with you</span>.
          </h2>
        </header>
      </div>

      <motion.div style={{ x }} className="flex gap-6 pl-6 will-change-transform">
        {steps.map((s, i) => (
          <div key={s.n} className="shrink-0 w-[80vw] md:w-[420px] glass rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-50 bg-gradient-to-br from-brand-purple to-brand-pink" />
            <div className="font-display text-7xl md:text-8xl text-white/10 font-bold">{s.n}</div>
            <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold">{s.t}</h3>
            <p className="mt-2 text-white/60">{s.d}</p>
            {i < steps.length - 1 && (
              <div className="mt-8 text-white/40 text-sm">↓ next: {steps[i + 1].t}</div>
            )}
          </div>
        ))}
        <div className="shrink-0 w-[20vw]" />
      </motion.div>
    </section>
  );
}
