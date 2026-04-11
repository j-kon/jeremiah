import { Cpu, Server, Smartphone, Users, Wrench } from 'lucide-react';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import TechBadge from '../components/TechBadge';
import { skillGroups } from '../data/portfolio';
import { featuredStack } from '../data/portfolio';

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
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[0.72fr_1.28fr] xl:gap-10">
          <Reveal>
            <SectionHeading
              titleId="skills-heading"
              eyebrow="Expertise"
              title="Breadth where it helps. Depth where it matters."
              description="The value is not having a long tools list. It is being able to connect product delivery, infrastructure curiosity, and communication into useful engineering work."
            />

            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
              <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Toolchain surface</p>
              <div className="flex flex-wrap gap-2">
                {featuredStack.map((item) => (
                  <TechBadge key={item} name={item} />
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-[32px] border border-white/10 bg-white/10">
            {skillGroups.map((group, index) => {
              const Icon = iconMap[group.icon];

              return (
                <Reveal key={group.title} delay={index * 0.05}>
                  <article className="bg-slate-950/85 p-5 transition duration-300 hover:bg-slate-950 sm:p-7">
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[14rem_1fr] lg:items-start">
                      <div className="flex items-center gap-4">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                          <Icon className="h-5 w-5 text-amber-300" />
                        </span>
                        <div>
                          <h3 className="font-display text-xl font-semibold text-white">{group.title}</h3>
                          <p className="text-sm text-slate-400">{group.summary}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <TechBadge key={item} name={item} />
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SkillsSection;
