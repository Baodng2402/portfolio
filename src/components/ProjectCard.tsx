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
        className={`project-image-frame ${featured ? "h-56 md:h-64" : "h-48 md:h-52"}`}
      >
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="section-label mb-2">{featured ? "Featured" : "Project"}</p>
        <h3 className="font-display text-xl font-bold text-[var(--color-text)] md:text-2xl">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.slice(0, 5).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {links.github_web && (
            <a
              href={links.github_web}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 text-sm"
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
              className="btn-ghost inline-flex items-center gap-2 text-sm"
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
              className="btn-primary inline-flex items-center gap-2 text-sm"
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
