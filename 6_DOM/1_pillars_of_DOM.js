// 1 - selecting an element
var a = document.querySelector("h1") // selecting an html element by its type
// var b = document.querySelector("#pox"); // selecting an html element by its id
// var c = document.querySelector(".last"); // selecting an html element by its class

console.log(a); // the whole element will be printed

// 2 - changing html
a.innerHTML = "hihhhih" // this will change the content of the particular element

// 3 - changing css
a.style.backgroundColor = "red"; // a is the element and style is for css, irrespective of what the name of css file is, we have to write style only here

// 4 - event listner
a.addEventListener("click", ()=>{ // we are adding a eventlistener to this element for the events that will happen on this element
                                  // event meaning clicking on it or dragging it etc.
                                  // first argument is for the event and second is the function we wanna execute after that event happens
                                  // like here if we click on this element on the website it will change its color, its html and its background color 
    a.style.backgroundColor = "black";
    a.style.color = "red";
    a.innerHTML = "i am the shadows";
});