import { ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { aboutParagraphs, principles, trajectory } from '../data/portfolio';

function AboutSection() {
  return (
    <section id="about" className="section-shell" aria-labelledby="about-heading">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <Reveal>
            <SectionHeading
              titleId="about-heading"
              eyebrow="About Me"
              title="A mobile engineer growing into Bitcoin infrastructure, product systems, and technical leadership."
              description="My path started with mobile app delivery, but the direction is broader: software that is technically sound, economically meaningful, and useful in the real world."
            />
          </Reveal>

          <Reveal delay={0.06} className="panel p-7 sm:p-8">
            <div className="space-y-5 text-base leading-8 text-slate-300">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="panel p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <TrendingUp className="h-5 w-5 text-amber-300" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">Trajectory</h3>
                <p className="text-sm text-slate-400">How the work is evolving</p>
              </div>
            </div>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              {trajectory.map((item) => (
                <li key={item} className="flex gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-amber-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.14} className="panel p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <ShieldCheck className="h-5 w-5 text-emerald-300" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">Operating Principles</h3>
                <p className="text-sm text-slate-400">How I like to build</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {principles.map((principle) => (
                <span key={principle} className="tag">
                  {principle}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
