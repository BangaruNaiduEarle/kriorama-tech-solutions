import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, className = '', as = 'button', ...props }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const Comp = motion[as] || motion.button;

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setPos({ x: x * 0.25, y: y * 0.35 });
  };
  const onLeave = () => setPos({ x: 0, y: 0 });

  return (
    <Comp
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.4 }}
      className={className}
      {...props}
    >
      {children}
    </Comp>
  );
}
