import { Palette, Brush, Music, Disc3 } from "lucide-react";

const passions = [
  {
    icon: Palette,
    title: "Peinture",
    note: "Acrylique & textures",
    text: "Composer des plans, équilibrer les masses. Comme une page web, en plus tactile.",
    rotate: "-rotate-2",
  },
  {
    icon: Brush,
    title: "Dessin",
    note: "Encre & lignes",
    text: "Capturer une silhouette en quelques traits. Apprendre à choisir.",
    rotate: "rotate-1",
  },
  {
    icon: Music,
    title: "Musique",
    note: "Écoute & rythme",
    text: "Le tempo d'un morceau, le pacing d'une interface — même grammaire.",
    rotate: "rotate-2",
  },
  {
    icon: Disc3,
    title: "Danse",
    note: "Mouvement & espace",
    text: "Le corps comprend la structure avant la tête. C'est une école d'attention.",
    rotate: "-rotate-1",
  },
];

export function CreativeSide() {
  return (
    <section id="creative" className="relative overflow-hidden bg-primary px-6 py-28 text-primary-foreground">
      {/* Decorative organic shape */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-secondary/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">— 04 / Créatif</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-6xl">
              Hors du clavier,
              <br />
              <span className="italic-serif text-secondary">la même attention</span>.
            </h2>
          </div>
          <p className="md:col-span-4 text-primary-foreground/70">
            Mes passions ne sont pas une parenthèse. Elles nourrissent ma façon de penser un produit.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {passions.map((p) => (
            <div
              key={p.title}
              className={`group relative rounded-3xl bg-background/95 p-7 text-foreground shadow-soft transition-all duration-500 hover:shadow-lift hover:-translate-y-2 ${p.rotate} hover:rotate-0`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-2xl">{p.title}</h3>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {p.note}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-20 overflow-hidden">
          <div className="flex animate-marquee gap-12 whitespace-nowrap font-display text-5xl tracking-tight md:text-7xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-12">
                <span>analyser</span>
                <span className="italic-serif text-secondary">·</span>
                <span className="italic-serif">dessiner</span>
                <span className="italic-serif text-secondary">·</span>
                <span>structurer</span>
                <span className="italic-serif text-secondary">·</span>
                <span className="italic-serif">danser</span>
                <span className="italic-serif text-secondary">·</span>
                <span>coder</span>
                <span className="italic-serif text-secondary">·</span>
                <span className="italic-serif">composer</span>
                <span className="italic-serif text-secondary">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
