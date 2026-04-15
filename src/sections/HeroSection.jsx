import { m, useReducedMotion } from 'framer-motion';
import { ArrowRight, Briefcase, MapPin, Sparkles } from 'lucide-react';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import SocialLinks from '../components/SocialLinks';
import TechBadge from '../components/TechBadge';
import TechMarquee from '../components/TechMarquee';
import { featuredStack, heroBadges, heroMetrics, heroTerminal, heroTracks, socialLinks } from '../data/portfolio';
import { trackEvent } from '../lib/analytics';

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
        <div className="grid grid-cols-1 items-start gap-10 xl:grid-cols-[minmax(0,1.02fr)_minmax(22rem,30rem)] xl:gap-8">
          <m.div initial="hidden" animate="show" variants={heroContainer} className="min-w-0 max-w-3xl">
            <m.p variants={heroItem} className="font-mono text-[0.72rem] uppercase tracking-[0.26em] text-amber-200/75">
              Jeremiah Jacob / Jaykon
            </m.p>

            <m.div variants={heroItem} className="mt-5 flex flex-wrap gap-3">
              <span className="eyebrow">
                <Sparkles className="h-3.5 w-3.5" />
                Mobile Systems / Bitcoin Builder
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
              className="mt-8 max-w-full font-display text-[2.3rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl sm:leading-[0.98] xl:max-w-5xl xl:text-[4.65rem] xl:leading-[0.95]"
            >
              Shipping product-grade mobile systems.
              <span className="block text-amber-200">Moving deeper into Bitcoin wallets, Lightning UX, and developer infrastructure.</span>
            </m.h1>

            <m.p variants={heroItem} className="mt-6 max-w-full text-base leading-8 text-slate-300 sm:max-w-2xl sm:text-xl">
              Flutter engineer with 5+ years across architecture, auth, APIs, Firebase-backed systems, and mobile
              delivery. I&apos;m now translating that execution discipline into self-custody wallet work, Lightning-flavored
              product flows, and tools that help builders ship with more clarity.
            </m.p>

            <m.div variants={heroItem} className="mt-8 grid gap-4 sm:grid-cols-2">
              {heroTracks.map((track) => (
                <div key={track.label} className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">{track.label}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{track.description}</p>
                </div>
              ))}
            </m.div>

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

            <m.div variants={heroItem} className="mt-10 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
              <a
                href="#projects"
                className="btn-primary group w-full sm:w-auto"
                onClick={() => trackEvent('hero_cta_click', { label: 'Explore Selected Work' })}
              >
                Explore Selected Work
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="btn-secondary w-full sm:w-auto"
                onClick={() => trackEvent('hero_cta_click', { label: 'Start a Conversation' })}
              >
                Start a Conversation
              </a>
            </m.div>

            <m.div variants={heroItem} className="mt-10">
              <SocialLinks links={socialLinks} />
            </m.div>

            <m.div variants={heroItem} className="mt-10">
              <div className="mb-4 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Core stack and current tools</p>
                <p className="text-xs text-slate-500">Animated systems view</p>
              </div>
              <TechMarquee items={featuredStack} />
            </m.div>
          </m.div>

          <Reveal delay={0.08} amount={0.08} className="min-w-0">
            <div className="tech-stage">
              <div className="scan-line" />
              <div className="border-b border-white/10 px-6 py-4 sm:px-7">
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Current Operating System</p>
                  <span className="hidden rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-cyan-200 sm:inline-flex">
                    shipping / iterating / compounding
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="relative mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/20 px-4 py-3 font-mono text-xs leading-6 text-slate-300">
                  <div className="command-sheen" />
                  <span className="text-amber-300">$</span> ship flutter.systems --flagship root.wallet --next
                  wallet.rails --edge dev.tools
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
                      viewport={{ once: true, amount: 0.14 }}
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

                <div className="grid gap-3 md:grid-cols-3">
                  {heroMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-white/15"
                    >
                      <p className="font-display text-2xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="mb-3 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Frameworks / languages / rails</p>
                    <p className="text-[0.68rem] uppercase tracking-[0.2em] text-slate-600">logo matrix</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:grid-cols-3">
                    {featuredStack.map((item, index) => (
                      <m.div
                        key={item}
                        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.12 }}
                        transition={{
                          opacity: { duration: 0.35, delay: index * 0.03 },
                          scale: { duration: 0.35, delay: index * 0.03 },
                        }}
                      >
                        <TechBadge name={item} variant="tile" />
                      </m.div>
                    ))}
                  </div>
                </div>

                <m.div
                  className="rounded-2xl border border-amber-300/15 bg-amber-300/5 px-4 py-3 text-sm leading-7 text-slate-300"
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  Current signal: Root Wallet, Bitcoin product thinking, and a growing body of work around wallet rails,
                  developer systems, and practical freedom tech.
                </m.div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
