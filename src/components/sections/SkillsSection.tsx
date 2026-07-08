import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import TechIcon from "@/components/TechIcon";
import { getSkillIcon } from "@/assets/framworkIcon";
import { skillGroups } from "@/data/portfolio";

const SkillsSection = () => {
  return (
    <Section id="skills" variant="grid">
      <SectionHeader
        label="Tech Stack"
        title="Skills & Tools"
        description="Technologies from my CV — frontend, backend, database, and DevOps."
      />

      <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label} className="skill-group glass-card p-4 sm:p-5 md:p-6">
            <h3 className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[var(--color-accent)] sm:text-xs">
              {group.label}
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-x-2 gap-y-4 sm:mt-5 sm:grid-cols-4 sm:gap-x-3 sm:gap-y-5 md:grid-cols-3 xl:grid-cols-4">
              {group.skills.map((skill) => {
                const iconData = skill.iconKey ? getSkillIcon(skill.iconKey) : undefined;

                return (
                  <TechIcon
                    key={skill.name}
                    icon={iconData?.icon}
                    name={skill.name}
                    initials={skill.initials}
                    invert={iconData?.invert}
                    accentColor={skill.accentColor ?? iconData?.color}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
