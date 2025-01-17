import React from "react";
import { useNavigate } from "react-router-dom";
import companies from "../assets/Companies.png";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        padding: "20px",
        position: "relative"
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          background: "none",
          border: "none",
          color: "#FFFFFF",
          fontSize: "16px",
          cursor: "pointer",
          fontFamily: "Arial, sans-serif"
        }}
      >
        ← Back
      </button>
      <div
        style={{
          position: "absolute",
          top: "400px"
        }}
      >
        <p style={{ color: "#FFFFFF", marginBottom: "40px" }}> Trusted By </p>
        <img
          src={companies}
          alt="Companies"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Portfolio;
