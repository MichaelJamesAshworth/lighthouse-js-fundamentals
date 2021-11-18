const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//Needs to have the following:
//Good stations have at least 20 capacity
//Good stations must be a school or community centre

//Solving Logic:
// create an empty array for good stations to be pushed to
// Loop through each stations array, determine if capacity/name satisfy requirements
//push the good stations to the empty array
const chooseStations = function(stations) {
  const goodStations = [];
  for (const station of stations) {
    const capacity = station[1];
    if (capacity > 20) {
      const type = station[2];
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));