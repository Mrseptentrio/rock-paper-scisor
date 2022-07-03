
// Here I create a function that holds an array of possble answers
// I then create a variable that will hold the final choice by randomizing
// through the array and picking a different answer everytime
function computerPlay() {
  let choices = ['rock', 'paper', 'scisor'];
  let choice = choices[Math.floor(Math.random() * choices.length)];
}



function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'scisor') {
    return 'rock wins';
}

};
//Prompt the user to input a choice
const playerSelection = prompt('Please make a choice: ').toLowerCase();

const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))
