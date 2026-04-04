import React, { useEffect } from "react";

function ThankYou({ onEnd }) {
  useEffect(() => {
    const timer = setTimeout(onEnd, 10000); // 10 seconds
    return () => clearTimeout(timer);
  }, [onEnd]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Thank You!</h1>
      <p>Your session will restart shortly.</p>
    </div>
  );
}

export default ThankYou;
