import React from "react";
import { LuSendHorizontal } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const MorePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: "80vh", background: "#fff", width: '80vw' }}>
      <Header />
      <div style={{ display: "flex", flexDirection: "row", width: '100%' }}>
      {/* Sidebar */}
      <aside style={{ position: 'relative', width: '20vw', padding: "48px 0 0 48px", display: "flex", flexDirection: "column", gap: 32 ,textAlign:'left' }}>
        <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 4 }}>More</div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <a style={{ color: "#1976d2", textDecoration: "none", fontWeight: 500, display: "flex", alignItems: "center", gap: 10, cursor: 'pointer' }}> {/* icon */} <span>account</span></a>
          <a style={{ color: "#444", textDecoration: "none", display: "flex", alignItems: "center", gap: 10, cursor: 'pointer' }} onClick={() => navigate('/dashboard', { state: { section: 'satisfaction' } })}> {/* icon */} <span>report</span></a>
          <a style={{ color: "#444", textDecoration: "none", display: "flex", alignItems: "center", gap: 10, cursor: 'pointer' }}> {/* icon */} <span>apps</span></a>
          <a style={{ color: "#444", textDecoration: "none", display: "flex", alignItems: "center", gap: 10, cursor: 'pointer' }}> {/* icon */} <span>plan</span></a>
        </nav>
        <div style={{ position: 'absolute', bottom: 20 , color: "#444", fontSize: 16, cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>Dashboard</div>
      </aside>
      {/* Main Content */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingTop: 48 , height: '80%', minWidth: '50vw', maxWidth: '50vw', boxSizing: 'border-box' }}>
        <div style={{ width: '50vw', background: "linear-gradient(to bottom, #eaf2ff 0%, #eaf2ff 75%, #fff 100%)", borderRadius: 12, minHeight: 350, boxShadow: "0 2px 16px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", padding: '48px 0 0 0' , height: '70vh'}}>
          <div style={{ width: '90%', display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
            <div style={{ fontSize: 16, color: '#444' }}>admin</div>
            <div style={{ fontSize: 16, color: '#444' }}>owner@restaurant.com</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ border: '1.5px solid #1976d2', color: '#1976d2', background: '#fff', borderRadius: 18, padding: '2px 16px', fontSize: 15, cursor: 'pointer' }}>add</button>
              <button style={{ border: '1.5px solid #e0e7ef', color: '#888', background: '#f5f7fa', borderRadius: 18, padding: '2px 16px', fontSize: 15, cursor: 'pointer' }}>remove</button>
            </div>
          </div>
          <form style={{ width: '100%', borderTop: '1px solid #e0e7ef', padding: '18px 32px 18px 32px', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', left: 0, bottom: 0, borderBottomLeftRadius: 12, borderBottomRightRadius: 12, boxSizing: 'border-box' }} onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="example@email.com" style={{ flex: 1, border: 'none', outline: 'none', fontSize: 16, color: '#444', background: 'transparent' }} />
            <button type="submit" style={{ border: 'none', background: 'none', color: '#bbb', fontSize: 24, marginLeft: 12, cursor: 'pointer', display: 'flex', alignItems: 'center' }}><LuSendHorizontal /></button>
          </form>
        </div>
      </main>
      {/* Right Side */}
      <aside style={{ width: '20vw', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingTop: 48  }}>
        <div style={{ flex: 1 }} />
        <button style={{ border: "1.5px solid #1976d2", background: "#fff", color: "#1976d2",boxSizing: "border-box", borderRadius: "50%", width: 40, height: 68, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, cursor: "pointer", marginBottom: 16 }} onClick={() => navigate('/campaign')}>
          →
        </button>
        <div style={{ color: "#444", fontSize: 18, marginTop: 8 }}>Campaigns</div>
        <div style={{ flex: 1 }} /> 
      </aside>
    </div>
    </div>
  );
};

export default MorePage;
