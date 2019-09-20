var userText = "";
var cpuGuess = "";
var wins = 0;
var loss = 0;
var guessLeft = 0;

function cpuGuess() {
var result = "";
var characters = " abcdefghijklmnopqrstuvwxyz";
result = characters.charAt(Math.floor((Math.random()*26) + 1));
return result;
};


document.onkeyup = function(guess) {
    userText = guess.key;
};

