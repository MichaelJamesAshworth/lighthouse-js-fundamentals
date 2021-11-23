/*function makeLine(length) {
    let line = "";
    for (let j = 1; j <= length; j++) {
        line += "*";
    }
    return line + "\n";
}

function buildTriangle(input) {
    let triangle = "";
    let lineNumber = 1;
    for (lineNumber = 1; lineNumber <= input; lineNumber++) {
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}

console.log(buildTriangle(10)); //Test code
//console.log(makeLine(10)); //test code
*/
/*
let catSays = function(max) {
    let catMessage = "";
    for (let i = 0; i < max; i++) {
        catMessage += "meow";
    }
    return catMessage;
};
console.log(catSays(2));
*/

/*let sound = "";
let laugh = function(num) {
    for (let x = 0; x < num; x++) {
        sound = sound + "ha";
    }
    sound = sound +"!";
    return sound;
}
console.log(laugh(10));
*/

/* let cry = function crySound() {
    let sound = "boohoo!";
    return sound;
};
console.log(cry()); 
*/

/*
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}


emotions("happy", function(num) { //The second argument here is known as an inline function expression
    let sound ="";
    for (let x = 0; x < num; x++) {
        sound = sound + "ha";
    }
    sound = sound +"!";
    return sound;
});
*/

/*
// Use the array's forEach() method to loop over the following 
// array and add 100 to each of the values if the value is divisible by 3.

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function(element, index) {
    if (element % 3 === 0) {
        test[index] = test[index] + 100;
    }
});
console.log(test);
*/

/*
var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

let totals = bills.map(function(element) {
    element = element * 1.15;
    element = element.toFixed(2);
    element = Number(element);
    return element;
});
console.log(totals);
*/

/*
//Nested for loop with arrays
// Use a nested for loop to take the numbers array below and replace all of the values 
// that are divisible by 2 (even numbers) with the string "even" and all other numbers 
// with the string "odd".
var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for (let row = 0; row < numbers.length; row++) {
    for (let column = 0; column < numbers[row].length; column++) {
        if (numbers[row][column] % 2 === 0) {
            numbers[row][column] = "even";
        } else {
            numbers[row][column] = "odd";
        }
    }
}
console.log(numbers);
*/
 /*
var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function () {
        console.log("Welcome! Your balance is currently " +savingsAccount.balance+ " and your interest rate is " +savingsAccount.interestRatePercent+ "%.");
    }
};

console.log(savingsAccount.printAccountSummary());
*/

/*
// OBJECT EXAMPLE WITH SIMPLE FUNCTIONS:
//Directions:
// Create an object called facebookProfile. The object should have 3 properties:
// your name
// the number of friends you have, and
// an array of messages you've posted (as strings)

// The object should also have 4 methods:
// postMessage(message) - adds a new message string to the array
// deleteMessage(index) - removes the message corresponding to the index provided
// addFriend() - increases the friend count by 1
// removeFriend() - decreases the friend count by 1
let facebookProfile = {
    name: "Michael Ashworth",
    friends: 33,
    messages: ["cool photo!", "you look stunning!", "How much?"],
    postMessage: function (message) {
        facebookProfile.messages.push(message);
    }
    deleteMessage: function (index) {
        facebookProfile.messages.splice(index, 1);
    }
    addfriend: function () {
        facebookProfile.friends++;
    },
    removeFriend: function () {
        facebookProfile.friends--;
    }
};
*/

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
  ];

  donuts.forEach(function (donut) {//we used a callback function here
      console.log(donut.type+ " donuts cost $" + donut.cost + " each"); 
  });
  //donut represents a single element of donuts array
  //donut is an object, therefor you can access its properties using a dotnotation


