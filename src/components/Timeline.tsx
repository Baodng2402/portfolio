import React from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export interface TimelineItemData {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface TimelineProps {
  items: TimelineItemData[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-30" />

      {items.map((item, index) => (
        <div
          key={index}
          className={`relative mb-12 md:mb-16 flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          } items-start md:items-center gap-4 md:gap-8`}
        >
          {/* Timeline Dot */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 ring-4 ring-[#0a0a0f] z-10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 blur-md opacity-50" />
          </div>

          {/* Spacer for mobile */}
          <div className="w-8 md:hidden" />

          {/* Content Card */}
          <div
            className={`flex-1 ${
              index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
            }`}
          >
            <div className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Header */}
              <div className="relative z-10 mb-4">
                <h3 className="text-xl md:text-2xl font-bold gradient-text mb-2">
                  {item.role}
                </h3>
                <div className="flex items-center gap-2 text-purple-400 font-semibold mb-2">
                  <Briefcase size={18} />
                  <span>{item.company}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="font-mono">{item.period}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="relative z-10 text-white/80 mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Achievements */}
              {item.achievements.length > 0 && (
                <div className="relative z-10 mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1 text-sm text-white/70">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono bg-white/5 text-cyan-300 rounded-full border border-white/10 hover:border-cyan-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Spacer for desktop alignment */}
          <div className="hidden md:block flex-1" />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
