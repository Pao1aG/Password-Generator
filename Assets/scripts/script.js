// Assignment Code------------------------------------------

var generateBtn = document.querySelector("#generate");

// Write password to the #password input------------------------

//FUNCTION CALLED BY EVENTLISTENER BELOW
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  //VARIABLE FOR SELECTING NUMBER OF CHARACTERS
  //Syntax found on Web Developer Notes at t.ly/zto5 
  var characterNumber = prompt("Select number of characters", "(Choose between 8-128 characters)");
  characterNumber = parseInt(characterNumber); // this parseInt function turns strings into an integer
  console.log (typeof characterNumber); // this confirms var characterNumber is considered a number
  
  //PROMPTS FOR CHOOSING NUMBER OF CHARACTERS
  if (!characterNumber) { //If user presses canceL, it will end function and return to document.
    return;
  }

  if (characterNumber >= 8 && characterNumber <= 128) {
    console.log("User selected " + characterNumber + " characters.");
    alert("You have chosen " + characterNumber + " characters.");
  } else if (characterNumber <= 8 || characterNumber >= 128) {
    console.log("User selected a number out of range");
    alert("You selected a number out of range.");
    //insert function that loops prompt
    var tryAgain = prompt("Please select a number between 8 and 128");
    alert("You have chosen " + tryAgain + " characters.");
  } else if (characterNumber !== Number || characterNumber === String) {
    console.log("User selected a non-numeric value");
    alert("You have chosen a non-numeric value.");
    //insert function that loops prompt
    var tryAgain = prompt("Please select a number between 8 and 128");
    alert("You have chosen " + tryAgain + " characters.");
  } else {
    return;
  };

  //VARIABLES FOR PARAMETERS
  var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
  console.log(lowercase); //letters displayed on console
  console.log(lowercase.length); // 26 letters
  
  var uppercase = lowercase.toUpperCase();
  console.log(uppercase); // Uppercase function worked
  
  var numeric = "0123456789";
  console.log(numeric); // Numbers displayed on console
  
  var special = " !'#$%&()*+,-./:;<>=?@[]^`_{}|~" //password chars found at t.ly/lvUc
  console.log(special); // 31 characters included
  
  //PROMPTS TO CHOOSE PASSWORD CHARACTERS
  var parameters = {};
  var combinedString = "";
  //Does user want lowercase?
  parameters.lowercase = confirm("Would you like to include lowercase characters?");
    if(parameters.lowercase === true) {
      console.log("User wants lowercase");
      
      combinedString = combinedString + lowercase;
      console.log(combinedString);
      
    } else {
      console.log("User does not want lowercase");
    };

  //Does user want uppercase?
  parameters.uppercase = confirm("Would you like to include UPPERcase characters?");
    if(parameters.uppercase === true) {
      console.log("User wants uppercase");
            
      combinedString = combinedString + uppercase;
      console.log(combinedString);
      
    } else {
      console.log("User does not want uppercase");
    };

  //Does user want special char?
  parameters.special = confirm ("Would you like to include special characters?");
    if(parameters.special === true) {
      console.log("User wants special characters");
                  
      combinedString = combinedString + special;
      console.log(combinedString);

    } else {
      console.log("User does not want special characters");
    };

  //Does user want numeric values?
  parameters.numeric = confirm("Would you like to include numeric values?");
    if(parameters.numeric === true) {
      console.log("User wants numeric values");

      combinedString = combinedString + numeric;
      console.log(combinedString);
      
    } else {
      console.log("User does not want special characters");
    };
    
    // this shows us in the console whether user pressed ok or cancel (true or false)
    //for each parameter
    console.log(parameters); 

    //Algorithm for choosing a random character from combinedString
    var arr = new Array(characterNumber);
    console.log(arr); //empty but created array with #of spaces equal to #of characters user chose
    for(var i = 0; i < arr.length; i++ ) {
      var randomValue = Math.floor(Math.random() * combinedString.length); //found at StackOverflow t.ly/49CN
      var randomChar = combinedString[randomValue];
      arr[i] = randomChar;
      console.log("randomValue: " + randomValue + "  |  randomChar: " + randomChar);
    }
    console.log(arr);

    //Converting array to string
    var passwordText = arr.join();
    console.log(passwordText);
    //Diplaying generated password on document id=password
    return passwordText;
  };
  

// Add event listener to generate button-------------------------------
generateBtn.addEventListener("click", writePassword)
