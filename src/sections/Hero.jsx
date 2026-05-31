import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import AuroraBackground from '../components/AuroraBackground.jsx';
import Particles from '../components/Particles.jsx';
import MagneticButton from '../components/MagneticButton.jsx';

const metrics = [
  { v: '50+',   l: 'Projects Delivered' },
  { v: '100K+', l: 'Users Impacted' },
  { v: '100%',  l: 'Client Satisfaction' },
  { v: '6+',    l: 'Years Experience' },
];

const lineWords1 = ["WE", "DON'T", "BUILD", "WEBSITES"];
const lineWords2 = ['WE', 'BUILD', 'DIGITAL', 'EXPERIENCES'];

export default function Hero() {
  const ref = useRef(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const on = (e) => {
      const r = ref.current.getBoundingClientRect();
      mx.set(((e.clientX - r.left) / r.width) * 100);
      my.set(((e.clientY - r.top) / r.height) * 100);
    };
    const el = ref.current;
    el.addEventListener('mousemove', on);
    return () => el.removeEventListener('mousemove', on);
  }, [mx, my]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-20">
      <AuroraBackground />
      <Particles count={70} />
      {/* Spotlight */}
      <motion.div
        className="absolute inset-0 -z-[3] pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(168,85,247,0.18), transparent 60%)',
          // @ts-ignore
          ['--x']: sx, ['--y']: sy,
        }}
      />

      <div className="relative mx-auto max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          <span className="text-xs text-white/70 tracking-wide">Available for new collaborations · 2026</span>
        </motion.div>

        <h1 className="font-display font-bold leading-[0.92] tracking-tight text-[clamp(2.6rem,8vw,7.5rem)]">
          <WordsLine words={lineWords1} delay={0.1} />
          <div className="my-2 md:my-4 flex items-center gap-4">
            <span className="block h-[1px] w-16 md:w-28 bg-gradient-to-r from-brand-purple to-brand-pink" />
            <span className="eyebrow !text-xs">pause</span>
          </div>
          <WordsLine words={lineWords2} delay={0.55} gradient />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-8 max-w-2xl text-base md:text-lg text-white/65 leading-relaxed"
        >
          KrioRama Tech Solutions creates modern digital products that transform businesses and engage users — across web, mobile, SaaS, OTT and enterprise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton as="a" href="#projects" className="btn-primary">
            Explore Projects
            <span aria-hidden>→</span>
          </MagneticButton>
          <MagneticButton as="a" href="#contact" className="btn-ghost">
            Start a Project
          </MagneticButton>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden glass">
          {metrics.map((m, i) => (
            <motion.div
              key={m.l}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + i * 0.1 }}
              className="bg-ink-950/40 px-6 py-6 md:py-8"
            >
              <div className="font-display text-3xl md:text-5xl font-bold text-gradient">{m.v}</div>
              <div className="mt-1 text-xs md:text-sm text-white/55">{m.l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
        <span>scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

function WordsLine({ words, delay = 0, gradient = false }) {
  return (
    <div className="flex flex-wrap gap-x-[0.25em] gap-y-1 overflow-hidden">
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, delay: delay + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`inline-block ${gradient ? 'text-gradient' : 'text-white'}`}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
