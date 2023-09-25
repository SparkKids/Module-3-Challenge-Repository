// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (!password) { password = ""; }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/* Function generatePassword()
  returns string passwordBuild - The generated password
          undefined if the user hits cancel
  Prompts the user for:
  1. Password Length (valid length >= 8 and <= 128)
  2. Include lowercase characters (Y or N)
  3. Include uppercase characters (Y or N)
  4. Include numeric characters (Y or N)
  5. Include special characters (Y or N)
  Generates a password string based on the user's responses.
*/
function generatePassword() {
  var passwordLength = prompt("How long do you want your password to be?", 15);
  //Validate the users input
  if (!((passwordLength >= 8) && (passwordLength <= 128))) {
    alert("Password Length Must Be A Number Between 8 And 128")
    return
  }
  var answer;
  
  answer = (prompt("Include lowercase characters?", "Y"));
  if (answer) {
    var isLowercase = answer.toUpperCase() == "Y"

  } else { return; }

  answer = (prompt("Include uppercase characters?", "Y"));
  if (answer) {
    var isUppercase = answer.toUpperCase() == "Y"

  } else { return; }

  answer = (prompt("Include numeric characters?", "Y"));
  if (answer) {
    var isNumeric = answer.toUpperCase() == "Y";
  }

  answer = (prompt("Include special characters?", "Y"));
  if (answer) {
    var isSpecial = answer.toUpperCase() == "Y";
  } else { return; }
  //User has to answer Yes to at least one type of characters to include
  if (!(isLowercase || isUppercase || isNumeric || isSpecial)) {
    alert("Must include at least one choice from Upper Case, Lower Case, Numeric and Special Characters");
    return;
  }
  //allowedCharMap will hold a Map of random #'s and ascii characters
  var allowedCharMap = new Map();
  allowedCharMap = loadallowedCharMap(isLowercase, isUppercase, isNumeric, isSpecial);
  const iterator1 = allowedCharMap[Symbol.iterator]();

  var passwordBuild = [];
  var allowedCharacterCount = allowedCharMap.size;
  var randomInt
  for (let index = 0; index < passwordLength; index++) {
    randomInt = Math.floor(Math.random() * (allowedCharMap.size));
   passwordBuild = passwordBuild + allowedCharMap.get(randomInt);
  }

  return passwordBuild
}//End generatePassword()

/*  Function loadallowedCharMap(isLowercase, isUppercase, isNumeric, isSpecial) 
    boolean isLowercase - True = allow Lowercase letters
    boolean isUppercase - True = allow Uppercase letters
    boolean isNumeric - True = allow digits 0 - 9
    boolean isSpecial - True = allow special characters
    return Map allowedCharMap (index, "c"har)
    Based on the password criteria chosen by the user, load a map object with key value
    pairs of sequential #'s and ascii codes for allowed characters */

function loadallowedCharMap(isLowercase, isUppercase, isNumeric, isSpecial) {
  const allowedCharMap = new Map();
  /*Based on the password criteria chosen by the user, load a map object with key value
  pairs of sequential #'s and ascii codes for allowed characters */
  allowedCharMapSize = allowedCharMap.size;
  const lowercaseCharCount = 26; //26 lower case letters
  const lowercaseCharStart = 97; //Lowercase letters 97 - 122
  if (isLowercase) {
    for (let index = 0; index < lowercaseCharCount; index++) {
      allowedCharMap.set(index + allowedCharMapSize, String.fromCharCode(index + lowercaseCharStart));

    }
  }
  const uppercaseCharCount = 26; //26 upper case letters
  const uppercaseCharStart = 65 //Upper case letters 65 - 90
  if (isUppercase) {
    allowedCharMapSize = allowedCharMap.size;
    for (let index = 0; index < uppercaseCharCount; index++) {
      allowedCharMap.set(index + allowedCharMapSize, String.fromCharCode(index + uppercaseCharStart));
    }
  }
  const numericCharCount = 10; //10 numeric characters
  const numericCharStart = 48; //Numeric characters 10 - 57
  if (isNumeric) {
    allowedCharMapSize = allowedCharMap.size;
    for (let index = 0; index < numericCharCount; index++) {
      allowedCharMap.set(index + allowedCharMapSize, String.fromCharCode(index + numericCharStart));
    }
  }

  /*Special characters are not continuous in the ASCII table so they have to be mapped in
  four "Chunks"*/
  const specialCharCount1 = 16; //Special characters 32 - 47 ( !"#$%&'()*+,-./)
  const specialCharStart1 = 32;
  const specialCharCount2 = 7; //Special characters 58 - 64 (:;<=>?@)
  const specialCharStart2 = 58;
  const specialCharCount3 = 6; //Special characters 91 - 96 ([\]^_`)
  const specialCharStart3 = 91;
  const specialCharCount4 = 4; //Special characters 123 - 126 ({|}~)
  const specialCharStart4 = 123;
  if (isSpecial) {
    allowedCharMapSize = allowedCharMap.size;
    for (let index = 0; index < specialCharCount1; index++) {
      //generate " !"#$%&'()*+,-./"
      allowedCharMap.set(index + allowedCharMapSize, String.fromCharCode(index + specialCharStart1));
    }
    allowedCharMapSize = allowedCharMap.size;
    for (let index = 0; index < specialCharCount2; index++) {
      //generate "(:;<=>?@)"
      allowedCharMap.set(index + allowedCharMapSize, String.fromCharCode(index + specialCharStart2));
    }
    allowedCharMapSize = allowedCharMap.size;
    for (let index = 0; index < specialCharCount3; index++) {
      //generate "[\]^_`"
      allowedCharMap.set(index + allowedCharMapSize, String.fromCharCode(index + specialCharStart3));
    }
    allowedCharMapSize = allowedCharMap.size;
    for (let index = 0; index < specialCharCount4; index++) {
      //generate "({|}~)"
      allowedCharMap.set(index + allowedCharMapSize, String.fromCharCode(index + specialCharStart4));
    }
  }


  return allowedCharMap;
}//End loadallowedCharMap(isLowercase, isUppercase, isNumeric, isSpecial)

