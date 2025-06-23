import { createRoot } from "react-dom/client";
import { RootRoutes } from "./containers/RootRoutes";

import "./styles/index.scss";

const container = document.getElementById("app");

if (container) {
  const root = createRoot(container);
  root.render(<RootRoutes />);
}
