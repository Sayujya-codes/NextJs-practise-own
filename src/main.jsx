import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ParentComponent from "./components/ParentComponent.jsx";
import ChildComponent from "./components/ChildComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ParentComponent />
  </StrictMode>
);
