import React from "react";
import { NavLink } from "react-router";

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => (
  <NavLink className="link" to={href} {...props}>
    {children}
  </NavLink>
);
