import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";


const CampaignStep3Page: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: "65vh", background: "#fff", width: '80vw' }}>
      <Header />
      <div style={{ display: "flex", flexDirection: "row", width: '100%' }}>
        {/* Left: Back */}
        <div style={{ width: '15vw', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxSizing: 'border-box' }}>
        <button
          style={{ border: "1.5px solid #b3d0f7", background: "#fff", color: "#7bb0f7", borderRadius: "50%", width: 40, height: 68, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 8, cursor: "pointer" }}
          onClick={() => navigate("/campaign-step2")}
        >
          ←
        </button>
        <div style={{ color: "#bbb", fontSize: 18, marginTop: 8 }}>Back</div>
      </div>
      {/* Main Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingTop: 48,minWidth: '50vw',width:'50vw',maxWidth: '50vw', boxSizing: 'border-box' }}>
        {/* <div style={{ fontSize: 24, fontWeight: 500, marginBottom: 32 }}>Restaurant X</div> */}
        {/* Tabs */}
        <div style={{ display: "flex", gap: 32, marginBottom: 32 }}>
          <span style={{ color: "#1976d2", fontWeight: 500, fontSize: 18, cursor: "pointer" }}>New Campaign</span>
          <span style={{ color: "#bbb", fontWeight: 400, fontSize: 18, cursor: "pointer" }}>Old Campaigns</span>
        </div>
        {/* Steps */}
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 32, fontSize: 16, color: "#444" }}>
          <span style={{ color: "#bbb" }}>Who and what?</span>
          <span style={{ fontSize: 18, color: "#bbb" }}>›</span>
          <span style={{ color: "#bbb" }}>Where and when?</span>
          <span style={{ fontSize: 18, color: "#bbb" }}>›</span>
          <span style={{ fontWeight: 500 }}>Preview and pay</span>
        </div>
        {/* Cards */}
        <div style={{ display: "flex", gap: 40, marginBottom: 32 }}>
          <div style={{ width: '20vw', height: '40vh', background: "linear-gradient(to bottom, #eaf2ff 60%, #fff 100%)", borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", boxShadow: "0 2px 16px rgba(0,0,0,0.03)", overflow: 'hidden' }}>
            <img src="offer.png" alt="Offer" style={{ width: '100%', height: '60%', objectFit: 'cover' }} />
            <div style={{ fontSize: 14, color: "#444", margin: '16px 16px 0 16px', textAlign: 'left', minHeight: 60 }}>
              Dear customer's name, here is a 15% discount on any purchase you make this coming Friday, 05/11/2025. Love, Nanna's Pizza.
            </div>
            <div style={{ width: '100%', marginTop: 16 }}>
              <button style={{ width: '100%', border: 'none', background: '#f5f7fa', color: '#444', fontSize: 15, padding: '10px 0', cursor: 'pointer', borderTop: '1px solid #e0e7ef' }}>Yes, I'll be coming</button>
              <button style={{ width: '100%', border: 'none', background: '#f5f7fa', color: '#888', fontSize: 15, padding: '10px 0', cursor: 'pointer', borderTop: '1px solid #e0e7ef' }}>Maybe next time</button>
            </div>
          </div>
          <div style={{ width: '20vw', height: '40vh', background: "linear-gradient(to bottom, #eaf2ff 60%, #fff 100%)", borderRadius: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 16px rgba(0,0,0,0.03)" }}>
            <div style={{ fontSize: 48, fontWeight: 600, color: "#666", marginBottom: 8 }}>1,240</div>
            <div style={{ fontSize: 20, color: "#444", marginBottom: 32 }}>KES</div>
            <div style={{ flex: 1 }} />
            <div style={{ color: "#1976d2", fontSize: 22, cursor: "pointer" }}>›</div>
            <div style={{ color: "#888", fontSize: 15, marginTop: 8 }}>switch</div>
          </div>
        </div>
      </div>
      
      {/* Right: Pay */}
      <div style={{ width: '15vw', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: 32 }}>
        <button
          style={{ border: "1.5px solid #1976d2", background: "#fff", color: "#1976d2", borderRadius: "50%", width: 40, height: 68, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 8, cursor: "pointer" }}
          // onClick={() => {}}
        >
          →
        </button>
        <div style={{ color: "#888", fontSize: 18, marginTop: 8 }}>Pay</div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default CampaignStep3Page;
