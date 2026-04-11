import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Container from './Container';

function Navbar({ items, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <m.header
      className="sticky top-0 z-50"
      initial={prefersReducedMotion ? false : { opacity: 0, y: -18 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="pt-4">
        <div className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-panel backdrop-blur-xl sm:px-5">
          <div className="flex items-center justify-between gap-4 xl:gap-5">
            <a href="#home" className="flex min-w-0 shrink items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] font-mono text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
                JJ
              </span>
              <div className="min-w-0 leading-none">
                <p className="truncate font-display text-xs font-semibold text-white sm:text-sm">Jeremiah Jacob</p>
                <p className="mt-1 hidden whitespace-nowrap text-[11px] uppercase tracking-[0.2em] text-slate-500 min-[1700px]:block">
                  Jaykon
                </p>
              </div>
            </a>

            <div className="hidden min-w-0 flex-1 lg:block">
              <nav
                className="flex min-w-max items-center gap-1 overflow-x-auto px-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                aria-label="Primary"
              >
                {items.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`relative shrink-0 rounded-full px-3 py-2 text-[13px] transition duration-300 xl:text-sm ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-400 hover:bg-white/[0.04] hover:text-white'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {isActive ? (
                        <m.span
                          layoutId="active-nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]"
                          transition={{ type: 'spring', stiffness: 380, damping: 32, mass: 0.75 }}
                        />
                      ) : null}
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <span className="hidden whitespace-nowrap rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-200 min-[1700px]:inline-flex min-[1880px]:hidden">
                Open to Bitcoin work
              </span>
              <span className="hidden whitespace-nowrap rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-200 min-[1880px]:inline-flex">
                Open to Bitcoin, startup, and product work
              </span>
              <a href="#contact" className="btn-secondary">
                Contact
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-100 transition hover:bg-white/[0.06] lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <m.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="panel-strong mt-3 overflow-hidden lg:hidden"
            >
              <nav className="flex flex-col p-3" aria-label="Mobile navigation">
                {items.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      className={`rounded-2xl px-4 py-3 text-sm transition duration-300 ${
                        isActive ? 'bg-white/[0.08] text-white' : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}

                <div className="fine-line my-3" />

                <a href="#contact" onClick={closeMenu} className="btn-primary w-full">
                  Let&apos;s Work Together
                  <ArrowRight className="h-4 w-4" />
                </a>
              </nav>
            </m.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </m.header>
  );
}

export default Navbar;
