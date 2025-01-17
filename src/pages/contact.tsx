import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  useEffect(() => {
    emailjs.init({
      publicKey: "trJfMx9IiwLMopdGv",
      blockHeadless: true,
      blockList: {
        list: [
          /* INSERT_BLOCKED_EMAILS */
        ],
        watchVariable: "email"
      }
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("sending");
    try {
      await emailjs.send("service_ws19cml", "template_hizmh5i", {
        email: formData.email,
        name: formData.name,
        message: formData.message
      });
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "#FFFFFF",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "'Shippori Antique B1', sans-serif"
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "none",
          border: "none",
          color: "#FFFFFF",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "40px",
          marginTop: "20px"
        }}
      >
        ← Back
      </button>

      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        <div style={{ marginBottom: "20px", marginTop: "100px" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#000000",
              border: "1px solid #333",
              borderRadius: "5px",
              color: "#FFFFFF"
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@example.com"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#000000",
              border: "1px solid #333",
              borderRadius: "5px",
              color: "#FFFFFF"
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="message"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#000000",
              border: "1px solid #333",
              borderRadius: "5px",
              color: "#FFFFFF",
              minHeight: "150px"
            }}
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitStatus === "sending"}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: submitStatus === "sending" ? "#666" : "#FFFFFF",
            color: "#000000",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: submitStatus === "sending" ? "not-allowed" : "pointer"
          }}
        >
          {submitStatus === "sending" ? "Sending..." : "Send"}
        </button>

        {submitStatus === "success" && (
          <p style={{ color: "green", marginTop: "10px" }}>
            Message sent successfully!
          </p>
        )}
        {submitStatus === "error" && (
          <p style={{ color: "red", marginTop: "10px" }}>
            Failed to send message. Please try again.
          </p>
        )}
      </form>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        CONTACT@0-TH.COM
      </div>
    </div>
  );
};

export default Contact;
