// .split() splits a string at a determine point and turns it into an Array
// .reverse() reverses the contents/ index of an Array
// .join() joins an array at a deterine point into a string

// concat()
// Puts multiple arrays together and returns a single array
// includes()
// Returns true if the given value is found in the array. Otherwise, returns false
// indexOf()
// Returns the first index location of the given character in the array if present. Returns -1 if not found.
// lastIndexOf()
// Returns the last index location of the given character in the array if present. Returns -1 if not found.

//.map(); Map takes an array, applies a callback function to each element, and returns the result as a new array.
var numbers = [0,1,2,3,4,5,6,7,8,9];
let numbersTwo = numbers.map(x => x * 3) //takes each of the elements of the array and multiplies them by 3
console.log(numbersTwo); //[0, 3, 6, 9, 12, 15, 18, 21, 24, 27]

//.splice() makes a copy of part of an array
var numbers = [0,1,2,3,4,5,6,7,8,9];
console.log(numbers);

//First number is start.
//Second number is end. It will not print the end.
var numbersTwo = numbers.slice(0,3);
console.log(numbersTwo);

//We made a shallow copy, so the 
//original array is still in tact.
console.log(numbers);

var numbersThree = numbers.slice(4,9);
console.log(numbersThree);

//Splice() allows elements to be added or removed from an array

let newArray = ['a', 'b', 'c', 'd', 'e']
console.log(newArray); //[a, b, c, d, e]

newArray.splice(0, 2, 'abc'); //first number is the start index, second number is the number of elements to remove (optional), 3rd parameter is the value to place at the start index
console.log(newArray); //['abc', 'c', 'd', 'e']

newArray.splice(3, 1)//removes 1 element at index 3; in this case 'e'
console.log(newArray); ////['abc', 'c', 'd']

newArray.splice(1, 'xyz'); //adds the string 'xyz' at index 1
console.log(newArray); //['abc', 'xyz', 'c', 'd']