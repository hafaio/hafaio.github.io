"use client";

import {
  createContext,
  type PropsWithChildren,
  type ReactElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

// true for dark, false for light, undefined for follow-system
const ThemeContext = createContext({
  theme: undefined as boolean | undefined,
  toggleTheme: () => {
    // noop
  },
});

export function useTheme(): {
  theme: boolean | undefined;
  toggleTheme: () => void;
} {
  return useContext(ThemeContext);
}

export default function ThemeProvider({
  children,
}: PropsWithChildren): ReactElement {
  const [theme, setTheme] = useState(undefined as boolean | undefined);

  // load the persisted theme and keep in sync with other tabs
  useEffect(() => {
    function listener(): void {
      const stored = window.localStorage.getItem("theme");
      if (stored === "dark") {
        setTheme(true);
      } else if (stored === "light") {
        setTheme(false);
      } else {
        setTheme(undefined);
      }
    }

    listener();
    window.addEventListener("storage", listener);
    return () => {
      window.removeEventListener("storage", listener);
    };
  }, []);

  // reflect the choice onto <html data-theme> and persist it; no attribute
  // means "follow the system preference", which the CSS resolves on its own
  useEffect(() => {
    const { dataset } = document.documentElement;
    if (theme === undefined) {
      delete dataset.theme;
      window.localStorage.removeItem("theme");
    } else {
      const value = theme ? "dark" : "light";
      dataset.theme = value;
      window.localStorage.setItem("theme", value);
    }
  }, [theme]);

  // the first toggle always inverts the current (possibly system) theme; a
  // second toggle returns to following the system preference
  const [toggled, setToggled] = useState(false);
  const toggleTheme = useCallback(() => {
    if (theme === undefined) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(!prefersDark);
    } else if (toggled) {
      setTheme(undefined);
      setToggled(false);
    } else {
      setTheme(!theme);
      setToggled(true);
    }
  }, [theme, toggled]);
  const context = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
}
