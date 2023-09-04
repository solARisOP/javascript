
console.log(c); // to use a variable before its even declared is called hoisting
var c= 3;

// how this works is javascript divide line 3 into two lines
// var c; // declaration
// c = 3; // initialization

// and then puts the declaration part on the top of the code which causes us to use the variable before its even declared by us.
// but as only the declaration part is moved up top of the code and not the initialization part the value it gives us while using it is undefined