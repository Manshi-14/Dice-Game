var randomNumber1 =Math.floor(Math.random() * 6) +1;

var randomDiceImage = "./images/dice" + randomNumber1 + ".png"; //give the dice images cource name ./images/dice1.png to 
//./images/dice6.png

var image1 = document.querySelectorAll("img")[0]; //selecting img1
image1.setAttribute("src" , randomDiceImage);

//for dice 2
var randomNumber2 =Math.floor(Math.random() * 6) +1;

var randomDiceImage = "./images/dice" + randomNumber2 + ".png"; //give the dice images cource name ./images/dice1.png to 
//./images/dice6.png

var image2 = document.querySelectorAll("img")[1]; //selecting img1
image2.setAttribute("src" , randomDiceImage);

if (randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML ="🎀Player 1 wins";
}
else if (randomNumber1 < randomNumber2){
	document.querySelector("h1").innerHTML ="Player 2 wins🎀";	
}
else{
	document.querySelector("h1").innerHTML ="Draw!";
}