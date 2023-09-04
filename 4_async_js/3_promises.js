// in async process there are three things 
// -> pending state - the process is still executing
// -> resolve state - the process is resolved and returned an answer (then block)
// -> reject state - it returned an error (catch block)

var ans = new Promise((res, rej) => {
    var a = Math.floor(Math.random() * 10);

    if (a < 5) {
        return res();
    }
    else {
        return rej();
    }
});


// don't be confused by below code its the actual syntax for then and catch

ans
.then(function () { console.log("below"); })
.catch(function () { console.log("above"); }) // these are the two functions inside then and catch block which acts as res and rej
// if the value is below 5, the promise will be resolved, and the then callback will be executed. If it's above or equal to 5, the promise will be rejected, and the catch callback will be executed.