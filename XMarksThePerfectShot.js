const moves = ["north", 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function(moves) {
  const startPosition = [];
  let xAxis = 0;
  let yAxis = 0;
  for (let move of moves) { 
    if (move === "north") {
      yAxis++;
    } else if (move === "south") {
      yAxis--;
    } else if (move === "east") {
      xAxis++;
    } else if (move === "west") {
      xAxis--;
    }
  }
  startPosition.push(xAxis);
  startPosition.push(yAxis);
  return startPosition;
}
console.log(finalPosition(moves));
finalPosition(moves);

// Solving Logic:
// Create an empty array to represent the starting position
// 
//We need to iterate through the moves array and change the value of the X and Y axis variables accordingly.
// The parade moves on X-Y grid. Therefore:
// Y-axis:
// North = ++
// South = --
// X-axis:
//  East = ++
//  West = --
// X === [0] while Y === [1]
// Create If..Else statement to increment
//Then push the X and Y variables to the startPosition array
// Make sure function returns startPosition as value