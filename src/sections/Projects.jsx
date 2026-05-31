import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Gundu Soodhi',
    tag: 'News & Media Platform',
    desc: 'A Tamil-first news destination scaling to millions of impressions, with realtime publishing and aggressive caching.',
    stats: [
      { v: '10L+',  l: 'Subscriptions' },
      { v: '10K+',  l: 'Active users' },
      { v: '2K+',   l: 'Hourly users' },
    ],
    url: 'https://www.gundusoodhi.com',
    accent: 'from-brand-violet via-brand-purple to-brand-pink',
  },
  {
    name: 'Meet Owner',
    tag: 'Real Estate Platform',
    desc: 'Buy, sell and rent — with a subscription layer that gives owners visibility and brokers a clean workflow.',
    stats: [
      { v: 'Buy',          l: 'Discovery' },
      { v: 'Sell',         l: 'Listings' },
      { v: 'Subscription', l: 'Monetization' },
    ],
    url: 'https://meetowner.in',
    accent: 'from-brand-pink via-brand-rose to-brand-orange',
  },
  {
    name: 'Prime Projects Hyderabad',
    tag: 'Luxury Real Estate',
    desc: 'A cinematic showcase for premium projects in Hyderabad — built for browsing, not just listing.',
    stats: [
      { v: 'Luxury',  l: 'Positioning' },
      { v: 'Tours',   l: 'Project pages' },
      { v: 'Leads',   l: 'Optimized' },
    ],
    url: 'https://www.primeprojectshyd.com',
    accent: 'from-brand-orange via-brand-pink to-brand-purple',
  },
  {
    name: 'IOTT',
    tag: 'OTT Streaming Platform',
    desc: 'Live streaming and on-demand video with content management, monetization and a smooth playback experience.',
    stats: [
      { v: 'Live',  l: 'Streaming' },
      { v: 'VOD',   l: 'On demand' },
      { v: 'Multi', l: 'Device ready' },
    ],
    url: 'https://iott.co.in',
    accent: 'from-brand-violet via-brand-pink to-brand-rose',
  },
  {
    name: 'Borigam Institute',
    tag: 'Educational Platform',
    desc: 'An admissions-first education site, structured to convert visitors into enquiries.',
    stats: [
      { v: 'Programs', l: 'Catalog' },
      { v: 'Forms',    l: 'Capture' },
      { v: 'SEO',      l: 'Tuned' },
    ],
    url: 'http://borigaminstituteedu.in',
    accent: 'from-brand-purple via-brand-violet to-brand-pink',
  },
  {
    name: 'Job Portal Solution',
    tag: 'Recruitment Platform',
    desc: 'Employer dashboard, job listings and candidate management in one cohesive product.',
    stats: [
      { v: 'Employers',  l: 'Dashboard' },
      { v: 'Listings',   l: 'Jobs feed' },
      { v: 'Candidates', l: 'Pipeline' },
    ],
    url: '#',
    accent: 'from-brand-pink via-brand-purple to-brand-violet',
  },
  {
    name: 'Payroll Management System',
    tag: 'Enterprise Application',
    desc: 'Payroll automation, HR management and reporting designed for ops teams that hate spreadsheets.',
    stats: [
      { v: 'Payroll', l: 'Automated' },
      { v: 'HR',      l: 'Management' },
      { v: 'Reports', l: 'On demand' },
    ],
    url: '#',
    accent: 'from-brand-orange via-brand-rose to-brand-pink',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="eyebrow mb-4">Selected Work</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
              Products people <span className="text-gradient">actually open</span> on a Tuesday.
            </h2>
          </div>
          <p className="text-white/55 max-w-sm">
            A few of the platforms we've shipped across media, real estate, OTT, education and enterprise.
          </p>
        </header>

        <div className="space-y-28">
          {projects.map((p, i) => (
            <ProjectRow key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ p, i }) {
  const flipped = i % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`grid md:grid-cols-12 gap-8 items-center`}
    >
      {/* Visual */}
      <div className={`md:col-span-7 ${flipped ? 'md:order-2' : ''}`}>
        <ProjectVisual p={p} />
      </div>

      {/* Copy */}
      <div className={`md:col-span-5 ${flipped ? 'md:order-1' : ''}`}>
        <div className="eyebrow mb-3">{String(i + 1).padStart(2, '0')} · {p.tag}</div>
        <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight">{p.name}</h3>
        <p className="mt-4 text-white/65 leading-relaxed">{p.desc}</p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {p.stats.map(s => (
            <div key={s.l} className="glass rounded-xl p-3">
              <div className="font-display text-lg md:text-xl text-gradient">{s.v}</div>
              <div className="text-[10px] uppercase tracking-wider text-white/50 mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>

        {p.url && p.url !== '#' && (
          <a href={p.url} target="_blank" rel="noreferrer"
             className="mt-7 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white group">
            <span className="relative">
              Visit live site
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-gradient-to-r from-brand-purple to-brand-pink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </span>
            <span aria-hidden>↗</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}

function ProjectVisual({ p }) {
  return (
    <div className="relative group">
      <div className={`absolute -inset-4 rounded-[2rem] blur-3xl opacity-30 group-hover:opacity-60 transition-opacity bg-gradient-to-br ${p.accent}`} />
      <div className="relative rounded-3xl overflow-hidden glass-strong aspect-[16/10] p-1">
        {/* mock browser */}
        <div className="h-full rounded-[1.4rem] bg-ink-900/80 overflow-hidden flex flex-col">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <span className="ml-4 text-[10px] text-white/40 truncate">{p.url}</span>
          </div>
          <div className="flex-1 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-80`} />
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute inset-0 noise opacity-10 mix-blend-overlay" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <div className="font-display text-4xl md:text-6xl font-bold text-white drop-shadow-lg">{p.name}</div>
              <div className="mt-2 text-white/90 text-sm md:text-base">{p.tag}</div>
            </div>
            {/* floating stat chip */}
            <div className="absolute top-4 right-4 glass-strong rounded-xl px-3 py-2 animate-float-slow">
              <div className="text-[10px] uppercase tracking-wider text-white/60">Live</div>
              <div className="text-sm font-semibold">{p.stats[0].v}</div>
            </div>
            <div className="absolute bottom-4 left-4 glass-strong rounded-xl px-3 py-2 animate-float-slow" style={{ animationDelay: '-3s' }}>
              <div className="text-[10px] uppercase tracking-wider text-white/60">{p.stats[1].l}</div>
              <div className="text-sm font-semibold">{p.stats[1].v}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
