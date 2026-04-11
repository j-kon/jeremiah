import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { projectSignals, projects } from '../data/portfolio';

function ProjectsSection() {
  return (
    <section id="projects" className="section-shell" aria-labelledby="projects-heading">
      <Container>
        <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[minmax(0,1fr)_22rem] 2xl:items-end">
          <Reveal>
            <SectionHeading
              titleId="projects-heading"
              eyebrow="Featured Projects"
              title="A deliberate body of work, not a generic collection of side projects."
              description="I&apos;m optimizing for signal. These projects are meant to show technical depth, product judgment, and a clear trajectory from mobile app execution into Bitcoin-native systems and tooling."
            />
          </Reveal>

          <Reveal delay={0.08} className="panel p-6">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Project Thesis</p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              The strongest thread across this work is not “I can code.” It is “I know where I&apos;m heading, and
              I&apos;m building toward it with intention.”
            </p>
          </Reveal>
        </div>

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
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
