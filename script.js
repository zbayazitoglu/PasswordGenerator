// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = prompt('Please specify the length of your password, minimum 10 max 64 characters')
  if (length < 10 || length > 64) {
    window.alert('Please make sure the characters are between 10 and 64 ')
    length = prompt('Please specify the length of your password, minimum 10 max 64 characters')
  }
  var lowerCase = prompt('Would you like lower-case characters in your password Y/n')
  if (lowerCase != 'n') {
    lowerCase = true
  }
  else {
    lowerCase = false
  }
  var upperCase=prompt('Would you like upper case characters in your password? Y/n')
  if (upperCase != 'n') {
   upperCase = true
  }
  else {
    upperCase = false
  }
  var numeric=prompt('Would you like numeric characters in your password? Y/n')
  if (numeric != 'n') {
   numeric = true
  }
  else {
    numeric = false
  }
  var special=prompt('Would you like pecial  characters in your password? Y/n')
  if (special != 'n') {
   special = true
  }
  else {
    special = false
  }
  var options = {
    length : length,
    uppercase: upperCase,
    lowercase: lowerCase,
    numeric: numeric,
    specialCharacter: special
  }
  return options;
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var paswlength = options.length;
  var generatedPassword = [];
  while(paswlength > 0) {
    if(options.lowercase && paswlength > 0) {
      generatedPassword.push(getRandom(lowerCasedCharacters));
      paswlength--;
    }
    if(options.uppercase && paswlength > 0) {
      generatedPassword.push(getRandom(upperCasedCharacters));
      paswlength--;
    }
    if(options.numeric && paswlength > 0) {
      generatedPassword.push(getRandom(numericCharacters));
      paswlength--;
    }
    if(options.specialCharacter && paswlength > 0) {
      generatedPassword.push(getRandom(specialCharacters));
      paswlength--;
    }
  }
  return generatedPassword.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);