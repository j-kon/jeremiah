import { m, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

function ProjectCard({ project, index }) {
  const isAnchor = project.href.startsWith('#');
  const prefersReducedMotion = useReducedMotion();

  return (
    <Reveal
      delay={index * 0.06}
      className={project.featured ? 'lg:col-span-2' : ''}
    >
      <m.article
        className="group panel-strong relative h-full overflow-hidden transition duration-300 hover:border-white/15"
        whileHover={prefersReducedMotion ? undefined : { y: -8 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <m.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,181,68,0.12),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08),transparent_28%)] opacity-0 transition duration-500 group-hover:opacity-100"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }
          }
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: 'mirror', ease: 'linear' }}
        />
        <div className={`relative h-full ${project.featured ? 'lg:grid lg:grid-cols-[1.02fr_0.98fr]' : ''}`}>
          <div className="p-7 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-amber-200">
                {project.status}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">{project.tag}</span>
            </div>

            <h3 className="mt-6 font-display text-2xl font-semibold text-white">{project.name}</h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Why It Matters</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.whyItMatters}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Challenge</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.challenge}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Direction</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.direction}</p>
              </div>
            </div>
          </div>

          <div className="relative border-t border-white/10 p-7 sm:p-8 lg:border-l lg:border-t-0">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/20 p-5">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">{project.proofLabel}</p>
              <h4 className="mt-3 max-w-md font-display text-lg font-semibold text-white">{project.proofTitle}</h4>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {project.proofMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                    <p className="font-display text-lg font-semibold text-white">{metric.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/80 p-4 font-mono text-xs text-slate-300">
                {project.proofLines.map((line) => (
                  <div key={line} className="flex items-center gap-2 py-1.5">
                    <span className="text-amber-300">$</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Key Highlights</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber-300/80" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="fine-line my-6" />

            <div className="rounded-2xl border border-amber-300/12 bg-amber-300/[0.045] p-4">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-amber-200/75">Strategic Direction</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.focus}</p>
            </div>

            <a
              href={project.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition duration-300 hover:text-amber-200"
              target={!isAnchor ? '_blank' : undefined}
              rel={!isAnchor ? 'noreferrer' : undefined}
            >
              {project.linkLabel}
              <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </m.article>
    </Reveal>
  );
}

export default ProjectCard;
