import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-hero pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div className="animate-fade-up space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for new projects
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Sofia</span>
            <br />
            <span className="text-foreground/90">a developer who builds</span>
            <br />
            <span className="text-gradient">delightful software.</span>
          </h1>

          <p className="max-w-lg text-base text-muted-foreground md:text-lg">
            <span className="font-medium text-foreground">C# .NET & React TypeScript Developer</span>
            {" "}crafting full-stack experiences with clean code, thoughtful design, and a growing
            curiosity for AI.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="group rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-95">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-border bg-card/70 backdrop-blur hover:bg-pink-soft">
              <a href="#contact">
                <Mail className="mr-1 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
            <div><span className="font-display text-2xl font-semibold text-foreground">3+</span> yrs experience</div>
            <div className="h-8 w-px bg-border" />
            <div><span className="font-display text-2xl font-semibold text-foreground">20+</span> projects shipped</div>
            <div className="h-8 w-px bg-border" />
            <div><span className="font-display text-2xl font-semibold text-foreground">∞</span> coffees</div>
          </div>
        </div>

        {/* Decorative card stack */}
        <div className="relative mx-auto hidden h-[28rem] w-full max-w-md md:block">
          <div className="absolute right-0 top-6 h-72 w-72 rounded-3xl bg-gradient-soft shadow-lift animate-float" />
          <div
            className="absolute left-0 top-20 h-64 w-64 rounded-3xl bg-card shadow-card animate-float"
            style={{ animationDelay: "-2s" }}
          >
            <div className="space-y-3 p-6 font-mono text-xs">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-pink" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
              </div>
              <div className="space-y-1.5 pt-2">
                <div className="text-muted-foreground">// hello.cs</div>
                <div><span className="text-secondary-foreground/70">var</span> <span className="text-gradient font-semibold">dev</span> = <span className="text-pink">new</span> Developer();</div>
                <div>dev.<span className="text-pink">Build</span>(<span className="text-foreground/60">"magic"</span>);</div>
                <div className="text-muted-foreground">// ✨ shipped</div>
              </div>
            </div>
          </div>
          <div
            className="absolute bottom-0 right-8 h-44 w-56 rounded-3xl bg-gradient-primary shadow-glow animate-float"
            style={{ animationDelay: "-4s" }}
          >
            <div className="flex h-full items-center justify-center">
              <Sparkles className="h-12 w-12 text-primary-foreground/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
