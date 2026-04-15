import { ArrowUpRight } from 'lucide-react';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { writingArchive } from '../data/portfolio';

function LibrarySection() {
  return (
    <section id="library" className="section-shell" aria-labelledby="library-heading">
      <Container>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:gap-10">
          <Reveal>
            <SectionHeading
              titleId="library-heading"
              eyebrow="Writing & Notes"
              title="A deeper layer for product notes, architecture thinking, and Bitcoin-native ideas."
              description="The goal here is not content for content&apos;s sake. It is to make the way I think more inspectable: what I notice in products, where I think the leverage is, and how technical decisions connect back to user trust."
            />

            <div className="panel mt-8 p-6 sm:p-7">
              <p className="font-display text-xl font-semibold leading-tight text-white sm:text-2xl">
                I want the portfolio to show both shipped work and the notes behind the work. Writing is where product
                judgment, systems thinking, and technical taste become visible.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {writingArchive.map((entry, index) => (
              <Reveal key={entry.title} delay={index * 0.05}>
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group panel block p-5 transition duration-300 hover:border-white/15 hover:bg-white/[0.05] sm:p-7"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-amber-200/80">
                      {entry.format}
                    </span>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <h3 className="max-w-2xl font-display text-2xl font-semibold text-white">{entry.title}</h3>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-200" />
                  </div>

                  <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300">{entry.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {entry.topics.map((topic) => (
                      <span key={topic} className="tag">
                        {topic}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LibrarySection;
