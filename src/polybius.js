// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  
  
  function polybius(input, encode = true) {
   
      const alphabet = ["a","b","c","d","e","f","g","h","i/j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const polybius = [11,21,31,41,51,12,22,32,42,52,13,23,33,43,53,14,24,34,44,54,15,25,35,45,55];

 const lowInput = input.toLowerCase();
 let finalString = "";

  let spaceless = input.split(" ").join("");
  if(!encode && spaceless.length % 2 !==0) return false;
 
  if(encode === true) {
    for (let i=0; i < lowInput.length; i++) {
      if (lowInput[i] === " ") {
        finalString += " ";
      }
      else if (lowInput[i] === "i" || lowInput[i] === "j") {
        finalString += 42;
      }
      else {
        for (let j=0; j <alphabet.length; j++) {
          if (alphabet[j] === lowInput[i]) {
            finalString += polybius[j];
          }
        }
      }
    }
  }
    else {
      for (let i=0; i<lowInput.length; i+=2) {
        if(lowInput[i] === " ") {
          finalString += " ";
            i--;
        }
        else if ((lowInput[i] + lowInput[i+1]) == "42") {
          finalString += "(i/j)";
        }
        else {
         for(let j = 0; j < polybius.length; j++) {
          if ((lowInput[i] + lowInput[i+1]) == polybius[j]) {
              finalString += alphabet[j];
            }
          }
        }
      }
    }
    return finalString;
  }
  

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

