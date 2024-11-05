let options = ["rock", "paper", "scissors"];
humanScore = 0;
computerScore = 0;


function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    return prompt("What would you choose?")
}

function updateScore(humanChoise, computerChoise) {
    if (humanChoise == computerChoise) {
        return "draw"
    }
    else if ((humanChoise == "paper" && computerChoise == "rock") || (humanChoise == "scissors" && computerChoise == "paper") || (humanChoise == "rock" && computerChoise == "scissors")) {
        return "human win"
    }
    else {
        return "computer win"
    }
}