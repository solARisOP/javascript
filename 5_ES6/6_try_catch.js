
console.log("hey"); // this line will run without error
try
{
    console.log(hey); // this line will give error coz we don't have the variable of name hey
}
catch(err) // we are passing that error here in catch block
{
    console.log(err); // we are printing that error here, we don't have to print if we don't want
}
console.log("hey"); // this line will also run without error

// this basically what exception handeling is, if a line give error we pass that error to catch block and let the further code run