import { Compass } from 'lucide-react';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { visionPoints } from '../data/portfolio';

function VisionSection() {
  return (
    <section id="vision" className="section-shell" aria-labelledby="vision-heading">
      <Container>
        <Reveal>
          <SectionHeading
            titleId="vision-heading"
            eyebrow="What I&apos;m Building Toward"
            title="An engineering path shaped by Bitcoin, mobile systems, and freedom technology."
            description="The direction is aspirational, but grounded. I want to keep doing strong product work while moving closer to the infrastructure, tooling, and open source efforts that matter for the next decade."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visionPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.05}>
              <article className="panel h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-white/15">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Compass className="h-5 w-5 text-amber-300" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{point.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{point.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18} className="panel mt-6 p-7 text-center sm:p-8">
          <p className="mx-auto max-w-4xl text-lg leading-8 text-slate-300">
            I&apos;m especially interested in work that makes Bitcoin more usable, mobile products more trustworthy,
            and developer systems more thoughtful for builders operating in emerging markets.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export default VisionSection;
