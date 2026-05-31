import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton.jsx';

const channels = [
  { label: 'Email',    value: 'hello@kriorama.com', href: 'mailto:hello@kriorama.com' },
  { label: 'WhatsApp', value: 'Chat with us',       href: 'https://wa.me/910000000000' },
  { label: 'LinkedIn', value: 'Follow our work',    href: '#' },
  { label: 'Instagram',value: 'See behind scenes',  href: '#' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`New project enquiry from ${data.get('name') || 'a visitor'}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nBudget: ${data.get('budget')}\n\n${data.get('message')}`
    );
    window.location.href = `mailto:hello@kriorama.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] rounded-full blur-[140px] opacity-40"
             style={{ background: 'radial-gradient(circle, #6D28D9, transparent 60%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] rounded-full blur-[140px] opacity-40"
             style={{ background: 'radial-gradient(circle, #EC4899, transparent 60%)' }} />
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-7xl font-bold leading-[0.95] tracking-tight"
        >
          Let's build something
          <br />
          <span className="text-gradient">extraordinary</span>.
        </motion.h2>

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          <form onSubmit={onSubmit} className="lg:col-span-3 glass-strong rounded-3xl p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Budget" name="budget" placeholder="e.g. ₹2–5L" />
              <Field label="Timeline" name="timeline" placeholder="e.g. 6 weeks" />
            </div>
            <div className="mt-5">
              <Field label="Tell us about your project" name="message" textarea required />
            </div>
            <div className="mt-7 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-white/40">We typically reply within one business day.</p>
              <MagneticButton className="btn-primary">
                {sent ? 'Opening mail…' : 'Send enquiry'}
                <span aria-hidden>→</span>
              </MagneticButton>
            </div>
          </form>

          <div className="lg:col-span-2 space-y-4">
            {channels.map(c => (
              <a key={c.label} href={c.href}
                 className="block group glass rounded-2xl p-5 hover:bg-white/[0.06] transition">
                <div className="eyebrow">{c.label}</div>
                <div className="mt-1 flex items-center justify-between gap-3">
                  <span className="text-white/90 group-hover:text-white">{c.value}</span>
                  <span className="text-white/40 group-hover:translate-x-1 transition">→</span>
                </div>
              </a>
            ))}
            <div className="glass rounded-2xl p-5">
              <div className="eyebrow">Based in</div>
              <div className="mt-1 text-white/90">Hyderabad, India · Working worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', required, placeholder, textarea }) {
  return (
    <label className="block">
      <span className="eyebrow block mb-2">{label}{required && <span className="text-brand-pink"> *</span>}</span>
      {textarea ? (
        <textarea
          name={name} required={required} rows={5} placeholder={placeholder}
          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-purple/60 focus:bg-white/[0.06] transition"
        />
      ) : (
        <input
          type={type} name={name} required={required} placeholder={placeholder}
          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-purple/60 focus:bg-white/[0.06] transition"
        />
      )}
    </label>
  );
}
