const warriorChoiceShow = document.querySelector('.warriorChoice')
const aiChoiceShow = document.querySelector('.aiChoice');
const ending = document.querySelector('.ending');
const choices = document.querySelectorAll('button');
const warriorScoreShow = document.querySelector('.warriorScore');
const aiScoreShow = document.querySelector('.aiScore');

let warriorScore = 0;
let aiScore = 0;

let warriorChoice;
let aiChoice;
let result;
let score;
		
choices.forEach(choice => choice.addEventListener('click', (e) => {
  warriorChoice = e.target.id;
  warriorChoiceShow.innerHTML = warriorChoice;
  generateComputerChoice();
  matchResult();
}))

function generateComputerChoice() {
  const compRandomChoice = Math.floor(Math.random() * 3) + 1;

  if (compRandomChoice === 1) {
    aiChoice = 'rock';
  } else if (compRandomChoice === 2) {
    aiChoice = 'paper';
  } else if (compRandomChoice === 3) {
    aiChoice = 'scisor';
  } else {
    aiChoice.innerHTML = 'Woops, something went wrong';
  }
  aiChoiceShow.innerHTML = aiChoice;

}

function matchResult() {
  if (warriorChoice === aiChoice) {
    result = 'it\'s a tie!';
  } else if (warriorChoice === 'rock' && aiChoice === 'scisor') {
    result = 'You win !';
    warriorScore += 1;
  } else if (warriorChoice === 'paper' && aiChoice === 'rock') {
    result = 'You win';
    warriorScore += 1;
  } else if (warriorChoice === 'scisor' && aiChoice === 'paper') {
    result = 'You win';
    warriorScore += 1;
  } else if (warriorChoice === 'scisor' && aiChoice === 'rock') {
    result = 'You lost!';
    aiScore += 1;
  } else if (warriorChoice == 'rock' && aiChoice === 'paper') {
    result = 'You lost!';
    aiScore += 1;
  } else if (warriorChoice === 'paper' && aiChoice === 'scisor') {
    result = 'You lost!';
    aiScore += 1;
  }
  warriorScoreShow.innerHTML = warriorScore;
  aiScoreShow.innerHTML = aiScore;
  ending.innerHTML = result;
  
  
}

