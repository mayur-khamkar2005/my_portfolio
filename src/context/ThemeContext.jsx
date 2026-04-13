import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(undefined);
const THEME_STORAGE_KEY = "mayur-portfolio-theme";
const VISUAL_MODE_STORAGE_KEY = "mayur-portfolio-visual-mode";
const canUseDOM = typeof window !== "undefined";

function readStoredTheme() {
  if (!canUseDOM) {
    return null;
  }

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
  } catch {
    return null;
  }
}

function readStoredVisualMode() {
  if (!canUseDOM) {
    return null;
  }

  try {
    const storedVisualMode = window.localStorage.getItem(VISUAL_MODE_STORAGE_KEY);
    return storedVisualMode === "clean" || storedVisualMode === "sketch"
      ? storedVisualMode
      : null;
  } catch {
    return null;
  }
}

function getSystemTheme() {
  if (!canUseDOM || typeof window.matchMedia !== "function") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

const getInitialTheme = () => {
  return readStoredTheme() ?? getSystemTheme();
};

const getInitialVisualMode = () => {
  return readStoredVisualMode() ?? "sketch";
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [visualMode, setVisualMode] = useState(getInitialVisualMode);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
    root.dataset.visualMode = visualMode;
    root.style.colorScheme = theme;

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
      window.localStorage.setItem(VISUAL_MODE_STORAGE_KEY, visualMode);
    } catch {
      // Ignore storage errors so toggling still works in restricted browsers.
    }
  }, [theme, visualMode]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const toggleVisualMode = () => {
    setVisualMode((currentVisualMode) =>
      currentVisualMode === "sketch" ? "clean" : "sketch",
    );
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      visualMode,
      toggleVisualMode,
    }),
    [theme, visualMode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside a ThemeProvider.");
  }

  return context;
}
