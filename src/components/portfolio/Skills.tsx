const skills = [
  "C#", ".NET", "ASP.NET Core", "SQL Server",
  "React", "TypeScript", "Tailwind CSS", "Node.js",
  "Git", "Azure", "IA & LLM",
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground pop-border shadow-soft">
          Compétences
        </p>
        <h2 className="mb-8 font-display text-4xl uppercase tracking-wide md:text-5xl">
          Ma <span className="text-secondary text-stroke-thin">boîte à outils</span>.
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full bg-card px-4 py-2 text-sm font-bold uppercase tracking-wide pop-border-2 shadow-soft transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-glow"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
