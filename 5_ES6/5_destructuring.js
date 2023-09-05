var a = [1,2,3,4];
var [b,c] = a; // taking first two values of a and putting into b and c
console.log(b);
console.log(c);

var [d,,e] = a // skipping second value and taking first and third value
console

var obj = {legend : "yes", age : 20};

var {age, legend} = obj; // but for object the variable name and the property name should be same
console.log(legend);
console.log(age);