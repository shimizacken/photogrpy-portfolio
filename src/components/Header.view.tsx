import React from "react";
import { Link } from "./Link.view";
import { Routings } from "../routings";

export const Header: React.FC = () => (
  <header
    className="header-title"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <h1>Zacken Photography</h1>
    <div style={{ marginLeft: "16px" }}>
      <Link href={Routings.HOME}>Home</Link> |{" "}
      <Link href={Routings.GALLERIES}>galleries</Link> |{" "}
      <Link href={Routings.BLOG}>blog</Link> |{" "}
      <Link href={Routings.ABOUT}>about</Link>
    </div>
    <div>
      <button id="theme-toggle" className="toggle-button">
        🌞
      </button>
    </div>
  </header>
);
