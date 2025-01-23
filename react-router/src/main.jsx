import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home.jsx";
import About from "./About.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
