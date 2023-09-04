// primitives and references

var a = 12; // primitive, if it is copied then a copy of its value is passed
var b = [1,2]; // reference, if it is copied then its reference is passed

// any variables with brackets is reference variables () [] {}
// any normal variables are primitive variables

//primitive
var c = 2;
var d = c; // copy is passed
d = 4; // only d's value is changed, the value of c remaines as it was before

// reference
var x = [1,2,3];
var y = x; // reference is passed
y[1] = 10; // it also changes x[1] to 10



