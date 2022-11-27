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



