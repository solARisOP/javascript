function def() {
    fetch('https://randomuser.me/api/')
        .then(function (raw) {
            return raw.json();
        })
        .then(function (data) {
            console.log(data)
        })
}

def();

// the above code can be simplified to async await below
// to make async await
async function abcd() // we have to put async at the parent of then
{
    let raw = await fetch('https://randomuser.me/api/'); // we have to remove then and write await then this will be in the side stack and after fetching the data from url this code will execute
    let ans = await raw.json(); // after previous code executes this will execute
    console.log(ans); // this is sync code but this will also execute after previous code coz the variable we are printing here is dependent on the async code above
}

// async await is for removing then blocks
abcd();