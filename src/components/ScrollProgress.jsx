import { m, useScroll, useSpring } from 'framer-motion';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.25,
  });

  return (
    <m.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-amber-300 via-cyan-300 to-amber-200 shadow-[0_0_24px_rgba(245,181,68,0.45)]"
      style={{ scaleX }}
    />
  );
}

export default ScrollProgress;
