const lines = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "→ Frontend Developer · Ben Dang" },
  { prompt: true, text: "stack --frontend" },
  { prompt: false, text: "→ React · Next.js · React Native · TypeScript · Tailwind" },
  { prompt: true, text: "stack --backend" },
  { prompt: false, text: "→ Node.js · Spring Boot · PostgreSQL · Docker" },
  { prompt: true, text: "status" },
  { prompt: false, text: "→ Building scalable web & mobile apps ✦" },
];

const TerminalPreview = () => {
  return (
    <div className="terminal-card min-w-0" data-hero="terminal">
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-3 py-2.5 sm:px-4 sm:py-3">
        <span className="h-2 w-2 rounded-full bg-red-500/80 sm:h-2.5 sm:w-2.5" />
        <span className="h-2 w-2 rounded-full bg-yellow-500/80 sm:h-2.5 sm:w-2.5" />
        <span className="h-2 w-2 rounded-full bg-green-500/80 sm:h-2.5 sm:w-2.5" />
        <span className="ml-1 truncate font-mono text-[10px] text-[var(--color-muted)] sm:ml-2 sm:text-xs">
          ~/portfolio
        </span>
      </div>
      <div className="overflow-x-auto p-3 font-mono text-[11px] leading-relaxed sm:p-4 sm:text-xs md:text-sm">
        <div className="min-w-[16rem] space-y-1.5 sm:space-y-2">
          {lines.map((line, i) => (
            <p
              key={i}
              data-terminal-line
              className={`break-words ${
                line.prompt
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-muted)]"
              }`}
            >
              {line.prompt && <span className="text-[var(--color-accent-dim)]">$ </span>}
              {line.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TerminalPreview;
