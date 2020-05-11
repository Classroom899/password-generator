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

// Check for "Not a number or NaN" value for confirmPassword to have this added - .isNaN is going to check whether a value is an illegal number (Not-a-Number) and this function returns true if the value equals to be NaN. Otherwise it will return false. W3 schools information. 
if (Number.isNaN(confirmPassword) || (confirmPassword < 8) || (confirmPassword > 128)) {
  alert("Password needs to be between 8 and 128 characters");
  // Refresh the page to start all over again
  location.reload();
} else {
  // Check if at least one password type is selected. Otherwise we are going to have to restart the process all over again
  if (!(confirmLowercase || confirmUppercase || confirmNumeric || confirmSpecialCharacters)) {
    alert("Plase select at least one character type");
    location.reload();
  }
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

// For loop to call a function a set number of times that will start grabbing items in each array, conditionals needed
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
  // let complexity = document.getElementById("slider").value;
  // Changing this up to get rid of slider option and instead use an alert. Slider is overall redundant I believe

  let complexity = confirmPassword;

  //Possible password values
  // Adding in some conditional statments
  // var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+"

  var values = []; // This is setting our variable values to an empty array

  if (confirmLowerCase) values.push(lowercaseArray); // First if statement I want to use and then follow each condition for each variable
  if (confirmUppercase) values.push(uppercaseArray);
  if (confirmNumeric) values.push(numericArray);
  if (confirmSpecialCharacters) values.push(specialcharactersArray);

  console.log(values);
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