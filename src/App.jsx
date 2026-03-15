import Container from './components/Container';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import { navItems, sectionIds } from './data/portfolio';
import { useActiveSection } from './hooks/useActiveSection';
import AboutSection from './sections/AboutSection';
import CommunitySection from './sections/CommunitySection';
import ContactSection from './sections/ContactSection';
import ExperienceSection from './sections/ExperienceSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import SignalSection from './sections/SignalSection';
import SkillsSection from './sections/SkillsSection';
import VisionSection from './sections/VisionSection';

function App() {
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="relative isolate overflow-x-clip">
      <ScrollProgress />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="ambient-orb absolute left-[-12rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(245,181,68,0.18),transparent_66%)] blur-3xl" />
        <div className="ambient-orb ambient-orb-slow absolute right-[-8rem] top-[10%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.14),transparent_68%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_84%)]" />
      </div>

      <Navbar items={navItems} activeSection={activeSection} />

      <main>
        <HeroSection />
        <SignalSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CommunitySection />
        <VisionSection />
        <ContactSection />
      </main>

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
