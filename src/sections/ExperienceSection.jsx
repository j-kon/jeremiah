import { m, useReducedMotion } from 'framer-motion';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/portfolio';

function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="section-shell" aria-labelledby="experience-heading">
      <Container>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[0.85fr_1.15fr] xl:gap-10">
          <Reveal>
            <SectionHeading
              titleId="experience-heading"
              eyebrow="Experience"
              title="A mobile product foundation built across multiple teams and delivery environments."
              description="The common thread across these roles was ownership: taking product intent, integration complexity, and shipping pressure, then turning them into maintainable app behavior."
            />
          </Reveal>

          <div className="relative pl-6 sm:pl-8">
            {/* Animated timeline line */}
            <m.div
              className="absolute left-1 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-amber-300/60 via-white/15 to-transparent sm:left-3"
              initial={prefersReducedMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="space-y-6">
              {experience.map((item, index) => (
                <Reveal key={item.company} delay={index * 0.06}>
                  <article className="panel relative p-6 sm:p-7">
                    {/* Timeline dot with pulse */}
                    <m.span
                      className="absolute -left-[1.56rem] top-8 h-3.5 w-3.5 rounded-full border border-amber-300/40 bg-amber-300/80 shadow-[0_0_0_6px_rgba(6,7,10,1)] sm:-left-[1.68rem]"
                      initial={prefersReducedMotion ? false : { scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.4, delay: index * 0.08 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Ping ring */}
                      <m.span
                        className="absolute inset-0 rounded-full bg-amber-300/40"
                        animate={prefersReducedMotion ? {} : { scale: [1, 1.9, 1.9], opacity: [0.6, 0, 0] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.4, ease: 'easeOut' }}
                      />
                    </m.span>

                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-500">
                          Role {String(index + 1).padStart(2, '0')}
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-semibold text-white">{item.company}</h3>
                        <p className="mt-1 text-sm font-medium text-amber-200">{item.role}</p>
                      </div>
                    </div>

                    <p className="mt-5 font-display text-xl font-semibold leading-8 text-white">{item.impact}</p>
                    <p className="mt-5 text-base leading-8 text-slate-300">{item.summary}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.themes.map((theme) => (
                        <span key={theme} className="tag">
                          {theme}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ExperienceSection;
