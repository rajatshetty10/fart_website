const numberOfSounds = document.querySelectorAll('.butt').length;

// Stores sounds in an array
let buttSelect = document.querySelectorAll('.butt');

// Butt Sound
buttSelect.forEach(function (butt) {
  butt.addEventListener('click', makeSound);
});

// Dark Mode Checkbox
document
  .querySelector('input[type="checkbox"]')
  .addEventListener('change', darkMode);

// add EventListener on click
function makeSound(e) {
  const buttClass =
    e.target.parentElement.parentElement.parentElement.classList[1];
  const audio = document.querySelector(`audio.${buttClass}`);

  audio.currentTime = 0;
  audio.play();
}

// Dark Mode Checkbox
function darkMode() {
  let checkBox = document.querySelector('input[type="checkbox"]').checked;
  if (checkBox) {
    document.querySelector('body').style.background = '#333';
    document.querySelector('body').style.transition = '0.5s ease';
    document.querySelector('.click-instruction').style.color = '#fff';
    document.querySelector('.click-instruction').style.transition = '0.5s ease';
    document.querySelector('header').style.borderBottom = '1px solid #fff';
    document.querySelector('footer').style.borderTop = '1px solid #fff';
  } else {
    document.querySelector('body').style.background = '#fff';
    document.querySelector('body').style.transition = '0.5s ease';
    document.querySelector('.click-instruction').style.color = '#333';
    document.querySelector('.click-instruction').style.transition = '0.5s ease';
  }
}

// Butt Shake on click
// function shake(e) {
//   document.getElementById('butt-1').style.animation = 'shake 0.5s';
// }
