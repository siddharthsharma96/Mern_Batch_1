let playerName1 = document.getElementById("name--0");
let playerName2 = document.getElementById("name--1");
let playeScore1 = document.querySelector("#score--0");
let playeScore2 = document.querySelector("#score--1");
let playeCurrentScore1 = document.querySelector("#current--0");
let playeCurrentScore2 = document.querySelector("#current--1");
let dice = document.querySelector(".dice");
let buttonRollDice = document.querySelector(".btn--roll");
let buttonNewGame = document.querySelector(".btn--new");
let buttonHoldGame = document.querySelector(".btn--hold");
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");

let score, currentScore, activePlayer, playing;

playeScore1.textContent = 0;
playeScore2.textContent = 0;
dice.classList.add("hidden");
let init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  playeCurrentScore1.textContent = 0;
  playeCurrentScore2.textContent = 0;
  playeScore1.textContent = 0;
  playeScore2.textContent = 0;
  dice.classList.add("hidden");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
};
init();
let changeUser = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log("active player", activePlayer);
  currentScore = 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};
let rollDice = () => {
  if (playing) {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNumber);
    dice.src = `dice-${randomNumber}.png`;
    dice.classList.remove("hidden");
    if (randomNumber === 1) {
      changeUser();
    } else {
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
};
let hold = () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 30) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
    } else {
      changeUser();
    }
  }
};

buttonRollDice.addEventListener("click", rollDice);
buttonNewGame.addEventListener("click", init);
buttonHoldGame.addEventListener("click", hold);
