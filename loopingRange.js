const range = function (start, end, step) {
  let newArray = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return [];
  } 
  for (let i = start; i <= end; i += step) {
    newArray.push(i);
  }
  return newArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(0, 8, 2))