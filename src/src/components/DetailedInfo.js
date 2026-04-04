import React from "react";

function DetailedInfo({ onBack }) {
  return (
    <div className="detailed-info" style={{ padding: "20px", textAlign: "center" }}>
      <h1>Detailed Information</h1>

      {/* Grid of tiles */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {/* Tile 1 */}
        <div className="tile" style={tileStyle}>
          <h3>Crop Info 1</h3>
          <video src="/assets/demo.mp4" controls width="180" />
        </div>

        {/* Tile 2 */}
        <div className="tile" style={tileStyle}>
          <h3>Crop Info 2</h3>
          <video src="/assets/demo.mp4" controls width="180" />
        </div>

        {/* Tile 3 */}
        <div className="tile" style={tileStyle}>
          <h3>Crop Info 3</h3>
          <video src="/assets/demo.mp4" controls width="180" />
        </div>

        {/* Tile 4 */}
        <div className="tile" style={tileStyle}>
          <h3>Crop Info 4</h3>
          <video src="/assets/demo.mp4" controls width="180" />
        </div>
      </div>

      {/* Back button */}
      <button
        style={{ marginTop: "30px", padding: "10px 20px", fontSize: "16px", borderRadius: "8px" }}
        onClick={onBack}
      >
        Back
      </button>
    </div>
  );
}

// Shared tile style
const tileStyle = {
  width: "200px",
  height: "250px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px"
};

export default DetailedInfo;
