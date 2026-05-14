import { m, useReducedMotion } from 'framer-motion';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import { signalCards } from '../data/portfolio';
import { useCountUp } from '../hooks/useCountUp';

function SignalCard({ card, index }) {
  const prefersReducedMotion = useReducedMotion();
  const raw = String(card.value);
  const numeric = parseInt(raw.replace(/\D/g, ''), 10);
  const suffix = raw.replace(/[0-9]/g, '');
  const hasNumber = !isNaN(numeric) && numeric > 0;
  const [count, ref] = useCountUp(hasNumber ? numeric : 0, 1.4);

  return (
    <Reveal key={card.eyebrow} delay={index * 0.05}>
      <m.article
        ref={ref}
        className="group relative h-full overflow-hidden bg-slate-950/80 p-6 sm:p-7"
        whileHover={prefersReducedMotion ? undefined : { backgroundColor: 'rgba(15,18,28,0.95)' }}
        transition={{ duration: 0.25 }}
      >
        {/* Shimmer on hover */}
        <m.div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, transparent 40%, rgba(245,181,68,0.05) 50%, transparent 60%)',
            backgroundSize: '200% 100%',
          }}
          initial={{ backgroundPosition: '200% 0' }}
          whileHover={prefersReducedMotion ? undefined : { backgroundPosition: '-200% 0' }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />

        <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">{card.eyebrow}</p>
        <h3 className="mt-4 font-display text-2xl font-semibold text-white">
          {hasNumber ? `${count}${suffix}` : card.value}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>

        {/* Bottom accent line on hover */}
        <m.div
          className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-amber-300/60 to-transparent"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </m.article>
    </Reveal>
  );
}

function SignalSection() {
  return (
    <section aria-label="Proof highlights" className="pb-12 pt-2 sm:pb-14">
      <Container>
        <div className="panel-strong overflow-hidden">
          <div className="grid gap-px bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
            {signalCards.map((card, index) => (
              <SignalCard key={card.eyebrow} card={card} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SignalSection;
