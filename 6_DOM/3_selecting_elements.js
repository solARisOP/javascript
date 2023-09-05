var h = document.querySelectorAll("h1"); // selects all elements of type h1 and puts them into a nodelist

h.forEach((val) => {
    console.log(val); 
})

var k = document.getElementById("kop"); // selecting elements by id
var x = document.getElementsByClassName("xap"); // selecting elements by class

console.log(k);

k.innerHTML = "<h2>aja re</h2>"; // this can change the particular element with the element type
k.textContent = "nhi re tu aa"; // this will only change the text content