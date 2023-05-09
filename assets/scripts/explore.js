// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //do similar to explore 
  const textToSpeak = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const button = document.querySelector("#explore button");
  const faceImage = document.querySelector("#explore img");
  const speech = window.speechSynthesis;
  let voices = [];  // empty array to iterate through the voices I load 

  function loadVoices() {
    voices = speech.getVoices(); //creating a list of voices 
    // one problem i noticed is unable to slelct voice on safari but works on chrome 
    voices.forEach((voice) => {
      const option = document.createElement("option");
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }
  window.speechSynthesis.onvoiceschanged = loadVoices; //used documentation as example

  button.addEventListener("click", () => {
    const selectedVoice = voiceSelect.value;
    const message = new SpeechSynthesisUtterance(textToSpeak.value); //using utterance 
    const voice = voices.find((voice) => voice.name === selectedVoice);
    if (voice) {
      message.voice = voice;
    }
  speechSynthesis.speak(message); //make the smiley speak and open its mouth 
  faceImage.src = "assets/images/smiling-open.png";
  message.onend = () => {
    faceImage.src = "assets/images/smiling.png";
  };
});
}
