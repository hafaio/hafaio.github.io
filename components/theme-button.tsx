"use client";

import type { ReactElement } from "react";
import { FaAdjust, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../components/theme";

export default function ThemeButton(): ReactElement {
  const { theme, toggleTheme } = useTheme();
  const themeTitle =
    theme === undefined ? "System Theme" : theme ? "Dark Theme" : "Light Theme";
  const themeIcon =
    theme === undefined ? <FaAdjust /> : theme ? <FaMoon /> : <FaSun />;
  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={themeTitle}
      className="p-2 rounded-full ring-teal-400 text-zinc-500 hover:bg-zinc-300 focus:ring-3 dark:text-zinc-400 dark:hover:bg-zinc-700"
    >
      {themeIcon}
    </button>
  );
}
