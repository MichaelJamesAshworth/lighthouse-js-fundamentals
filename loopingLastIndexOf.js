const lastIndexOf = function (array, value) {
  let indexHolder = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      indexHolder = i;
    } 
    }
    return indexHolder;
  }
  

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

// Solving Logic
// Create an empty variable to store the index of when the value occurs
// We need to loop through the array that's passed
// IF the element is the same value as the value passed, store the index
// ELSE if the element doesn't occur, make the variable === -1