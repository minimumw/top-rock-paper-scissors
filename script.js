// Take input from the user via prompt
let playerSelection; 

function playerPrompt(){
    playerSelection = prompt('Choose rock, paper, or scissors', '');
    playerSelection = playerSelection.trim().toLowerCase();
};


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
// Record score until computer or player reaches 5 wins and display winner
function game() { 
        let result;
        let playerScore = 0;
        let computerScore = 0;
        
        function playGame () {

            if (computerSelection == 'rock' && playerSelection == 'scissors') {
                computerScore++; 
                result = `You lose, ${computerSelection} beats ${playerSelection}. The score is ${playerScore} to ${computerScore}.`;
            } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
                computerScore++;
                result = `You lose, ${computerSelection} beats ${playerSelection}. The score is ${playerScore} to ${computerScore}.`;
            } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
                computerScore++;
                result = `You lose, ${computerSelection} beats ${playerSelection}. The score is ${playerScore} to ${computerScore}.`;
            } else if (computerSelection == 'paper' && playerSelection == 'rock') {
                computerScore++;
                result = `You lose, ${computerSelection} beats ${playerSelection}. The score is ${playerScore} to ${computerScore}.`;
            } else if (computerSelection ==  playerSelection) {
                result = `You both chose ${computerSelection}. It's a draw. The score is ${playerScore} to ${computerScore}.`;
            } else {
                playerScore++;
                result = `You win, ${playerSelection} beats ${computerSelection}. The score is ${playerScore} to ${computerScore}.`;
            }
        }
        for (let i = 0; i <=4; i++){
            playerPrompt();
            computerPlay();
            playGame();
            console.log(result);
        }   
    };
    
game();