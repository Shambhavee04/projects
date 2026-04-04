import React from "react";

function SeekAdvice({ onTimeout }) {
  React.useEffect(() => {
    const timer = setTimeout(onTimeout, 60000); // 1 min inactivity
    return () => clearTimeout(timer);
  }, [onTimeout]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Seek Advice (Voice-Enabled)</h1>
      <p>Ask questions verbally or use text/photo input.</p>
    </div>
  );
}

export default SeekAdvice;
