let humanScore = 0;
let computerScore = 0;
let totalChances = 3;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
    }
}



function getHumanChoice() {
    const message = `1. Rock\n2. Paper\n3. Scissors\n\nYou have ${totalChances} chances left!`;
    let choice = Number(prompt(`${message}Select one of the above: `));
    switch (choice){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
    }
}

for (let i = 1; i<=3; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    if (humanChoice == computerChoice){
        humanScore++;
    }
    else {
        computerScore++;
    }
    totalChances--;
}

alert(`You have won ${humanScore} times\nComputer has won ${computerScore} times.`)