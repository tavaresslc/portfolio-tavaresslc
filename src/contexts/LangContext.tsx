import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type TranslationKeys } from "../i18n/translations";

type Lang = "pt" | "en";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: TranslationKeys) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") return saved;
    return navigator.language.startsWith("pt") ? "pt" : "en";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const t = (key: TranslationKeys): string => {
    return translations[lang][key] || key;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang deve ser usado dentro de um LangProvider");
  }
  return context;
}
