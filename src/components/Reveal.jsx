import { m, useReducedMotion } from 'framer-motion';

function Reveal({ children, className = '', delay = 0, y = 24 }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}

export default Reveal;
