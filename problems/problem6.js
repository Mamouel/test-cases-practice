// pro tip: use nodemon instead of node
var assert = require('assert');

// we need 6 test cases. 
let inputs = [
  ["add", 10, 20],
  ["mult", 20, 10],
  ["add", 10, 200],
  ["sub", 20, 10],
  ["sub", 10, 20],
  ["spoof", 20, 10],
]

let outputs = [
  30,
  200,
  210,
  10,
  -10,
  undefined
]

/*
Use the operation argument to decide what this function will return. 
If it's "add", return the sum of the two numbers. "sub" return their difference. "mult" return their product.  
Anything else return undefined. 
For example:
f(["add", 10, 20]); // 30
f(["mult", 2, 3]); // 6
f(["spoof", 10, 10]); // undefined

*/
function f(arr) {
  if (arr[0] === "add") {
    return arr[1]+arr[2]
  } else if (arr[0] === "mult") {
    return arr[1]*arr[2]
  } else if (arr[0] === "sub") {
    return arr[1]-arr[2]
  } else return undefined
}


function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);




