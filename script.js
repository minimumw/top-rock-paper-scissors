// variables
let playerSelection; 
let computerSelection;
let playerScore = 0;
let computerScore = 0;

// query selectors 
const buttons = document.querySelectorAll(".btn");
const resultText = document.querySelector('#results');
const pScoreText = document.querySelector('#player-score');
const cScoreText = document.querySelector('#computer-score');
const buttonDiv = document.querySelector('.buttons');
const retryButton = document.createElement('button');
retryButton.innerHTML = "Play Again";

// update score
cScoreText.innerText = " " + computerScore;
pScoreText.innerText = " " + playerScore;
function updateScore() {
    cScoreText.innerText = " " + computerScore;
    pScoreText.innerText = " " + playerScore;
}

// functions
function computerPlay() {
    let computerRandom = (Math.floor(Math.random() * 3));

    if (computerRandom === 1) {
        computerSelection = 'rock';
    } else if (computerRandom === 2) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }
}

function gameOver() {
    if (playerScore == 5){
        result = "Congratulations, you're the winner!";
        endState();
    } else if (computerScore == 5){
        result = "Sorry, you're a loser."; 
        endState();
    } else return
}

function endState(){
    buttons.forEach(button => button.remove());
    buttonDiv.appendChild(retryButton);
}
    

// event listeners
buttons.forEach(button => button.addEventListener('click' , playRound));
retryButton.addEventListener('click', function(){
    location.reload();
});

// game logic
function playRound(e){
    playerSelection = `${e.originalTarget.innerText.trim().toLowerCase()}`;
    
    computerPlay();

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
    updateScore();
    gameOver();
    resultText.innerText = result;
    
};
