import { Server, Layout, Database, Sparkles } from "lucide-react";

const groups = [
  {
    icon: Server,
    title: "Backend",
    bg: "bg-primary text-primary-foreground",
    iconBg: "bg-accent",
    skills: ["C#", ".NET", "ASP.NET Core", "API REST", "Entity Framework"],
  },
  {
    icon: Layout,
    title: "Frontend",
    bg: "bg-secondary text-secondary-foreground",
    iconBg: "bg-accent",
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "Next.js"],
  },
  {
    icon: Database,
    title: "Base de données",
    bg: "bg-accent text-accent-foreground",
    iconBg: "bg-primary",
    skills: ["SQL Server", "PostgreSQL", "T-SQL", "Modélisation"],
  },
  {
    icon: Sparkles,
    title: "IA & Autres",
    bg: "bg-pink text-foreground",
    iconBg: "bg-secondary",
    skills: ["Intégration LLM", "Prompt design", "Bases Python", "Git", "Azure"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 dots-bg opacity-20" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground pop-border shadow-soft">
            Compétences
          </p>
          <h2 className="font-display text-5xl uppercase tracking-wide md:text-6xl">
            Ma <span className="text-secondary text-stroke-thin">boîte à outils</span>.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div
              key={g.title}
              className={`group relative overflow-hidden rounded-3xl ${g.bg} p-6 pop-border shadow-card transition-transform duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-lift`}
            >
              <div
                aria-hidden
                className="absolute inset-0 dots-bg opacity-15"
              />
              <div className="relative">
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${g.iconBg} pop-border-2 transition-transform duration-300 group-hover:rotate-[-8deg]`}
                >
                  <g.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="mb-3 font-display text-2xl uppercase tracking-wide">{g.title}</h3>
                <ul className="space-y-1.5">
                  {g.skills.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm font-medium">
                      <span className="h-2 w-2 rounded-full bg-foreground" />
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
