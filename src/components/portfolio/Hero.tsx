import { ArrowRight, Mail, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait.jpeg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-hero pt-24"
    >
      {/* Halftone overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 dots-bg opacity-40" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div className="animate-fade-up space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground pop-border shadow-soft">
            <Zap className="h-3.5 w-3.5" />
            Disponible pour de nouveaux projets
          </div>

          <h1 className="font-display text-6xl font-normal uppercase leading-[0.95] tracking-wide md:text-7xl lg:text-8xl">
            <span className="block text-stroke text-accent">Salut,</span>
            <span className="block">je suis <span className="text-primary text-stroke">Sofia</span></span>
            <span className="mt-2 block text-3xl md:text-4xl lg:text-5xl text-secondary text-stroke-thin">
              Développeuse pleine de POP !
            </span>
          </h1>

          <div className="relative max-w-lg rounded-2xl bg-card p-5 pop-border shadow-card">
            {/* Speech bubble tail */}
            <div className="absolute -bottom-3 left-10 h-5 w-5 rotate-45 bg-card pop-border-2 border-t-0 border-l-0" />
            <p className="text-base font-medium md:text-lg">
              <span className="font-bold text-primary">Développeuse C# .NET & React TypeScript</span>{" "}
              qui crée des expériences full-stack avec un code propre, un design audacieux et une vraie
              curiosité pour l'IA. ⚡
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-primary text-primary-foreground pop-border shadow-soft hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-glow transition-transform font-bold uppercase tracking-wide"
            >
              <a href="#projects">
                Voir les projets
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full bg-accent text-accent-foreground pop-border shadow-soft hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-glow transition-transform font-bold uppercase tracking-wide"
            >
              <a href="#contact">
                <Mail className="mr-1 h-4 w-4" />
                Me contacter
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 text-sm">
            <div className="rounded-2xl bg-secondary px-4 py-2 text-secondary-foreground pop-border shadow-soft">
              <span className="font-display text-2xl">3+</span>{" "}
              <span className="font-semibold uppercase">ans d'xp</span>
            </div>
            <div className="rounded-2xl bg-pink px-4 py-2 text-foreground pop-border shadow-soft">
              <span className="font-display text-2xl">20+</span>{" "}
              <span className="font-semibold uppercase">projets livrés</span>
            </div>
            <div className="rounded-2xl bg-accent px-4 py-2 text-accent-foreground pop-border shadow-soft">
              <span className="font-display text-2xl">∞</span>{" "}
              <span className="font-semibold uppercase">cafés ☕</span>
            </div>
          </div>
        </div>

        {/* Pop-art portrait */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative">
            {/* Background dotted plate */}
            <div
              aria-hidden
              className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-accent dots-bg pop-border"
            />
            {/* Pink halftone plate */}
            <div
              aria-hidden
              className="absolute -bottom-6 -left-6 h-full w-full rounded-3xl bg-primary/30 dots-pink-bg pop-border"
            />

            {/* The portrait card */}
            <div className="relative overflow-hidden rounded-3xl bg-card pop-border-4 shadow-lift">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={portrait}
                  alt="Portrait de Sofia, développeuse full-stack"
                  className="h-full w-full object-cover saturate-150 contrast-110"
                />
                {/* Color wash for pop art feel */}
                <div className="pointer-events-none absolute inset-0 mix-blend-color opacity-25 bg-gradient-primary" />
                {/* Halftone overlay */}
                <div className="pointer-events-none absolute inset-0 dots-bg opacity-25" />
              </div>

              {/* Speech bubble */}
              <div className="absolute -right-2 top-6 rotate-3 rounded-2xl bg-accent px-4 py-2 font-display text-2xl uppercase text-accent-foreground pop-border shadow-soft animate-wiggle">
                Wow !
              </div>

              {/* Bottom label */}
              <div className="bg-primary px-5 py-3 font-display text-2xl uppercase tracking-wide text-primary-foreground border-t-4 border-foreground">
                ✦ Sofia.dev ✦
              </div>
            </div>

            {/* Floating bang */}
            <div
              aria-hidden
              className="absolute -top-8 -left-8 flex h-24 w-24 rotate-[-12deg] items-center justify-center rounded-full bg-accent font-display text-xl uppercase text-accent-foreground pop-border shadow-soft animate-float"
            >
              POW!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
