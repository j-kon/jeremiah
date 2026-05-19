import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import TechBadge from '../components/TechBadge';
import { openSourceProjects, openSourceSignals, openSourceStats, openSourceTimeline, openSourceTimelineFilters } from '../data/portfolio';

function OpenSourceSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredTimeline = useMemo(() => {
    if (activeFilter === 'All') {
      return openSourceTimeline;
    }

    return openSourceTimeline.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  return (
    <section id="open-source" className="section-shell" aria-labelledby="open-source-heading">
      <Container>
        <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[minmax(0,1fr)_22rem] 2xl:items-end">
          <Reveal>
            <SectionHeading
              titleId="open-source-heading"
              eyebrow="Open Source"
              title="Upstream BDK work that makes the trajectory inspectable."
              description="This section is about real public collaboration, not generic interest: merged PRs, review feedback, issue participation, and contribution traces across both `bdk-dart` and `bdk-ffi`."
            />
          </Reveal>

          <Reveal delay={0.08} className="panel p-6">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Why It Matters</p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Open source is where interest turns into evidence. These repos show authored merges, review judgment,
              issue-thread participation, and the ability to contribute usefully even when a PR is still under debate
              or ultimately closed.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 xl:grid-cols-3">
          {openSourceSignals.map((signal, index) => (
            <Reveal key={signal.label} delay={index * 0.05}>
              <article className="panel h-full p-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">{signal.label}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">{signal.value}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{signal.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {openSourceStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.04}>
              <article className="panel h-full p-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">{stat.label}</p>
                <h3 className="mt-4 font-display text-[1.9rem] font-semibold text-white sm:text-[2.1rem]">{stat.value}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{stat.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {openSourceProjects.map((project, index) => {
            const isAnchor = project.href.startsWith('#');

            return (
              <Reveal key={project.title} delay={index * 0.06}>
                <article className="panel-strong h-full p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-amber-200/80">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-slate-300">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <TechBadge key={item} name={item} />
                    ))}
                  </div>

                  <div className="fine-line my-6" />

                  <div className="space-y-4">
                    {project.proof.map((item) => (
                      <div key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-300/80" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    target={!isAnchor ? '_blank' : undefined}
                    rel={!isAnchor ? 'noreferrer' : undefined}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition duration-300 hover:text-amber-200"
                  >
                    {project.linkLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end">
              <div className="max-w-2xl">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">GitHub Activity Timeline</p>
                <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  A clearer view of how the upstream work compounds.
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  This turns the contribution record into something easier to scan: code merged, review judgment, and
                  issue participation across the BDK ecosystem.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {openSourceTimelineFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-300 ${
                      activeFilter === filter
                        ? 'border-amber-300/35 bg-amber-300/[0.08] text-amber-200'
                        : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-8 space-y-5">
            {filteredTimeline.map((item, index) => (
              <Reveal key={`${item.date}-${item.title}`} delay={index * 0.04}>
                <article className="panel relative p-5 sm:p-6 lg:pl-10">
                  <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-amber-300/45 via-white/10 to-transparent lg:block" />
                  <div className="absolute left-[1.02rem] top-7 hidden h-3.5 w-3.5 rounded-full border border-amber-300/30 bg-slate-950 shadow-[0_0_0_4px_rgba(245,181,68,0.08)] lg:block" />

                  <div className="grid gap-4 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-6">
                    <div className="lg:pt-1">
                      <p className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-slate-500">{item.date}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-amber-200/80">
                          {item.type}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-400">
                          {item.repo}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-display text-2xl font-semibold text-white">{item.title}</h4>
                      <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-300">{item.summary}</p>

                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition duration-300 hover:text-amber-200"
                      >
                        {item.cta}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default OpenSourceSection;
