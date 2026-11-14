let min = 0
let max = 2

function getComputerChoice(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



function playGame() {
    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
    console.log(`--- Round ${i + 1} ---`);

    function getHumanChoice() {
    return prompt("rock, paper or scissors?")
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase()
    computerChoice = getComputerChoice(min, max)

    switch (computerChoice) {
    case 0:
        computerChoice = "rock"
        break;
    case 1:
        computerChoice = "paper"
        break;
    case 2:
        computerChoice = "scissors"
        break;
}

    if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
        console.log("you lose");
        console.log("computer score:" + ++computerScore);
    }else if (humanChoice == computerChoice) {
        console.log("Its a tie");
    }else{
        console.log("you win");
        console.log("Your score:" + ++humanScore);
}
}
    playRound()
}
    console.log("Your final score is:" + humanScore ,"\ncomputer final score is:" + computerScore);
    
    if (humanScore == computerScore) {
        console.log("the game is tie no winner");
    }else if (humanScore > computerScore) {
        console.log("congrats You win");
    }else {
        console.log("lol did u lose to a computer?");
        
    }
    
}

playGame()