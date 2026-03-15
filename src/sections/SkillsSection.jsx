import { Cpu, Server, Smartphone, Users, Wrench } from 'lucide-react';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { skillGroups } from '../data/portfolio';

const iconMap = {
  mobile: Smartphone,
  bitcoin: Cpu,
  backend: Server,
  tools: Wrench,
  community: Users,
};

function SkillsSection() {
  return (
    <section id="skills" className="section-shell" aria-labelledby="skills-heading">
      <Container>
        <Reveal>
          <SectionHeading
            titleId="skills-heading"
            eyebrow="Expertise"
            title="A blend of product delivery, Bitcoin curiosity, and community-led technical range."
            description="I work best where software quality, systems thinking, and real-world product usefulness all matter at the same time."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = iconMap[group.icon];

            return (
              <Reveal key={group.title} delay={index * 0.05}>
                <article className="panel h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-white/15">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <Icon className="h-5 w-5 text-amber-300" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{group.title}</h3>
                      <p className="text-sm text-slate-400">{group.summary}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default SkillsSection;
