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
//return-early-pattern-for-functions
// Setup
function abTest(a, b) {
  // Only change code below this line
if (a < 0) {
  return undefined;
} else if (b < 0) {
  return undefined;
}

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

---------------------------------------
//counting-cards
let count = 0;

function cc(card) {
  // Only change code below this line

switch (card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count--;
    break;
}
var hren = 'Hold';

if (count > 0) {
  hren = 'Bet';
}
  
return count + " " + hren;

  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

---------------------------------------
//build-javascript-objects
const myDog = {
  // Only change code below this line

  name: "Reks",
  legs: 4,
  tails: 1,
  friends: ["Oleg", "Bobik", "Dingodongo"]

  // Only change code above this line
};

---------------------------------------
//accessing-object-properties-with-dot-notation
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

---------------------------------------
//accessing-object-properties-with-bracket-notation
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj['an entree'];   // Change this line
const drinkValue = testObj['the drink'];    // Change this line

---------------------------------------
//accessing-object-properties-with-variables
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

---------------------------------------
//updating-object-properties
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
 myDog["name"] = "Happy Coder";
// Only change code below this line

---------------------------------------
//add-new-properties-to-a-javascript-object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
 myDog["bark"] = "gav-gav";

 ---------------------------------------
 //using-objects-for-lookups
 // Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line

  const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank",
    };
  result = lookup[val];


  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

---------------------------------------
//testing-objects-for-properties
function checkObj(obj, checkProp) {
  // Only change code below this line

if (obj.hasOwnProperty(checkProp)) {
  return obj[checkProp];
  } else {
    return "Not Found";
  }



  // Only change code above this line
}

---------------------------------------
//manipulating-complex-objects
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "album": "Only you",
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }, 
  {
    "artist": "the Beatles",
    "title": "Yeasterday",
    "release_year": 1965,
    "album": "Hren znaet",
    "formats": [
      "CD",
      "8T",
      "LP"
    ]
  }
];

---------------------------------------
//accessing-nested-objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};


const gloveBoxContents = myStorage.car.inside["glove box"];

---------------------------------------
//accessing-nested-arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

---------------------------------------
//record-collection
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
  return records;
}


updateRecords(recordCollection, 5439, 'artist', 'ABBA');

---------------------------------------
//iterate-with-javascript-while-loops
// Setup
const myArray = [];
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}

// Only change code below this line

---------------------------------------
//iterate-with-javascript-for-loops
// Setup
const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}
// Only change code below this line

---------------------------------------
//iterate-odd-numbers-with-a-for-loop
// Setup
const myArray = [];
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
// Only change code below this line

---------------------------------------
//count-backwards-with-a-for-loop
// Setup
const myArray = [];
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
// Only change code below this line

---------------------------------------
//iterate-through-an-array-with-a-for-loop
// Setup
const myArr = [2, 3, 4, 5, 6];
for (let total = 0; total < 20; total++) {
   console.log(myArr[total]);
}

// Only change code below this line

---------------------------------------
//nesting-for-loops
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
 for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

---------------------------------------
//iterate-with-javascript-do---while-loops
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 5);

---------------------------------------
//replace-loops-using-recursion
function sum(arr, n) {
  // Only change code below this line
if (n <= 0) {
      return 0;
    } else {
      return arr[n - 1] + sum(arr, n - 1);
    }
  // Only change code above this line
}

---------------------------------------
//profile-lookup
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line

  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
  // Only change code above this line


lookUpProfile("Akira", "likes");

---------------------------------------
//generate-random-fractions-with-javascript
function randomFraction() {

  // Only change code below this line
   return (Math.random() * 1);

  // Only change code above this line
}

---------------------------------------
//generate-random-whole-numbers-with-javascript
function randomWholeNum() {

  // Only change code below this line
  
	return Math.floor(Math.random()*10);

  }
  
  ---------------------------------------
  //generate-random-whole-numbers-within-a-range
  function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
  }

  ---------------------------------------
  //use-the-parseint-function
  function convertToInteger(str) {

    return parseInt(str)
    }
    
    convertToInteger("56");

    ---------------------------------------
    