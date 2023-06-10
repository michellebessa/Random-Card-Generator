import "./style.css";
const suit = ["♥", "♠", "♣", "♦"];
const numbers = [
  "A",
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
  "K"
];

export default function randomCard() {
  const randomSuit = suit[Math.floor(Math.random() * suit.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  document.querySelector(".header").innerHTML = randomSuit;
  document.querySelector(".body").innerHTML = randomNumber;
  document.querySelector(".footer").innerHTML = randomSuit;

  if (randomSuit === "♥" || randomSuit === "♦") {
    document.querySelector("#cardcontainer").style.color = "red";
  } else if (randomSuit === "♠" || randomSuit === "♣") {
    document.querySelector("#cardcontainer").style.color = "black";
  }
}

window.onload = function() {
  randomCard();
};
