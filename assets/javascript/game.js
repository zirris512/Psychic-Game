//Initializing variables
var userText = "";
var textArr = [];
var cpuText = "";
var wins = 0;
var loss = 0;
var guessLeft = 10;

//Function that pulls a random number to guess
function cpuGuess() {
var characters = " abcdefghijklmnopqrstuvwxyz";
cpuText = characters.charAt(Math.floor((Math.random()*26) + 1));
console.log(cpuText);
};
cpuGuess();

//Series of code to run when a key is pressed as a user guess
document.onkeyup = function(guess) {
    userText = guess.key;
    textArr.push(userText);
    //Loop that checks if there are any duplicates in the array
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
    //Checks if guess matches cpu letter and updates wins/losses as necessary
    if (userText === cpuText) {
        wins++;
        document.querySelector("#user-wins").innerHTML = wins;
        alert("You Win! I was thinking of " + cpuText);
        cpuGuess();
        textArr = [];
        guessLeft = 10;
        document.querySelector("#user-guess").innerHTML = textArr.toString();
        document.querySelector("#num-guess").innerHTML = guessLeft;
    }
    else {
        if (guessLeft > 1) {
            document.querySelector("#user-guess").innerHTML = textArr.toString();
            guessLeft--;
            document.querySelector("#num-guess").innerHTML = guessLeft;
        }
        else {
            loss++;
            document.querySelector("#user-loss").innerHTML = loss;
            cpuGuess();
            textArr = [];
            guessLeft = 10;
            document.querySelector("#user-guess").innerHTML = textArr.toString();
            document.querySelector("#num-guess").innerHTML = guessLeft;    
        }
    }
};