interface TechIconProps {
  icon: React.ReactNode;
  name: string;
  color?: string;
}

const TechIcon = ({ icon, name, color = "#a855f7" }: TechIconProps) => {
  return (
    <div
      className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-white/15 border border-white/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 cursor-pointer"
      style={{ "--hover-color": color } as React.CSSProperties}
    >
      <div
        className="text-3xl text-white/90 group-hover:text-purple-400 transition-colors duration-300"
        style={{ color: "inherit" }}
      >
        {icon}
      </div>
      <span className="text-xs text-white/70 group-hover:text-white/80 transition-colors">
        {name}
      </span>
    </div>
  );
};

export default TechIcon;
