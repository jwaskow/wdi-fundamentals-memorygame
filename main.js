console.log("JS file is connected to HTML! Woo!")

var cardOne = 'king'
var cardTwo = 'king'
var cardThree = 'queen'
var cardFour = 'queen'

if (cardOne === cardTwo) {
	alert('You found a match!');
}
if (cardThree === cardFour) {
	alert('You found a match!');
}
else {
	alert('Sorry, try again.');
}
//using js to create cards
var createCards = function() {
	var gameBoard = document.getElementById('game-board');
	for (var i=0; i<4; i++) {
		var cardDiv = document.createElement('div');
		cardDiv.className = 'card';
		gameBoard.appendChild(cardDiv);
	}
};
createCards();