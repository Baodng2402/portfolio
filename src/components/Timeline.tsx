import { Briefcase, Calendar, MapPin } from "lucide-react";
import type { WorkItem } from "@/data/portfolio";

interface TimelineProps {
  items: WorkItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative mt-6 space-y-4 sm:mt-10 sm:space-y-6">
      <div
        className="absolute left-[11px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[var(--color-accent)]/60 via-[var(--color-border)] to-transparent md:block"
        aria-hidden
      />

      {items.map((work) => (
        <article key={work.company} className="work-card relative md:pl-10">
          <div
            className="absolute left-0 top-6 hidden h-6 w-6 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] md:block"
            aria-hidden
          />

          <div className="glass-card p-4 sm:p-6 md:p-7">
            <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold text-[var(--color-text)] sm:text-xl md:text-2xl">
                  {work.role}
                </h3>
                <p className="mt-1 flex items-start gap-2 text-sm font-medium text-[var(--color-accent)]">
                  <Briefcase size={15} className="mt-0.5 shrink-0" aria-hidden />
                  <span>{work.company}</span>
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-xs text-[var(--color-muted)] sm:flex-row sm:flex-wrap sm:gap-3">
                <span className="inline-flex items-center gap-1.5 font-mono">
                  <Calendar size={13} className="shrink-0" aria-hidden />
                  {work.period}
                </span>
                <span className="inline-flex items-start gap-1.5">
                  <MapPin size={13} className="mt-0.5 shrink-0" aria-hidden />
                  <span>{work.location}</span>
                </span>
              </div>
            </div>

            <p className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--color-muted)] sm:mt-4">
              {work.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
              {work.technologies.slice(0, 6).map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Timeline;
