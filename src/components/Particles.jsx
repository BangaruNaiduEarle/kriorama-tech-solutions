import React, { useEffect, useRef } from 'react';

export default function Particles({ count = 60 }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, raf;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const particles = [];
    const colors = ['#A855F7', '#EC4899', '#FB7185', '#F97316', '#ffffff'];

    function resize() {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    }

    function init() {
      particles.length = 0;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.6 + 0.4,
          c: colors[Math.floor(Math.random() * colors.length)],
          a: Math.random() * 0.6 + 0.2,
        });
      }
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }

    resize(); init(); tick();
    window.addEventListener('resize', () => { resize(); init(); });
    return () => cancelAnimationFrame(raf);
  }, [count]);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full -z-[5] pointer-events-none" />;
}
