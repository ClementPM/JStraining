'use strict';

document.querySelector('.check').addEventListener(
  'click', function() {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess);
  
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!'
  }
} );

/*
document.querySelector('.message').textContent = 'try me';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 22
*/