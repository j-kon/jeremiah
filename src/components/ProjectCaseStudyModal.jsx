import { m, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { useEffect } from 'react';
import { trackEvent } from '../lib/analytics';
import TechBadge from './TechBadge';

const spring = { type: 'spring', stiffness: 280, damping: 30, mass: 0.7 };

function stagger(i) {
  return { duration: 0.32, delay: 0.12 + i * 0.055, ease: [0.22, 1, 0.36, 1] };
}

function ProjectCaseStudyModal({ project, onClose }) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  if (!project?.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <>
      {/* Backdrop */}
      <m.div
        className="fixed inset-0 z-[9998] bg-slate-950/72 backdrop-blur-sm"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.28 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <m.aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${project.slug}-drawer-title`}
        className="fixed inset-y-0 right-0 z-[9999] flex w-full max-w-2xl flex-col overflow-hidden border-l border-white/10 bg-slate-950/96 backdrop-blur-2xl xl:max-w-[44rem]"
        initial={prefersReducedMotion ? false : { x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={spring}
      >
        {/* Left amber accent line */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-amber-300/55 to-transparent" />

        {/* Header */}
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-6 py-5 sm:px-8">
          <m.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(0)}
          >
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-amber-200/75">{caseStudy.eyebrow}</p>
            <h3
              id={`${project.slug}-drawer-title`}
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              {project.name}
            </h3>
          </m.div>

          <button
            type="button"
            onClick={onClose}
            className="btn-secondary mt-1 shrink-0"
            aria-label="Close case study"
          >
            <X className="h-4 w-4" />
            Close
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          {/* Summary */}
          <m.div
            className="rounded-[24px] border border-amber-300/15 bg-amber-300/[0.05] p-5"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(1)}
          >
            <p className="text-base leading-8 text-slate-200">{caseStudy.summary}</p>
          </m.div>

          {/* The Problem */}
          <m.div
            className="mt-6"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(2)}
          >
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">The Problem</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">{caseStudy.problem}</p>
          </m.div>

          {/* Role + Impact */}
          <m.div
            className="mt-6 grid gap-4 sm:grid-cols-2"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(3)}
          >
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Role</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{caseStudy.role}</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Impact</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{caseStudy.impact}</p>
            </div>
          </m.div>

          {/* Stack */}
          <m.div
            className="mt-6"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(4)}
          >
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <TechBadge key={item} name={item} />
              ))}
            </div>
          </m.div>

          {/* Constraints */}
          <m.div
            className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(5)}
          >
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Constraints</p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              {caseStudy.constraints.map((constraint) => (
                <div key={constraint} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300/80" />
                  <span>{constraint}</span>
                </div>
              ))}
            </div>
          </m.div>

          {/* Key Decisions */}
          <m.div
            className="mt-6"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(6)}
          >
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Key Decisions</p>
            <div className="mt-4 space-y-4">
              {caseStudy.decisions.map((decision) => (
                <div key={decision.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <h4 className="font-display text-lg font-semibold text-white">{decision.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{decision.description}</p>
                </div>
              ))}
            </div>
          </m.div>

          {/* Results */}
          <m.div
            className="mt-6 rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(7)}
          >
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Results</p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              {caseStudy.outcomes.map((outcome) => (
                <div key={outcome} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-300/80" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </m.div>

          {/* Project Lens metrics */}
          <m.div
            className="mt-6"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(8)}
          >
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Project Lens</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {project.proofMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="font-display text-lg font-semibold text-white">{metric.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </m.div>

          {/* Links */}
          <m.div
            className="mt-8 flex flex-wrap gap-3 pb-4"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={stagger(9)}
          >
            {caseStudy.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.internal ? undefined : '_blank'}
                rel={link.internal ? undefined : 'noreferrer'}
                onClick={() =>
                  trackEvent('project_case_study_link_click', {
                    project: project.slug,
                    label: link.label,
                    href: link.href,
                  })
                }
                className="btn-secondary"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </m.div>
        </div>
      </m.aside>
    </>
  );
}

export default ProjectCaseStudyModal;
