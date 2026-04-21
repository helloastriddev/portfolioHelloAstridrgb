import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait-editorial.jpeg";

export function Hero() {
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
            Bordeaux, France · Disponible
          </div>

          <h1 className="font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Esprit <span className="italic-serif text-secondary">structuré</span>,
            <br />
            âme <span className="italic-serif text-primary">créative</span>.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Développeuse full-stack <span className="font-mono text-sm text-foreground">C# .NET</span> &{" "}
            <span className="font-mono text-sm text-foreground">React TypeScript</span>. Je construis des
            produits avec la rigueur d'un ingénieur et la sensibilité d'une artiste.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-primary text-primary-foreground shadow-soft hover:shadow-glow transition-all"
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
              className="rounded-full border-foreground/20 bg-transparent hover:bg-muted"
            >
              <a href="#contact">Me contacter</a>
            </Button>
          </div>

          {/* Tiny meta strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 text-sm text-muted-foreground">
            <span className="font-mono text-xs uppercase tracking-widest">— focus actuel</span>
            <span>Backend .NET · IA appliquée · Interfaces sensibles</span>
          </div>
        </div>

        {/* Portrait — 5 cols, editorial frame */}
        <div className="relative md:col-span-5 animate-fade-in">
          <div className="relative">
            {/* Forest backdrop card */}
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-primary/90" />
            {/* Portrait */}
            <div className="relative overflow-hidden rounded-[2rem] bg-beige-warm shadow-lift">
              <img
                src={portrait}
                alt="Portrait éditorial d'Astrid, développeuse full-stack à Bordeaux"
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Caption tag */}
            <div className="absolute -bottom-5 left-6 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-secondary-foreground shadow-soft">
              <span className="italic-serif">Astrid,</span> 2026
            </div>
            {/* Vertical label */}
            <div className="absolute -right-3 top-8 rotate-90 origin-top-right font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              portfolio · vol.01
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
