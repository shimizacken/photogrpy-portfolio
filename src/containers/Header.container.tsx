import { useState } from "react";
import { Header } from "../components/Header.view";
import { Homepage } from "../pages/home.page";
import { AboutPage } from "../pages/About.page";
import { NotFound } from "../pages/NotFound.page";

export const HeaderContainer: React.FC = () => {
  const [route, setRoute] = useState(window.location.pathname);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setRoute(path);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    navigate(to);
  };

  // Basic routing logic
  let Page;

  if (route === "/") {
    Page = <Homepage />;
  } else if (route === "/about") {
    Page = <AboutPage />;
  } else {
    Page = <NotFound />;
  }

  return <>{Page}</>;
};
