import { ArrowRight, ArrowUpRight } from 'lucide-react';
import TechBadge from './TechBadge';

function FlagshipCaseStudy({ caseStudy }) {
  return (
    <article className="panel-strong overflow-hidden">
      <div className="border-b border-white/10 px-5 py-5 sm:px-8 xl:px-10">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-amber-200/75">{caseStudy.eyebrow}</p>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:text-5xl">
              {caseStudy.name}
            </h3>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{caseStudy.summary}</p>
          </div>

          <div className="grid gap-3 sm:flex sm:flex-wrap">
            {caseStudy.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {caseStudy.stack.map((item) => (
            <TechBadge key={item} name={item} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-px bg-white/10 xl:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)]">
        <div className="bg-slate-950/88 p-5 sm:p-8 xl:p-10">
          <div className="rounded-[28px] border border-amber-300/15 bg-amber-300/[0.05] p-5 sm:p-6">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-amber-200/75">Project Thesis</p>
            <p className="mt-4 text-base leading-8 text-slate-200 sm:text-lg">{caseStudy.thesis}</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {caseStudy.metrics.map((metric) => (
              <div key={metric.label} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <p className="font-display text-xl font-semibold text-white">{metric.value}</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Engineering Decisions</p>
            <div className="mt-5 space-y-4">
              {caseStudy.decisions.map((decision) => (
                <div key={decision.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <h4 className="font-display text-xl font-semibold text-white">{decision.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{decision.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-white/10 bg-slate-950/85 p-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">What I&apos;d Improve Next</p>
            <div className="mt-5 space-y-4">
              {caseStudy.nextSteps.map((step) => (
                <div key={step} className="flex gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-amber-300" />
                  <p className="text-sm leading-7 text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-950/70 p-5 sm:p-8 xl:p-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Verified Product Surfaces</p>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-600">Screens from the repo README</p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {caseStudy.screenshots.map((screen) => (
              <figure
                key={screen.title}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-black/25"
              >
                <div className="border-b border-white/10 px-4 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <figcaption className="font-display text-base font-semibold text-white">{screen.title}</figcaption>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {screen.theme}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{screen.caption}</p>
                </div>
                <div className="bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_70%)] p-3">
                  <img
                    src={screen.src}
                    alt={`${screen.title} screenshot from Root Wallet`}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full rounded-[22px] border border-white/10 bg-slate-950 object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default FlagshipCaseStudy;
