import React, { useState } from "react";

// Import all components
import SplashScreen from "./components/SplashScreen";
import LanguageSelection from "./components/LanguageSelection";
import MainMenu from "./components/MainMenu";
import DetailedInfo from "./components/DetailedInfo";
import SeekAdvice from "./components/SeekAdvice";
import ThankYou from "./components/ThankYou";

// Import CSS
import "./App.css";

function App() {
  const [screen, setScreen] = useState("splash");
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="app-container">
      {/* Render components based on current screen */}
      {screen === "splash" && (
        <SplashScreen onContinue={() => setScreen("language")} />
      )}

      {screen === "language" && (
        <LanguageSelection
          onSelectLanguage={(lang) => {
            setSelectedLanguage(lang);
            setScreen("mainMenu");
          }}
        />
      )}

      {screen === "mainMenu" && (
        <MainMenu
          onNavigate={(destination) => setScreen(destination)}
        />
      )}

      {screen === "detailedInfo" && (
        <DetailedInfo onBack={() => setScreen("mainMenu")} />
      )}

      {screen === "seekAdvice" && (
        <SeekAdvice onEndSession={() => setScreen("thankYou")} />
      )}

      {screen === "thankYou" && (
        <ThankYou onEnd={() => setScreen("splash")} />
      )}
    </div>
  );
}

export default App;
