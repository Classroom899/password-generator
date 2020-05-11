var confirmPassword = parseInt(prompt("Please enter a password between 8-128 characters"));
var confirmLowercase = confirm("Would you like lowercase characters in your password?");
var confirmUppercase = confirm("Would you like uppercase characters in your password?");
var confirmNumeric = confirm("Would you like numbers in your password?");
var confirmSpecialCharacters = confirm("Would you like special characters in your password?");

console.log(confirmPassword);
console.log(confirmLowercase);

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialcharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];



// If the user likes sushi (confirmPassword === true), we run the following block of code
// Check for "Not a number or NaN" value for confirmPassword
if (confirmPassword < 8 || confirmPassword > 128) {
  alert("Password needs to be between 8 and 128 characters");
} else {
  "Password is fine"
}

if (confirmLowercase === true) {
  alert("Great you have chosen to include lowercase letters");
} else {
  "At least two lowercase letters have been selected"
}

var options = {
  length: confirmPassword,
  lowercase: confirmLowercase,
  uppercase: confirmUppercase,
  numbers: confirmNumeric,
  specialCharacters: confirmSpecialCharacters,

}

//For loop to call a function a set number of times that will start grabbing items in each array, conditionals needed
// Fixed length accessor for my arrays

for (var i = 0; i < uppercaseArray.length; i++) {
  var uppercase = uppercaseArray[i];

}

for (var i = 0; i < lowercaseArray.length; i++) {
  var lowercase = lowercaseArray[i];

}

for (var i = 0; i < numericArray.length; i++) {
  var numeric = numericArray[i];

}

for (var i = 0; i < specialcharactersArray.length; i++) {
  var specialCharacters = specialcharactersArray[i];

}




// Assignment Code
var generateButton = document.querySelector("#generate");

function generatePassword() {
  // Set password length/complexity
  let complexity = document.getElementById("slider").value;

  //Possible password values
  var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+"

  var newPassword = "";

  for (var i = 0; i < complexity; i++) {
    newPassword = values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));

  }

  // Add password to the textbox

  document.getElementById("password").value = newPassword;

  // Add password to previously generate passwords section
  document.getElementById("last-used-passwords").innerHTML += newPassword + "<br /.";






}

// Default length display 
var sliderValue = document.getElementById("slider").value
document.getElementById("length").innerHTML = "Length: 8-128 characters"

// Create a function to set the length based on slider position
document.getElementById("slider").oninput = function () {
  if (document.getElementById("slider").value > 0) {
    document.getElementById("length").innerHTML = "Length " + sliderValue;

  } else {
    document.getElementById("length").innerHTML = "Length: 1";
  }
}


// Add prompts of what questions we need for our password: 

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password







// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters



// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters


// Here we create our prompt and confirm variables which will store user input.


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page






//Copy password to the saved passwords section that have already been used
function savePassword() {
  document.getElementById("saved").select();
  document.execCommand("Copy");
  alert("Password is saved");
}