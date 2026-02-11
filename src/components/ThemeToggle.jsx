import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className='col-span-2 sm:col-span-1 bg-white dark:bg-slate-800 rounded-[2rem] p-6 shadow-sm border border-white dark:border-slate-700 flex items-center justify-center'>
      <button
        onClick={() => setIsDark(!isDark)}
        className={`relative w-18 h-10 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-100 ${isDark ? "bg-blue-800" : "bg-gray-300"}`}
        aria-label='Toggle theme'
      >
        <span
          className={`absolute top-2 left-2 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-base ${isDark ? "translate-x-[30px]" : "translate-x-0"}`}
        >
          {isDark ? "🌙" : "☀️"}
        </span>
      </button>
    </div>
  );
}
