
var sum = require("./sum");
var subs = require("./sub");
var mult = require("./mul");
var div = require("./div");

var firstOperand = +process.argv[2];
var secondOperand = +process.argv[3];

sum(firstOperand, secondOperand);
subs(firstOperand, secondOperand);
mult(firstOperand, secondOperand);
div(firstOperand, secondOperand);

const currentTime = new Date().toLocaleTimeString();
console.log("Current Time:", currentTime);
