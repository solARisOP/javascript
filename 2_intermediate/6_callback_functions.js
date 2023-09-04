// a callback function is like any normal function which is passed to a function and excutes when the function completes it execution
// like for example below function prints "here" that is a callback function, it waits till the setTimeout function completes its execution then it executes
// this all comes under asynchronous js 
// there can be many types of callback function 

setTimeout(function(){
    console.log("here")
},1000);