import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "grid";
}

const Section = ({ id, children, className = "", variant = "default" }: SectionProps) => {
  const variants = {
    default: "",
    elevated: "section-elevated",
    grid: "section-grid",
  };

  return (
    <section id={id} className={`section-wrap ${variants[variant]} ${className}`}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
};

export default Section;
