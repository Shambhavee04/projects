import React from "react";

function LanguageSelection({ onSelectLanguage }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Select your language</h2>
      <button onClick={() => onSelectLanguage("English")}>English</button>
      <button onClick={() => onSelectLanguage("Hindi")}>Hindi</button>
    </div>
  );
}

export default LanguageSelection;
