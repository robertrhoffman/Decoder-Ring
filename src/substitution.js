// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  let theAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function substitution(input, alphabet, encode = true) {
      if (!alphabet || alphabet.length !=26) return false;
      for (let i=0; i< input.length; i++) {
        if (alphabet.indexOf(input[i]) != alphabet.lastIndexOf(input[i]))
          return false;
      }
    if (encode) return newEncode(input, alphabet);
      return newDecode (input, alphabet);
  }
  
  function newEncode(input, alphabet) {
   let newCode = [];
  input = input.toLowerCase();
  for (let i=0; i<input.length; i++) {
    let codeIndex = theAlphabet.indexOf(input[i]);
    let codeLetter = alphabet[codeIndex];
    if (codeIndex <0) {
      newCode.push(input[i]);
    }
    newCode.push(codeLetter);
  }
  return newCode.join("");
}
  
  function newDecode(input, alphabet) {
    let newDecode = [];
    for(let i=0; i<input.length; i++) {
      let decodeIndex = alphabet.indexOf(input[i]);
      let decodeLetter = theAlphabet[decodeIndex];
      if (decodeIndex <0) {
        newDecode.push(input[i]);
      }
      newDecode.push(decodeLetter);
    }
    return newDecode.join("");
  }
                            

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
