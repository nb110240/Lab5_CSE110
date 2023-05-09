// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const image = document.querySelector("#expose img");
  const audio = document.querySelector("audio"); // this is causing me error - fixed (audio is not inder expose)
  const volumeSlider = document.getElementById("volume");
  const volumeImage = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("#expose button");
  const jsConfetti = new JSConfetti(); // confetti for pary horn 

hornSelect.addEventListener('change', function() {
 
  switch(hornSelect.value) { // tried with if statements but it wasnt working exactly how I wanted it to 
    // was giving error in part horn (im not srure why - need to figure that out) 
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
//if statement would be easier here than switch 
volumeSlider.addEventListener('input', function() {
  if (volumeSlider.value == 0) {
    volumeImage.src = 'assets/icons/volume-level-0.svg';  //mute button 
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

  audio.volume = volumeSlider.value / 100; //since the elemetns voulme is not out of 100 
});

playButton.addEventListener('click', function(){
  audio.play(); // play the horn audios 

  
  if (hornSelect.value == 'party-horn') {
    jsConfetti.addConfetti(); //add confetti 
  }
});
}

 




  
