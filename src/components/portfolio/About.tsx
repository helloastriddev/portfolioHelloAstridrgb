export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 inline-block rounded-full bg-secondary px-4 py-1 text-xs font-bold uppercase tracking-widest text-secondary-foreground pop-border shadow-soft">
          À propos
        </p>
        <h2 className="mb-6 font-display text-4xl uppercase tracking-wide md:text-5xl">
          Full-stack avec un <span className="text-primary text-stroke-thin">faible pour l'IA</span>.
        </h2>
        <p className="text-lg leading-relaxed text-foreground">
          Je conçois des produits avec C# / .NET côté backend et React + TypeScript côté
          frontend. J'aime le code propre, les détails soignés et explorer les possibilités
          offertes par l'IA.
        </p>
      </div>
    </section>
  );
}
