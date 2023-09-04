// setTimeout
// setInterval
// promises
// fetch
// axios
// XMLHttpRequest

// if we use any of the above methods in our code than it is called async code else it is sync code

// async code is a code in which we execute more than one number of tasks at once and then it executes in terms of speed and which ever first executes it gives us the answer then the and again the next
// sync code is a code when a task is executed when its previous task is completed , meaning code executes one by one not every task is executes at once 

// console.log("hey1");
// console.log("hey2");
// console.log("hey3");
// console.log("hey4");
// this executes one by one its sync code


console.log("hey1");
setTimeout(function(){console.log("hey2")}, 2000);
console.log("hey3");
// this is async code line 20 and line 22 will execute line 22 will not wait for 21, 21 will execute when its time out is over in this case 



/* If you think carefully then its not executing two codes at once coz js is single threaded not multithreaded. What it does is 
   it uses two stacks main stack and side stack and when we use a async code it puts that code in side stack
   and in main stack all the main stack code is executing and after its execution it asks side stack that is your processing complete and if its completes it 
   brings it in main stack and executes it, this process is done by eventloop*/

// meaning js is not actually async its all a illusion or as we say a trick