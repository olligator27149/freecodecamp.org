//Multiply 
//is code does not execute properly. Try to figure out why.
function multiply(a, b){
    return a * b
  }

--------------------------------------------
//Training JS #1: create your first JS function and print "Hello World!"
//refer to the example and write your first JS function
function helloWorld() {
  var str = "Hello World!";
  console.log(str);
};

--------------------------------------------
//Remove First and Last Character
function removeChar(str){
  str = str.split('');
  str.shift();
  str.pop();
  return str.join('');
};

--------------------------------------------
//Sum of positive
function positiveSum(arr) {
  return arr.reduce((sum,i) => i > 0 ? sum + i : sum, 0);
 }

--------------------------------------------