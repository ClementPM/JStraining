'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

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
    document.querySelector('body').style.backgroundColor = '#60b347'
    
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

/*
document.querySelector('.message').textContent = 'try me';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 22
*/