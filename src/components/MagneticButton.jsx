import { useRef, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';

function MagneticButton({ children, className = '', strength = 0.28, ...props }) {
  const ref = useRef(null);
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMove = (e) => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setXY({ x, y });
  };

  const handleLeave = () => setXY({ x: 0, y: 0 });

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={xy}
      transition={{ type: 'spring', stiffness: 300, damping: 22, mass: 0.4 }}
      className={className}
      {...props}
    >
      {children}
    </m.div>
  );
}

export default MagneticButton;
