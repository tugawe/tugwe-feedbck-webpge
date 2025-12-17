import React, { useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const DashboardPage: React.FC = () => {
  const [section, setSection] = useState('trending');
  const navigate = useNavigate();

  // Blue section content for each dashboard section
  const renderBlueSection = () => {
    if (section === 'trending') {
      return (
        <div style={{
          width: '100%',
          height: '70vh',
          background: "linear-gradient(to bottom, #eaf2ff 0%, #eaf2ff 75%, #fff 100%)",
          borderRadius: 12,
          padding: "48px 0 0 0",
          minHeight: 350,
          boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative"
        }}>
          <table style={{ width: "90%", borderCollapse: "collapse", fontSize: 20, color: "#222", marginBottom: 32 }}>
            <tbody>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>1</td>
                <td>Delicious</td>
                <td style={{ textAlign: "right", width: 140 }}>45 mentions</td>
                <td style={{ textAlign: "right", width: 80, color: "#1976d2" }}>↗</td>
                <td style={{ textAlign: "right", width: 60, color: "#1976d2" }}>82%</td>
              </tr>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>2</td>
                <td>Friendly</td>
                <td style={{ textAlign: "right", width: 140 }}>38 mentions</td>
                <td style={{ textAlign: "right", width: 80, color: "#1976d2" }}>↗</td>
                <td style={{ textAlign: "right", width: 60, color: "#1976d2" }}>8%</td>
              </tr>
            </tbody>
          </table>
          {/* Chat input absolutely at the bottom of the blue section */}
          <form
            style={{
              width: "100%",
              borderTop: "1px solid #e0e7ef",
              padding: "18px 32px 18px 32px",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "absolute",
              left: 0,
              bottom: 0,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              boxSizing: "border-box"
            }}
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Type your message..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: 16,
                color: "#444",
                background: "transparent"
              }}
            />
            <button
              type="submit"
              style={{
                border: "none",
                background: "none",
                color: "#bbb",
                fontSize: 24,
                marginLeft: 12,
                cursor: "pointer",
                display: "flex",
                alignItems: "center"
              }}
            >
              <LuSendHorizontal />
            </button>
          </form>
        </div>
      );
    }
    if (section === 'feelings') {
      return (
        <div style={{
          width: '100%',
          height: '70vh',
          background: "linear-gradient(to bottom, #eaf2ff 0%, #eaf2ff 75%, #fff 100%)",
          borderRadius: 12,
          padding: "48px 0 0 0",
          minHeight: 350,
          boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative"
        }}>
          <table style={{ width: "90%", borderCollapse: "collapse", fontSize: 20, color: "#222", marginBottom: 32 }}>
            <tbody>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>1</td>
                <td>Positive</td>
                <td style={{ textAlign: "right", width: 140 }}>45 mentions</td>
                <td style={{ textAlign: "right", width: 60 }}><span style={{ display: 'inline-block', width: 16, height: 16, borderRadius: 4, background: '#fff', border: '1px solid #e0e0e0', marginRight: 8, verticalAlign: 'middle' }}></span>43%</td>
              </tr>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>2</td>
                <td>Negative</td>
                <td style={{ textAlign: "right", width: 140 }}>30 mentions</td>
                <td style={{ textAlign: "right", width: 60 }}><span style={{ display: 'inline-block', width: 16, height: 16, borderRadius: 4, background: '#222', marginRight: 8, verticalAlign: 'middle' }}></span>29%</td>
              </tr>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>3</td>
                <td>Neutral</td>
                <td style={{ textAlign: "right", width: 140 }}>23 mentions</td>
                <td style={{ textAlign: "right", width: 60 }}><span style={{ display: 'inline-block', width: 16, height: 16, borderRadius: 4, background: '#e0e0e0', marginRight: 8, verticalAlign: 'middle' }}></span>22%</td>
              </tr>
            </tbody>
          </table>
          {/* Chat input absolutely at the bottom of the blue section */}
          <form
            style={{
              width: "100%",
              borderTop: "1px solid #e0e7ef",
              padding: "18px 32px 18px 32px",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "absolute",
              left: 0,
              bottom: 0,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              boxSizing: "border-box"
            }}
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="What were customers negative about ?"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: 16,
                color: "#444",
                background: "transparent"
              }}
            />
            <button
              type="submit"
              style={{
                border: "none",
                background: "none",
                color: "#bbb",
                fontSize: 24,
                marginLeft: 12,
                cursor: "pointer",
                display: "flex",
                alignItems: "center"
              }}
            >
              <LuSendHorizontal />
            </button>
          </form>
        </div>
      );
    }
    if (section === 'satisfaction') {
      return (
        <div style={{
          width: '100%',
          height: '70vh',
          background: "linear-gradient(to bottom, #eaf2ff 0%, #eaf2ff 75%, #fff 100%)",
          borderRadius: 12,
          padding: "48px 0 0 0",
          minHeight: 350,
          boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative"
        }}>
          <table style={{ width: "90%", borderCollapse: "collapse", fontSize: 20, color: "#222", marginBottom: 32 }}>
            <tbody>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>1</td>
                <td>Food</td>
                <td style={{ textAlign: "right", width: 140 }}>45 mentions</td>
                <td style={{ textAlign: "center", width: 60 }}>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                </td>
                <td style={{ textAlign: "center", width: 30 }}>4</td>
              </tr>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>2</td>
                <td>Value</td>
                <td style={{ textAlign: "right", width: 140 }}>30 mentions</td>
                <td style={{ textAlign: "center", width: 60 }}>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                </td>
                <td style={{ textAlign: "center", width: 30 }}>3</td>
              </tr>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>3</td>
                <td>Service</td>
                <td style={{ textAlign: "right", width: 140 }}>23 mentions</td>
                <td style={{ textAlign: "center", width: 60 }}>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                </td>
                <td style={{ textAlign: "center", width: 30 }}>3</td>
              </tr>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>4</td>
                <td>Ambience</td>
                <td style={{ textAlign: "right", width: 140 }}>23 mentions</td>
                <td style={{ textAlign: "center", width: 60 }}>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                </td>
                <td style={{ textAlign: "center", width: 30 }}>2</td>
              </tr>
            </tbody>
          </table>
          {/* Chat input absolutely at the bottom of the blue section */}
          <form
            style={{
              width: "100%",
              borderTop: "1px solid #e0e7ef",
              padding: "18px 32px 18px 32px",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "absolute",
              left: 0,
              bottom: 0,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              boxSizing: "border-box"
            }}
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="What suggestions have customers given to improve our ambience ?"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: 16,
                color: "#444",
                background: "transparent"
              }}
            />
            <button
              type="submit"
              style={{
                border: "none",
                background: "none",
                color: "#bbb",
                fontSize: 24,
                marginLeft: 12,
                cursor: "pointer",
                display: "flex",
                alignItems: "center"
              }}
            >
              <LuSendHorizontal />
            </button>
          </form>
        </div>
      );
    }
    if (section === 'staff') {
      return (
        <div style={{
          width: '100%',
          height: '70vh',
          background: "linear-gradient(to bottom, #eaf2ff 0%, #eaf2ff 75%, #fff 100%)",
          borderRadius: 12,
          padding: "48px 0 0 0",
          minHeight: 350,
          boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative"
        }}>
          <table style={{ width: "90%", borderCollapse: "collapse", fontSize: 20, color: "#222", marginBottom: 32 }}>
            <tbody>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>1</td>
                <td>Kevin</td>
                <td style={{ textAlign: "right", width: 140 }}>45 mentions</td>
                <td style={{ textAlign: "center", width: 60 }}>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                </td>
                <td style={{ textAlign: "center", width: 30 }}>4</td>
              </tr>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>2</td>
                <td>Liz</td>
                <td style={{ textAlign: "right", width: 140 }}>30 mentions</td>
                <td style={{ textAlign: "center", width: 60 }}>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                </td>
                <td style={{ textAlign: "center", width: 30 }}>3</td>
              </tr>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>3</td>
                <td>Sasha</td>
                <td style={{ textAlign: "right", width: 140 }}>23 mentions</td>
                <td style={{ textAlign: "center", width: 60 }}>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                </td>
                <td style={{ textAlign: "center", width: 30 }}>3</td>
              </tr>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>4</td>
                <td>Kaz</td>
                <td style={{ textAlign: "right", width: 140 }}>23 mentions</td>
                <td style={{ textAlign: "center", width: 60 }}>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                  <span style={{ color: '#b3b3b3', fontSize: 20 }}>★</span>
                </td>
                <td style={{ textAlign: "center", width: 30 }}>2</td>
              </tr>
            </tbody>
          </table>
          <form
            style={{
              width: "100%",
              borderTop: "1px solid #e0e7ef",
              padding: "18px 32px 18px 32px",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "absolute",
              left: 0,
              bottom: 0,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              boxSizing: "border-box"
            }}
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Why did Kevin rank best ?"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: 16,
                color: "#444",
                background: "transparent"
              }}
            />
            <button
              type="submit"
              style={{
                border: "none",
                background: "none",
                color: "#bbb",
                fontSize: 24,
                marginLeft: 12,
                cursor: "pointer",
                display: "flex",
                alignItems: "center"
              }}
            >
              <LuSendHorizontal />
            </button>
          </form>
        </div>
      );
    }
    if (section === 'clients') {
      return (
        <div style={{
          width: '100%',
          height: '70vh',
          background: "linear-gradient(to bottom, #eaf2ff 0%, #eaf2ff 75%, #fff 100%)",
          borderRadius: 12,
          padding: "48px 0 0 0",
          minHeight: 350,
          boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}>
          <table style={{ width: "90%", borderCollapse: "collapse", fontSize: 20, color: "#222", marginBottom: 32 }}>
            <tbody>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>1</td>
                <td>Casey</td>
                <td style={{ textAlign: "right", width: 140 }}>Ksh 3,200</td>
                <td style={{ textAlign: "center", width: 60, color: '#1976d2' }}>↗</td>
                <td style={{ textAlign: "center", width: 30 }}>8 visits</td>
              </tr>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>2</td>
                <td>Jones</td>
                <td style={{ textAlign: "right", width: 140 }}>Ksh 2,300</td>
                <td style={{ textAlign: "center", width: 60, color: '#1976d2' }}>↗</td>
                <td style={{ textAlign: "center", width: 30 }}>5 visits</td>
              </tr>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>3</td>
                <td>Ivory</td>
                <td style={{ textAlign: "right", width: 140 }}>Ksh 2,000</td>
                <td style={{ textAlign: "center", width: 60, color: '#1976d2' }}>↗</td>
                <td style={{ textAlign: "center", width: 30 }}>4 visits</td>
              </tr>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>4</td>
                <td>Tawal</td>
                <td style={{ textAlign: "right", width: 140 }}>Ksh 1,400</td>
                <td style={{ textAlign: "center", width: 60, color: '#1976d2' }}>↗</td>
                <td style={{ textAlign: "center", width: 30 }}>3 visits</td>
              </tr>
            </tbody>
          </table>
          <form
            style={{
              width: "100%",
              borderTop: "1px solid #e0e7ef",
              padding: "18px 32px 18px 32px",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "absolute",
              left: 0,
              bottom: 0,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              boxSizing: "border-box"
            }}
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Compare returning visitors to non-returning visitors"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: 16,
                color: "#444",
                background: "transparent"
              }}
            />
            <button
              type="submit"
              style={{
                border: "none",
                background: "none",
                color: "#bbb",
                fontSize: 24,
                marginLeft: 12,
                cursor: "pointer",
                display: "flex",
                alignItems: "center"
              }}
            >
              <LuSendHorizontal />
            </button>
          </form>
        </div>
      );
    }
    if (section === 'branches') {
      return (
        <div style={{
          width: '100%',
          height: '70vh',
          background: "linear-gradient(to bottom, #eaf2ff 0%, #eaf2ff 75%, #fff 100%)",
          borderRadius: 12,
          padding: "48px 0 0 0",
          minHeight: 350,
          boxShadow: "0 2px 16px rgba(0,0,0,0.03)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative"
        }}>
          <table style={{ width: "90%", borderCollapse: "collapse", fontSize: 20, color: "#222", marginBottom: 32 }}>
            <tbody>
              <tr style={{ height: 48 }}>
                <td style={{ width: 40, textAlign: "center" }}>1</td>
                <td>Nairobi</td>
                <td style={{ textAlign: "right", width: 140 }}>Ksh 192,200</td>
                <td style={{ textAlign: "center", width: 60, color: '#1976d2' }}>↗</td>
                <td style={{ textAlign: "center", width: 30 }}>30 visits</td>
              </tr>
            </tbody>
          </table>
          <form
            style={{
              width: "100%",
              borderTop: "1px solid #e0e7ef",
              padding: "18px 32px 18px 32px",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "absolute",
              left: 0,
              bottom: 0,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              boxSizing: "border-box"
            }}
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="How fast is the branch growing ?"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: 16,
                color: "#444",
                background: "transparent"
              }}
            />
            <button
              type="submit"
              style={{
                border: "none",
                background: "none",
                color: "#bbb",
                fontSize: 24,
                marginLeft: 12,
                cursor: "pointer",
                display: "flex",
                alignItems: "center"
              }}
            >
              <LuSendHorizontal />
            </button>
          </form>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ minHeight: "80vh", background: "#fff", width: '80vw',margin:"auto" }}>
      <Header />
      <div style={{ display: "flex", flexDirection: "row", width: '100%', margin:"auto" }}>
        {/* Sidebar */}
        <aside style={{ width: '15vw', position: 'relative', padding: 0, paddingTop: 48, paddingLeft: 48,display: "flex", flexDirection: "column", gap: 20, textAlign: 'left', boxSizing: 'border-box' }}>
        <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 4 }}>Dashboard</div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <a
            style={{ color: section === 'trending' ? "#1976d2" : "#444", textDecoration: "none", fontWeight: section === 'trending' ? 500 : 400, display: "flex", alignItems: "center", gap: 10, cursor: 'pointer' }}
            onClick={() => setSection('trending')}
          >
            {/* icon */} <span>trending words</span>
          </a>
          <a
            style={{ color: section === 'feelings' ? "#1976d2" : "#444", textDecoration: "none", fontWeight: section === 'feelings' ? 500 : 400, display: "flex", alignItems: "center", gap: 10, cursor: 'pointer' }}
            onClick={() => setSection('feelings')}
          >
            {/* icon */} <span>customer feelings</span>
          </a>
          <a
            style={{ color: section === 'satisfaction' ? "#1976d2" : "#444", textDecoration: "none", fontWeight: section === 'satisfaction' ? 500 : 400, display: "flex", alignItems: "center", gap: 10, cursor: 'pointer' }}
            onClick={() => setSection('satisfaction')}
          >
            {/* icon */} <span>satisfaction score</span>
          </a>
          <a
            style={{ color: section === 'staff' ? "#1976d2" : "#444", textDecoration: "none", fontWeight: section === 'staff' ? 500 : 400, display: "flex", alignItems: "center", gap: 10, cursor: 'pointer' }}
            onClick={() => setSection('staff')}
          >
            {/* icon */} <span>staff performance</span>
          </a>
          <a
            style={{ color: section === 'clients' ? "#1976d2" : "#444", textDecoration: "none", fontWeight: section === 'clients' ? 500 : 400, display: "flex", alignItems: "center", gap: 10, cursor: 'pointer' }}
            onClick={() => setSection('clients')}
          >
            {/* icon */} <span>our clients</span>
          </a>
          <a
            style={{ color: section === 'branches' ? "#1976d2" : "#444", textDecoration: "none", fontWeight: section === 'branches' ? 500 : 400, display: "flex", alignItems: "center", gap: 10, cursor: 'pointer' }}
            onClick={() => setSection('branches')}
          >
            {/* icon */} <span>branches</span>
          </a>
        </nav>
        <div style={{ marginTop: 40, color: "#1976d2", fontSize: 16, cursor: 'pointer', position: 'absolute', bottom: 20 }} onClick={() => navigate('/more')}>More</div>
        </aside>
        {/* Main Content */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: 0, paddingTop: 48, margin: 0, boxSizing: 'border-box', width: '50vw', minWidth: '50vw', maxWidth: '50vw' }}>
        {renderBlueSection()}
        </main>
        {/* Right Side */}
        <aside style={{ width: '15vw', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: 0, paddingTop: 48, boxSizing: 'border-box' }}>
          <div style={{ flex: 1 }} />
          <button
            style={{ border: "1.5px solid #1976d2", boxSizing: "border-box", background: "#fff", color: "#1976d2", borderRadius: "50%", width: 40, height: 68, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, cursor: "pointer", marginBottom: 16 }}
            onClick={() => navigate("/campaign")}
          >
            →
          </button>
          <div style={{ color: "#444", fontSize: 18, marginTop: 8 }}>Campaigns</div>
          <div style={{ flex: 1 }} /> 
        </aside>
      </div>
    </div>
  );
};

export default DashboardPage;
