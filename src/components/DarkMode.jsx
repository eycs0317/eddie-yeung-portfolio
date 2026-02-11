import React, { useState, useEffect } from "react";
export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      className='p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors'
      aria-label='Toggle dark mode'
    >
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  );
}
