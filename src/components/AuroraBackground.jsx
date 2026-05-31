import React from 'react';

export default function AuroraBackground({ variant = 'default' }) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Aurora blobs */}
      <div className="absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full opacity-50 blur-[120px] animate-aurora"
           style={{ background: 'radial-gradient(circle at 30% 30%, #6D28D9, transparent 60%)' }} />
      <div className="absolute top-1/3 -right-40 w-[55vw] h-[55vw] rounded-full opacity-40 blur-[120px] animate-aurora"
           style={{ background: 'radial-gradient(circle at 50% 50%, #EC4899, transparent 60%)', animationDelay: '-6s' }} />
      <div className="absolute bottom-0 left-1/3 w-[45vw] h-[45vw] rounded-full opacity-30 blur-[120px] animate-aurora"
           style={{ background: 'radial-gradient(circle at 50% 50%, #F97316, transparent 60%)', animationDelay: '-12s' }} />
      {/* grid */}
      {variant !== 'plain' && <div className="absolute inset-0 grid-bg opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />}
      {/* noise */}
      <div className="absolute inset-0 noise opacity-[0.05] mix-blend-overlay" />
    </div>
  );
}
