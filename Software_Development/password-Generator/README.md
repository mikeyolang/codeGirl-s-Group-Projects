# Password Generator Documentation
*This document describes a JavaScript password generator that generates a random password based on the user's specified requirements.*

# Getting started
#### To use this password generator, include the following HTML code in your web page:
```
index.html
```
*This code will create a password generator form with input fields for specifying the password length, character types to include in the password, and buttons for generating and copying the password.*

# Variables
## The following variables are used in the JavaScript code:

`PwEl`: A reference to the HTML element that displays the generated password. <br/>
`copyEl`: A reference to the HTML button element used for copying the password to the clipboard. <br/>
`lenEl`: A reference to the HTML input element used for specifying the password length. <br/>
`upperEl`: A reference to the HTML checkbox element used for specifying whether to include uppercase letters in the password. <br/>
`lowerEl`: A reference to the HTML checkbox element used for specifying whether to include lowercase letters in the password. <br/>
`symbolEl`: A reference to the HTML checkbox element used for specifying whether to include symbols in the password. <br/>
`numberEl`: A reference to the HTML checkbox element used for specifying whether to include numbers in the password. <br/>
`upperLetters`: A string containing all uppercase letters that can be used in the password. <br/>
`lowerLetters`: A string containing all lowercase letters that can be used in the password. <br/>
`numbers`: A string containing all numbers that can be used in the password. <br/>
`symbol`: A string containing all symbols that can be used in the password. <br/>
# Functions
### The following functions are used in the JavaScript code:

`getLowercase()` <br/>
*This function returns a random lowercase letter from the lowerLetters string.*

`getUppercase()` <br/>
*This function returns a random uppercase letter from the upperLetters string.*

`getNumber()` <br/>
*This function returns a random number from the numbers string.*

`getSymbol()` <br/>
*This function returns a random symbol from the symbol string.*

`generatePassword()`
*This function generates a random password based on the user's specified requirements. It gets the password length from the lenEl input field, and then generates each character in the password by calling the generateX() function. The generated password is displayed in the PwEl element.*

`generateX()` <br/>
*This function generates a random character for the password based on the user's specified requirements. It uses the getLowercase(), getUppercase(), getNumber(), and getSymbol() functions to get a random character from the corresponding character set. It then returns a random character from the set of character types that the user has selected.*

# Event Listeners
*The following event listeners are used in the JavaScript code:*

`generateEl.addEventListener("click", generatePassword)` <br/>
*This event listener is attached to the "Generate Password" button, and calls the generatePassword() function when the button is clicked.*

`copyEl.addEventListener("click", () => { ... })`
*This event listener is attached to the "Copy Password"*
