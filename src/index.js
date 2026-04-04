const BACKEND_URL = "http://127.0.0.1:5000";  // Flask server

// Start session
async function startSession() {
  const response = await fetch(`${BACKEND_URL}/api/start_session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ session_id: "user123", lang: "hi" })
  });
  const data = await response.json();
  displayMessage("Kisha", data.text_response);

  if (data.audio_url) playAudio(BACKEND_URL + data.audio_url);
}

// Chat
async function sendMessage(message) {
  displayMessage("You", message);

  const response = await fetch(`${BACKEND_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ session_id: "user123", query: message })
  });

  const data = await response.json();
  displayMessage("Kisha", data.text_response);

  if (data.audio_url) playAudio(BACKEND_URL + data.audio_url);
}

function playAudio(url) {
  const audio = new Audio(url);
  audio.play();
}

function displayMessage(sender, text) {
  const messages = document.getElementById("messages");
  const msg = document.createElement("div");
  msg.textContent = `${sender}: ${text}`;
  messages.appendChild(msg);
}
