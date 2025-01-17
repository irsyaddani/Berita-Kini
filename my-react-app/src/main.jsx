import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "@fontsource/inter";
import "@fontsource/nunito-sans";
import "@fontsource/poppins";
// import "@fontsource-variable/sora";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
