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
      className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-12 md:grid-cols-2 md:items-center md:gap-12 md:pb-24 md:pt-20"
    >
      <div className="max-w-xl">
        <div data-hero="avatar" className="mb-6">
          <img
            src={coder}
            alt="Gia Bao"
            className="h-24 w-24 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] object-contain p-3 shadow-[var(--shadow-glow)] sm:h-28 sm:w-28"
          />
        </div>

        <p className="section-label mb-3 min-h-[1.25rem]" data-hero="role">
          <TypewriterText phrases={heroIntroPhrases} startDelay={0.65} />
        </p>

        <h1
          data-hero="name"
          className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--color-text)] sm:text-5xl md:text-[3.25rem] text-balance"
        >
          {"I build fast, polished web experiences."
            .split(" ")
            .map((word, i) => (
              <span key={i} data-hero-word className="mr-[0.22em] inline-block">
                {word}
              </span>
            ))}
        </h1>

        <p
          data-hero="bio"
          className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-muted)]"
        >
          React, TypeScript, and modern UI — from product interfaces to
          full-stack features. Focused on performance, clarity, and shipping.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary" data-hero="cta">
            View Projects
          </a>
          <a
            href="/DangNguyenGiaBao_FullStack_Developer.pdf"
            className="btn-secondary inline-flex items-center gap-2"
            data-hero="cta"
          >
            <Download size={17} aria-hidden />
            Resume
          </a>
          <a
            href="#contact"
            className="btn-secondary inline-flex items-center gap-2"
            data-hero="cta"
          >
            <Mail size={17} aria-hidden />
            Contact
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-5" data-hero="featured">
        <TerminalPreview />
        <div className="hidden md:block">
          <ProjectCard project={heroProject} featured className="!shadow-none" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
