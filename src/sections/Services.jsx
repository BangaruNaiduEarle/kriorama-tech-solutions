import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    desc: 'Custom websites and web applications engineered for speed, scale and beauty.',
    span: 'md:col-span-2 md:row-span-2',
    accent: 'from-brand-violet to-brand-purple',
    icon: '◐',
  },
  {
    title: 'Mobile App Development',
    desc: 'Native-feeling Android and iOS apps.',
    span: 'md:col-span-2',
    accent: 'from-brand-pink to-brand-rose',
    icon: '▢',
  },
  {
    title: 'UI/UX Design',
    desc: 'Premium user-focused experiences.',
    span: 'md:col-span-2',
    accent: 'from-brand-purple to-brand-pink',
    icon: '✺',
  },
  {
    title: 'Analytics & Insights',
    desc: 'Data-driven optimization that compounds over time.',
    span: 'md:col-span-2',
    accent: 'from-brand-orange to-brand-rose',
    icon: '◢',
  },
  {
    title: 'SEO & Digital Marketing',
    desc: 'Growth-focused strategies for visibility and conversion.',
    span: 'md:col-span-2',
    accent: 'from-brand-violet to-brand-pink',
    icon: '◭',
  },
  {
    title: 'Support & Maintenance',
    desc: 'Long-term technical support for products you can rely on.',
    span: 'md:col-span-2',
    accent: 'from-brand-purple to-brand-orange',
    icon: '✦',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="eyebrow mb-4">Services Universe</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
              A full studio under <span className="text-gradient">one roof</span>.
            </h2>
          </div>
          <p className="text-white/55 max-w-sm">
            Strategy, design, engineering, growth — pick a service or run the full loop with us.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[180px]">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative col-span-2 ${s.span} glass rounded-3xl p-6 md:p-8 overflow-hidden cursor-pointer`}
      whileHover={{ y: -4 }}
    >
      {/* glow */}
      <div className={`absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${s.accent} blur-xl -z-10`} />
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${s.accent}`} />
      {/* corner orb */}
      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-50 bg-gradient-to-br ${s.accent}`} />

      <div className="relative h-full flex flex-col justify-between">
        <div className="text-3xl">{s.icon}</div>
        <div>
          <h3 className="font-display text-xl md:text-2xl font-semibold">{s.title}</h3>
          <p className="mt-2 text-white/55 text-sm md:text-base max-w-sm">{s.desc}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/70 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
            Learn more <span>→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
