// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const textToSpeak = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const button = document.querySelector("#explore button");
  const faceImage = document.querySelector("#explore img");
  const speech = window.speechSynthesis;
  let voices = [];

  function loadVoices() {
    voices = speech.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement("option");
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }
  window.speechSynthesis.onvoiceschanged = loadVoices;

  button.addEventListener("click", () => {
    const selectedVoice = voiceSelect.value;
    const message = new SpeechSynthesisUtterance(textToSpeak.value);
    const voice = voices.find((voice) => voice.name === selectedVoice);
    if (voice) {
      message.voice = voice;
    }
    speechSynthesis.speak(message);
  faceImage.src = "assets/images/smiling-open.png";
  message.onend = () => {
    faceImage.src = "assets/images/smiling.png";
  };
});
}
