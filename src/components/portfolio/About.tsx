import { Heart, Code2, Brain } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Code propre",
    text: "Lisible, testé et facile à maintenir, par défaut.",
    bg: "bg-accent",
  },
  {
    icon: Brain,
    title: "Résolveuse de problèmes",
    text: "J'adore démêler la logique tordue et les cas limites.",
    bg: "bg-pink",
  },
  {
    icon: Heart,
    title: "Souci du détail",
    text: "Une UI au pixel près qui rencontre un backend solide.",
    bg: "bg-secondary",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 inline-block rounded-full bg-secondary px-4 py-1 text-xs font-bold uppercase tracking-widest text-secondary-foreground pop-border shadow-soft">
            À propos
          </p>
          <h2 className="font-display text-5xl uppercase tracking-wide md:text-6xl">
            Une développeuse full-stack avec un{" "}
            <span className="text-primary text-stroke-thin">faible pour l'IA</span>.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3 space-y-5 text-base leading-relaxed text-foreground md:text-lg">
            <p className="rounded-2xl bg-card p-5 pop-border shadow-card">
              Je suis développeuse full-stack et je conçois des produits avec{" "}
              <span className="font-bold text-primary">C# / .NET</span> côté backend et{" "}
              <span className="font-bold text-secondary">React + TypeScript</span> côté
              frontend. Je suis à l'aise pour modéliser des données relationnelles en{" "}
              <span className="font-bold text-foreground">SQL</span> et concevoir des APIs qui
              tiennent la charge.
            </p>
            <p className="rounded-2xl bg-card p-5 pop-border shadow-card">
              Ces derniers temps, j'explore les bases de{" "}
              <span className="font-bold text-primary">l'IA et du machine learning</span> —
              en intégrant des LLM dans de vrais produits et en apprenant comment la donnée façonne
              les comportements intelligents.
            </p>
            <p className="rounded-2xl bg-card p-5 pop-border shadow-card">
              Je soigne les petits détails : une UI réfléchie, des défauts sensés, et du code
              auquel c'est un plaisir de revenir. ✨
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="group flex gap-4 rounded-2xl bg-card p-5 pop-border shadow-card transition-transform hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-lift"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${v.bg} pop-border-2 transition-transform group-hover:rotate-[-8deg]`}
                >
                  <v.icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg uppercase tracking-wide">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
