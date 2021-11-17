function isOdd(num) {
  if (num % 2 !== 0) {
    let odd = "true"
    return odd;
  } else {
    let even = "false"
    return even;
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
