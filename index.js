var inquirer = require('inquirer');
var Word = require('./word');


var test = new Word('horse');
console.log(test);
test.wordDisp();
test.guess('r');
console.log(test);