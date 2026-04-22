import { ArrowUpRight, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const projectsConfig = [
  {
    n: "01",
    key: "sereins",
    title: "Sereins",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    accent: "primary",
  },
  {
    n: "02",
    key: "popote",
    title: "Popote",
    tech: ["C#", ".NET", "SQL Server", "React"],
    accent: "secondary",
  },
] as const;

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">{t("projects.eyebrow")}</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl">
              {t("projects.titleA")} <span className="italic-serif text-primary">{t("projects.titleB")}</span>.
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-muted-foreground">{t("projects.intro")}</p>
        </div>

        <div className="space-y-6">
          {projectsConfig.map((p) => (
            <article
              key={p.title}
              className="group relative grid gap-8 rounded-3xl border border-border bg-card p-8 transition-all hover:border-secondary/40 hover:shadow-lift md:grid-cols-12 md:p-10"
            >
              <div className="md:col-span-2">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {t("projects.projectLabel")} {p.n}
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
                  <p className="italic-serif text-lg text-muted-foreground">
                    {t(`projects.items.${p.key}.subtitle`)}
                  </p>
                </div>
                <p className="leading-relaxed text-foreground/90">
                  {t(`projects.items.${p.key}.description`)}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4 space-y-4 md:border-l md:border-border md:pl-8">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-secondary">
                    {t("projects.problemLabel")}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                    {t(`projects.items.${p.key}.problem`)}
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                    {t("projects.resultLabel")}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                    {t(`projects.items.${p.key}.result`)}
                  </p>
                </div>
                <div className="flex gap-2 pt-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="paint-blob-alt inline-flex items-center gap-1.5 border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    <Github className="h-3.5 w-3.5" /> {t("projects.code")}
                  </a>
                  <a
                    href="#"
                    className="paint-blob paint-texture inline-flex items-center gap-1.5 bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-soft transition-shadow hover:shadow-glow"
                  >
                    {t("projects.view")} <ArrowUpRight className="h-3.5 w-3.5" />
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
