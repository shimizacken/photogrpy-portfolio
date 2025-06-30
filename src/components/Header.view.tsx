import React from "react";

import { Routings } from "../routings";
import { useTheme } from "../hooks/useTheme";

import { NavMenu } from "./NavMenu.view";
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
        <NavMenu />
      </div>
      <div>
        <button id="theme-toggle" className="toggle-button">
          🌞
        </button>
      </div>
    </header>
  );
};
