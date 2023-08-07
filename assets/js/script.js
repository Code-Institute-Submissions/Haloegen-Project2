
let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
let playerImg = document.getElementById("player-select")
let comImg = document.getElementById("computer-select");
let winningScore = 5;

const buttons = document.querySelectorAll(".buttn");
const resetButton = document.getElementById("reset");
const winningScoreSelect = document.getElementById("winning-score");

// This code generates the computers turn
function computerPlay() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/* Creating a function with two parameters, this code then goes through every iteration and decided who won.
It then updates a score, and puts the player and computers moves into modifying the image src property to display the image.
*/
function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;

    if (player === computer) {
        playerImg.src = `assets/images/${player}.png`;
        playerImg.alt = `${player}`;
        comImg.src = `assets/images/${computer}.png`;
        comImg.alt = `${computer}`;
        return "It's a tie!";
    }

    if (
        (player === "rock" && (computer === "scissors" || computer === "lizard")) ||
        (player === "paper" && (computer === "rock" || computer === "spock")) ||
        (player === "scissors" && (computer === "paper" || computer === "lizard")) ||
        (player === "lizard" && (computer === "paper" || computer === "spock")) ||
        (player === "spock" && (computer === "rock" || computer === "scissors"))
    ) {
        playerScore++;
        playerImg.src = `assets/images/${player}.png`;
        playerImg.alt = `${player}`;
        comImg.src = `assets/images/${computer}.png`;
        comImg.alt = `${computer}`;
        if (playerScore === winningScore){
            endGame("Player")
        }
        return `You win! ${player} beats ${computer}.`;
    }

    computerScore++;
    playerImg.src = `assets/images/${player}.png`;
    playerImg.alt = `${player}`;
    comImg.src = `assets/images/${computer}.png`;
    comImg.alt = `${computer}`;
    if (computerScore === winningScore) {
        endGame("Computer")
    }
    return `You lose! ${computer} beats ${player}.`;

}

function endGame(winner) {
    buttons.forEach(button => {
        button.disabled = true;
    });
    winningScoreSelect.disabled = false;
    resetButton.disabled = false;
    alert(`${winner} wins! Game Over.`)
}

function resetGame() {
    playerScore = 0 
    computerScore = 0
    buttons.forEach(button => {
    button.disabled = false;
    });
    winningScoreSelect.disabled = true;
    resetButton.disabled = true;
    updateScore();
}

function handleWinningScoreChange() {
    winningScore = parseInt(winningScoreSelect.value);
    resetGame();
}
// plays the game, and runs through each function

function handleClick(event) {
    let playerSelection = event.target.id;
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    displayResult(playerSelection, computerSelection, result);
    updateScore();
}
//Code displays the moves for a screen reader to explain how and who won.
function displayResult(playerMove, computerMove, result) {
    let playerMoveElement = document.getElementById("player-move");
    let computerMoveElement = document.getElementById("computer-move");
    let resultElement = document.getElementById("result");


    playerMoveElement.textContent = playerMove;
    computerMoveElement.textContent = computerMove;
    resultElement.textContent = result;
}

// updates score board to keep track of win/loss
function updateScore() {
    let playerScoreElement = document.getElementById("player-score");
    let computerScoreElement = document.getElementById("computer-score");

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

// gives the buttons their functionality 

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});

winningScoreSelect.addEventListener("change", handleWinningScoreChange);
resetButton.addEventListener("click", resetGame);
    resetGame();