const comptuterInput1 = 'rock';
const comptuterInput2 = 'scissors';
const comptuterInput3 = 'paper';

let computerChoice = undefined;

function computerPlay() {
    let getNumber = Math.floor(Math.random() * 3)

    switch (getNumber) {
        case 0: computerChoice = comptuterInput1;
            break
        case 1: computerChoice = comptuterInput2;
            break
        case 2: computerChoice = comptuterInput3;
    }
    return computerChoice;
}


function getPlayerSelection() {
    let playerSelection;
    while (true) {
        playerSelection = prompt("Choose rock, paper, or scissors:").toLowerCase();
        if (playerSelection === comptuterInput1 || playerSelection === comptuterInput2 || playerSelection === comptuterInput3) {
            return playerSelection;
        } else {
            alert("No cheating! Please enter rock, paper, or scissors.");
        }
    }
}

function playRound(playerSelection, computerSelection) {

    console.log("Player chose:", playerSelection);
    console.log("Computer chose:", computerSelection);

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        console.log("Player wins!");
    } else {
        console.log("Computer wins!");
    }
}

function game() {

    for (let i = 0; i < 5; i++) {

        const playerSelection = getPlayerSelection();
        const computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);
        // logic if player will want to cancel a game
    }
    // score part
}

game();