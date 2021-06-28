var num1 = Math.random();
var num2 = Math.random();
num1 = Math.floor(num1 * 6) + 1;
num2 = Math.floor(num2 * 6) + 1;
var randomDiceImage1 = "Images/dice" + num1 + ".png";
var randomDiceImage2 = "Images/dice" + num2 + ".png";
var image1 = document.querySelector(".right-dice")
var image2 = document.querySelector(".left-dice")
image1.setAttribute("src", randomDiceImage1);
image2.setAttribute("src", randomDiceImage2);
if (num1 > num2) {
    document.querySelector("h1").innerHTML = "Player 1 WINS!"
}
else if (num2 > num1) {
    document.querySelector("h1").innerHTML = "Player 2 WINS!"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}