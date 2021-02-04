'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener(
  'click', function() {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess);
  
    // When no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!'

    // When the number is correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // When input is too high
  } else if (guess > secretNumber) {
    if(score > 1){
      document.querySelector('.message').textContent = 'Too high!'
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over!'
      document.querySelector('.score').textContent = 0;
    }
    
    // when input is too low
  } else if (guess < secretNumber) {
    if(score > 1){
      document.querySelector('.message').textContent = 'Too low!'
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over!'
      document.querySelector('.score').textContent = 0;
    }
  }
} );

// To reset

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#000000';
});