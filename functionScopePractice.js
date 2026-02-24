//Task 1.1: sumArray//
let arrayNum = [4, 23, 9, 28];
//For test purposes://
//let arrayNum = [];

function sumArray(arrayNum) {
  let sumNum = 0;
  for (
    let i = 0;
    i < arrayNum.length;
    i++ //running through the array//
  ) {
    sumNum += arrayNum[i];
  }
  return sumNum;
}

if (arrayNum == "") //checking if array has values//
{
  console.log("0");
} else {
  console.log(sumArray(arrayNum)); //output//
}

//Task 1.2: variableScopeTest//

function functionVariable() {
  let variableScopeTest = `I am declared inside the function!`;
  //The message is diplayed with no issues//
  console.log(variableScopeTest);
}
functionVariable();
//Error message occurs: the variable is not declared//
console.log(variableScopeTest);

//Task 1.3: outerFunction//

function multiply(x, y) {
  //outside function//
  let answerOne = x * y;
  function divide(z) {
    //inside function//
    return answerOne / z; //using variable declared in outside function//
  }
  return divide;
}

let answerMultiply = multiply(5, 10); //populating outside function//
console.log(answerMultiply(2)); //populating inside function & output//

//Task 1.4: demonstrateGlobalVsLocal//

const variableTest = "I am a global variable"; //global variable//

function variable() {
  const variableTest = "I am a local variable"; //local variable//
  console.log(variableTest); //local var output//
}

console.log(variableTest); //global var output//
