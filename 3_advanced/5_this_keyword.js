console.log(this); // -> globally this points to window

function abcd(){
    console.log(this); // -> in dunction also this points to window
}

abcd();


// but in object methods it points to its parent object

var obj = {
    name : "nitish",
    mentor : function(){console.log(this);} // -> now this will point to its parent object which is obj
}

obj.mentor();