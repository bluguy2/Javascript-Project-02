const comptuterInputs = ["rock", "scissors", "paper"];

let computerChoice = undefined;

function computerPlay() {
    let getNumber = Math.floor(Math.random() * 3)

    switch (getNumber) {
        case 0: computerChoice = comptuterInputs[0];
            break
        case 1: computerChoice = comptuterInputs[1];
            break
        case 2: computerChoice = comptuterInputs[2];
    }
    return computerChoice;
}


function getPlayerSelection() {
    let playerSelection;
    while (true) {
        playerSelection = prompt("Choose rock, paper, or scissors:");

        if (playerSelection === null) {
            return null;
        }

        playerSelection = playerSelection.toLowerCase();

        if (
            playerSelection === comptuterInputs[0] ||
            playerSelection === comptuterInputs[1] ||
            playerSelection === comptuterInputs[2]
        ) {
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
        return "player"
    } else {
        console.log("Computer wins!");
        return "computer"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0

    for (let i = 0; i < 5; i++) {

        const playerSelection = getPlayerSelection();
        const computerSelection = computerPlay();
        
        if (playerSelection === null) {
            alert("Game canceled by the player.");
            break;
        }
        
        const score = playRound(playerSelection, computerSelection);

        if (score === "player") {
            playerScore++
        }
        else if (score === "computer") {
            computerScore++
        }

        

        roundsPlayed++;
        alert(`Score: Player ${playerScore} - Computer ${computerScore}`);
        console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
    }

    //Final result
    if (roundsPlayed > 0) {
        alert(`Final Score: Player ${playerScore} - Computer ${computerScore}`);
        console.log(`Final Score: Player ${playerScore} - Computer ${computerScore}`);
        if (playerScore > computerScore) {
            alert("Player wins the game!");
            console.log("Player wins the game!");
        } else if (computerScore > playerScore) {
            alert("Computer wins the game!");
            console.log("Computer wins the game!");
        } else {
            alert("It's a tie game!");
            console.log("It's a tie game!");
        }
    } else {
        console.log("No rounds played.");
    }
}

// game();
