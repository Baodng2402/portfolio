import { Download, Mail } from "lucide-react";
import coder from "@/assets/coder.png";
import TerminalPreview from "@/components/TerminalPreview";
import ProjectCard from "@/components/ProjectCard";
import TypewriterText from "@/components/TypewriterText";
import { featuredProjects, heroIntroPhrases } from "@/data/portfolio";

const heroProject = featuredProjects[0];

const HeroSection = () => {
  return (
    <section
      id="about"
      className="relative"
    >
      <div className="page-px relative mx-auto grid max-w-6xl gap-8 pb-12 pt-10 sm:gap-10 sm:pb-16 sm:pt-12 md:grid-cols-2 md:items-center md:gap-12 md:pb-24 md:pt-20">
      <div className="min-w-0 max-w-xl">
        <div data-hero="avatar" className="mb-5 sm:mb-6">
          <img
            src={coder}
            alt="Gia Bao"
            className="h-20 w-20 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] object-contain p-2.5 shadow-[var(--shadow-glow)] sm:h-24 sm:w-24 sm:p-3 md:h-28 md:w-28"
          />
        </div>

        <p className="section-label mb-3 min-h-[2.5rem] sm:min-h-[1.25rem]" data-hero="role">
          <TypewriterText phrases={heroIntroPhrases} startDelay={0.65} />
        </p>

        <h1
          data-hero="name"
          className="font-display text-[1.75rem] font-extrabold leading-[1.12] tracking-tight text-[var(--color-text)] sm:text-4xl sm:leading-[1.08] md:text-5xl lg:text-[3.25rem] text-balance"
        >
          {"I build fast, polished web experiences."
            .split(" ")
            .map((word, i) => (
              <span key={i} data-hero-word className="mr-[0.2em] inline-block">
                {word}
              </span>
            ))}
        </h1>

        <p
          data-hero="bio"
          className="mt-4 max-w-md text-sm leading-relaxed text-[var(--color-muted)] sm:mt-5 sm:text-base"
        >
          React, TypeScript, and modern UI — from product interfaces to
          full-stack features. Focused on performance, clarity, and shipping.
        </p>

        <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
          <a href="#projects" className="btn-primary w-full sm:w-auto" data-hero="cta">
            View Projects
          </a>
          <a
            href="/DangNguyenGiaBao_FullStack_Developer.pdf"
            className="btn-secondary inline-flex w-full items-center justify-center gap-2 sm:w-auto"
            data-hero="cta"
          >
            <Download size={17} aria-hidden />
            Resume
          </a>
          <a
            href="#contact"
            className="btn-secondary inline-flex w-full items-center justify-center gap-2 sm:w-auto"
            data-hero="cta"
          >
            <Mail size={17} aria-hidden />
            Contact
          </a>
        </div>
      </div>

        <div className="min-w-0 flex flex-col gap-4 sm:gap-5" data-hero="featured">
          <TerminalPreview />
          <div className="hidden md:block">
            <ProjectCard project={heroProject} featured className="!shadow-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
