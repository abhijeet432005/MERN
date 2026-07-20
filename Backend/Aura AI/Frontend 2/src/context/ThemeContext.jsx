import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

const STORAGE_KEY = "aura-theme";
const ThemeContext = createContext(null);

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  // fall back to the OS-level preference on first visit
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

/**
 * Provides `theme` ("light" | "dark") + `toggleTheme` / `setTheme` to the
 * whole app, persists the choice, and keeps the <html> class + the
 * `color-scheme` meta in sync so native form controls/scrollbars match too.
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // stay in sync if the OS theme changes and the user hasn't picked one explicitly
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      if (window.localStorage.getItem(STORAGE_KEY)) return;
      setThemeState(event.matches ? "dark" : "light");
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const setTheme = useCallback((value) => {
    setThemeState(value === "dark" ? "dark" : "light");
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({ theme, isDark: theme === "dark", setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};
