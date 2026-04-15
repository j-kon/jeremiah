import { ArrowUpRight, BookOpen, Users } from 'lucide-react';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { communityCards, communityStats, writingPreviews } from '../data/portfolio';

const iconMap = [Users, BookOpen];

function CommunitySection() {
  return (
    <section id="community" className="section-shell" aria-labelledby="community-heading">
      <Container>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.02fr_0.98fr] xl:gap-8">
          <Reveal>
            <SectionHeading
              titleId="community-heading"
              eyebrow="Community & Writing"
              title="I want the work to compound through products, communities, and conversations."
              description="Community leadership matters to me because it creates leverage around the work. Good ecosystems help people feel capable, spread ideas further, and make technical momentum more durable."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {communityStats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.05} className="panel p-5">
                  <p className="font-display text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
                </Reveal>
              ))}
            </div>

            <div className="panel mt-6 p-6">
              <p className="text-base leading-8 text-slate-300">
                The community side of the portfolio is here to show that I don&apos;t only ship features. I also care
                about helping people learn, giving ideas language, and making technical work feel more accessible and
                more energizing.
              </p>
            </div>

            <div className="panel mt-6 overflow-hidden">
              <div className="border-b border-white/10 px-6 py-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Conversation Themes</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">The ideas I keep returning to in public.</h3>
              </div>

              <div className="grid gap-px bg-white/10">
                {writingPreviews.map((article, index) => (
                  <Reveal key={article.title} delay={index * 0.05}>
                    <a
                      href={article.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group block bg-slate-950/80 px-6 py-5 transition duration-300 hover:bg-slate-950/95"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/75">{article.category}</p>
                      <div className="mt-3 flex items-start justify-between gap-4">
                        <h4 className="max-w-xl font-display text-lg font-semibold text-white">{article.title}</h4>
                        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-200" />
                      </div>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{article.summary}</p>
                    </a>
                  </Reveal>
                ))}
              </div>

              <div className="border-t border-white/10 px-6 py-4">
                <a href="#library" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition duration-300 hover:text-amber-100">
                  Browse the full writing library
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {communityCards.map((card, index) => {
              const Icon = iconMap[index];

              return (
                <Reveal key={card.title} delay={index * 0.08}>
                  <article className="panel h-full p-6 sm:p-7">
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                        <Icon className="h-5 w-5 text-amber-300" />
                      </span>
                      <h3 className="font-display text-xl font-semibold text-white">{card.title}</h3>
                    </div>

                    <p className="mt-5 text-base leading-8 text-slate-300">{card.description}</p>

                    <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-400">
                      {card.details.map((detail) => (
                        <li key={detail} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-amber-300/80" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
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

export default CommunitySection;
