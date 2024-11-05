let options = ["rock", "paper", "scissors"];
humanScore = 0;
computerScore = 0;


function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    return prompt("What would you choose?").toLowerCase()
}

function updateScore(computerChoise, humanChoise) {
    if (humanChoise == computerChoise) {
        return "draw"
    }
    else if ((humanChoise === "paper" && computerChoise === "rock") || (humanChoise === "scissors" && computerChoise === "paper") || (humanChoise === "rock" && computerChoise === "scissors")) {
        humanScore += 1;
        return "human win"
    }
    else {
        computerScore += 1;
        return "computer win"
    }
}


function startBattle() {
    return updateScore(getComputerChoice(), getHumanChoice())
}

function startWar () {
    for (let i = 1; i <= 5; i++) {
        startBattle();
    }
    if (humanScore > computerScore) {
        return "humanity won"
    }
    else {
        return "humanity lost"
    }
}

console.log(startWar())

//TO-DO: add more interactivity (for now as a text). i want to make a meme edition rock paper scissors with people vs ai war theme