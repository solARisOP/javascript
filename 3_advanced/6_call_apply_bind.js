function abcd(a, b, c)
{
    console.log(this, a, b, c);
}

var obj = {
    name : "nitish",
}

abcd.call(obj); // -> call will make sure that the this inside the function abcd points to obj 

abcd.call(obj, 1, 2, 3); // like this we can pass arguments too, but the first argument should be object if we invoke function through call


abcd.apply(obj, [1, 2, 3]); // apply allows us to only pass two arguments one is teh object and another is the array of all the arguments that the particular function accepts
// the function will not take array as an argument but the values inside it 

var def = abcd.bind(obj, 1,2,3) // it binds the object with the function and returns a new function which contains the object

def();