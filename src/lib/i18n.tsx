import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { en } from "@/i18n/locales/en";
import { fr } from "@/i18n/locales/fr";

type Locale = "fr" | "en";
type Messages = typeof fr;
type TranslationValue = string | string[] | Record<string, unknown>;

type I18nContextValue = {
  language: Locale;
  setLanguage: (language: Locale) => void;
  t: (key: string) => TranslationValue;
};

const messages: Record<Locale, Messages> = { fr, en };

const I18nContext = createContext<I18nContextValue | null>(null);

function getByPath(source: unknown, path: string): TranslationValue {
  const value = path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, source);

  if (typeof value === "string" || Array.isArray(value) || (value && typeof value === "object")) {
    return value as TranslationValue;
  }

  return path;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Locale>("fr");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "fr" || stored === "en") {
      setLanguageState(stored);
      document.documentElement.lang = stored;
      return;
    }

    document.documentElement.lang = "fr";
  }, []);

  const setLanguage = (next: Locale) => {
    setLanguageState(next);
    localStorage.setItem("lang", next);
    document.documentElement.lang = next;
  };

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key: string) => getByPath(messages[language], key),
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
