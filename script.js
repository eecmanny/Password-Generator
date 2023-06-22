var lowercaseletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "w", "z",];
var uppercaseletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "W", "Z",];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var sSymbols = [" ", '"', "!", ",", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@",];
var passwordmin = 8;
var passwordmax = 128;


// Assignment Code
var generateBtn = document.querySelector("#generate"); {
  function generatePassword() {

    var temparray = []
    var temppass = []

    var userChoiceuppercaseletters = window.confirm("Do you want upcase characters?:");
    console.log(userChoiceuppercaseletters);
    if (userChoiceuppercaseletters) {
      temparray = temparray.concat(uppercaseletters);
    }
    console.log(uppercaseletters);

    var userChoicelowercaseletters = window.confirm("Do you want lowercase characters?:");
    console.log(userChoicelowercaseletters);
    if (userChoicelowercaseletters) {
      temparray = temparray.concat(lowercaseletters);
    }

    var userChoicenumeric = window.confirm("Do you want numeric characters?:");
    console.log(userChoicenumeric);
    if (userChoicenumeric) {
      temparray = temparray.concat(numeric);
    }

    var userChoicesSymbols = window.confirm("Do you want special characters?:");
    console.log(userChoicesSymbols);
    if (userChoicesSymbols) {
      temparray = temparray.concat(sSymbols);
    }

    console.log(temparray);


    var userChoicepasswordlength = window.parseInt(prompt("How many characters do you want your password to be?"));
    console.log(userChoicepasswordlength);
    if ((passwordmin > userChoicepasswordlength) && (userChoicepasswordlength > passwordmax)) {
      window.alert("acceptble");
      console.log(passwordmin > userChoicepasswordlength) && (userChoicepasswordlength > passwordmax);
    } else if ((passwordmin > userChoicepasswordlength) || (userChoicepasswordlength > passwordmax)) {
      window.alert("not acceptable please choose a range between 8 and 128 characters");
    }

    for (let i = 0; i < userChoicepasswordlength; i++) {
      var randomIndex = Math.floor(Math.random() * temparray.length);
      temppass.push(temparray[randomIndex]);

    }
    console.log(temppass);

    // return passwordText.value;
    return temppass.join("");
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

