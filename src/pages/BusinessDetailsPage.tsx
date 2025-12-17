import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const BusinessDetailsPage: React.FC = () => {
  const [form, setForm] = useState({ name: "", branch: "", phone: "", email: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <div style={{ minHeight: "70vh", display: "flex", background: "#fff" }}>
      {/* Left: Image */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#fff" }}>
        <img
          src="food.png"
          alt="Food with view"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      {/* Right: Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 60px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 24, marginBottom: 40, justifyContent: "center", width: "100%" }}>
          <span style={{ color: "#aaa", fontSize: 22, fontWeight: 400 }}>eatery</span>
        </div>
        {/* Title */}
        <h1 style={{ fontSize: 48, fontWeight: 400, color: "#1976d2", marginBottom: 32, lineHeight: 1.1 }}>
          Business details
        </h1>
        {/* Form */}
        <form onSubmit={handleNext} style={{ width: "100%", maxWidth: 420, marginBottom: 48 }}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="name"
            style={{ width: "100%", fontSize: 18, border: "none", borderBottom: "2px solid #eee", marginBottom: 32, padding: "10px 0", outline: "none", color: "#444", background: "#fff" }}
            autoComplete="off"
          />
          <input
            name="branch"
            value={form.branch}
            onChange={handleChange}
            placeholder="branch"
            style={{ width: "100%", fontSize: 18, border: "none", borderBottom: "2px solid #eee", marginBottom: 32, padding: "10px 0", outline: "none", color: "#444", background: "#fff" }}
            autoComplete="off"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="phone"
            style={{ width: "100%", fontSize: 18, border: "none", borderBottom: "2px solid #eee", marginBottom: 32, padding: "10px 0", outline: "none", color: "#444", background: "#fff" }}
            autoComplete="off"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email"
            style={{ width: "100%", fontSize: 18, border: "none", borderBottom: "2px solid #eee", marginBottom: 32, padding: "10px 0", outline: "none", color: "#444", background: "#fff" }}
            autoComplete="off"
          />
        </form>
        {/* Next Button */}
        <button
          onClick={handleNext}
          style={{ border: "1.5px solid #1976d2", background: "#fff", color: "#1976d2", borderRadius: "50%", width: 40, height: 68      , display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, cursor: "pointer" }}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default BusinessDetailsPage;
