import React, { useEffect } from "react";
import kishaAvatar from "../assets/kisha-avatar.png"; // import image

function MainMenu({ onNavigate }) {
  // AI avatar message after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Kisha (AI Avatar): How can I help you today?");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-menu" style={{ position: "relative", textAlign: "center", paddingTop: "50px" }}>
      <h1>Main Menu</h1>
      <p>Demo Phone: 123-456-7890</p>

      <div style={{ marginTop: "30px" }}>
        <button onClick={() => onNavigate("detailedInfo")}>Detailed Info</button>
        <button onClick={() => onNavigate("seekAdvice")}>Seek Advice</button>
      </div>

      {/* AI Avatar */}
      <img
        src={kishaAvatar}
        alt="AI Avatar"
        className="avatar"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          position: "absolute",
          bottom: "20px",
          right: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
        }}
      />
    </div>
  );
}

export default MainMenu;
