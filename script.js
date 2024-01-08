var button = document.querySelector("#button");
var winner = document.querySelector("#winner");

var firstDice = document.querySelector("#first-players-dice");
var secondDice = document.querySelector("#second-players-dice");

var playerOne = document.querySelector("#playerOne");
var playerTwo = document.querySelector("#playerTwo");

var audio = document.querySelector("#audio");

var randomNumberOne = "";
var randomNumberTwo = "";

function generateRandomNumbers() {
  audio.play();
  randomNumberOne = Math.floor(Math.random() * 6) + 1;
  randomNumberTwo = Math.floor(Math.random() * 6) + 1;
  firstDice.setAttribute("src", `./media/dice${randomNumberOne}.png`);
  secondDice.setAttribute("src", `./media/dice${randomNumberTwo}.png`);
  announceWinner();
}
function announceWinner() {
  if (randomNumberOne > randomNumberTwo) {
    playerOne.innerHTML = "Player 1 🏆";
    playerTwo.innerHTML = "Player 2";
    winner.innerHTML = "Player 1 wins!";
  } else if (randomNumberOne < randomNumberTwo) {
    playerTwo.innerHTML = "Player 2 🏆";
    playerOne.innerHTML = "Player 1";
    winner.innerHTML = "Player 2 wins!";
  } else {
    playerOne.innerHTML = "Player 1";
    playerTwo.innerHTML = "Player 2";
    winner.innerHTML = "Draw!";
  }
}

button.addEventListener("click", generateRandomNumbers);
