const numberOfSounds = document.querySelectorAll('.butt').length;

// Stores sounds in an array
let buttSelect = document.querySelectorAll('.butt');

buttSelect.forEach(function (butt) {
  butt.addEventListener('click', makeSound);
});

// add EventListener on click
function makeSound(e) {
  const buttClass =
    e.target.parentElement.parentElement.parentElement.classList[1];
  const audio = document.querySelector(`audio.${buttClass}`);

  audio.currentTime = 0;
  audio.play();
}

// Butt Shake on click
// function shake(e) {
//   document.getElementById('butt-1').style.animation = 'shake 0.5s';
// }
