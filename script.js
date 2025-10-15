const choices = ["rock", "paper", "scissors"];
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const resultText = document.getElementById("result-text");
const userChoiceEl = document.getElementById("user-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const resetBtn = document.getElementById("reset-btn");

let playerScore = 0;
let computerScore = 0;

// Generate computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Determine the winner
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  userChoiceEl.textContent = `You chose: ${playerChoice}`;
  computerChoiceEl.textContent = `Computer chose: ${computerChoice}`;

  if (playerChoice === computerChoice) {
    resultText.textContent = "😐 It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    resultText.textContent = "🎉 You win this round!";
  } else {
    computerScore++;
    resultText.textContent = "💻 Computer wins this round!";
  }

  updateScore();
}

// Update the score display
function updateScore() {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

// Reset the game
resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  resultText.textContent = "Make your move!";
  userChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";
});

// Add event listeners to each choice button
document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});
