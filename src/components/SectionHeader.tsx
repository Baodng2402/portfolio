interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader = ({ label, title, description, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`section-heading reveal-section-title ${className}`}>
      <p className="section-label">{label}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="reveal-section-desc mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
