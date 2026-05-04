import CursorGlow from './components/ui/CursorGlow';
import ParticleField from './components/ui/ParticleField';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ResearchSection from './components/sections/ResearchSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-white overflow-x-hidden">
      <ParticleField />
      <CursorGlow />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
