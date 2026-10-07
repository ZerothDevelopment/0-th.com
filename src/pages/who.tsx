import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Services from "../components/services";

const Who = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isMobile = windowWidth <= 768;
  const backClick = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "#FFFFFF",
        fontFamily: "'Shippori Antique B1', sans-serif",
        minHeight: "100vh",
        padding: "20px",
        overflowY: "auto"
      }}
    >
      <button
        onClick={backClick}
        style={{
          marginBottom: "20px",
          cursor: "pointer",
          backgroundColor: "#000000",
          color: "#FFFFFF",
          border: "none"
        }}
      >
        ← Back
      </button>
      <div
        style={{
          textAlign: "center",
          marginBottom: "100px",
          marginTop: "100px",
          fontSize: "20px"
        }}
      >
        <p>
          We craft bespoke solutions tailored to each client's unique needs,
        </p>
        <p>specializing in work with creators, artists and entrepreneurs</p>
        <p>looking for help executing on their creative vision.</p>
      </div>
      <h2
        style={{ fontSize: "30px", textAlign: "center", marginBottom: "20px" }}
      >
        Services
      </h2>

      <Services isMobile={isMobile} />

      <h2
        style={{ fontSize: "30px", textAlign: "center", marginBottom: "20px", marginTop: "100px" }}
      >
        Team
      </h2>
      <div
        style={{
          textAlign: "center",
          marginBottom: "100px",
          fontSize: "20px"
        }}
      >
        <p>Cameron Cross</p>
        <p>Connor Power</p>
      </div>
    </div>
  );
};
export default Who;
