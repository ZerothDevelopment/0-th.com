// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Who from "./pages/who";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who" element={<Who />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <footer
        style={{
          backgroundColor: "#000000",
          color: "#888888",
          fontFamily: "'Shippori Antique B1', sans-serif",
          fontSize: "14px",
          textAlign: "center",
          padding: "20px"
        }}
      >
        © {new Date().getFullYear()} Zeroth LLC ·{" "}
        <a href="mailto:contact@0-th.com" style={{ color: "#888888" }}>
          contact@0-th.com
        </a>
      </footer>
    </Router>
  );
}

export default App;
