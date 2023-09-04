var a = [231,4332,193,6784];

// actually in js the array are not arrays but in behind the scenes they are objects only, with key-value pairs starting from key 0
// the above array is actually like below in behind the scenes
var a = {
    0 : 231,
    1 : 4332,
    2 : 193,
    3 : 6784
}


var b = [1,2,3,4];
b[-1] = 39 // so that's why we can store negative indexes too in the js arrays

console.log(b);

Array.isArray(b) // this returns true if its an array or else false


var rao = {
    name : "nitish",
    age : 22
}

delete rao.age; // this is for deleting a property of an object

