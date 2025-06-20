import React from "react";

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => (
  <a className="link" href={href} {...props}>
    {children}
  </a>
);
