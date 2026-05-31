import React, { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setEnabled(false);
      return;
    }
    let mx = 0, my = 0, rx = 0, ry = 0;
    const move = (e) => { mx = e.clientX; my = e.clientY; };
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
      requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', move);
    const id = requestAnimationFrame(loop);
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(id); };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={ring} className="pointer-events-none fixed top-0 left-0 z-[100] w-10 h-10 rounded-full border border-brand-purple/60 mix-blend-screen" />
      <div ref={dot} className="pointer-events-none fixed top-0 left-0 z-[100] w-2 h-2 rounded-full bg-white" />
    </>
  );
}
