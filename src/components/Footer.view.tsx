import React from "react";

import "./footer.scss";

export const Footer: React.FC = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Zacken Photography. All rights reserved.</p>
  </footer>
);
