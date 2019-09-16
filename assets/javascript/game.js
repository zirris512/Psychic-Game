var result = "";
var characters = "abcdefghijklmnopqrstuvwxyz";
result += characters.charAt(Math.floor((Math.random()*25) + 1));
var userText = document.getElementById("user-guess");
console.log(result);