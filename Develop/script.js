// Assignment code here

let passCriteria = {
  characters: 0,
  lowercase: false,
  uppercase: false,
  numbers: false,
  specialChar: false
}

let newPassword = []


// uppercase and lowercase arrays

let uppercaseArray = [...Array(26)];


function uppcase(uc) {
  let y = 65
  for (let i = 0; i < uppercaseArray.length; i++) {
    uppercaseArray[i] = String.fromCharCode(y)
    y++
  }
}



let lowercaseArray = [...Array(26)];


function lowcase(lc) {
  let x = 97
  for (let i = 0; i < lowercaseArray.length; i++) {
    lowercaseArray[i] = String.fromCharCode(x)
    x++
  }
}





// special character array

let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", "<", ">", "?", "/"]




//number array

let numArray = [...Array(10)]
function number(num) {
  for (let i = 0; i < numArray.length; i++) {
    numArray[i] = i
  }
}




// prompt series 
function generatePassword() {
  howLong()
  wantUppercase()
  wantLowercase()
  wantNumbers()
  wantSpecial()
  assemblePassword()
}

function assemblePassword() {
  for (let i = 0; i < passCriteria.characters.length; i++) {
    if (passCriteria.lowercase == "true") {

    }

  }
}


// Prompt functions log -------------------------------------------------------------

function howLong() {
  passCriteria.characters = prompt("How many characters? (8 - 128)", 8)
  console.log(typeof passCriteria.characters)
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
  if (passCriteria.numbers == "true") {
    number(passCriteria.numbers)
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

// Prompt functions log end -------------------------------------------------------









/*if (person != null) {
  document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
}*/

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
