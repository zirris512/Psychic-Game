var userText = "";
var textArr = [];
var cpuText = "";
var wins = 0;
var loss = 0;
var guessLeft = 10;

function cpuGuess() {
var characters = " abcdefghijklmnopqrstuvwxyz";
cpuText = characters.charAt(Math.floor((Math.random()*26) + 1));

};
cpuGuess();
console.log(cpuText);

document.onkeyup = function(guess) {
    userText = guess.key;
    textArr.push(userText);
    for (var i = 0; i < textArr.length - 1; i++) {
        var j = textArr[textArr.length - 1];
        console.log(j);
        if (j === textArr[i]) {
            textArr.pop();
            return;
        }
    }        
    console.log(textArr);
    console.log(userText);
    if (userText === cpuText) {
        wins++;
        document.querySelector("#user-wins").innerHTML = wins;
    }
    else {
        if (guessLeft > 0) {
            document.querySelector("#user-guess").innerHTML = textArr.toString();
            guessLeft--;
            document.querySelector("#num-guess").innerHTML = guessLeft;
        }
        else {
            loss++;
            document.querySelector("#user-loss").innerHTML = loss;
            textArr = [];
            cpuGuess();
        }
    }
};