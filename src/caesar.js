// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  
  function caesar(input, shift, encode = true) {
  const result = []
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
 
  //should ignore capital letters
  input = input.toLowerCase();
    
  //should return false if shift is 0, less than -25, greater than 25, or not present 
   if (!shift || shift === 0 || shift< -25 || shift > 25) {
    return false
    };
    
  // can encode or decode
  if (!encode) {
    shift = -shift
   };
  
    for (let i=0; i<input.length; i++) {
    let letter = input.charCodeAt(i);
    if (letter < 97 || letter > 122) {
      result.push(String.fromCharCode(letter))
    } else {
      letter += shift;
      if (letter >= 97 && letter <= 122) result.push(String.fromCharCode(letter));
      if (letter < 97)result.push(String.fromCharCode(123 - ( 97 - letter)));
      if (letter > 122)result.push(String.fromCharCode(96 + (letter - 122)));
    } 
}
   return result.join("");
 }
  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
