import { Briefcase, Calendar, MapPin } from "lucide-react";
import type { WorkItem } from "@/data/portfolio";

interface TimelineProps {
  items: WorkItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative mt-10 space-y-6">
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

          <div className="glass-card p-6 md:p-7">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-[var(--color-text)] md:text-2xl">
                  {work.role}
                </h3>
                <p className="mt-1 flex items-center gap-2 text-sm font-medium text-[var(--color-accent)]">
                  <Briefcase size={15} aria-hidden />
                  {work.company}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-[var(--color-muted)]">
                <span className="inline-flex items-center gap-1.5 font-mono">
                  <Calendar size={13} aria-hidden />
                  {work.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={13} aria-hidden />
                  {work.location}
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-prose text-sm leading-relaxed text-[var(--color-muted)]">
              {work.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
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
