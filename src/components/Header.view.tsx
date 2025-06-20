import React from "react";
import { Link } from "./Link.view";

export const Header: React.FC = () => (
  <header
    className="header-title"
    style={{
      display: "flex",
      alignItems: "center",
    }}
  >
    <h1>Zacken Photography</h1>
    <div style={{ marginLeft: "16px" }}>
      <Link href="#">galleries</Link> | <Link href="#">blog</Link> |{" "}
      <Link href="#">about</Link>
    </div>
  </header>
);
