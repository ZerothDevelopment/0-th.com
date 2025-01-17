import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Services from "../components/services";

const Who = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isMobile = windowWidth <= 768;
  const faqs = [
    { question: "Are you stupid ?", answer: "No\nNo\nMaybe Massimo" },
    { question: "Chicken or Egg?", answer: "scrambled" }
  ];
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

      <div
        style={{
          textAlign: "center",
          marginBottom: "100px",
          marginTop: "100px",
          fontSize: "20px"
        }}
      >
        <p>Need to put something here about bundling services into Packages,</p>
        <p></p>
        <p>Someone should make a component for that...</p>
      </div>
      <h2
        style={{ fontSize: "30px", textAlign: "center", marginBottom: "20px" }}
      >
        Packages
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginBottom: "40px"
        }}
      >
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#111111",
              padding: "20px",
              borderRadius: "10px",
              aspectRatio: "2/3"
            }}
          ></div>
        ))}
      </div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>FAQs</h2>
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              borderBottom: "1px solid #333",
              padding: "15px 0",
              cursor: "pointer"
            }}
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <span>{faq.question}</span>
              <span>{openFaq === index ? "↓" : "→"}</span>
            </div>
            {openFaq === index && faq.answer && (
              <div style={{ marginTop: "10px", whiteSpace: "pre-line" }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Who;
