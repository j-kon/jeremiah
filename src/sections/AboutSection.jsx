import { ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { aboutParagraphs, principles, trajectory, workingWithMe } from '../data/portfolio';

function AboutSection() {
  return (
    <section id="about" className="section-shell" aria-labelledby="about-heading">
      <Container>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[0.82fr_1.18fr] xl:gap-10">
          <Reveal>
            <SectionHeading
              titleId="about-heading"
              eyebrow="About Me"
              title="Started in mobile product delivery. Deliberately moving toward Bitcoin infrastructure, product systems, and technical leverage."
              description="The direction matters as much as the experience. I want the site to make that arc obvious."
            />

            <div className="mt-8 rounded-[30px] border border-amber-300/10 bg-amber-300/[0.045] p-5 sm:p-7">
              <p className="font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
                I&apos;m not trying to look like a generic Flutter developer. I&apos;m building toward the layer where
                mobile, Bitcoin, and developer systems start to intersect.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="panel p-5 sm:p-8">
            <div className="space-y-5 text-base leading-8 text-slate-300">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 xl:col-span-2 xl:grid-cols-[1fr_1fr]">
            <Reveal delay={0.1} className="panel p-5 sm:p-8">
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

            <Reveal delay={0.14} className="panel p-5 sm:p-8">
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

          <Reveal delay={0.18} className="panel-strong xl:col-span-2 p-5 sm:p-8">
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[0.78fr_1.22fr]">
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Working With Me</p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">How I tend to add value on a team.</h3>
              </div>

              <div className="grid gap-5">
                {workingWithMe.map((item) => (
                  <div key={item.title} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                    <h4 className="font-display text-xl font-semibold text-white">{item.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
