function speakText() {
  const utterance = new SpeechSynthesisUtterance("Hello Nikhil!");
  speechSynthesis.speak(utterance);

}

document.getElementById("speakBtn").addEventListener("click", () => {
  const text = document.getElementById("text");
  text.classList.remove("hide");
  text.classList.add("show");
  speakText();
});


// Speaks the utterance using the browser's speech synthesis API.
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
recognition.onresult = (e) => {
  const transcript = e.results[0][0].transcript;
  console.log("You said:", transcript);
  
    // Display the transcript in the HTML element with id "text"
    let displayText = document.getElementById("text");
    displayText.innerHTML = transcript;
};
recognition.start();
