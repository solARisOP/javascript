// functions in js can be stored in variable and treated as values
// this concept is called first class function

function abcd(a)
{
    a();
}

abcd(function(){console.log("nitish");});

var b = function(){console.log("rao");}
b();