var arr = [1,2,3,4,5];

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(0); // for adding element at the front of an array, it also returns the length of the array after adding the element
console.log(arr);

arr.shift();// it removes the element at the front of the array and returns it
console.log(arr);

arr.splice(2, 1); // removes the element from any index of the array , for example here removing from second index and removing only one element
console.log(arr);
