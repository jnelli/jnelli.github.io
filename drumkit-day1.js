function playSound(e){
  //ES6 to create variable for pressed key and then key class
  const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
  const audio = document.querySelector(`.key[data-key="${e.keycode}"]`);
  console.log(audio); //ES6 to create variable for pressed key
  if(!audio) return; //cancels function if no audio w/ pressed key
  audio.currentTime = 0; //Rewinds audio to start each time key is pressed
  audio.play();
  key.classList.add('playing'); //Same thing as jQuery's addClass!
}


function removeTransition(e){
  if (e.propertyName !== "transition") return;
  transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => addEventListener("transitionend", removeTransition));
// => is another ES6 function
window.addEventListener('keydown', playSound);
