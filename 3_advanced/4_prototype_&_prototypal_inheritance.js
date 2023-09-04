var obj = {name : "nitish"};
// when we create an object it gets many other types of properties and methods which we dont make but js provides to us

console.log(obj.hasOwnProperty('name')); // like this method we didn't create it but js provides it
// what this method does is check whether a property exist in the object or not

var human = {
    canFly : false,
    canWalk : true,
    canWrite : true
}

var nitish = {
    DSA : true,
    ML : true,
    job : "inprocess"
}

nitish.__proto__ = human; // syntax for property inheritance, we inherite all properties of human in nitish

