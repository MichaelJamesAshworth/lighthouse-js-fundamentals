//ARRAYS

// PUSH METHOD
// The push() method will add whatever parameter that's passed to
// the method onto the end of an array. For example:
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];
donuts.push("powdered"); // pushes "Powedered" to the end of the array.
// The push method will also return (not print, but return) 
// the new length of the array in case you need to use that value.


// POP METHOD
// The pop() method works similar to the push method, however it
// removes the last element of an array. Note that you do not
// need to pass a parameter in order for the pop method to work.
// For example:
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"];

donuts.pop(); // pops "powdered" off the end of the `donuts` array
donuts.pop(); // pops "sprinkled" off the end of the `donuts` array
donuts.pop(); // pops "cinnamon sugar" off the end of the `donuts` array
// The pop() method will also return the value that was removed from the array
// in case you need to use it.


// SPLICE METHOD
// Splice() is another handy method that allows you to add and removed elements from
// anywhere within an array. Splice() lets you specify the index location to add new
// elements, as well as the number of elements you'd like to delete (if any).
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); 
// removes "chocolate frosted" at index 1 and adds "chocolate cruller" and 
// "creme de leche" starting at index 1
//Syntax breakdown:
arrayName.splice(arg1, arg2, item1, ..itemX);
// Arg1 = mandatory. Specifies the starting index to add/remove items. You can
// also use a negative value to specify the position from the end of the array.
// For example, -1 specifies the last element.

// Arg2 = optional. specifies the count of elements to be removed. If set to 0, no items
// will be removed.

// item1, itemX are the items to be added at index position specified in Arg1.
// Splice() method returns the item(s) that were removed.

// LOOPING THROUGH ARRAYS
// FOR loop example: 

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}
// donuts array: ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]
// In this example, the variable i is being used to represent the index of the array. 
// As i is incremented, you are stepping over each element in the array 
// starting from 0 until donuts.length - 1 (donuts.length is out of bounds).

// forEach() example:
forEach(function (element, index, array) {

}); // Lines 62-64 is an example of an inline function using forEach

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut){
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

// PRINTS:
// JELLY DONUT HOLE
// CHOCOLATE DONUT HOLE
// GLAZED DONUT HOLE

// Another forEach() example:
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

//PRINTS:
// Word 0 in cat,in,hat is cat
// Word 1 in cat,in,hat is in
// Word 2 in cat,in,hat is hat

// map() example:
// map() is similiar to the forEach() method however it returns a completely new array 
// instead of modifying the pre existing one
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

// PRINTS [ 57.76, 21.99, 39.11, 115.13, 13.97, 11.38, 33.48, 14.94, 11.5, 114.1, 
// 117.53, 115.11, 7.79, 2.55 ]

// Arrays in Arrays
// Example:
var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

// here, donutBox.length refers to the number of rows of donuts
for (var row = 0; row < donutBox.length; row++) {
  console.log(donutBox[row]);
}
// PRINTS:
// ["glazed", "chocolate glazed", "cinnamon"]
// ["powdered", "sprinkled", "glazed cruller"]
// ["chocolate cruller", "Boston creme", "creme de leche"]

// Since each row is an array of donuts, you next need to set up an inner-loop 
// to loop over each cell in the arrays.
for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}
// PRINTS:
// "glazed"
// "chocolate glazed"
// "cinnamon"
// "powdered"
// "sprinkled"
// "glazed cruller"
// "chocolate cruller"
// "Boston creme"
// "creme de leche"

