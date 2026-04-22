import { ArrowRight, MapPin } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import portrait from "@/assets/portrait-editorial.jpeg";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-hero pt-28"
    >
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 py-20 md:grid-cols-12">
        {/* Text — 7 cols */}
        <div className="md:col-span-7 space-y-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <MapPin className="h-3 w-3" />
            {t("hero.badge")}
          </div>

          <h1 className="font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
            {t("hero.title1")} <span className="italic-serif text-secondary">{t("hero.title2")}</span>,
            <br />
            {t("hero.title3")} <span className="italic-serif text-primary">{t("hero.title4")}</span>.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            <Trans
              i18nKey="hero.description"
              components={{
                stack1: <span className="font-mono text-sm text-foreground" />,
                stack2: <span className="font-mono text-sm text-foreground" />,
              }}
            />
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="paint-blob paint-texture group inline-flex items-center gap-2 bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-soft transition-shadow hover:shadow-glow"
            >
              {t("hero.ctaProjects")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="paint-blob-alt inline-flex items-center px-7 py-4 text-base font-medium text-foreground border border-foreground/20 transition-colors hover:bg-muted"
            >
              {t("hero.ctaContact")}
            </a>
          </div>

          {/* Tiny meta strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 text-sm text-muted-foreground">
            <span className="font-mono text-xs uppercase tracking-widest">{t("hero.metaLabel")}</span>
            <span>{t("hero.metaText")}</span>
          </div>
        </div>

        {/* Portrait — 5 cols, editorial frame */}
        <div className="relative md:col-span-5 animate-fade-in">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-primary/90" />
            <div className="relative overflow-hidden rounded-[2rem] bg-beige-warm shadow-lift">
              <img
                src={portrait}
                alt={t("hero.portraitAlt")}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-secondary-foreground shadow-soft">
              <span className="italic-serif">{t("hero.portraitTag")}</span> 2026
            </div>
            <div className="absolute -right-3 top-8 rotate-90 origin-top-right font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              portfolio · vol.01
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
