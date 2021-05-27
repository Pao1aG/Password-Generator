// Assignment Code------------------------------------------

var generateBtn = document.querySelector("#generate");

//These are the variables for our characters----------------------
const lowercase = "abcdefghijklmnopqrstuvwxyz"; 
console.log(lowercase); //letters displayed on console
console.log(lowercase.length); // 26 letters

const uppercase = lowercase.toUpperCase();
console.log(uppercase); // Uppercase function worked

const numeric = "0123456789";
console.log(numeric); // Numbers displayed on console

const special = " !'#$%&()*+,-./:;<>=?@[]^`_{}|~" //password chars found at t.ly/lvUc
console.log(special.length); // 31 characters included

//This for loop creates output numbers 8 through 128 in an array []
// Idea from t.ly/96bj
const amount = []
  for (var i = 8; i <= 128; i++) {
    amount.push(i);
  };
console.log(amount); //console displayed numbers 8 - 128.

// Functions for selecting random values in strings--------------
//doesn't work, need to try again
function getRandomUpper (uppercase) {
  const index = Math.floor(Math.random() * uppercase.length);
  return uppercase[index];
}

// Write password to the #password input------------------------

//This whole function is called by the eventlistener below
function writePassword() {

  /*these functions prompt the user to select number of characters and let's them know how many 
  they have chosen with the alert. Syntax found here t.ly/zto5*/
  var characterNumber = prompt("Select number of characters", "(Choose between 8-128 characters)");
  //this parseInt function turns strings into an integer
  characterNumber = parseInt(characterNumber);
  console.log (typeof characterNumber); // this confirms var characterNumber is considered a number
  
  if (characterNumber >= 8 && characterNumber <= 128) {
    alert("You have chosen " + characterNumber + "characters.");
    console.log("User selected a number");
    //insert function that selects corresponsing # of characters
  } else if (characterNumber <= 8 || characterNumber >= 128) {
    console.log("User selected a number out of range");
    alert("You selected a number out of range.");
    var tryAgain = prompt("Please select a number between 8 and 128");
    alert("You have chosen " + tryAgain + " characters.");
    //insert function that selects corresponsing # of characters
  } else if (characterNumber !== Number || characterNumber === String) {
    console.log("User selected a non-numeric value");
    alert("You have chosen a non-numeric value.");
    var tryAgain = prompt("Please select a number between 8 and 128");
    alert("You have chosen " + tryAgain + " characters.");
    //insert function that selects corresponsing # of characters
  } else {
    console.log("User did not select anything");
    var tryAgain = prompt("Please try again", "Select a number between 8 and 128");
    alert("You have chosen " + tryAgain + " characters.");
   //insert function that selects corresponsing # of characters
  };

  var parameters = {};
  //Does user want lowercase?
  parameters.lowercase = confirm("Would you like to include lowercase characters?");
    if(parameters.lowercase === true) {
      console.log("User wants lowercase");
      //insert function here that chooses random characters based on characterNumber
    } else {
      console.log("User does not want lowercase");
    };
  //Does user want uppercase?
  parameters.uppercase = confirm("Would you like to include UPPERcase characters?");
    if(parameters.lowercase === true) {
      console.log("User wants uppercase");
      //insert function here that chooses random characters based on characterNumber
    } else {
      console.log("User does not want uppercase");
    };
  //Does user want special char?
  parameters.special = confirm ("Would you like to include special characters?");
    if(parameters.lowercase === true) {
      console.log("User wants special characters");
      //insert function here that chooses random characters based on characterNumber
    } else {
      console.log("User does not want special characters");
    };

  //Does user want numeric values?
  parameters.numeric = confirm("Would you like to include numeric values?");
    if(parameters.numeric === true) {
      console.log("User wants numeric values");
      //insert function here that chooses random characters based on characterNumber
    } else {
      console.log("User does not want numeric values");
    }
  
  console.log(parameters); // this shows us in the console whether user pressed ok or cancel (true or false)


  /*This below is a function inside variable password. 
  Need to pass the variables containing the characters inside this function. */
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button-------------------------------
// This is calling out the function writePassword
generateBtn.addEventListener("click", writePassword)
