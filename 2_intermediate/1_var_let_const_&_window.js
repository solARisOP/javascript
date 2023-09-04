// var is in old js and let & const are in new js
// var is function scoped and let & const are braces scoped
// var adds itself to the window object and let & const are not added to the window object

// browser context api provides us with three things window, stack and heap memory
// window object is an object which contains features which are not present in js but are provided by the browser to us
// stack and heap memory are as same as in diff languages

function abcd()
{
    for(var i=0; i<10; i++)
    {
        console.log(i);
    }
    console.log(i); //i can be also used here coz var is function scoped and the for loop is inside the function so yes it can also be used outside the for loop
    
    for(let x=0; x<10; x++)
    {
        console.log(x);
    }
    console.log(x); // x can't be used here coz let is braces scoped and we have declared it inside for loop so it can't be used outside it's braces
}

abcd()

var a =1;

