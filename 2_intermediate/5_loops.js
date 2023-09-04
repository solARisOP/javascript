
// foreach loop is for looping on array's elements, a real copy of value is passed to the function for each element in the array
var a = [1,2,3,4,5];
a.forEach(function(val){
    console.log(val+2);
});

// forin loop is for looping on objects 
var rao = {
    name : "nitish",
    age : 22,
    sex : "M",
    profession : "coder",
}

for(var key in rao) // key are nothing but properties of the object
{
    console.log(key,":", rao[key]) // and this tells us the value of the particular property of this particular object
                                   // and remember that this array like syntax for object property value access only works here coz the traditional syntax doesnot work here
}

b = 0
do{
    console.log(b++);
}while(b<15);

