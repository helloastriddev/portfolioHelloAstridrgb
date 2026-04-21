const steps = [
  {
    n: "01",
    title: "Analyser",
    text: "Comprendre le besoin réel, pas la demande de surface. Poser les bonnes questions.",
  },
  {
    n: "02",
    title: "Planifier",
    text: "Découper en étapes claires. Prévoir les pièges. Choisir la stack juste.",
  },
  {
    n: "03",
    title: "Construire",
    text: "Code propre, testé, lisible. Itérations courtes. Feedback continu.",
  },
  {
    n: "04",
    title: "Optimiser",
    text: "Mesurer, raffiner, polir. Le détail qui transforme un produit en expérience.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">— 05 / Process</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl">
              Une méthode <span className="italic-serif text-primary">simple</span>, appliquée sérieusement.
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
          />

          <div className="grid gap-10 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="group relative">
                <div className="flex items-center gap-3">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-background font-mono text-sm text-foreground transition-all group-hover:border-secondary group-hover:bg-secondary group-hover:text-secondary-foreground">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
