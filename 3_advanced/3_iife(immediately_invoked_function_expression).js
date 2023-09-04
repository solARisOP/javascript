// a function which is invoked immediately when its created is called iife

var abcd = (function () {
    var a = 2; // iife function variables are private 

    return {  // returned an object to abcd with properties getter and setter, by which we can access function variables and change them
        getter: function () {
            console.log(a);
        },
        setter: function (x) {
            a = x;
        }
    }
})(); /* -> the first parenthesis wraps the function in it and make it a function expression,
 -> the second parenthesis tells the compiler to invoke it immediately and we can pass arguments to the function by this parenthesis */

abcd.getter();
abcd.setter(100); // this changes the private variable's value
abcd.getter();


// these iifes are made so that we can make private variables and no one can access it



