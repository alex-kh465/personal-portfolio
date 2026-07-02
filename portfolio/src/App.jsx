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
    <div className="relative min-h-screen bg-[#FCFCFD] text-gray-900 overflow-x-hidden selection:bg-[#0055FF] selection:text-white">
      
      {/* --- Global Editorial Backdrop --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Ambient Gradient Blurs */}
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-blue-100/50 rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] bg-rose-50/50 rounded-full blur-[120px] opacity-70" />
        
        {/* Premium Paper/Noise Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] mix-blend-multiply" 
          style={{ 
            backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`, 
            backgroundRepeat: 'repeat' 
          }}
        />
      </div>

      <div className="relative z-10">
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
    </div>
  );
}
