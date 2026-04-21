const technical = [
  { group: "Backend", items: ["C#", ".NET / ASP.NET Core", "SQL Server", "Entity Framework", "Azure"] },
  { group: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"] },
  { group: "Outils", items: ["Git", "Docker", "CI/CD", "IA & LLM", "Figma"] },
];

const soft = [
  "Analyse",
  "Résolution de problèmes",
  "Organisation",
  "Attention au détail",
  "Communication claire",
  "Curiosité",
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">— 03 / Compétences</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl">
              Une boîte à outils <span className="italic-serif text-primary">pensée</span>, pas accumulée.
            </h2>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          {/* Technical */}
          <div className="md:col-span-7 space-y-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Technique
            </p>
            <div className="space-y-8">
              {technical.map((cat) => (
                <div key={cat.group} className="border-t border-border pt-6">
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="font-display text-xl text-foreground md:col-span-1">
                      {cat.group}
                    </div>
                    <div className="md:col-span-3 flex flex-wrap gap-2">
                      {cat.items.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div className="md:col-span-4 md:col-start-9">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Posture
            </p>
            <div className="mt-6 rounded-3xl bg-gradient-forest p-8 text-primary-foreground shadow-lift">
              <ul className="space-y-3">
                {soft.map((s, i) => (
                  <li key={s} className="flex items-baseline gap-3 font-display text-xl">
                    <span className="font-mono text-xs opacity-50">0{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
