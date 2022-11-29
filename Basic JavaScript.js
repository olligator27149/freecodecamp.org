//manipulate-arrays-with-push

// Setup
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
// Only change code below this line

-------------------------------------------

//manipulate-arrays-with-pop

// Setup
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop()
// Only change code below this line

-------------------------------------------

//manipulate-arrays-with-shift

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();

-------------------------------------------

//manipulate-arrays-with-unshift

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

-------------------------------------------

//shopping-list

const myList = [["Chocolate Bar", 15],
["Chocolate Bar", 15],
["Chocolate Bar", 15],
["Chocolate Bar", 15],
["Chocolate Bar", 15],
["Chocolate Bar", 15]
];

-------------------------------------------

//write-reusable-javascript-with-functions

function reusableFunction() {
    console.log("Hi World");
 }
 reusableFunction()

 ------------------------------------------

 //passing-values-to-functions-with-arguments

 function  functionWithArgs(x,y) {
    console.log(x + y);
  }
  functionWithArgs(1,2);
  
-------------------------------------------

//return-a-value-from-a-function-with-return

function timesFive(num) {
    return num * 5;
  }
  
  const answer = timesFive(10);
  
  -----------------------------------------

  //global-scope-and-functions

  // Declare the myGlobal variable below this line
const myGlobal = 10;

// Assign 5 to oopsGlobal Here
function fun1(num) {
  return num * 5;
}
const oopsGlobal = fun1(1);
// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

-----------------------------------------

//local-scope-and-functions
function myLocalScope() {
    // Only change code below this line
    const myVar = 5;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

  ---------------------------------------

//global-vs--local-scope-in-functions

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

---------------------------------------

//understanding-undefined-value-returned-from-a-function

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum = sum + 5;
}
// Only change code above this line

addThree();
addFive(0);

---------------------------------------

//assignment-with-a-returned-value

// Setup
let processed = 2;

function processArg(num) {
  return (num + 3) / 5;
}
// Only change code below this line

processed = processArg(7);

---------------------------------------

//stand-in-line

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift();
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  ---------------------------------------

//use-conditional-logic-with-if-statements

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
  
  
    // Only change code above this line
  
  }

  ---------------------------------------
  //comparison-with-the-equality-operator

  // Setup
function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

  ---------------------------------------
    //comparison-with-the-strict-equality-operator

// Setup
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);

  ---------------------------------------
  //practice-comparing-different-values

  // Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

  ---------------------------------------
  //comparison-with-the-inequality-operator

// Setup
function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);