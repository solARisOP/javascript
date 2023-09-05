var a = [12, 65, 41, 6];
var b = [...a]; // spread

function abcd(a,b,c,...d) // rest, first three values will go to a,b and c and rest will go to d as an array
{
    console.log(a,b,c,d);
}

abcd(1,2,3,4,5,6,7,8,9);