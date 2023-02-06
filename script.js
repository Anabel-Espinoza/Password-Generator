// Assignment code here

let numberBank = "1234567890"
let lowercaseBank = "abcdefghijklmnopqrstuvwxyz"
let uppercaseBank = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let symbolBank = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
let passwordText = document.querySelector("#password")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function generatePassword() {
// Reset password display before each password is generated
  let characterBank = ""
  let password = ""
  // User prompts
  var passwordLength = window.prompt ("Enter password lenght (8-128 characters)")
    if (passwordLength<8 || passwordLength>128) {
      window.alert ("Password length must be between 8-128 characters")
    } else {
      let useLowercase= window.confirm ("Click OK to include lowercase characters")
      if (useLowercase) {
        characterBank += lowercaseBank
      }
      
      let useUppercase  = window.confirm ("Click OK to include uppercase characters?") 
      if (useUppercase) {
        characterBank += uppercaseBank
      }

      let useNumbers=  window.confirm ("Click OK to include numbers")
      if (useNumbers) {  
        characterBank += numberBank
      }

      let useSymbols = window.confirm ("Click OK to include symbols")
      if (useSymbols) {  
      characterBank += symbolBank
       }  
       // user prompt validation
      if (useLowercase === false && useUppercase === false && useSymbols === false && useNumbers === false) {
        window.alert ("At least one type of character must be selected")
      } else {
        // Password generation
        for (let i=0; i < passwordLength; i++) {
          let index = Math.floor(Math.random() * characterBank.length)
          password += characterBank[index]
        }
    }
  } 
  //Password display in the box
  passwordText.value = password;
}

// Generate password button
generateBtn.addEventListener("click", generatePassword);