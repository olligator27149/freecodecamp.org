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

  ---------------------------------------
  //comparison-with-the-strict-inequality-operator

// Setup
function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

---------------------------------------
  //comparison-with-the-greater-than-operator
  function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

---------------------------------------
//comparison-with-the-greater-than-or-equal-to-operator
function testGreaterOrEqual(val) {
    if (val>=20) {  // Change this line
      return "20 or Over";
    }
  
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

---------------------------------------
  //comparison-with-the-less-than-operator
  function testLessThan(val) {
    if (val<25) {  // Change this line
      return "Under 25";
    }
  
    if (val<55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);

---------------------------------------
  //comparison-with-the-less-than-or-equal-to-operator
  function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);

  ---------------------------------------
  //comparisons-with-the-logical-and-operator

  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val>=25&&val<=50) {
        return "Yes";
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);

  ---------------------------------------
  //comparisons-with-the-logical-or-operator
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10||val>20) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);

  ---------------------------------------
  //introducing-else-statements
  function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";}
      else { 
        (val <= 5);
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);

  ---------------------------------------
  //introducing-else-if-statements
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    }
    else {
      return "Between 5 and 10";
    }
  }
  testElseIf(7);

  ---------------------------------------

//logical-order-in-if-else-statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

---------------------------------------
//chaining-if-else-statements
function testSize(num) {
  // Only change code below this line
if (num < 5) {
  return "Tiny";
} else if (num < 10) {
  return "Small";
} else if (num < 15) {
  return "Medium";
} else if (num < 20) {
  return "Large";
} else if (num >= 20) {
  return "Huge";
} else return "Change Me";
  // Only change code above this line
}

testSize(7);

---------------------------------------
//golf-code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1) {
  return "Hole-in-one!";
} else if (strokes <= par - 2) {
  return "Eagle";
} else if (strokes <= par - 1) {
  return "Birdie";
} else if (strokes == par) {
  return "Par";
} else if (strokes == par + 1) {
  return "Bogey";
} else if (strokes == par + 2) {
  return "Double Bogey";
} else if (strokes >= par + 3) {
  return "Go Home!";
}

  // Only change code above this line
}

golfScore(5, 4);

---------------------------------------
//selecting-from-many-options-with-switch-statements
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
  return "alpha";
  break;
  case 2:
  return "beta";
  break; 
  case 3:
  return "gamma"; 
  break;
  case 4:
  return "delta";
  break;
}



  // Only change code above this line
  return answer;
}

caseInSwitch(1);

---------------------------------------
//selecting-from-many-options-with-switch-statements
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
  return "alpha";
  break;
  case 2:
  return "beta";
  break; 
  case 3:
  return "gamma"; 
  break;
  case 4:
  return "delta";
  break;
}



  // Only change code above this line
  return answer;
}

caseInSwitch(1);

---------------------------------------
//adding-a-default-option-in-switch-statements
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
    break;
}



  // Only change code above this line
  return answer;
}

switchOfStuff(1);

---------------------------------------
//multiple-identical-options-in-switch-statements
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
  case 2:
  case 3:
    return "Low";
  
  case 4:
  case 5:
  case 6:
    return "Mid";
   
  case 7:
  case 8:
  case 9:
    answer = "High";
    
  // Only change code above this line
  return answer;
}
}
sequentialSizes(1);

---------------------------------------
//replacing-if-else-chains-with-switch
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line


switch (val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
}


  // Only change code above this line
  return answer;
}

chainToSwitch(7);

---------------------------------------
//returning-boolean-values-from-functions
function isLess(a, b) {
  // Only change code below this line
    return (a < b);

  // Only change code above this line
}

isLess(10, 15);

---------------------------------------
