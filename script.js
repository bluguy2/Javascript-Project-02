const computerInputs = ["rock", "scissors", "paper"];

let computerChoice;

function computerPlay() {
  let getNumber = Math.floor(Math.random() * 3);

  switch (getNumber) {
    case 0:
      computerChoice = computerInputs[0];
      break;
    case 1:
      computerChoice = computerInputs[1];
      break;
    case 2:
      computerChoice = computerInputs[2];
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
      playerSelection === computerInputs[0] ||
      playerSelection === computerInputs[1] ||
      playerSelection === computerInputs[2]
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
    return "player";
  } else {
    console.log("Computer wins!");
    return "computer";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  alert(
    "Welcome to Rock, Paper, Scissors!\n\n" +
      "Game Rules:\n" +
      "1. You will play 5 rounds against the computer.\n" +
      "2. Each round, choose either rock, paper, or scissors.\n" +
      "3. Rock beats scissors, scissors beat paper, and paper beats rock.\n" +
      "4. If both choose the same option, it's a tie.\n\n" +
      "The game will keep track of your score. Good luck!"
  );

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerSelection();
    const computerSelection = computerPlay();

    if (playerSelection === null) {
      alert("Game canceled by the player.");
      break;
    }

    const score = playRound(playerSelection, computerSelection);

    if (score === "player") {
      playerScore++;
    } else if (score === "computer") {
      computerScore++;
    }

    roundsPlayed++;
    alert(`Score: Player ${playerScore} - Computer ${computerScore}`);
    console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
  }

  //Final result
  if (roundsPlayed > 0) {
    alert(`Final Score: Player ${playerScore} - Computer ${computerScore}`);
    console.log(
      `Final Score: Player ${playerScore} - Computer ${computerScore}`
    );
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

game();
