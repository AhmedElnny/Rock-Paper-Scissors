let min = 0
let max = 2
let humanScore = 0
let computerScore = 0
function getComputerChoice(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getHumanChoice() {
    return prompt("rock, paper or scissors?")
}

function playRound(humanChoice, computerChoice) {
    let human = getHumanChoice().toLowerCase()
    let computer = getComputerChoice(min, max)

    switch (computer) {
    case 0:
        computer = "rock"
        break;
    case 1:
        computer = "paper"
        break;
    case 2:
        computer = "scissors"
        break;
}

    if ((human == "rock" && computer == "paper") || (human == "paper" && computer == "scissors") || (human == "scissors" && computer == "rock")) {
        console.log("you lose");
        console.log("computer score:" + ++computerScore);
    }else if (human == computer) {
        console.log("Its a tie");
    }else{
        console.log("you win");
        console.log("Your score:" + ++humanScore);
}
}

function playGame() {
    for (let i = 0; i < 5; i++) {
    console.log(`--- Round ${i + 1} ---`);
    playRound()
}
}

playGame()