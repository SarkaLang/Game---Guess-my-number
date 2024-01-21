'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number!'

document.querySelector('.number').textContent = 12
document.querySelector('.score').textContent = 1

// input čeká value hodnotu
document.querySelector('.guess').value = 23
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function (){
const guess = Number(document.querySelector('.guess').value)

// když tu není žádné číslo
if (!guess) {
  displayMessage('❌ No number!')
 
  // když uhádne číslo
} else if (guess === secretNumber) {
  displayMessage('✅ Correct number')
  document.querySelector('body').style.backgroundColor = 'green'
  document.querySelector('.number').style.width = '30rem'
  document.querySelector('.number').textContent = secretNumber

  if (score > highScore) {
    highScore = score
    document.querySelector('.highscore').textContent = highScore
  }

} else if (guess !== secretNumber) {
if (score > 1) {
  displayMessage(guess > secretNumber ? 'Too high!' : 'Too low')
  score--
  document.querySelector('.score').textContent = score
  } else {
 displayMessage('You lost the game')
 document.querySelector('.score').textContent = 0
 }
}
})

document.querySelector('.again').addEventListener('click', function() {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1

  displayMessage('Start guessing...')

  document.querySelector('.score').textContent = 20

  document.querySelector('.guess').value = ''

  document.querySelector('.number').textContent = '?'

  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})
