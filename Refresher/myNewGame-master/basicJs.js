console.log(fullName);
// Hoisting
var fullName = "Siddharth sharma";

// Temporal Dead Zone
let a = 2;
const b = 5;
console.log(a);
console.log(b);
const arra = [];
console.log(arra);
const as = [];
console.log(arra === as);

printFullName();

// How to declare a function in js
function printFullName() {
  console.log(fullName);
}
// printFullNameUsingExpression();

// Function Expression
var printFullNameUsingExpression = function () {
  console.log(fullName);
};

// Arrow Function
var printFullNameusingArrow = () => {
  console.log(fullName);
};
var normal = (parameter) => {
  console.log(parameter);
};

normal("Argument");
