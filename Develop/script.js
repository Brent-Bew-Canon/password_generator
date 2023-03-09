
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

function uppcase(uc) {
  let y = 65
  for (let i = 0; i < uppercaseArray.length; i++) {
    uppercaseArray[i] = String.fromCharCode(y)
    y++
  }
}

function lowcase(lc) {
  let x = 97
  for (let i = 0; i < lowercaseArray.length; i++) {
    lowercaseArray[i] = String.fromCharCode(x)
    x++
  }
}

// assemble password function

function assemblePassword() {
  for (let i = 0; i < passCriteria.characters; i++) {
    if (passCriteria.lowercase == "true") {
      newPassword.push(lowercaseArray[Math.floor(Math.random() * (lowercaseArray.length - 0))])
      i++
    }
    if (passCriteria.uppercase == "true" && i < passCriteria.characters) {
      newPassword.push(uppercaseArray[Math.floor(Math.random() * (uppercaseArray.length - 0))])
      i++
    }
    if (passCriteria.numbers == "true" && i < passCriteria.characters) {
      newPassword.push(Math.floor(Math.random() * (0 - 10)))
      i++
    }
    if (passCriteria.specialChar == "true" && i < passCriteria.characters) {
      newPassword.push(special[Math.floor(Math.random() * (special.length - 0))])
      i++
    }
    i--
  }
}

// Prompt functions log --------------------------------

function howLong() {
  passCriteria.characters = prompt("How many characters? (8 - 128)", 8)
  while (passCriteria.characters < 8 || passCriteria.characters > 128) {
    passCriteria.characters = prompt("Error: Enter Number of Characters between 8  and 128", 8)
  }
}

function wantUppercase() {
  let upper = prompt("Do you want uppercase letters? True/False")
  passCriteria.uppercase = upper.trim(upper.toLowerCase)
  while (passCriteria.uppercase !== "true" && passCriteria.uppercase !== "false") {
    upper = prompt("Error, Please enter True or False: Do you want uppercase letters? True/False")
    passCriteria.uppercase = upper
  }
  if (passCriteria.uppercase == "true") {
    uppcase(passCriteria.uppercase)
  }
}


function wantLowercase() {
  let lower = prompt("Do you want lowercase letters? True/False");
  passCriteria.lowercase = lower.trim(lower.toLowerCase)
  while (passCriteria.lowercase !== "true" && passCriteria.lowercase !== "false") {
    lower = prompt("Error, Please enter True or False: Do you want lowercase letters? True/False")
    passCriteria.lowercase = lower.trim(lower.toLowerCase)
  }
  if (passCriteria.lowercase == "true") {
    lowcase(passCriteria.lowercase)
  }
}


function wantNumbers() {
  let number = prompt("Do you want numbers? True/False")
  passCriteria.numbers = number.trim(number.toLowerCase)
  while (passCriteria.numbers !== "true" && passCriteria.numbers !== "false") {
    number = prompt("Error, Please enter True or False: Do you want numbers? True/False")
    passCriteria.numbers = number.trim(number.toLowerCase)
  }
}


function wantSpecial() {
  let special = prompt("Do you want special characters? True/False")
  passCriteria.specialChar = special.trim(special.toLowerCase)
  while (passCriteria.specialChar !== "true" && passCriteria.specialChar !== "false") {
    special = prompt("Error, Please enter True or False: Do you want special characters? True/False")
    passCriteria.specialChar = special.trim(special.toLowerCase)
  }
}

// main function -----------------------------------

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

// Write password to the #password input ---------------------------------
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
