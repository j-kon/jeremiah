import Container from '../components/Container';
import Reveal from '../components/Reveal';
import { signalCards } from '../data/portfolio';

function SignalSection() {
  return (
    <section aria-label="Proof highlights" className="pb-12 pt-2 sm:pb-14">
      <Container>
        <div className="panel-strong overflow-hidden">
          <div className="grid gap-px bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
            {signalCards.map((card, index) => (
              <Reveal key={card.eyebrow} delay={index * 0.05}>
                <article className="h-full bg-slate-950/80 p-6 sm:p-7">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">{card.eyebrow}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-white">{card.value}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SignalSection;
