import { ArrowRight, Download, Printer } from 'lucide-react';
import Container from '../components/Container';
import PageHeader from '../components/PageHeader';
import PageMeta from '../components/PageMeta';
import Reveal from '../components/Reveal';
import { contactMethods, experience, resumeHighlights, resumeSections } from '../data/portfolio';
import { trackEvent } from '../lib/analytics';

function ResumePage() {
  return (
    <>
      <PageMeta
        title="Resume | Jeremiah Jacob"
        description="Resume-style profile for Jeremiah Jacob covering mobile engineering, Root Wallet, Bitcoin systems direction, community leadership, and collaboration focus."
        pathname="/resume"
      />
      <PageHeader currentPath="/resume" />

      <main className="pb-24">
        <section className="section-shell pt-12 sm:pt-16">
          <Container>
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[0.86fr_1.14fr] xl:gap-10">
              <Reveal>
                <span className="eyebrow">Resume / Profile</span>
                <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-6xl">
                  Jeremiah Jacob
                  <span className="mt-3 block text-amber-200">Flutter engineer, Bitcoin builder, and community leader.</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-xl">
                  Product-grade mobile engineering with a growing focus on wallet infrastructure, Lightning-flavored product direction,
                  and tools that help technical teams ship more clearly.
                </p>

                <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                  <button
                    type="button"
                    className="btn-primary w-full sm:w-auto"
                    onClick={() => {
                      trackEvent('resume_print_click', { location: 'resume_page' });
                      window.print();
                    }}
                  >
                    Print / Save
                    <Printer className="h-4 w-4" />
                  </button>
                  <a
                    href="/#contact"
                    className="btn-secondary w-full sm:w-auto"
                    onClick={() => trackEvent('resume_cta_click', { label: 'Talk about opportunities' })}
                  >
                    Talk About Opportunities
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.06} className="panel-strong p-5 sm:p-8">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Snapshot</p>
                <div className="mt-6 space-y-4">
                  {resumeHighlights.map((item) => (
                    <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="pb-20">
          <Container>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <Reveal>
                <div className="panel p-5 sm:p-7">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Core Strengths</p>
                  <div className="mt-6 space-y-4">
                    {resumeSections.strengths.map((item) => (
                      <div key={item} className="flex gap-3">
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-amber-300" />
                        <p className="text-sm leading-7 text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="panel p-5 sm:p-7">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Best Fit Opportunities</p>
                  <div className="mt-6 space-y-4">
                    {resumeSections.opportunities.map((item) => (
                      <div key={item} className="flex gap-3">
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                        <p className="text-sm leading-7 text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="pb-20">
          <Container>
            <Reveal>
              <div className="max-w-2xl">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Experience</p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                  Roles that built the shipping discipline underneath the current direction.
                </h2>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4">
              {experience.map((item, index) => (
                <Reveal key={item.company} delay={index * 0.04}>
                  <article className="panel p-5 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-500">{item.company}</p>
                        <h3 className="mt-2 font-display text-2xl font-semibold text-white">{item.role}</h3>
                      </div>
                    </div>
                    <p className="mt-4 font-display text-xl font-semibold leading-8 text-white">{item.impact}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{item.summary}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-24">
          <Container>
            <Reveal>
              <div className="panel-strong p-5 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-2xl">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Contact</p>
                    <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                      Happy to share deeper walkthroughs, project context, and next-step details in conversation.
                    </h2>
                  </div>

                  <a
                    href="/root-wallet"
                    className="btn-secondary"
                    onClick={() => trackEvent('resume_cta_click', { label: 'Open Root Wallet case study' })}
                  >
                    Open Root Wallet
                    <Download className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                  {contactMethods.map((method) => (
                    <div key={method.label} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">{method.label}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-200">{method.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}

export default ResumePage;
