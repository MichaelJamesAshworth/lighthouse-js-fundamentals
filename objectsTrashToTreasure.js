let bins = {
  waste: 0,
  recycling: 0,
  compost: 0
}

const smartGarbage = function (trash, bins) {
  if (trash === "waste") {
    bins.waste++;
    return bins;
  } else if (trash === 'recycling') {
    bins.recycling++;
    return bins;
  } else if (trash === "compost") {
    bins.compost++;
    return bins;
  }
};

//Use this code to test
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));