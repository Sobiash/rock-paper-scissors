let uScore = 0;
let cScore = 0;
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");

const result = document.querySelector(".result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
};

const game = (user, computer) => {
  if (user === computer) {
    return "draw";
  }
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return 1;
  }

  return 2;
};

const play = () => {
  if (rock) {
    rock.addEventListener("click", () => {
      const computer = getComputerChoice();
      const val = game("rock", computer);
      getOutput(val);
    });
  }
  if (paper) {
    paper.addEventListener("click", () => {
      const computer = getComputerChoice();
      const val = game("paper", computer);
      getOutput(val);
    });
  }
  if (scissors) {
    scissors.addEventListener("click", () => {
      const computer = getComputerChoice();
      const val = game("scissors", computer);
      getOutput(val);
    });
  }
};

const getOutput = val => {
  if (val === 1) {
    uScore++;
    userScore.innerHTML = uScore;
    return (result.innerHTML = "<p>Congratulations! You win.</p>");
  }
  if (val === 2) {
    cScore++;
    computerScore.innerHTML = cScore;
    return (result.innerHTML = "<p>Oops! Computer wins.</p>");
  }
  if (val === "draw") {
    return (result.innerHTML = "<p>It was a draw!</p>");
  }
};

play();

module.exports = { game, getComputerChoice };
