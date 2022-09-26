import "bootstrap";
import "./style.css";

window.onload = function() {
  const suits = ["spades", "clubs", "hearts", "diamonds"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  function getRandomNumbers(array) {
    return Math.floor(Math.random() * array.length);
  }

  let cards = document.querySelector(".card");
  let numberCards = document.querySelector(".number");

  cards.classList.add(suits[getRandomNumbers(suits)]);
  numberCards.innerHTML = values[getRandomNumbers(values)];
};
