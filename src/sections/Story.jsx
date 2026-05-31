import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  { year: '2019', title: 'The spark', text: 'KrioRama begins as a tiny studio with one belief: software should feel as good as it works.' },
  { year: '2020', title: 'First platforms', text: 'Shipped early web platforms for media and education clients across India.' },
  { year: '2022', title: 'Mobile & SaaS', text: 'Expanded into mobile apps and SaaS products for real estate and recruitment.' },
  { year: '2023', title: 'Scale moments', text: 'Crossed 100K users impacted; launched our first OTT streaming platform.' },
  { year: '2024', title: 'Enterprise', text: 'Delivered payroll & HR automation for growing enterprises.' },
  { year: '2025', title: 'Today', text: '6+ years in, building cinematic digital experiences for ambitious teams.' },
];

export default function Story() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="story" ref={ref} className="relative py-32 px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-[40vw] h-[40vw] rounded-full blur-[140px] opacity-30"
             style={{ background: 'radial-gradient(circle, #6D28D9, transparent 60%)' }} />
      </div>

      <div className="mx-auto max-w-6xl">
        <header className="mb-20 max-w-3xl">
          <div className="eyebrow mb-4">Our Story</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Six years of <span className="text-gradient">turning ideas</span> into things people use every day.
          </h2>
          <p className="mt-6 text-white/60 text-lg">
            Websites, mobile apps, business platforms, digital products — each project a small chapter in a long-running obsession with craft.
          </p>
        </header>

        <div className="relative pl-8 md:pl-0">
          {/* timeline line */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
          <motion.div
            style={{ height: lineY }}
            className="absolute left-3 md:left-1/2 top-0 w-px bg-gradient-to-b from-brand-purple via-brand-pink to-brand-orange"
          />

          <div className="space-y-16">
            {milestones.map((m, i) => (
              <Milestone key={m.year} m={m} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Milestone({ m, i }) {
  const left = i % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative md:grid md:grid-cols-2 md:gap-12 items-center`}
    >
      <div className={`${left ? 'md:order-1 md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
        <div className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-colors">
          <div className="font-display text-5xl text-gradient">{m.year}</div>
          <div className="mt-2 text-xl font-semibold">{m.title}</div>
          <p className="mt-2 text-white/60">{m.text}</p>
        </div>
      </div>
      <div className={`${left ? 'md:order-2' : 'md:order-1'} hidden md:block`} />
      {/* dot */}
      <span className="absolute left-1.5 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-ink-950 border-2 border-brand-purple shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
    </motion.div>
  );
}
