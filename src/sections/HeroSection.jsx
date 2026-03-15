import { m, useReducedMotion } from 'framer-motion';
import { ArrowRight, Briefcase, MapPin, Sparkles } from 'lucide-react';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import SocialLinks from '../components/SocialLinks';
import { heroBadges, heroMetrics, heroTerminal, socialLinks } from '../data/portfolio';

function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const heroContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const heroItem = {
    hidden: prefersReducedMotion
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: 22,
          filter: 'blur(8px)',
        },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="home" className="section-shell pt-12 sm:pt-16" aria-labelledby="hero-title">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_30rem] lg:gap-8">
          <m.div initial="hidden" animate="show" variants={heroContainer} className="max-w-3xl">
            <m.div variants={heroItem} className="flex flex-wrap gap-3">
              <span className="eyebrow">
                <Sparkles className="h-3.5 w-3.5" />
                Software Engineer / Bitcoin Builder
              </span>
              <span className="tag">
                <MapPin className="mr-2 h-3.5 w-3.5 text-amber-300/90" />
                Nigeria
              </span>
              <span className="tag">
                <Briefcase className="mr-2 h-3.5 w-3.5 text-emerald-300/90" />
                Open to collaboration
              </span>
            </m.div>

            <m.h1
              id="hero-title"
              variants={heroItem}
              className="mt-8 max-w-4xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Building mobile products, Bitcoin tools, and developer-focused systems with strong technical taste.
            </m.h1>

            <m.p variants={heroItem} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I&apos;m Jeremiah Jacob, also known as Jaykon. I build polished Flutter products, explore wallet and
              Lightning infrastructure, and care deeply about software that increases access, trust, and user freedom.
            </m.p>

            <m.div variants={heroItem} className="mt-8 flex flex-wrap gap-3">
              {heroBadges.map((badge, index) => (
                <m.span
                  key={badge}
                  className="tag"
                  whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                >
                  {badge}
                </m.span>
              ))}
            </m.div>

            <m.div variants={heroItem} className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary group">
                View Projects
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </m.div>

            <m.div variants={heroItem} className="mt-10">
              <SocialLinks links={socialLinks} />
            </m.div>
          </m.div>

          <Reveal delay={0.08}>
            <m.div
              className="panel-strong overflow-hidden"
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: [0, -8, 0],
                    }
              }
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            >
              <div className="border-b border-white/10 px-6 py-4 sm:px-7">
                <div className="flex items-center gap-2">
                  <m.span
                    className="h-2.5 w-2.5 rounded-full bg-rose-400"
                    animate={prefersReducedMotion ? undefined : { opacity: [0.65, 1, 0.65] }}
                    transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <m.span
                    className="h-2.5 w-2.5 rounded-full bg-amber-300"
                    animate={prefersReducedMotion ? undefined : { opacity: [0.65, 1, 0.65] }}
                    transition={{ duration: 2.4, delay: 0.25, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <m.span
                    className="h-2.5 w-2.5 rounded-full bg-emerald-400"
                    animate={prefersReducedMotion ? undefined : { opacity: [0.65, 1, 0.65] }}
                    transition={{ duration: 2.4, delay: 0.5, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
                <div className="relative mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/20 px-4 py-3 font-mono text-xs text-slate-300">
                  <m.div
                    className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]"
                    animate={prefersReducedMotion ? undefined : { x: ['-120%', '560%'] }}
                    transition={{
                      duration: 4.6,
                      ease: 'easeInOut',
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 1.4,
                    }}
                  />
                  <span className="text-amber-300">$</span> focus --areas mobile.products bitcoin.systems
                  developer.culture
                </div>
              </div>

              <div className="space-y-6 p-6 sm:p-7">
                <div className="space-y-4">
                  {heroTerminal.map((entry, index) => (
                    <m.div
                      key={entry.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                      initial={prefersReducedMotion ? false : { opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.55, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                    >
                      <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-slate-500">
                        {entry.label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-200">{entry.value}</p>
                    </m.div>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {heroMetrics.map((metric, index) => (
                    <m.div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                      animate={prefersReducedMotion ? undefined : { y: [0, -5, 0] }}
                      transition={{
                        duration: 3.4,
                        delay: index * 0.18,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: 'mirror',
                        ease: 'easeInOut',
                      }}
                    >
                      <p className="font-display text-2xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{metric.label}</p>
                    </m.div>
                  ))}
                </div>

                <m.div
                  className="rounded-2xl border border-amber-300/15 bg-amber-300/5 px-4 py-3 text-sm leading-7 text-slate-300"
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  Increasingly focused on wallet rails, Lightning-enabled product flows, and tools that help
                  developers think and ship with more clarity.
                </m.div>
              </div>
            </m.div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
