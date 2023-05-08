// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const image = document.querySelector("#expose img");
  const audio = document.querySelector("audio");
  const volumeSlider = document.getElementById("volume");
  const volumeImage = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("#expose button");
  const jsConfetti = new JSConfetti();

hornSelect.addEventListener('change', function() {
 
  switch(hornSelect.value) {
    case 'air-horn':
      image.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
      break;
    case 'car-horn':
      image.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
      break;
    case 'party-horn':
      image.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
      break;
    default:
      image.src = 'assets/images/no-image.png';
      audio.src = '';
  }
});
volumeSlider.addEventListener('input', function() {
  if (volumeSlider.value == 0) {
    volumeImage.src = 'assets/icons/volume-level-0.svg';
    playButton.disabled = true;
  } 
  else if (volumeSlider.value < 33) {
    volumeImage.src = 'assets/icons/volume-level-1.svg';
    playButton.disabled = false;
  } 
  else if (volumeSlider.value < 67) {
    volumeImage.src = 'assets/icons/volume-level-2.svg';
    playButton.disabled = false;
  } 
  else {
    volumeImage.src = 'assets/icons/volume-level-3.svg';
    playButton.disabled = false;
  }

  audio.volume = volumeSlider.value / 100;
});

playButton.addEventListener('click', function(){
  audio.play();

  
  if (hornSelect.value == 'party-horn') {
    jsConfetti.addConfetti();
  }
});
}

window.addEventListener('load', init);




  
