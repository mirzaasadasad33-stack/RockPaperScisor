alert("To check details open dev tools");
function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissor:");
  return choice.trim().toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "tie";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissor") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissor" && computerChoice === "paper")
    ) {
      return "human";
    } else {
      return "computer";
    }
  }

  // Play 5 rounds
  for (let i = 1; i <= 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(`Round ${i}`);
    console.log("Human:", humanChoice);
    console.log("Computer:", computerChoice);

    const result = playRound(humanChoice, computerChoice);

    if (result === "human") {
      humanScore++;
      console.log("You win this round!");
    } else if (result === "computer") {
      computerScore++;
      console.log("Computer wins this round!");
    } else {
      console.log("It's a tie!");
    }

    console.log(`Score → You: ${humanScore} | Computer: ${computerScore}`);
    console.log("-------------------------");
  }

  // Final winner
  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");
  } else {
    console.log("🤝 The game is a tie!");
  }
}

// Start the game
playGame();
