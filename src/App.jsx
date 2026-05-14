import { m, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import Container from './components/Container';
import CustomCursor from './components/CustomCursor';
import GrainOverlay from './components/GrainOverlay';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import { navItems, sectionIds } from './data/portfolio';
import { useActiveSection } from './hooks/useActiveSection';
import PageMeta from './components/PageMeta';
import { trackPageView } from './lib/analytics';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import RootWalletPage from './pages/RootWalletPage';

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isHomePage = pathname === '/';
  const activeSection = useActiveSection(sectionIds);

  const { scrollYProgress } = useScroll();
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  useEffect(() => {
    const titleMap = {
      '/': 'Jeremiah Jacob | Flutter, Bitcoin Wallets, and Developer Systems',
      '/root-wallet': 'Root Wallet Case Study | Jeremiah Jacob',
      '/resume': 'Resume | Jeremiah Jacob',
    };
    trackPageView(pathname, titleMap[pathname] ?? document.title);
  }, [pathname]);

  // Global cursor-tracking glow for .panel and .panel-strong cards
  useEffect(() => {
    const handleMove = (e) => {
      document.querySelectorAll('.panel, .panel-strong').forEach((el) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="relative isolate overflow-x-clip">
      {/* Accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[99999] focus:btn-primary"
      >
        Skip to content
      </a>

      {isHomePage ? (
        <PageMeta
          title="Jeremiah Jacob | Flutter, Bitcoin Wallets, and Developer Systems"
          description="Jeremiah Jacob is a Flutter engineer, Bitcoin builder, and community leader focused on mobile systems, wallet infrastructure, Lightning-flavored product thinking, and developer-focused tools."
          pathname="/"
        />
      ) : null}

      <CustomCursor />
      <GrainOverlay />

      {isHomePage ? <ScrollProgress /> : null}

      {/* Background atmosphere with scroll parallax */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <m.div
          style={{ y: orb1Y }}
          className="ambient-orb absolute left-[-12rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(245,181,68,0.18),transparent_66%)] blur-3xl"
        />
        <m.div
          style={{ y: orb2Y }}
          className="ambient-orb ambient-orb-slow absolute right-[-8rem] top-[10%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_68%)] blur-3xl"
        />
        <m.div
          className="ambient-orb absolute bottom-[20%] left-[30%] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(245,181,68,0.06),transparent_70%)] blur-3xl"
          style={{ y: orb3Y, animationDuration: '28s', animationDelay: '-8s' }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_78%)]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.55) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,7,10,0.5)_100%)]" />
      </div>

      {isHomePage ? <Navbar items={navItems} activeSection={activeSection} /> : null}

      {pathname === '/root-wallet' ? <RootWalletPage /> : null}
      {pathname === '/resume' ? <ResumePage /> : null}
      {pathname === '/' ? <HomePage /> : null}

      <footer className="relative pb-12 pt-4">
        {/* Decorative horizon */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center overflow-hidden">
          <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent" />
          <div className="absolute top-0 h-16 w-1/2 bg-[radial-gradient(ellipse_at_top,rgba(245,181,68,0.04),transparent_80%)]" />
        </div>

        <Container>
          <div className="fine-line mb-6" />
          <div className="flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display font-semibold text-slate-300">Jeremiah Jacob / Jaykon</p>
            <p className="font-mono text-[0.7rem] tracking-wide">Built with React, Tailwind CSS &amp; Framer Motion</p>
          </div>

          {/* Bitcoin watermark */}
          <div className="pointer-events-none mt-8 flex justify-center select-none">
            <span
              className="font-display text-[7rem] font-bold leading-none tracking-tighter text-white/[0.018]"
              aria-hidden="true"
            >
              ₿
            </span>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
