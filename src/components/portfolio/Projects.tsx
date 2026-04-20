import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Sereins",
    tag: "WOW!",
    description:
      "Application web de bien-être : exercices de respiration et suivi d'humeur dans un espace numérique apaisant.",
    tech: ["React", "TypeScript", "Tailwind"],
    bg: "bg-secondary text-secondary-foreground",
    dotsClass: "dots-blue-bg",
  },
  {
    title: "Popote",
    tag: "YUM!",
    description:
      "Plateforme de partage de recettes communautaire. Découvre, crée et partage tes plats favoris.",
    tech: ["C#", ".NET", "SQL Server", "React"],
    bg: "bg-primary text-primary-foreground",
    dotsClass: "dots-pink-bg",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 inline-block rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground pop-border shadow-soft">
            Projets
          </p>
          <h2 className="font-display text-4xl uppercase tracking-wide md:text-5xl">
            Ce sur quoi je <span className="text-primary text-stroke-thin">travaille</span>.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl bg-card pop-border shadow-card transition-transform duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-lift"
            >
              <div className={`relative h-36 overflow-hidden ${p.bg} border-b-4 border-foreground`}>
                {/* Halftone overlay */}
                <div className={`absolute inset-0 ${p.dotsClass} opacity-40`} />
                <div className="absolute bottom-4 left-5 font-display text-3xl uppercase tracking-wide">
                  {p.title}
                </div>
                {/* Comic burst tag */}
                <div className="absolute right-4 top-4 rotate-6 rounded-full bg-accent px-3 py-1 font-display text-sm uppercase tracking-wide text-accent-foreground pop-border-2 shadow-soft">
                  {p.tag}
                </div>
              </div>
              <div className="space-y-4 p-6">
                <p className="text-sm leading-relaxed text-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-card px-3 py-1 text-xs font-bold text-foreground pop-border-2"
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
                    className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-bold uppercase text-background pop-border-2 transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
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
