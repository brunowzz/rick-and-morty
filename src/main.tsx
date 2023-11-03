import React from "react";
import ReactDOM from "react-dom/client";

import RoutesApp from "./routes/routes";
import "./styles/main.sass";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>
);
