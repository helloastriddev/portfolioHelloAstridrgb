export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <div className="font-display text-lg tracking-tight text-foreground">
          Astrid<span className="italic-serif text-secondary">.</span>
        </div>
        <div className="font-mono text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} · Bordeaux, France
        </div>
        <div className="text-xs">
          Conçu avec <span className="italic-serif text-secondary">intention</span>.
        </div>
      </div>
    </footer>
  );
}
