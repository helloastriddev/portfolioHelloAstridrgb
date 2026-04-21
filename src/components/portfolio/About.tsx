import { Compass, Microscope, Layers, Sparkles } from "lucide-react";

const traits = [
  { icon: Compass, label: "Organisation", text: "Structurer le chaos en systèmes lisibles." },
  { icon: Microscope, label: "Précision", text: "Le détail fait la différence, toujours." },
  { icon: Layers, label: "Analyse", text: "Décomposer, comprendre, puis construire." },
  { icon: Sparkles, label: "Sensibilité", text: "Le code peut être beau et juste." },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">— 01 / À propos</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl">
              Deux <span className="italic-serif text-primary">disciplines</span>, une seule façon de penser.
            </h2>
          </div>

          <div className="md:col-span-7 md:col-start-6 space-y-6">
            <p className="font-display text-2xl leading-relaxed text-foreground md:text-3xl">
              Je construis des produits comme on compose une œuvre :{" "}
              <span className="italic-serif text-secondary">analyser</span>,{" "}
              <span className="italic-serif text-secondary">structurer</span>,{" "}
              <span className="italic-serif text-secondary">affiner</span>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              La rigueur du code ne s'oppose pas à la créativité — elle la libère. Mes années de
              dessin, de musique et de danse m'ont appris la même chose que .NET : un bon résultat
              repose sur une intention claire et une exécution propre.
            </p>

            <div className="grid gap-4 pt-6 sm:grid-cols-2">
              {traits.map((t) => (
                <div
                  key={t.label}
                  className="group rounded-2xl border border-border bg-card/50 p-5 transition-all hover:border-secondary/50 hover:shadow-soft"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                      <t.icon className="h-4 w-4" />
                    </span>
                    <span className="font-display text-lg">{t.label}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
