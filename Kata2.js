const conditionalSum = function(values, condition) {
  let matchingValues = 0;
  if (condition === "even") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        matchingValues = matchingValues +=values[i];
      }
    }
  } else {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0) {
        matchingValues = matchingValues +=values[i];
      }
    }
  }
  return matchingValues;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

 Alternative way of solving:
const conditionalSum = function(values, condition) {
  let sum = 0;
  if (condition === "even") {
    let evenNums = [];
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        evenNums.push(values[i]);
      }
    }
    for (let j = 0; j < evenNums.length; j++) {
      sum += evenNums[j];
    }
    return sum;
  } else if (condition === "odd") {
    let oddNums = [];
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 1) {
        oddNums.push(values[i]);
      }
    }
    for (let j = 0; j < oddNums.length; j++) {
      sum += oddNums[j];
    }
    return sum;
  }
};