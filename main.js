function game() {

  
// Here I create a function that holds an array of possble answers
// I then create a variable that will hold the final choice by randomizing
// through the array and picking a different answer everytime
 function computerPlay()  {
  let choices = ['rock', 'paper', 'scisor'];
  let choice = choices[Math.floor(Math.random() * 3)];
  return choice;
}
const playerSelection = prompt('Please make a choice: ').toLowerCase();
const computerSelection = computerPlay();




console.log("User choice: ", playerSelection);
console.log("Computer choice: ", computerSelection);
console.log(playRound(playerSelection, computerSelection))


function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return 'It\'s a tie';
  }

  if (playerSelection === 'rock') {
    if (computerSelection === 'scisor') {
      return 'GG, rock wins !';
    } else {
      return 'You lost, paper wins';
    }
  }

  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 'GG, paper wins !';
    } else {
      return 'You lost, scisor wins !'
    }
  }

  if (playerSelection === 'scisor') {
    if (computerSelection === 'paper') {
      return 'GG, scisor wins !';
    } else {
      return 'You lost, rock wins';
    }
  }

  if (playerSelection !== 'scisor' || 'rock' || 'paper') {
    return 'Please chose one of three: rock, paper, scisor'
  }

};
    return playRound(playerSelection, computerSelection)









}

for (let i = 0; i <= 5; i++) {
  game();
}


//Prompt the user to input a choice
