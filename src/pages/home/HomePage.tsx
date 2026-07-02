import SiteNav from "@/components/layout/SiteNav";
import HeroSection from "@/components/sections/HeroSection";
import WorkSection from "@/components/sections/WorkSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import { usePageAnimations } from "@/animations/usePageAnimations";

const HomePage = () => {
  const pageRef = usePageAnimations();

  return (
    <div
      ref={pageRef}
      className="min-h-dvh overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <SiteNav />

      <main>
        <HeroSection />
        <WorkSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="border-t border-[var(--color-border)] py-8 text-center text-sm text-[var(--color-muted)]">
        © 2026 Bao. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
