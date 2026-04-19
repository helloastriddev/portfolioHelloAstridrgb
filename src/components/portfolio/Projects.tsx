import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Bloom Tasks",
    description:
      "Un gestionnaire de tâches pop avec priorisation intelligente boostée par un LLM. Drag-and-drop, mode focus quotidien et rappels en douceur.",
    tech: ["React", "TypeScript", "Tailwind", "OpenAI"],
    bg: "bg-primary text-primary-foreground",
    badge: "WOW!",
  },
  {
    title: "InvoiceFlow API",
    description:
      "Une API .NET 8 robuste pour la facturation PME : auth par rôles, génération PDF, stockage SQL Server. Couverture de tests > 95%.",
    tech: ["C#", ".NET 8", "SQL Server", "EF Core"],
    bg: "bg-secondary text-secondary-foreground",
    badge: "BOOM!",
  },
  {
    title: "MoodLens",
    description:
      "Tableau de bord d'analyse de sentiments pour les avis produits. Combine un modèle ML Python avec un dashboard React et SignalR temps réel.",
    tech: ["Python", "React", "ASP.NET", "SignalR"],
    bg: "bg-accent text-accent-foreground",
    badge: "ZAP!",
  },
  {
    title: "Petal UI Kit",
    description:
      "Une librairie de composants pop open-source construite avec Radix et Tailwind. 40+ composants accessibles avec animations soignées.",
    tech: ["React", "TypeScript", "Radix", "Storybook"],
    bg: "bg-pink text-foreground",
    badge: "POW!",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="mb-3 inline-block rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground pop-border shadow-soft">
              Projets
            </p>
            <h2 className="font-display text-5xl uppercase tracking-wide md:text-6xl">
              Ce que j'ai <span className="text-primary text-stroke-thin">construit récemment</span>.
            </h2>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-card px-4 py-2 text-sm font-bold uppercase pop-border shadow-soft transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-glow"
          >
            Tout voir sur GitHub <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl bg-card pop-border shadow-card transition-transform duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-lift"
            >
              <div className={`relative h-44 overflow-hidden ${p.bg} border-b-4 border-foreground`}>
                <div aria-hidden className="absolute inset-0 dots-bg opacity-25" />
                <div className="absolute -right-4 top-4 rotate-12 rounded-2xl bg-card px-4 py-2 font-display text-xl uppercase pop-border shadow-soft">
                  {p.badge}
                </div>
                <div className="absolute bottom-4 left-5 font-display text-3xl uppercase tracking-wide">
                  {p.title}
                </div>
              </div>
              <div className="space-y-4 p-6">
                <p className="text-sm leading-relaxed text-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground pop-border-2"
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
                    className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-bold uppercase text-background transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-bold uppercase text-primary-foreground pop-border-2 transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
                  >
                    <ExternalLink className="h-4 w-4" /> Démo
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
