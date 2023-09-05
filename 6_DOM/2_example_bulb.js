var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");

var flag =0;

btn.addEventListener("click", ()=>{
    if(!flag)
    {
        bulb.style.backgroundColor = "yellow";
        btn.innerHTML = "OFF";
        flag = 1;
    }
    else{
        bulb.style.backgroundColor = "transparent";
        btn.innerHTML = "ON";
        flag = 0;
    }
});