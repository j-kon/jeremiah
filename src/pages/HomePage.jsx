import AboutSection from '../sections/AboutSection';
import CommunitySection from '../sections/CommunitySection';
import ContactSection from '../sections/ContactSection';
import ExperienceSection from '../sections/ExperienceSection';
import HeroSection from '../sections/HeroSection';
import LibrarySection from '../sections/LibrarySection';
import OpenSourceSection from '../sections/OpenSourceSection';
import ProjectsSection from '../sections/ProjectsSection';
import SignalSection from '../sections/SignalSection';
import SkillsSection from '../sections/SkillsSection';
import VisionSection from '../sections/VisionSection';

function HomePage() {
  return (
    <main>
      <HeroSection />
      <SignalSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <OpenSourceSection />
      <ExperienceSection />
      <CommunitySection />
      <LibrarySection />
      <VisionSection />
      <ContactSection />
    </main>
  );
}

export default HomePage;
