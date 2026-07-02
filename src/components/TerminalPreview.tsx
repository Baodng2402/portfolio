const lines = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "→ Frontend Developer · Gia Bao" },
  { prompt: true, text: "stack --frontend" },
  { prompt: false, text: "→ React · Next.js · TypeScript · Tailwind" },
  { prompt: true, text: "stack --backend" },
  { prompt: false, text: "→ Node.js · Express · PostgreSQL · Docker" },
  { prompt: true, text: "status" },
  { prompt: false, text: "→ Building scalable SaaS & product UIs ✦" },
];

const TerminalPreview = () => {
  return (
    <div className="terminal-card" data-hero="terminal">
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-[var(--color-muted)]">
          ~/portfolio
        </span>
      </div>
      <div className="space-y-2 p-4 font-mono text-xs leading-relaxed sm:text-sm">
        {lines.map((line, i) => (
          <p
            key={i}
            data-terminal-line
            className={
              line.prompt
                ? "text-[var(--color-accent)]"
                : "text-[var(--color-muted)]"
            }
          >
            {line.prompt && <span className="text-[var(--color-accent-dim)]">$ </span>}
            {line.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TerminalPreview;
