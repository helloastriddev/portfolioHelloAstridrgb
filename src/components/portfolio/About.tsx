export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-5 md:items-center">
        <div className="md:col-span-3 space-y-5">
          <p className="inline-block rounded-full bg-secondary px-4 py-1 text-xs font-bold uppercase tracking-widest text-secondary-foreground pop-border shadow-soft">
            À propos
          </p>
          <h2 className="font-display text-4xl uppercase tracking-wide md:text-5xl">
            Full-stack avec un <span className="text-primary text-stroke-thin">faible pour l'IA</span>.
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            Je conçois des produits avec C# / .NET côté backend et React + TypeScript côté
            frontend. Code propre, détails soignés, et une vraie curiosité pour l'IA.
          </p>
        </div>

        {/* Comic speech bubble */}
        <div className="relative md:col-span-2">
          <div className="relative rounded-3xl bg-accent p-6 pop-border-4 shadow-lift">
            <p className="font-display text-3xl uppercase leading-tight tracking-wide text-accent-foreground">
              "Faire du code <span className="text-primary text-stroke-thin">audacieux</span> et <span className="text-secondary text-stroke-thin">soigné</span>."
            </p>
            {/* Tail of the speech bubble */}
            <div
              aria-hidden
              className="absolute -bottom-4 left-10 h-6 w-6 rotate-45 bg-accent pop-border-4 border-t-0 border-l-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
