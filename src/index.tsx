import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

type FCReactNode = JSX.Element;


function Index(): FCReactNode {
  return (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );
};
const rootElement = document.getElementById("root") as HTMLElement;
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Index />);
} else {
  console.error("Root element not found");
}