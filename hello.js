/*
const sayHello = function () {
  console.log("Hello, world");
}

sayHello();
*/

/*
//lets improve the functionality of this function
const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("caliban");
sayHello("Miranda");
sayHello("Ferdinand");
*/

//console.log sample:
const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole("John");

//return sample:
//Note that a return statement will not ouput anything to the console
//However, when a function returns a value, we can still console.log it later
const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello("John");
console.log(greeting); 