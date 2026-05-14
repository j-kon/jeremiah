import { m, useReducedMotion } from 'framer-motion';
import { ArrowRight, BookOpen, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Container from '../components/Container';
import MagneticButton from '../components/MagneticButton';
import Reveal from '../components/Reveal';
import { contactIntro, contactLanes, contactMethods } from '../data/portfolio';
import { trackEvent } from '../lib/analytics';

const iconMap = {
  mail: Mail,
  location: MapPin,
  github: Github,
  linkedin: Linkedin,
  medium: BookOpen,
};

const iconAccent = {
  mail: 'rgba(245,181,68,0.15)',
  location: 'rgba(148,163,184,0.1)',
  github: 'rgba(255,255,255,0.08)',
  linkedin: 'rgba(56,189,248,0.12)',
  medium: 'rgba(52,211,153,0.1)',
};

function ContactSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="section-shell pb-24" aria-labelledby="contact-heading">
      <Container>
        <Reveal>
          <div className="panel-strong overflow-hidden">
            <div className="grid grid-cols-1 gap-8 p-5 sm:p-8 xl:grid-cols-[1.04fr_0.96fr] xl:p-10">
              <div>
                <span className="eyebrow">Contact</span>
                <h2 id="contact-heading" className="mt-5 max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
                  Let&apos;s build useful products, stronger tools, and Bitcoin-native experiences that actually matter.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{contactIntro}</p>

                <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Best Fit Collaboration Lanes</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {contactLanes.map((lane, i) => (
                      <m.span
                        key={lane}
                        className="tag"
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.35, delay: i * 0.07 }}
                      >
                        {lane}
                      </m.span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
                  <MagneticButton className="w-full sm:w-auto">
                    <a
                      href="mailto:hello@jaykon.dev"
                      className="btn-primary w-full"
                      onClick={() => trackEvent('contact_cta_click', { label: 'Email Me' })}
                    >
                      Email Me
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </MagneticButton>
                  <MagneticButton className="w-full sm:w-auto">
                    <a
                      href="/resume"
                      className="btn-secondary w-full"
                      onClick={() => trackEvent('contact_cta_click', { label: 'Open Resume' })}
                    >
                      Open Resume
                    </a>
                  </MagneticButton>
                  <MagneticButton className="w-full sm:w-auto">
                    <a
                      href="#projects"
                      className="btn-secondary w-full"
                      onClick={() => trackEvent('contact_cta_click', { label: 'View Projects' })}
                    >
                      View Projects
                    </a>
                  </MagneticButton>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactMethods.map((method, index) => {
                  const Icon = iconMap[method.icon];
                  const accentBg = iconAccent[method.icon] ?? 'transparent';
                  const isExternal = method.href?.startsWith('http');

                  const inner = (
                    <m.div
                      className="panel h-full rounded-3xl p-4 transition duration-300 hover:border-white/20 sm:p-5"
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                    >
                      <m.span
                        className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10"
                        style={{ background: accentBg }}
                        whileHover={prefersReducedMotion ? undefined : { scale: 1.1 }}
                        transition={{ duration: 0.18 }}
                      >
                        <Icon className="h-5 w-5 text-amber-300" />
                      </m.span>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                        {method.label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-200">{method.value}</p>
                    </m.div>
                  );

                  if (!method.href) {
                    return <div key={method.label}>{inner}</div>;
                  }

                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      className="block"
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                    >
                      {inner}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default ContactSection;
