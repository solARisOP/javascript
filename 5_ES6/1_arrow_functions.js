// old js has three types of functions
// -> function statement
// -> function expression
// -> anonymous functions

// new js has only one type which is called fat arrow function
// we can write fat arrow function in threeways

// basic fat arrow function
var a = ()=>{};

// fat arrow function with one parameter
var b = param=>{console.log(param)}; // for only one parameter we dont have to put parenthesis, but if we want we can
b(21);
// fat arrow function with implicit return;
var c = ()=> 2; // if we don't put curly braces after arrow then the value after curly braces is returned automatically

console.log(c(21));