import { Compass, Microscope, Layers, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const traitsConfig = [
  { icon: Compass, key: "organisation" },
  { icon: Microscope, key: "precision" },
  { icon: Layers, key: "analyse" },
  { icon: Sparkles, key: "sensibilite" },
] as const;

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">{t("about.eyebrow") as string}</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl">
              {t("about.titleA") as string} <span className="italic-serif text-primary">{t("about.titleB") as string}</span>
              {t("about.titleC") as string}
            </h2>
          </div>

          <div className="md:col-span-7 md:col-start-6 space-y-6">
            <p className="font-display text-2xl leading-relaxed text-foreground md:text-3xl">
              {t("about.leadA") as string}{" "}
              <span className="italic-serif text-secondary">{t("about.leadB") as string}</span>,{" "}
              <span className="italic-serif text-secondary">{t("about.leadC") as string}</span>,{" "}
              <span className="italic-serif text-secondary">{t("about.leadD") as string}</span>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">{t("about.body") as string}</p>

            <div className="grid gap-4 pt-6 sm:grid-cols-2">
              {traitsConfig.map((tr) => (
                <div
                  key={tr.key}
                  className="group rounded-2xl border border-border bg-card/50 p-5 transition-all hover:border-secondary/50 hover:shadow-soft"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                      <tr.icon className="h-4 w-4" />
                    </span>
                    <span className="font-display text-lg">{t(`about.traits.${tr.key}.label`) as string}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`about.traits.${tr.key}.text`) as string}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
