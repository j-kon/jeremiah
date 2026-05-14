import { m, useReducedMotion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { nowNext, visionPoints } from '../data/portfolio';

function VisionSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="vision" className="section-shell" aria-labelledby="vision-heading">
      <Container>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[0.84fr_1.16fr] xl:gap-10">
          <Reveal>
            <SectionHeading
              titleId="vision-heading"
              eyebrow="Now / Next"
              title="A direction that is grounded in current work, not only future ambition."
              description="I want the portfolio to show where I am now, what I am deliberately growing toward, and what kind of technical problems I want to spend more time on."
            />

            <div className="panel mt-8 p-5 sm:p-7">
              <p className="font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
                The through-line is simple: keep shipping strong product work while moving closer to the rails that make
                Bitcoin, mobile trust, and developer leverage more real.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="panel-strong p-5 sm:p-8">
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Now</p>
                <div className="mt-5 space-y-4">
                  {nowNext.now.map((item, i) => (
                    <m.div
                      key={item}
                      className="flex gap-3"
                      initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.38, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-amber-300" />
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </m.div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Next</p>
                <div className="mt-5 space-y-4">
                  {nowNext.next.map((item, i) => (
                    <m.div
                      key={item}
                      className="flex gap-3"
                      initial={prefersReducedMotion ? false : { opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.38, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </m.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="fine-line my-8" />

            <div className="grid gap-4 md:grid-cols-2">
              {visionPoints.map((point, index) => (
                <m.div
                  key={point.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 sm:p-5"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={prefersReducedMotion ? undefined : { y: -4, borderColor: 'rgba(245,181,68,0.25)' }}
                  style={{ boxShadow: 'none' }}
                  animate={{}}
                >
                  <m.span
                    className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]"
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.12, borderColor: 'rgba(245,181,68,0.3)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <Compass className="h-4 w-4 text-amber-300" />
                  </m.span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{point.description}</p>
                </m.div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default VisionSection;
