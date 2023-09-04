// a function which accepts a function in a parameter or returns it or does both is called higher order function

function abcd(val)
{
    val();
    return function(a){console.log(a*2);} // abcd returns a function
}

var def = abcd(function(){console.log("hello");}); // abcd takes this function as an argument

def(3); // the function that abcd returned we had stored that in def and using it now
