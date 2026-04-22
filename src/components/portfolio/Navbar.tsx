import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const links = [
    { href: "#about", label: t("nav.about") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#creative", label: t("nav.creative") },
    { href: "#process", label: t("nav.process") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const toggleLang = () => {
    const next = i18n.language?.startsWith("fr") ? "en" : "fr";
    i18n.changeLanguage(next);
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
  };

  const currentLang = i18n.language?.startsWith("fr") ? "FR" : "EN";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-bar border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="paint-blob paint-texture flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground italic-serif text-lg shadow-soft">
            a
          </span>
          <span className="font-display text-lg tracking-tight">
            Astrid<span className="italic-serif text-secondary">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-muted"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label={t("nav.langToggle")}
            className="paint-blob-alt flex h-10 items-center justify-center gap-1.5 px-3 text-foreground hover:bg-muted transition-colors"
          >
            <Languages className="h-4 w-4" />
            <span className="font-mono text-xs font-medium">{currentLang}</span>
          </button>
          <button
            onClick={toggleTheme}
            aria-label={t("nav.themeToggle")}
            className="paint-blob-alt flex h-10 w-10 items-center justify-center text-foreground hover:bg-muted transition-colors"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            className="paint-blob-alt flex h-10 w-10 items-center justify-center text-foreground hover:bg-muted transition-colors md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={t("nav.menu")}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-bar border-t border-border md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
