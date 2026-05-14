import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { trackEvent } from '../lib/analytics';
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
          <div className="flex items-center justify-between gap-3 xl:gap-4">
            <a href="#home" className="flex min-w-0 shrink items-center gap-3" onClick={() => trackEvent('nav_click', { label: 'Brand Home' })}>
              <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] font-mono text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
                JJ
                {/* Orbital ring */}
                <m.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-[-4px] rounded-full border border-amber-300/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                >
                  <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/80 shadow-[0_0_6px_rgba(245,181,68,0.9)]" />
                </m.span>
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
                className="flex min-w-max items-center gap-0.5 overflow-x-auto px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden xl:gap-1 xl:px-2"
                aria-label="Primary"
              >
                {items.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => trackEvent('nav_click', { label: item.label, href: `#${item.id}` })}
                      className={`relative shrink-0 rounded-full px-2.5 py-2 text-[13px] transition duration-300 xl:px-3 xl:text-sm ${
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

            <div className="hidden shrink-0 items-center gap-2.5 lg:flex xl:gap-3">
              <a href="#contact" className="btn-secondary px-4 py-3 xl:px-4" onClick={() => trackEvent('nav_click', { label: 'Contact CTA', href: '#contact' })}>
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
                      onMouseDown={() => trackEvent('mobile_nav_click', { label: item.label, href: `#${item.id}` })}
                      className={`rounded-2xl px-4 py-3 text-sm transition duration-300 ${
                        isActive ? 'bg-white/[0.08] text-white' : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}

                <div className="fine-line my-3" />

                <a
                  href="#contact"
                  onClick={closeMenu}
                  onMouseDown={() => trackEvent('mobile_nav_click', { label: 'Let’s Work Together', href: '#contact' })}
                  className="btn-primary w-full"
                >
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
