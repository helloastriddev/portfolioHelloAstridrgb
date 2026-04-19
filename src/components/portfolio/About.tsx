import { Heart, Code2, Brain } from "lucide-react";

const values = [
  { icon: Code2, title: "Clean code", text: "Readable, tested, and maintainable by default." },
  { icon: Brain, title: "Problem solver", text: "I love untangling tricky logic and edge cases." },
  { icon: Heart, title: "Detail-oriented", text: "Pixel-perfect UI meets robust backend logic." },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">About me</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            A full-stack developer with a <span className="text-gradient">soft spot for AI</span>.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I'm a full-stack developer building products with{" "}
              <span className="font-medium text-foreground">C# / .NET</span> on the backend and{" "}
              <span className="font-medium text-foreground">React + TypeScript</span> on the frontend. I'm comfortable
              designing relational data models in <span className="font-medium text-foreground">SQL</span> and shaping
              APIs that scale.
            </p>
            <p>
              Lately I've been exploring <span className="font-medium text-foreground">AI and machine learning</span>{" "}
              basics — integrating LLMs into real products and learning how data shapes intelligent behavior.
            </p>
            <p>
              I care about the small things: thoughtful UI, sensible defaults, and code that's a joy to revisit.
            </p>
          </div>

          <div className="md:col-span-2 space-y-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="group flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-soft transition-transform group-hover:scale-110">
                  <v.icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">{v.title}</h3>
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
