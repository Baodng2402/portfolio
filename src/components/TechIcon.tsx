interface TechIconProps {
  icon?: string;
  name: string;
  initials?: string;
  invert?: boolean;
  accentColor?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { box: "h-10 w-10", img: "h-5 w-5", text: "text-[10px]", initials: "text-[10px]" },
  md: { box: "h-14 w-14", img: "h-8 w-8", text: "text-xs", initials: "text-[11px]" },
  lg: { box: "h-16 w-16", img: "h-9 w-9", text: "text-xs", initials: "text-xs" },
};

const TechIcon = ({
  icon,
  name,
  initials,
  invert = false,
  accentColor = "#38bdf8",
  size = "md",
}: TechIconProps) => {
  const s = sizeMap[size];

  return (
    <div className="tech-icon group flex flex-col items-center gap-2 text-center">
      <div
        className={`${s.box} flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-[border-color,background-color,box-shadow,transform] duration-200 group-hover:-translate-y-0.5 group-hover:border-[var(--color-accent)]/40 group-hover:bg-white/[0.07] group-hover:shadow-[0_0_20px_var(--color-glow)]`}
      >
        {icon ? (
          <img
            src={icon}
            alt={name}
            className={`${s.img} object-contain ${invert ? "brightness-0 invert" : ""}`}
            loading="lazy"
          />
        ) : (
          <span
            className={`${s.initials} font-bold leading-none`}
            style={{ color: accentColor }}
            aria-hidden
          >
            {initials ?? name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span
        className={`${s.text} max-w-[4.75rem] font-medium leading-tight text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-text)]`}
      >
        {name}
      </span>
    </div>
  );
};

export default TechIcon;
