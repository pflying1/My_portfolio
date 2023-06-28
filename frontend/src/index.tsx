import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataTest from "./viewModel/dataTest";
import reportWebVitals from './reportWebVitals';


type FCReactNode = JSX.Element;

function App(): FCReactNode {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DataTest/>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById("root") as HTMLElement;
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
