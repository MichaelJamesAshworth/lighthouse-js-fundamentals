const howManyHundreds = function (bottles) {
  let calculation = bottles / 100;
  let filledContainers = Math.floor(calculation);
  return filledContainers;
  }

  console.log(howManyHundreds(1000), "=?", 10);
  console.log(howManyHundreds(894), "=?", 8);
  console.log(howManyHundreds(520), "=?", 5);
  console.log(howManyHundreds(99), "=?", 0);
  console.log(howManyHundreds(0), "=?", 0);