import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/business-details");
  };
  return (
    <div style={{ minHeight: "80vh", display: "flex", background: "#fff" }}>
      {/* Left: Image */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#fff" }}>
        <img
          src="src/assets/food.png"
          alt="Food with view"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      {/* Right: Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 60px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 24, marginBottom: 20 }}>
          <button style={{ border: "1.5px solid #1976d2", color: "#1976d2", background: "#fff", borderRadius: 24, padding: "6px 28px", fontSize: 18, fontWeight: 400, outline: "none" }}>eatery</button>
          <button style={{ border: "none", color: "#bbb", background: "#fff", borderRadius: 24, padding: "6px 28px", fontSize: 18, fontWeight: 400, outline: "none" }}>Events</button>
          <button style={{ border: "none", color: "#bbb", background: "#fff", borderRadius: 24, padding: "6px 28px", fontSize: 18, fontWeight: 400, outline: "none" }}>Products</button>
        </div>
        {/* Title */}
        <h1 style={{ fontSize: 32, fontWeight: 400, color: "#1976d2", marginBottom: 32, lineHeight: 1.1 , textAlign: "center" }}>
          Shape better<br />experiences
        </h1>
        {/* Features */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 18, color: "#444", marginBottom: 48 }}>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 24 , textAlign: "left" }}>
            <span style={{ color: "#1976d2", fontSize: 12, marginTop: 2 }}>✔</span>
            <span>Acquire and analyze your customers feedback</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 24 , textAlign: "left" }}>
            <span style={{ color: "#1976d2", fontSize: 12, marginTop: 2 }}>✔</span>
            <span>Access to a 24 hour WhatsApp customer support chatbot</span>
          </li>
          <li style={{ display: "flex", alignItems: "flex-start", gap: 12 , textAlign: "left"}}>
            <span style={{ color: "#1976d2", fontSize: 12, marginTop: 2 }}>✔</span>
            <span>Access to your own pre-order menu and reservation system</span>
          </li>
        </ul>
        {/* Next Button */}
        <button onClick={handleNext} style={{ border: "1.5px solid #1976d2", background: "#fff", color: "#1976d2", borderRadius: "50%", width: 40, height: 68, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, cursor: "pointer" }}>
          →
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
