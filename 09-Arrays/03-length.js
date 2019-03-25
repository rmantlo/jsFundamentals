let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);           //property telling how long it is
                            //this prints 10, it has 10 values or datatypes


let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length) //length of 6 values
console.log(colors);
console.log(colors.toString()); //turns array into a string, removes the [ ]

let newColors = colors.toString();
console.log(newColors[2]); //prints the 3rd letter (2nd index) because it is now a string, not an array
console.log(typeof newcolors); //prints string


//Challenge
/**
 * make array, check to make it is an array
 * flip the values with in the array (was is index 4 should be 0, 3 to 1, etc)
 * using a method only print the values of the newly arranged array
 */

 let arr = [1,2,3,4,5];
if (arr instanceof Array === true){
    let revArr = arr.reverse();
    revArr.forEach(a => console.log(a));
}

//my crappy try: it worked, just less pretty
console.log(typeof arr, arr);
arr.forEach(x => {console.log(x);});
let newArr = arr.reverse();
 newArr.forEach( f => {console.log(f);});
