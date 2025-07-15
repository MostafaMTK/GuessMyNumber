'use strict';
let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '😑 There Is No Guess !';
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      document.querySelector('.message').textContent =
        '🥳 Correct Answer ! 😮 New High Score !!';
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      document.querySelector('.message').textContent = '🥳 Correct Answer !';
    }
  } else {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? '😣 Your Guess Is High !'
          : '😣 Your Guess Is Low !';
    } else {
      document.querySelector('body').style.backgroundColor = '#be2929ff';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.message').textContent = '😪 You Lost !';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
