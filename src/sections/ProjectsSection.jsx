import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolio';

function ProjectsSection() {
  return (
    <section id="projects" className="section-shell" aria-labelledby="projects-heading">
      <Container>
        <Reveal>
          <SectionHeading
            titleId="projects-heading"
            eyebrow="Featured Projects"
            title="Selected work that shows product depth, Bitcoin direction, and engineering range."
            description="These projects are framed to show how I think: not only shipping code, but exploring infrastructure, developer leverage, and product possibilities that can compound over time."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
