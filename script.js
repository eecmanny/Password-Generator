var lowercaseletters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","w","z",];
var uppercaseletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","W","Z",];
var numeric = ["0","1","2","3","4","5","6","7","8","9",];
var sSymbols = [" ", '"', "!", ",", "#", "$", "%", "&", "'", "(", ")","*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", ];
var passwordmin = 8;
var passwordmax = 128;
// var userChoiceuppercaseletters = (true);
// var userChoicelowercaseLetters = (true);
// var userChoicenumeric = (true);
// var userChoicesSymbols = (true);

// Assignment Code
var generateBtn = document.querySelector("#generate");{
function generatePassword(userChoicepasswordlength, lowercaseletters, uppercaseletters, numeric, sSymbols) {

      var userChoiceuppercaseletters = window.confirm("Do you want upcase characters?:");
      console.log(userChoiceuppercaseletters);
      if (userChoiceuppercaseletters){
        uppercaseletters += ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","W","Z",];
      }
    
      var userChoicelowercaseletters = window.confirm("Do you want lowercase characters?:");
      console.log(userChoicelowercaseletters);
      if (userChoicelowercaseletters){
        lowercaseletters += ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","w","z",];
      }
    
      var userChoicenumeric = window.confirm("Do you want numeric characters?:");
      console.log(userChoicenumeric);
      if (userChoicenumeric) {
        numeric = ["0","1","2","3","4","5","6","7","8","9",];
      }
    
      var userChoicesSymbols = window.confirm("Do you want special characters?:");
      console.log(userChoicesSymbols);
      if (userChoicesSymbols){
        sSymbols = [" ", '"', "!", ",", "#", "$", "%", "&", "'", "(", ")","*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", ];
      }
    



      var userChoicepasswordlength = window.parseInt(prompt("How many characters do you want your password to be?"));
      console.log(userChoicepasswordlength);
      // if (passwordmin >= userChoicepasswordlength >= passwordmax){
      if ((passwordmin > userChoicepasswordlength) && (userChoicepasswordlength > passwordmax)){
            window.alert("acceptble");
            console.log(passwordmin > userChoicepasswordlength) && (userChoicepasswordlength > passwordmax);
          } else if ((passwordmin > userChoicepasswordlength)||(userChoicepasswordlength > passwordmax)){
          window.alert("not acceptable please choose a range between 8 and 128 characters");
        }

      for (let i = 0; i < userChoicepasswordlength; i++) {
    var randomIndex = Math.floor(Math.random() * uppercaseletters+lowercaseletters+sSymbols+numeric.userChoicepasswordlength);
    passwordText.value += uppercaseletters+lowercaseletters+sSymbols+numeric.userChoicepasswordlength[randomIndex];
    }


  return passwordText.value;
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






// let password = "";
//   password += uppercaseletters[Math.floor(Math.random() * uppercaseletters.length)];
//   password += lowercaseletters[Math.floor(Math.random() * lowercaseletters.length)];
//   password += numeric[Math.floor(Math.random() * numeric.length)];
//   password += sSymbols[Math.floor(Math.random() * sSymbols.length)];

// while (userChoicepasswordlength > password.length){
//   password += allsymbols[Math.floor(Math.random()* allsymbols.length)];
// }

