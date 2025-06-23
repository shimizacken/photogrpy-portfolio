import { useEffect } from "react";

export const useTheme = () => {
  const toggleTheme = () => {
    const body = document.body;
    const themeToggleButton = document.getElementById("theme-toggle");

    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      localStorage.setItem("theme", "light");

      if (themeToggleButton) {
        themeToggleButton.textContent = "🌞"; // Sun icon for light theme
      }
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");

      if (themeToggleButton) {
        themeToggleButton.textContent = "🌜"; // Moon icon for dark theme
      }
    }
  };

  useEffect(() => {
    const themeToggleButton = document.getElementById("theme-toggle");

    if (themeToggleButton) {
      themeToggleButton.addEventListener("click", toggleTheme);
    }

    return () => {
      if (themeToggleButton) {
        themeToggleButton.removeEventListener("click", toggleTheme);
      }
    };
  }, []);

  useEffect(() => {
    // Set initial theme based on localStorage or default to light theme
    const savedTheme = localStorage.getItem("theme") || "light";
    const body = document.body;

    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(`${savedTheme}-theme`);

    const themeToggleButton = document.getElementById("theme-toggle");
    if (themeToggleButton) {
      themeToggleButton.textContent = savedTheme === "light" ? "🌞" : "🌜";
    }
  }, []);

  return { toggleTheme };
};
