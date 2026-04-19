import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Bloom Tasks",
    description: "A pastel task manager with smart prioritization powered by an LLM. Drag-and-drop, daily focus mode, and gentle reminders.",
    tech: ["React", "TypeScript", "Tailwind", "OpenAI"],
    gradient: "linear-gradient(135deg, oklch(0.88 0.1 350), oklch(0.85 0.08 295))",
  },
  {
    title: "InvoiceFlow API",
    description: "A robust .NET 8 API for SMB invoicing with role-based auth, PDF generation, and SQL Server storage. 95%+ test coverage.",
    tech: ["C#", ".NET 8", "SQL Server", "EF Core"],
    gradient: "linear-gradient(135deg, oklch(0.88 0.08 295), oklch(0.92 0.06 75))",
  },
  {
    title: "MoodLens",
    description: "Sentiment analysis dashboard for product reviews. Combines a Python ML model with a React dashboard and SignalR live updates.",
    tech: ["Python", "React", "ASP.NET", "SignalR"],
    gradient: "linear-gradient(135deg, oklch(0.92 0.06 75), oklch(0.9 0.07 165))",
  },
  {
    title: "Petal UI Kit",
    description: "An open-source pastel component library built with Radix and Tailwind. 40+ accessible components with thoughtful animations.",
    tech: ["React", "TypeScript", "Radix", "Storybook"],
    gradient: "linear-gradient(135deg, oklch(0.9 0.07 20), oklch(0.88 0.1 350))",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Projects</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Things I've <span className="text-gradient">built lately</span>.
            </h2>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            See all on GitHub <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div
                className="relative h-44 overflow-hidden"
                style={{ background: p.gradient }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at 30% 30%, oklch(1 0 0 / 0.4), transparent 60%)" }}
                />
                <div className="absolute bottom-4 left-5 font-display text-2xl font-semibold text-foreground/90">
                  {p.title}
                </div>
              </div>
              <div className="space-y-4 p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-pink-soft px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
