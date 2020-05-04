// Assignment Code
var generateButton = document.querySelector("#generate");

function generatePassword() {
  // Set password length/complexity
  let complexity = document.getElementById("slider").value;

  //Possible password values
  var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+"

  var newPassword = "";

  for (var i = 0; i <= complexity; i++) {
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
