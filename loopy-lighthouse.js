//Test commit
const loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let result = "";

    if (i % multiples[0] === 0) {
      result += (words[0]);
    } if (i % multiples[1] === 0) {
      result += (words[1]);
    } console.log(result === "" ? i : result);
  }
};

console.log(loopyLighthouse([15,90], [2,5], ["Batty", "Beacon"]));



