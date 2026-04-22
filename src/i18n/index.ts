import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { fr } from "./locales/fr";
import { en } from "./locales/en";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    lng: "fr", // SSR + initial client render must match
    fallbackLng: "fr",
    supportedLngs: ["fr", "en"],
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;
