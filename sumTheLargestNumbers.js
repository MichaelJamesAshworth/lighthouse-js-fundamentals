const sumLargestNumbers = function(data) {
  let largestNumberOne = 0;
  let largestNumberTwo = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largestNumberOne) { 
      largestNumberOne = data[i];
    } for (let x = 0; x < data.length; x++) {
      if (data[x] < largestNumberOne && data[x] > largestNumberTwo) {
        largestNumberTwo = data[x];
      }
    }
  }
  return largestNumberTwo + largestNumberOne;
};

console.log(sumLargestNumbers([1, 10])); //expected output 11
console.log(sumLargestNumbers([1, 2, 3])); // expected output 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // expected output 126

// Soliving Logic
// Create 2 variables to store the two largest numbers
// iterate through the array of 2 or more numbers using a nested for loop (since we need to compare the two highest numbers)
// provide conditional statement to determine if index being iterated is the largest number
