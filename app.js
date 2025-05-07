const utterance = new SpeechSynthesisUtterance("Hello Nikhil!");
// Creates a new speech synthesis utterance with the specified text.

speechSynthesis.speak(utterance);
// Speaks the utterance using the browser's speech synthesis API.
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
recognition.onresult = (e) => {
  const transcript = e.results[0][0].transcript;
  console.log("You said:", transcript);
  let displayText = document.getElementById("text");
  displayText.innerHTML = transcript;
};
recognition.start();
