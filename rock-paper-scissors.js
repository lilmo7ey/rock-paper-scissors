let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) return "rock";
  if (randomNumber < 0.66) return "paper";
  return "scissors";
}

function getHumanChoice() {
  let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${capitalize(humanChoice)} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`);
  }
  console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`Round ${i + 1}:`);
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
  } else if (computerScore > humanScore) {
    console.log("The computer wins the game!");
  } else {
    console.log("It's a tie game!");
  }
}

playGame();
