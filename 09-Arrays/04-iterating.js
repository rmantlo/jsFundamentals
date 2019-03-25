//iterating is the act of repeating an action

let newArray = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < newArray.length; i++) //i increases after each iteration; forces the loop to break once i reaches the value of newArray.length
{
    console.log(newArray[i]); //prints the value of the element at index i each iteration
}

//havent learned for while arrays yet
while (let i < newArray.length)
{
    console.log(newArray[i]);
    i++; //i increases after printing each time
}       //looks like the 'while' loop states, while this is true, and you can place an action within the loop that changes the let value?


do {
    console.log(newArray[i]);
    i++;
} while (let i < newArray.length);



//standard syntax
newArray.forEach(function(index) {
    console.log(index);
});

//arrow function
newArray.forEach(index => console.log(index));


// Create a new array with 5 elements. Use each of the above to print each element to the console.
// Create a new blank array. Use one of the types of loops to iterate over the first array and push each value into the second array.
// Try to iterate over the first array with a do/while loop. Print each element to the console.


let dogs = ['beagle','lab','pitbull','bulldog','chihuahua'];
let cats =[];
// for ( i = 0; i < 5 ; i++){
//     cats.push(dogs[i]);
//     console.log(cats);
// }
let i = 0;
while ( i < dogs.length ){
    
    cats.push(dogs[i]);
    i++;
}
console.log(cats);
//this wont work? i is not defined?


