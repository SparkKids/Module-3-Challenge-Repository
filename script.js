// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("writePassword()")
  /* loadAllowedCharactersMap(false, false, false, true);
  return; */

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  console.log("generatePassword()");
  var passwordLength = prompt("How long do you want your password to be?", 15);
  //Validate the users input
  if (!((passwordLength >= 8) && (passwordLength <= 128))) {
    alert("Password Length Must Be A Number Between 8 And 128")
    return
  }
  var isLowercase = (prompt("Include lowercase characters?", "Y").toUpperCase() == "Y");
  console.log("Lowercase answer = " + isLowercase);

  var isUppercase = (prompt("Include uppercase characters?", "Y").toUpperCase() == "Y");
  console.log("Uppercase answer = " + isUppercase);

  var isNumeric = (prompt("Include numeric characters?", "Y").toUpperCase() == "Y");
  console.log("Numeric answer = " + isNumeric);

  var isSpecial = (prompt("Include special characters?", "Y").toUpperCase() == "Y");
  console.log("Special character answer = " + isSpecial);
  if (!(isLowercase || isUppercase || isNumeric || isSpecial)) {
    alert("Must include at least one from Upper Case, Lower Case, Numeric and Special Characters");
    return;
  }
  var allowedCharactersMap = new Map();
  allowedCharactersMap = loadAllowedCharactersMap(isLowercase, isUppercase, isNumeric, isSpecial);
  const iterator1 = allowedCharactersMap[Symbol.iterator]();

  for (const item of iterator1) {
    console.log(item);
  }
  var passwordBuild = [];
  var allowedCharacterCount = allowedCharactersMap.size;
  for (let index = 0; index < passwordLength; index++) {
      rand = Math.round(Math.random() * allowedCharacterCount);
      console.log("Rand = " + rand);
    }


  /* for (var i = 0; i<passwordLength; i++) {
    var passwordChar = 'a'
    passwordBuild = passwordBuild + passwordChar;
  } */
  return passwordBuild
}//End generatePassword()

// function loadAllowedCharactersMap(isLowercase, isUppercase, isNumeric, isSpecial) {
function loadAllowedCharactersMap(isLowercase, isUppercase, isNumeric, isSpecial) {
  const allowedCharactersMap = new Map();
  console.log("Starting Map size: " + allowedCharactersMap.size);
  /*Based on the password criteria chosen by the user, load a map object with key value
  pairs of sequential #'s and ascii codes for allowed characters */
  allowedCharactersMapSize = allowedCharactersMap.size;
  const lowercaseCharCount = 26; //26 lower case letters
  if (isLowercase) {
    for (let index = 0; index < lowercaseCharCount; index++) {
      allowedCharactersMap.set(index + allowedCharactersMapSize, index + 97);

    }
  }
  const uppercaseCharCount = 26; //26 upper case letters
  if (isUppercase) {
    allowedCharactersMapSize = allowedCharactersMap.size;
    for (let index = 0; index < uppercaseCharCount; index++) {
      allowedCharactersMap.set(index + allowedCharactersMapSize, index + 65);
    }
  }
  const numericCharCount = 10; //10 numeric characters
  if (isNumeric) {
    allowedCharactersMapSize = allowedCharactersMap.size;
    for (let index = 0; index < numericCharCount; index++) {
      allowedCharactersMap.set(index + allowedCharactersMapSize, index + 48);
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
    allowedCharactersMapSize = allowedCharactersMap.size;
    for (let index = 0; index < specialCharCount1; index++) {
      allowedCharactersMap.set(index + allowedCharactersMapSize, index + specialCharStart1);
    }
    allowedCharactersMapSize = allowedCharactersMap.size;
    for (let index = 0; index < specialCharCount2; index++) {
      allowedCharactersMap.set(index + allowedCharactersMapSize, index + specialCharStart2);
    }
    allowedCharactersMapSize = allowedCharactersMap.size;
    for (let index = 0; index < specialCharCount3; index++) {
      allowedCharactersMap.set(index + allowedCharactersMapSize, index + specialCharStart3);
    }
    allowedCharactersMapSize = allowedCharactersMap.size;
    for (let index = 0; index < specialCharCount4; index++) {
      allowedCharactersMap.set(index + allowedCharactersMapSize, index + specialCharStart4);
    }
  }

  const iterator1 = allowedCharactersMap[Symbol.iterator]();

  for (const item of iterator1) {
    console.log(item);
  }
  return allowedCharactersMap;
}//End loadAllowedCharactersMap(isLowercase, isUppercase, isNumeric, isSpecial)

