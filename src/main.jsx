import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ParentComponent from "./components/question 1/ParentComponent.jsx";
import ChildComponent from "./components/question 1/ChildComponent.jsx";
import DateHelper from "./components/DateHelper.jsx";
import Greetings from "./components/Greetings.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <ParentComponent /> --------------- question one */}
    {/* <Greetings /> */}
    <DateHelper />
  </StrictMode>
);
