import React from "react";

function SplashScreen({ onContinue }) {
  return (
    <div className="splash-screen" onClick={onContinue}>
      <img src="/assets/logo.png" alt="GramVikas Logo" />
      <h2>Welcome to GramVikas</h2>
      <p>Tap anywhere to continue</p>

      {/* Example tiles with videos */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "30px" }}>
        <div className="tile">
          <h3>Crop Info 1</h3>
          <video src="/assets/demo.mp4" controls width="180" />
        </div>
        <div className="tile">
          <h3>Crop Info 2</h3>
          <video src="/assets/demo.mp4" controls width="180" />
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
