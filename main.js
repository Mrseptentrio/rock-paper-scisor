// Initializing the function that runs the entire game
function game() {

  
// Here I create a function that holds an array of possble answers
// I then create a variable that will hold the final choice by randomizing
// through the array and picking a different answer everytime
 function computerPlay()  {
  let choices = ['rock', 'paper', 'scisor'];
  let choice = choices[Math.floor(Math.random() * 3)];
  return choice;
}
  // prompting the player for an input
const playerSelection = prompt('Please make a choice: ').toLowerCase();
  // Assigning the ComputerPlay function to a variable
const computerSelection = computerPlay();



// printing the choices and results to the console
console.log("User choice: ", playerSelection);
console.log("Computer choice: ", computerSelection);
console.log(playRound(playerSelection, computerSelection))

// This function takes the two players input, process them through
  // a series of conditions to decide whos the winner
  // TODO Rewriting the conditions for better readability and in a more simple/beautiful way
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
  // rejecting all other choices
  if (playerSelection !== 'scisor' || 'rock' || 'paper') {
    return 'Please chose one of three: rock, paper, scisor'
  }

};
    return playRound(playerSelection, computerSelection)









}
// looping through the game 5 times to play multiple rounds
for (let i = 0; i <= 5; i++) {
  game();
}
