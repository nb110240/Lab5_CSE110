// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const textToSpeak = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const button = document.querySelector("button");
  const faceImage = document.querySelector("img");
  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();
    voices = speechSynthesis.getVoices();
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
