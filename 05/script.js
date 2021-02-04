'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message
};

document.querySelector('.check').addEventListener(
  'click', function() {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess);
  
    // When no input
  if (!guess) {
    displayMessage('No Number!')
    // document.querySelector('.message').textContent = 'No number!'

    // When the number is correct
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');
    // document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if(score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if(score > 1){
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game over!')
      // document.querySelector('.message').textContent = 'Game over!'
      document.querySelector('.score').textContent = 0;
    }
  }
});
  
    // when input is too low
  // } else if (guess < secretNumber) {
  //   if(score > 1){
  //     document.querySelector('.message').textContent = 'Too low!'
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Game over!'
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

// To reset

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...')
  // document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#000000';
});