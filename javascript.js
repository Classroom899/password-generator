// Assignment Code
var generateButton = document.querySelector("#generate");

function generatePassword() {
  // Set password length/complexity
  var complexity = document.getElementById("slider").value;

  //Possible password values
  var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+"

  var newPassword = "";

  for (var i = 0; i < complexity; i++) {
    newPassword = values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));

  }


}


// Add prompts of what questions we need for our password



// WHEN prompted for password criteria
// THEN I select which criteria to include in the password



// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters


// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters


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
