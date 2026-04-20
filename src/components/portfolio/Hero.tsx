import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait-pop.jpeg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-24"
    >
      {/* Halftone strip background accent */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 dots-pink-bg opacity-40 md:block"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div className="animate-fade-up space-y-6">
          <h1 className="font-display text-6xl font-normal uppercase leading-[0.9] tracking-wide md:text-7xl lg:text-8xl">
            <span className="block">Salut,</span>
            <span className="block">je suis <span className="text-primary text-stroke-thin">Astrid</span></span>
          </h1>

          <p className="max-w-md text-lg font-medium text-muted-foreground">
            Développeuse C# .NET & React TypeScript basée à Bordeaux.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
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
              className="rounded-full bg-card pop-border shadow-soft hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-glow transition-transform font-bold uppercase tracking-wide"
            >
              <a href="#contact">
                <Mail className="mr-1 h-4 w-4" />
                Me contacter
              </a>
            </Button>
          </div>
        </div>

        {/* Portrait pop art halftone — fade into background */}
        <div className="relative mx-auto w-full max-w-md">
          <img
            src={portrait}
            alt="Portrait halftone pop art d'Astrid, développeuse full-stack à Bordeaux"
            className="h-auto w-full object-contain mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
