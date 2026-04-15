import { ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Container from '../components/Container';
import PageHeader from '../components/PageHeader';
import PageMeta from '../components/PageMeta';
import Reveal from '../components/Reveal';
import TechBadge from '../components/TechBadge';
import { flagshipCaseStudy, rootWalletPage } from '../data/portfolio';
import { trackEvent } from '../lib/analytics';

function RootWalletPage() {
  return (
    <>
      <PageMeta
        title="Root Wallet Case Study | Jeremiah Jacob"
        description="A deeper look at Root Wallet: self-custody Bitcoin wallet UX, clean Flutter architecture, Riverpod orchestration, BDK integration, and testnet product proof."
        pathname="/root-wallet"
      />
      <PageHeader currentPath="/root-wallet" />

      <main className="pb-24">
        <section className="section-shell pt-12 sm:pt-16">
          <Container>
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[0.78fr_1.22fr] xl:gap-10">
              <Reveal>
                <span className="eyebrow">{rootWalletPage.eyebrow}</span>
                <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-6xl">
                  {rootWalletPage.title}
                  <span className="mt-3 block text-amber-200">{rootWalletPage.subtitle}</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-xl">{rootWalletPage.intro}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {flagshipCaseStudy.stack.map((item) => (
                    <TechBadge key={item} name={item} />
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                  {rootWalletPage.docs.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => trackEvent('root_wallet_doc_click', { label: link.label, href: link.href })}
                      className="btn-secondary w-full sm:w-auto"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.08} className="panel-strong p-5 sm:p-8">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Why This Project Matters</p>
                <p className="mt-4 text-base leading-8 text-slate-200 sm:text-lg">{rootWalletPage.summary}</p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {flagshipCaseStudy.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                      <p className="font-display text-xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-400">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="pb-20">
          <Container>
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.02fr_0.98fr]">
              <Reveal>
                <div className="panel-strong p-5 sm:p-8">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Architecture Choices</p>
                  <div className="mt-6 space-y-4">
                    {rootWalletPage.architecture.map((item) => (
                      <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                        <h2 className="font-display text-2xl font-semibold text-white">{item.title}</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="grid gap-6">
                  <div className="panel p-5 sm:p-7">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                        <ShieldCheck className="h-5 w-5 text-emerald-300" />
                      </span>
                      <div>
                        <h2 className="font-display text-2xl font-semibold text-white">Core Product Flows</h2>
                        <p className="text-sm text-slate-400">The interactions the app proves in public</p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      {rootWalletPage.productFlows.map((flow) => (
                        <div key={flow} className="flex gap-3">
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-amber-300" />
                          <p className="text-sm leading-7 text-slate-300">{flow}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="panel p-5 sm:p-7">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Engineering Notes</p>
                    <div className="mt-6 space-y-4">
                      {rootWalletPage.engineeringNotes.map((note) => (
                        <div key={note} className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
                          <p className="text-sm leading-7 text-slate-300">{note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="pb-20">
          <Container>
            <Reveal>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-2xl">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Verified Screens</p>
                  <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
                    Screens that show the actual product surface.
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-slate-400">
                  These are local copies of the README screenshots so the case study stays stable and fast inside the portfolio itself.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-6 md:grid-cols-2 md:justify-items-center">
              {flagshipCaseStudy.screenshots.map((screen, index) => (
                <Reveal key={screen.title} delay={index * 0.05}>
                  <figure className="panel mx-auto w-full max-w-[26rem] overflow-hidden p-4 sm:p-5">
                    <div className="rounded-[28px] border border-white/10 bg-slate-950/85 p-2.5 sm:p-3">
                      <img
                        src={screen.src}
                        alt={`${screen.title} screen from Root Wallet`}
                        loading="lazy"
                        decoding="async"
                        className="mx-auto h-[24rem] w-full max-w-[17rem] rounded-[22px] object-cover object-top sm:h-[28rem] sm:max-w-[18rem]"
                      />
                    </div>
                    <figcaption className="px-2 pb-2 pt-5">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-display text-xl font-semibold text-white">{screen.title}</h3>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                          {screen.theme}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{screen.caption}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default RootWalletPage;
