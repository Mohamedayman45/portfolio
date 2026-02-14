import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EngineeringSection from '@/components/sections/EngineeringSection';
import GitHubSection from '@/components/sections/GitHubSection';
import ContactSection from '@/components/sections/ContactSection';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        {/* Global Animated Background */}
        <div className="fixed inset-0 z-0">
          <AnimatedBackground />
        </div>
        
        {/* Content with higher z-index */}
        <div className="relative z-[1]">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <EngineeringSection />
          <GitHubSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
