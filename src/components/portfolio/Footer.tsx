import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-background px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center">
        <div className="font-display text-lg tracking-tight text-foreground">
          Astrid<span className="italic-serif text-secondary">.</span>
        </div>
        <div className="font-mono text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} · {t("footer.location") as string}
        </div>
        <div className="text-xs">
          {t("footer.designedA") as string} <span className="italic-serif text-secondary">{t("footer.designedB") as string}</span>.
        </div>
      </div>
    </footer>
  );
}
