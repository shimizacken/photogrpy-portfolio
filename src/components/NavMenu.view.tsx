import React from "react";

import { Routings } from "../routings";

import { Link } from "./Link.view";

import "./navMenu.scss";

export const NavMenu: React.FC = () => (
  <nav className="nav-menu">
    <ul>
      <li>
        <Link href={Routings.HOME} title="Home">
          Home
        </Link>
      </li>
      <li>
        <Link href={Routings.GALLERIES} title="Galleries">
          Galleries
        </Link>
      </li>
      <li>
        <Link href={Routings.BLOG} title="Blog">
          Blog
        </Link>
      </li>
      <li>
        <Link href={Routings.ABOUT} title="About">
          About
        </Link>
      </li>
    </ul>
  </nav>
);
