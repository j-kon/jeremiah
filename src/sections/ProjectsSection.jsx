import { AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import Container from '../components/Container';
import FlagshipCaseStudy from '../components/FlagshipCaseStudy';
import ProjectCard from '../components/ProjectCard';
import ProjectCaseStudyModal from '../components/ProjectCaseStudyModal';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { experiments, flagshipCaseStudy, projectSignals, projects } from '../data/portfolio';

function ProjectsSection() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  return (
    <section id="projects" className="section-shell" aria-labelledby="projects-heading">
      <Container>
        <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[minmax(0,1fr)_22rem] 2xl:items-end">
          <Reveal>
            <SectionHeading
              titleId="projects-heading"
              eyebrow="Featured Projects"
              title="A body of work built around direction, not portfolio filler."
              description="The strongest signal here is not volume. It&apos;s the progression from solid product execution into Bitcoin-native wallet work, Lightning product exploration, and developer-facing systems thinking."
            />
          </Reveal>

          <Reveal delay={0.08} className="panel p-6">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Project Thesis</p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The strongest thread across this work is not “I can code.” It is “I can ship, I can reason about
              systems, and I know which technical depth I&apos;m moving toward.”
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.06} className="mt-10">
          <FlagshipCaseStudy caseStudy={flagshipCaseStudy} />
        </Reveal>

        <div className="mt-8 grid gap-4 xl:grid-cols-3">
          {projectSignals.map((signal, index) => (
            <Reveal key={signal.label} delay={index * 0.05}>
              <article className="panel h-full p-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">{signal.label}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">{signal.value}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{signal.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              onOpenCaseStudy={setActiveCaseStudy}
            />
          ))}
        </div>

        <div className="mt-12">
          <Reveal>
            <div className="max-w-2xl">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Open Source & Experiments</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
                Smaller surfaces that still show trajectory.
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Not every useful signal has to be a full case study. These are smaller public surfaces that make the
                direction more inspectable.
              </p>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 xl:grid-cols-4">
            {experiments.map((experiment, index) => {
              const isAnchor = experiment.href.startsWith('#');

              return (
                <Reveal key={experiment.title} delay={index * 0.05}>
                  <a
                    href={experiment.href}
                    target={!isAnchor ? '_blank' : undefined}
                    rel={!isAnchor ? 'noreferrer' : undefined}
                    className="group panel block h-full p-5 transition duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                  >
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-400">
                      {experiment.status}
                    </span>
                    <h4 className="mt-5 font-display text-xl font-semibold text-white">{experiment.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{experiment.description}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-200">
                      Explore
                      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {activeCaseStudy ? (
          <ProjectCaseStudyModal project={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export default ProjectsSection;
