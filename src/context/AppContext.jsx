"use client";

import { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { DICTIONARY } from "@/data/translations";

const AppContext = createContext({
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  isRTL: false,
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
  t: (key) => key,
});

export function AppProvider({ children }) {
  const [language, setLanguageState] = useState("en");
  const [theme, setThemeState] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Initialize from localStorage or system preference on mount
  useEffect(() => {
    try {
      const storedLang = localStorage.getItem("nestora_lang");
      if (storedLang === "ar" || storedLang === "en") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLanguageState(storedLang);
        document.documentElement.lang = storedLang;
        document.documentElement.dir = storedLang === "ar" ? "rtl" : "ltr";
      } else {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
      }

      const storedTheme = localStorage.getItem("nestora_theme");
      if (storedTheme === "dark" || storedTheme === "light") {
        setThemeState(storedTheme);
        if (storedTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setThemeState("dark");
        document.documentElement.classList.add("dark");
      }
    } catch {
      // localStorage unavailable or restricted
    }
    setMounted(true);
  }, []);

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("nestora_lang", lang);
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    const next = language === "en" ? "ar" : "en";
    setLanguage(next);
  }, [language, setLanguage]);

  const setTheme = useCallback((newTheme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("nestora_theme", newTheme);
    } catch {}
    if (typeof document !== "undefined") {
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
  }, [theme, setTheme]);

  const t = useCallback(
    (key, params) => {
      const dict = DICTIONARY[language] || DICTIONARY.en;
      let text = dict[key] || DICTIONARY.en[key] || key;
      if (params && typeof params === "object") {
        Object.entries(params).forEach(([k, v]) => {
          text = text.replace(new RegExp(`\\{${k}\\}`, "g"), v);
        });
      }
      return text;
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      isRTL: language === "ar",
      theme,
      setTheme,
      toggleTheme,
      t,
      mounted,
    }),
    [language, setLanguage, toggleLanguage, theme, setTheme, toggleTheme, t, mounted]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
