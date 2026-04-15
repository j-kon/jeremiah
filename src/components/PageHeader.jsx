import { ArrowRight } from 'lucide-react';
import { pageLinks } from '../data/portfolio';
import { trackEvent } from '../lib/analytics';
import Container from './Container';

function PageHeader({ currentPath = '/' }) {
  return (
    <header className="sticky top-0 z-50">
      <Container className="pt-4">
        <div className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-panel backdrop-blur-xl sm:px-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a href="/" className="flex min-w-0 shrink items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] font-mono text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
                JJ
              </span>
              <div className="min-w-0 leading-none">
                <p className="truncate font-display text-xs font-semibold text-white sm:text-sm">Jeremiah Jacob</p>
                <p className="mt-1 hidden text-[11px] uppercase tracking-[0.2em] text-slate-500 sm:block">Jaykon</p>
              </div>
            </a>

            <nav
              className="flex min-w-full items-center gap-1 overflow-x-auto pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:min-w-0 sm:flex-1 sm:justify-center sm:pt-0"
              aria-label="Page navigation"
            >
              {pageLinks.map((link) => {
                const isActive = currentPath === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => trackEvent('page_header_click', { label: link.label, href: link.href })}
                    className={`shrink-0 rounded-full px-3 py-2 text-[13px] transition duration-300 ${
                      isActive ? 'bg-white/[0.08] text-white' : 'text-slate-400 hover:bg-white/[0.04] hover:text-white'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <a
              href="/#contact"
              onClick={() => trackEvent('page_header_click', { label: 'Contact CTA', href: '/#contact' })}
              className="btn-secondary hidden sm:inline-flex"
            >
              Contact
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default PageHeader;
