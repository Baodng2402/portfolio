import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import { workExperience } from "@/data/portfolio";

const WorkSection = () => {
  return (
    <Section id="work" variant="elevated">
      <SectionHeader
        label="Experience"
        title="Work Experience"
        description="Roles where I shipped product features, improved systems, and collaborated across teams."
      />
      <Timeline items={workExperience} />
    </Section>
  );
};

export default WorkSection;
