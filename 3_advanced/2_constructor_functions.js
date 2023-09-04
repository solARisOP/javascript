// functions which are invoked through new keyword and uses this keyword indside them to assign property values and methods are called constructor functions
// the contructor functions creates objects with the properties and methods which are assigned through this keyword 

function abcd(clr)
{
    this.color = clr;
    this.type = "solid";
    this.shape = "rectangle";
}

// new keyword creates a blank object for the constructor function which is getting called just after new keyword
var obj = new abcd("blue"); // a new object is created with properties color, type and shape 
var obj2 = new abcd("red"); // another object is created with red as its color property

console.log(obj);
