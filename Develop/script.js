
let passCriteria = {
  characters: 0,
  lowercase: false,
  uppercase: false,
  numbers: false,
  specialChar: false
}

let newPassword = []

// initialized arrays

let uppercaseArray = [...Array(26)];
let lowercaseArray = [...Array(26)];
let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", "<", ">", "?", "/"];

function uppcase() {
  let y = 65
  for (let i = 0; i < uppercaseArray.length; i++) {
    uppercaseArray[i] = String.fromCharCode(y)
    y++
  }
}

function lowcase() {
  let x = 97
  for (let i = 0; i < lowercaseArray.length; i++) {
    lowercaseArray[i] = String.fromCharCode(x)
    x++
  }
}

// Function to assemble the password based on chosen criteria

function assemblePassword() {
  for (let i = 0; i < passCriteria.characters; i++) {
    if (passCriteria.lowercase == true) {
      newPassword.push(lowercaseArray[Math.floor(Math.random() * (lowercaseArray.length - 0))])
      i++
    }
    if (passCriteria.uppercase == true && i < passCriteria.characters) {
      newPassword.push(uppercaseArray[Math.floor(Math.random() * (uppercaseArray.length - 0))])
      i++
    }
    if (passCriteria.numbers == true && i < passCriteria.characters) {
      newPassword.push(Math.floor(Math.random() * (0 - 10)))
      i++
    }
    if (passCriteria.specialChar == true && i < passCriteria.characters) {
      newPassword.push(special[Math.floor(Math.random() * (special.length - 0))])
      i++
    }
    i--
  }
}

// Prompt functions  --------------------------------

function howLong() {
  passCriteria.characters = prompt("How many characters? (8 - 128)", 8)
  while (passCriteria.characters < 8 || passCriteria.characters > 128) {
    passCriteria.characters = prompt("Error: Enter Number of Characters between 8  and 128", 8)
  }
}

function wantUppercase() {
  passCriteria.uppercase = confirm("Do you want uppercase letters?")
  if (passCriteria.uppercase == true) {
    uppcase();
  }
}


function wantLowercase() {
  passCriteria.lowercase = confirm("Do you want lowercase letters?");
  if (passCriteria.lowercase == true) {
    lowcase();
  }
}


function wantNumbers() {
  passCriteria.numbers = confirm("Do you want numbers?")
}


function wantSpecial() {
  passCriteria.specialChar = confirm("Do you want special characters?")
}

// Function that calls prompts, assembles password, then returns the completed password -----------------------------------

function generatePassword() {
  newPassword = []
  let passReturn = ""
  howLong()
  wantUppercase()
  wantLowercase()
  wantNumbers()
  wantSpecial()
  assemblePassword()
  passReturn = newPassword.toString()
  passReturn = passReturn.replaceAll(",", "")
  return passReturn
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Main function to Write password to the #password input ---------------------------------
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);
