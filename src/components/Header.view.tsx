import React from "react";

import { Routings } from "../routings";
import { useTheme } from "../hooks/useTheme";

import { Logo } from "./Logo.view";
import { Link } from "./Link.view";

import "./header.scss";

export const Header: React.FC = () => {
  useTheme();

  return (
    <header className="header">
      <div className="title-container">
        <Link
          href={Routings.HOME}
          className="title-link"
          title="Zacken Photography"
        >
          <Logo />
        </Link>
        <div style={{ marginLeft: "16px" }} className="nav-links-container">
          <Link href={Routings.HOME}>Home</Link> |{" "}
          <Link href={Routings.GALLERIES}>Galleries</Link> |{" "}
          <Link href={Routings.BLOG}>Blog</Link> |{" "}
          <Link href={Routings.ABOUT}>About</Link>
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
