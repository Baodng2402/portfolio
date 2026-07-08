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
      <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="reveal-section-desc mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:mt-3 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
