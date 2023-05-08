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
  } 
  else if (volumeSlider.value < 67) {
    volumeImage.src = 'assets/icons/volume-level-2.svg';
  } 
  else {
    volumeImage.src = 'assets/icons/volume-level-3.svg';
  }

  audio.volume = volumeSlider.value / 100;
});

playButton.addEventListener('click', function(){
  audio.play();

  
  if (hornSelect.value == 'party-horn') {
    jsConfetti.addConfetti();
    jsConfetti();
  }
});
}

window.addEventListener('load', init);

/** 
  function HornChange(event) {
    const selectedHorn = event.target.value;

    if (selectedHorn === "air-horn") {
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    } 
    else if (selectedHorn === "car-horn") {
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    } 
    else if (selectedHorn === "party-horn") {
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
    else{
      image.src = 'assets/images/no-image.png';
      audio.src = '';
    }

  }

  function VolumeChange(event){
    const volumeValue = event.target.value;
    if (volumeValue == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volumeValue < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volumeValue < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }

    audio.volume = volumeValue / 100;
  }

  function PlayButtonClick() {
    audio.play();
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  }

  */

  //window.addEventListener("load", init);


  
