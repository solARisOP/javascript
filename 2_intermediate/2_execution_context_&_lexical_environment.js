

// context execution is a container which is made when a function is called it contains three things as follows:
// -> variables of the function
// -> function inside the function
// -> lexical environment - scope of the variables that the function can access like def can access a, but abcd can't access b coz of the scopes of the variables 

function abcd()
{
    var a = 100;
    function def()
    {
        b = 2;
        console.log(a+101); // it can access a 
    }
    def();
}

abcd();