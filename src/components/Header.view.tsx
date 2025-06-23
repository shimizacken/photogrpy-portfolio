import React, { use, useEffect } from "react";
import { Link } from "./Link.view";
import { Routings } from "../routings";

import "./header.scss";
import { useTheme } from "../hooks/useTheme";

export const Header: React.FC = () => {
  useTheme();

  return (
    <header className="header">
      <div className="title-container">
        <h1>Zacken Photography</h1>
        <div style={{ marginLeft: "16px" }}>
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
