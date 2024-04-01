const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE";
        resultDisplay.classList.remove("greenText", "redText");
    }

    else if (playerChoice == "rock" & computerChoice == "scissor") {
        result = "YOU WIN"
        resultDisplay.classList.add("greenText");
    }
    else if (playerChoice == "paper" & computerChoice == "rock") {
        result = "YOU WIN"
        resultDisplay.classList.add("greenText");
    }
    else if (playerChoice == "scissor" & computerChoice == "paper") {
        result = "YOU WIN"
        resultDisplay.classList.add("greenText");
    }
    else {
        result = "YOU LOSE"
        resultDisplay.classList.add("redText");
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    if (result == "YOU WIN") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;

    }
    else if (result == "YOU LOSE") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
    else {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }





}


