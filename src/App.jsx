import { useEffect } from 'react';
import Container from './components/Container';
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

  useEffect(() => {
    const titleMap = {
      '/': 'Jeremiah Jacob | Flutter, Bitcoin Wallets, and Developer Systems',
      '/root-wallet': 'Root Wallet Case Study | Jeremiah Jacob',
      '/resume': 'Resume | Jeremiah Jacob',
    };

    trackPageView(pathname, titleMap[pathname] ?? document.title);
  }, [pathname]);

  return (
    <div className="relative isolate overflow-x-clip">
      {isHomePage ? (
        <PageMeta
          title="Jeremiah Jacob | Flutter, Bitcoin Wallets, and Developer Systems"
          description="Jeremiah Jacob is a Flutter engineer, Bitcoin builder, and community leader focused on mobile systems, wallet infrastructure, Lightning-flavored product thinking, and developer-focused tools."
          pathname="/"
        />
      ) : null}
      {isHomePage ? <ScrollProgress /> : null}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="ambient-orb absolute left-[-12rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(245,181,68,0.18),transparent_66%)] blur-3xl" />
        <div className="ambient-orb ambient-orb-slow absolute right-[-8rem] top-[10%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.14),transparent_68%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_84%)]" />
      </div>

      {isHomePage ? <Navbar items={navItems} activeSection={activeSection} /> : null}

      {pathname === '/root-wallet' ? <RootWalletPage /> : null}
      {pathname === '/resume' ? <ResumePage /> : null}
      {pathname === '/' ? <HomePage /> : null}

      <footer className="pb-10">
        <Container>
          <div className="fine-line mb-6" />
          <div className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>Jeremiah Jacob / Jaykon</p>
            <p>Built with React, Tailwind CSS, and Framer Motion.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
