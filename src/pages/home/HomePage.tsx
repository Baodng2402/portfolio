import SiteNav from "@/components/layout/SiteNav";
import HeroSection from "@/components/sections/HeroSection";
import WorkSection from "@/components/sections/WorkSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroCanvas from "@/components/three/HeroCanvas";
import { usePageAnimations } from "@/animations/usePageAnimations";

const HomePage = () => {
  const pageRef = usePageAnimations();

  return (
    <div
      ref={pageRef}
      className="relative min-h-dvh overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <HeroCanvas className="fixed inset-0" />
      <div className="relative z-10">
        <SiteNav />

        <main>
          <HeroSection />
          <WorkSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <footer className="page-px border-t border-[var(--color-border)] py-6 text-center text-xs text-[var(--color-muted)] sm:py-8 sm:text-sm">
          © 2026 Bao. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
