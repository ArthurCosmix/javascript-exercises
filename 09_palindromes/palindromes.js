const palindromes = function (words) {
    const palindromesWord = words.toLowerCase().replace(/[^a-z0-9]/g, "")
    return palindromesWord.split("").reverse().join("") == palindromesWord
  };
  
// Do not edit below this line
module.exports = palindromes;
