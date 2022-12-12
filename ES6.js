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
