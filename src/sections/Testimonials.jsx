import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { q: 'KrioRama shipped a platform that felt premium from day one. Users noticed the difference.', who: 'Founder, Media Startup' },
  { q: 'They behave like an extension of our team — sharp opinions, faster delivery.', who: 'Product Lead, Real Estate' },
  { q: 'The OTT launch was flawless. Cinematic UI, rock-solid playback.', who: 'CEO, Streaming Platform' },
  { q: 'Our payroll system finally feels modern. Ops time dropped by half.', who: 'COO, Enterprise Client' },
  { q: 'Design, dev and growth in one room. Rare and incredibly useful.', who: 'Founder, EdTech' },
  { q: 'They care about the things most agencies skip — motion, typography, performance.', who: 'CTO, SaaS Co.' },
];

const row = [...items, ...items];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="px-6 mx-auto max-w-7xl mb-16">
        <div className="eyebrow mb-4">Testimonials</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
          Words from the <span className="text-gradient">people we build with</span>.
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-ink-950 to-transparent" />

        <div className="overflow-hidden">
          <div className="marquee-track flex gap-6 w-max">
            {row.map((t, i) => (
              <motion.figure
                key={i}
                whileHover={{ y: -6 }}
                className="glass rounded-3xl p-6 w-[320px] md:w-[380px] shrink-0 relative"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center text-lg">"</div>
                <blockquote className="text-white/85 leading-relaxed">{t.q}</blockquote>
                <figcaption className="mt-5 text-sm text-white/50">— {t.who}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
