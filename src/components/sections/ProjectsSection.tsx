import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/portfolio";

const ProjectsSection = () => {
  const [featured, ...rest] = featuredProjects;

  return (
    <Section id="projects">
      <SectionHeader
        label="Portfolio"
        title="Featured Projects"
        description="Selected work across SaaS, mobile, and full-stack products."
      />

      <div className="mt-12 space-y-6">
        <ProjectCard project={featured} featured />

        <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
          {rest.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;
