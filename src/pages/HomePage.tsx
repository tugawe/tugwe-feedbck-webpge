
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "40px 60px 0 80px" }}>
        <div style={{ fontSize: 20, fontWeight: 400, color: "#222" }}>Tugawe Feedback</div>
        <a href="/signin" style={{ color: "#1976d2", fontSize: 18, textDecoration: "none", fontWeight: 400 }}>Sign in</a>
      </header>

      {/* Main Content */}
      <main style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 60px 0 80px", marginTop: 60 }}>
        {/* Left: Text and Buttons */}
        <div style={{ flex: 1, maxWidth: 500, marginRight: 200 }}>
          <h1 style={{ fontSize: 35, fontWeight: 400, lineHeight: 1.1, marginBottom: 24, color: "#222" }}>
            Shape better<br />experiences
          </h1>
          <div style={{ fontSize: 15, color: "#555", marginBottom: 40 }}>Eateries, events & products</div>
          <div style={{ display: "flex", gap: 16 }}>
            <button onClick={handleSignup} style={{ background: "#1976d2", color: "#fff", border: "none", borderRadius: 24, padding: "10px 28px", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>Sign up</button>
            <button style={{ background: "#fff", color: "#1976d2", border: "1.5px solid #1976d2", borderRadius: 24, padding: "10px 28px", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>Learn more</button>
          </div>
        </div>

        {/* Right: Images */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <img src="src/assets/food.png" alt="Food with view" style={{ width: 200, height: 350, objectFit: "cover", borderRadius: 8, boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <img src="src/assets/people.png" alt="People with tablet" style={{ width: 160, height: 200, objectFit: "cover", borderRadius: 8, boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }} />
            <img src="src/assets/bag.png" alt="Bag on grass" style={{ width: 160, height: 200, objectFit: "cover", borderRadius: 8, boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;