var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

document
  .getElementsByClassName("img1")[0]
  .setAttribute("src", "images/dice" + num1 + ".png");

document
  .getElementsByClassName("img2")[0]
  .setAttribute("src", "images/dice" + num2 + ".png");

if (num1 > num2) {
  document.getElementsByTagName("h1")[0].innerText = "🚩Player1 Wins!";
} else if (num1 < num2) {
  document.getElementsByTagName("h1")[0].innerText = "Player2 Wins!🚩";
} else {
  document.getElementsByTagName("h1")[0].innerText = "Draw!";
}
