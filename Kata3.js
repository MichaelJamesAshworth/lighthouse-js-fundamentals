const numberOfVowels = function(data) {
  let vowelCount = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
      vowelCount++;
    }
  }
  return vowelCount;
};

console.log(numberOfVowels("orange")); //3
console.log(numberOfVowels("lighthouse labs")); //5
console.log(numberOfVowels("aeiou")); //5

// Solving Logic

// create an empty variable to count vowels = vowelCount;
// iterate through the string (data) and count the vowels
// conditional statement for vowels, if present, increment vowelCount variable
// 
// 