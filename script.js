// Take input from the user via prompt
let playerSelection = prompt('Choose rock, paper, or scissors', '');

// Randomly generate a response from the computer
let computerSelection;

function computerPlay() {
    let computerRandom = (Math.floor(Math.random() * 3));

    if (computerRandom === 1) {
        computerSelection = 'rock';
    } else if (computerRandom === 2) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }
};

// Comapre users answer vs computer and declare winner
function playGame() {
    if (computerSelection == 'rock' && playerSelection == 'scissors') {
        console.log('The computer wins!');
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        console.log('The computer wins!');
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        console.log('The computer wins!');
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        console.log('The computer wins!');
    } else if (computerSelection ==  playerSelection) {
        console.log('It was a draw');
    }
      else {
        console.log('You win!');
    }
};

computerPlay();
playGame();


// Record score until computer or player reaches 5 wins and display winner