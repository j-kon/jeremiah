import { m, useReducedMotion } from 'framer-motion';

const wordItem = {
  hidden: (reduced) =>
    reduced ? { opacity: 0 } : { opacity: 0, y: 28, filter: 'blur(5px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function WordReveal({ children, className, delay = 0, stagger = 0.055, as: Tag = 'span' }) {
  const prefersReducedMotion = useReducedMotion();
  const words = String(children).split(' ');

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <m.span
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      aria-label={children}
    >
      {words.map((word, i) => (
        <m.span
          key={i}
          className="inline-block"
          style={{ marginRight: i < words.length - 1 ? '0.28em' : 0 }}
          variants={wordItem}
          custom={prefersReducedMotion}
        >
          {word}
        </m.span>
      ))}
    </m.span>
  );
}

export default WordReveal;
