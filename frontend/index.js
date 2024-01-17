import "./styles/reset.css";
import "./styles/styles.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { QuotesProvider } from "./context/quotesContext";
import App from "./components/App";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <QuotesProvider>
    <App />
  </QuotesProvider>
);
