var x = 31;
function abcd(a) // it is a impure function it gives diff output for the same input and it changes the value of a global variable
{
    x = 9;
    return Math.random()*a;
}

a1 = abcd(2);
console.log(a1);

a2 = abcd(2);
console.log(a2);

function def(a, b) // it is a pure function it gives same output for the same input and it doesn't change any global variables
{
    return a*b;
}

b1 = def(1,2);
console.log(b1);

b2 = def(1,2);
console.log(b2);