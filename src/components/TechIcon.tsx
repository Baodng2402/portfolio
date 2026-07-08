interface TechIconProps {
  icon?: string;
  name: string;
  initials?: string;
  invert?: boolean;
  accentColor?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: {
    box: "h-10 w-10",
    img: "h-5 w-5",
    text: "text-[9px] sm:text-[10px]",
    initials: "text-[9px] sm:text-[10px]",
    label: "max-w-[3.25rem] sm:max-w-[3.75rem]",
  },
  md: {
    box: "h-11 w-11 sm:h-14 sm:w-14",
    img: "h-5 w-5 sm:h-8 sm:w-8",
    text: "text-[9px] sm:text-xs",
    initials: "text-[9px] sm:text-[11px]",
    label: "max-w-[3.5rem] sm:max-w-[4.75rem]",
  },
  lg: {
    box: "h-14 w-14 sm:h-16 sm:w-16",
    img: "h-7 w-7 sm:h-9 sm:w-9",
    text: "text-[10px] sm:text-xs",
    initials: "text-[10px] sm:text-xs",
    label: "max-w-[4rem] sm:max-w-[5rem]",
  },
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
    <div className="tech-icon group flex min-w-0 flex-col items-center gap-1.5 text-center sm:gap-2">
      <div
        className={`${s.box} flex shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] transition-[border-color,background-color,box-shadow,transform] duration-200 sm:rounded-xl group-hover:border-[var(--color-accent)]/40 group-hover:bg-white/[0.07] group-hover:shadow-[0_0_20px_var(--color-glow)] [@media(hover:hover)]:group-hover:-translate-y-0.5`}
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
        className={`${s.text} ${s.label} line-clamp-2 font-medium leading-tight text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-text)]`}
      >
        {name}
      </span>
    </div>
  );
};

export default TechIcon;
