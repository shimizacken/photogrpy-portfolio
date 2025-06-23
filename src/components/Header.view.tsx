import React, { useEffect } from "react";
import { Link } from "./Link.view";
import { Routings } from "../routings";

import "./header.scss";

export const Header: React.FC = () => {
  const toggleTheme = () => {
    const body = document.body;
    const themeToggleButton = document.getElementById("theme-toggle");
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      if (themeToggleButton) {
        themeToggleButton.textContent = "🌞"; // Sun icon for light theme
      }
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
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

  return (
    <header className="header">
      <div className="title-container">
        <h1>Zacken Photography</h1>
        <div style={{ marginLeft: "16px" }}>
          <Link href={Routings.HOME}>Home</Link> |{" "}
          <Link href={Routings.GALLERIES}>galleries</Link> |{" "}
          <Link href={Routings.BLOG}>blog</Link> |{" "}
          <Link href={Routings.ABOUT}>about</Link>
        </div>
      </div>
      <div>
        <button id="theme-toggle" className="toggle-button">
          🌞
        </button>
      </div>
    </header>
  );
};
