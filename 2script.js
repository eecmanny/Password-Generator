var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","w","z",];
var uppercaseletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","W","Z",];
var numeric = ["0","1","2","3","4","5","6","7","8","9",];
var sSymbols = [" ", '"', "!", ",", "#", "$", "%", "&", "'", "(", ")","*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", ];
var passwordmin = (8)
var passwordmax = (128)
var userChoiceuppercaseletters = (true);
var userChoicelowercaseLetters = (true);
var userChoicenumeric = (true);
var userChoicesSymbols = (true);


// ""_",']',"[","{","}","\", ","] "^", "`",  "|",  ",", "~"]

function generatePassword() {
  var userChoice = window.confirm("Do you want upcase characters?:");
  var userChoice = window.confirm("Do you want lowercase characters?:");
  var userChoice = window.confirm("Do you want special characters?:");
  var userChoice = window.prompt("How many characters do you want your password to be?"); 
}



var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(event) {
  console.log("#generate")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
