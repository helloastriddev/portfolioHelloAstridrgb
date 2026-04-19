import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-accent px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm font-bold uppercase tracking-wide text-accent-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Astrid. Tous droits réservés.</div>
        <div className="flex items-center gap-1.5">
          Fait avec <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> et des pixels POP.
        </div>
      </div>
    </footer>
  );
}
