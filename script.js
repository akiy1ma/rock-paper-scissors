//TO-DO: add more interactivity (for now as a text). i want to make a meme edition rock paper scissors with people vs ai war theme

let options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const results = document.querySelector(".results")


function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)]
}

const rockButton = document.querySelector("#rock-button");
rockButton.addEventListener("click", () => {
    startBattle("rock");
})

const paperButton = document.querySelector("#paper-button");
paperButton.addEventListener("click", () => {
    startBattle("paper");
})

const scissorsButton = document.querySelector("#scissors-button");
scissorsButton.addEventListener("click", () => {
    startBattle("scissors");
})


function updateScore(humanChoise, computerChoise) {
    if (humanChoise == computerChoise) {
        results.textContent = "Draw"
    }
    else if ((humanChoise === "paper" && computerChoise === "rock") || (humanChoise === "scissors" && computerChoise === "paper") || (humanChoise === "rock" && computerChoise === "scissors")) {
        humanScore += 1;
        if (humanScore + computerScore === 5) {
            checkResult();
        }
        else{
            results.textContent = "Human win"
        }
        
    }
    else {
        computerScore += 1;
        if (humanScore + computerScore === 5) {
            checkResult();
        }
        else{
            results.textContent = "Computer win"
        }
    }
}


function startBattle(humanChoise) {
    return updateScore(humanChoise, getComputerChoice())
}

function checkResult() {
    if (humanScore > computerScore) {
        results.textContent = "humanity won"
    }
    else {
        results.textContent = "humanity lost"
    }
}