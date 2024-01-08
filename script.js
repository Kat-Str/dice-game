var button = document.querySelector("#button");
var winner = document.querySelector("#winner");
var firstDice = document.querySelector("#first-players-dice");
var secondDice = document.querySelector("#second-players-dice");

var randomNumberOne = "";
var randomNumberTwo = "";

function generateRandomNumbers() {
  randomNumberOne = Math.floor(Math.random() * 6) + 1;
  randomNumberTwo = Math.floor(Math.random() * 6) + 1;
  firstDice.setAttribute("src", `./media/dice${randomNumberOne}.png`);
  secondDice.setAttribute("src", `./media/dice${randomNumberTwo}.png`);
  announceWinner();
}
function announceWinner() {
  if (randomNumberOne > randomNumberTwo) {
    winner.innerHTML = "Player 1 wins!";
  } else if (randomNumberOne < randomNumberTwo) {
    winner.innerHTML = "Player 2 wins!";
  } else {
    winner.innerHTML = "Draw!";
  }
}

button.addEventListener("click", generateRandomNumbers);
