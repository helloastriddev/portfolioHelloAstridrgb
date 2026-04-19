import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Sofia. All rights reserved.</div>
        <div className="flex items-center gap-1.5">
          Made with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> and pastel pixels.
        </div>
      </div>
    </footer>
  );
}
