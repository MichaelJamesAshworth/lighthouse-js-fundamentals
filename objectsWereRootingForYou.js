const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {
  let winner = "";
  let currentHighestMetric = 0;
  vegetables.forEach (function (object) {
    if (object[metric] > currentHighestMetric) {
      currentHighestMetric = object[metric];
      winner = item.submitter; //Cannot use dot notation for variables.
    }
  });
  return winner;
};

console.log(judgeVegetable(vegetables, metric));

// Solving Logic
// create an empty variable for the function to store/return in the end
// create a conditional based off of the metric
// loop through the vegetables object to determine best case, store in empty variable
// return the variable