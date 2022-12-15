---------------------------------------
    //compare-scopes-of-the-var-and-let-keywords
    function checkScope() {
      const i = 'function scope';
      if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
      }
      console.log('Function scope i is: ', i);
      return i;
    }

    ---------------------------------------
    //mutate-an-array-declared-with-const
    const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
s[0] = 2;
s[1] = 5;
s[2] = 7;
  // Only change code above this line
}
editInPlace();

---------------------------------------
//prevent-object-mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

---------------------------------------
//use-arrow-functions-to-write-concise-anonymous-functions
const magic = () => new Date;
//function() {
//  return new Date();
//};

---------------------------------------
//write-arrow-functions-with-parameters
const myConcat = (arr1, arr2) =>{
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

---------------------------------------
//set-default-parameters-for-your-functions
// Only change code below this line
const increment = (number, value=1) => number + value;

// Only change code above this line

---------------------------------------
//use-the-rest-parameter-with-function-parameters
const sum = (...args) => {
 
    return args.reduce((a, b) => a + b, 0);
  }

  ---------------------------------------
  //use-the-spread-operator-to-evaluate-arrays-in-place
  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

---------------------------------------
//use-destructuring-assignment-to-extract-values-from-objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  //const yesterday = HIGH_TEMPERATURES.yesterday;
  //const today = HIGH_TEMPERATURES.today;
  //const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  const {today, tomorrow} = HIGH_TEMPERATURES;
  // Only change code above this line

  ---------------------------------------
//use-destructuring-assignment-to-assign-variables-from-objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  
  const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
  // Only change code above this line

  ---------------------------------------
  //use-destructuring-assignment-to-assign-variables-from-nested-objects
  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    
  //const lowToday = LOCAL_FORECAST.today.low;
  //const highToday = LOCAL_FORECAST.today.high;
  const {today: {low: lowToday, high: highToday }} = LOCAL_FORECAST;
  // Only change code above this line

  ---------------------------------------
  //use-destructuring-assignment-to-assign-variables-from-arrays
  let a = 8, b = 6;

// Only change code below this line
[a, b] = [b, a];

console.log("a=" + a, "b=" + b);

---------------------------------------
//use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...shorterList] = list; // Change this line
    // Only change code above this line
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);

  ---------------------------------------
  //understanding-boolean-values
  function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }

  ---------------------------------------