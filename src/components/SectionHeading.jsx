import { m } from 'framer-motion';

function SectionHeading({ eyebrow, title, description, align = 'left', titleId }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <span className="eyebrow">{eyebrow}</span>

      {/* Animated amber accent line */}
      <m.div
        className="mt-4 h-px origin-left bg-gradient-to-r from-amber-300/70 via-amber-300/30 to-transparent"
        style={{ width: '3rem' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      />

      <h2
        id={titleId}
        className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}

export default SectionHeading;
