import { ExternalLink, Github } from "lucide-react";
import type { ProjectItem } from "@/data/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
  featured?: boolean;
  className?: string;
}

const ProjectCard = ({ project, featured = false, className = "" }: ProjectCardProps) => {
  const { title, description, image, tags, links } = project;

  return (
    <article
      className={`project-card glass-card flex h-full flex-col overflow-hidden ${featured ? "featured-card" : ""} ${className}`}
    >
      <div
        className={`project-image-frame ${featured ? "h-44 sm:h-56 md:h-64" : "h-40 sm:h-48 md:h-52"}`}
      >
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        <p className="section-label mb-2">{featured ? "Featured" : "Project"}</p>
        <h3 className="font-display text-lg font-bold text-[var(--color-text)] sm:text-xl md:text-2xl">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4">
          {tags.slice(0, 5).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:mt-5 sm:flex-row sm:flex-wrap">
          {links.github_web && (
            <a
              href={links.github_web}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex w-full items-center justify-center gap-2 text-sm sm:w-auto"
            >
              <Github size={15} aria-hidden />
              {links.github_mobile ? "Web" : "GitHub"}
            </a>
          )}
          {links.github_mobile && (
            <a
              href={links.github_mobile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex w-full items-center justify-center gap-2 text-sm sm:w-auto"
            >
              <Github size={15} aria-hidden />
              Mobile
            </a>
          )}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex w-full items-center justify-center gap-2 text-sm sm:w-auto"
            >
              <ExternalLink size={15} aria-hidden />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
