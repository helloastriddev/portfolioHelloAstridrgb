import { Server, Layout, Database, Sparkles } from "lucide-react";

const groups = [
  {
    icon: Server,
    title: "Backend",
    tint: "var(--pink-soft)",
    skills: ["C#", ".NET", "ASP.NET Core", "REST APIs", "Entity Framework"],
  },
  {
    icon: Layout,
    title: "Frontend",
    tint: "var(--lavender-soft)",
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "Next.js"],
  },
  {
    icon: Database,
    title: "Database",
    tint: "var(--beige)",
    skills: ["SQL Server", "PostgreSQL", "T-SQL", "Schema design"],
  },
  {
    icon: Sparkles,
    title: "AI & Other",
    tint: "var(--mint)",
    skills: ["LLM integration", "Prompt design", "Python basics", "Git", "Azure"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative bg-gradient-soft/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Skills</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            My <span className="text-gradient">toolbox</span>.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-70 blur-2xl transition-opacity group-hover:opacity-100"
                style={{ background: g.tint }}
              />
              <div className="relative">
                <div
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: g.tint }}
                >
                  <g.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="mb-3 font-display text-lg font-semibold">{g.title}</h3>
                <ul className="space-y-1.5">
                  {g.skills.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
