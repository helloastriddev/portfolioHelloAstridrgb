import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "Sereins",
    subtitle: "Bien-être numérique",
    description:
      "Application web de respiration et suivi d'humeur. Pensée comme un espace calme : interfaces lentes, animations douces, vocabulaire bienveillant.",
    problem: "Aider à ralentir dans une journée saturée d'écrans.",
    result: "Sessions de 3 min, taux de retour quotidien élevé.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    accent: "primary",
  },
  {
    n: "02",
    title: "Popote",
    subtitle: "Recettes communautaires",
    description:
      "Plateforme sociale de partage de recettes. Architecture .NET côté backend, interface React sensible côté front.",
    problem: "Centraliser les recettes familiales avec une vraie expérience sociale.",
    result: "API REST stable, modèle de données scalable.",
    tech: ["C#", ".NET", "SQL Server", "React"],
    accent: "secondary",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">— 02 / Projets</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl">
              Des produits qui résolvent <span className="italic-serif text-primary">un vrai problème</span>.
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-muted-foreground">
            Chaque projet commence par une question. Voici comment j'y réponds.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative grid gap-8 rounded-3xl border border-border bg-card p-8 transition-all hover:border-secondary/40 hover:shadow-lift md:grid-cols-12 md:p-10"
            >
              <div className="md:col-span-2">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Projet {p.n}
                </div>
                <div
                  className={`mt-2 h-1 w-12 rounded-full ${
                    p.accent === "primary" ? "bg-primary" : "bg-secondary"
                  }`}
                />
              </div>

              <div className="md:col-span-6 space-y-4">
                <div>
                  <h3 className="font-display text-3xl tracking-tight md:text-4xl">{p.title}</h3>
                  <p className="italic-serif text-lg text-muted-foreground">{p.subtitle}</p>
                </div>
                <p className="leading-relaxed text-foreground/90">{p.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4 space-y-4 md:border-l md:border-border md:pl-8">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-secondary">
                    Problème
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">{p.problem}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                    Résultat
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">{p.result}</p>
                </div>
                <div className="flex gap-2 pt-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    <Github className="h-3.5 w-3.5" /> Code
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-transform hover:translate-x-0.5 hover:-translate-y-0.5"
                  >
                    Voir <ArrowUpRight className="h-3.5 w-3.5" />
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
