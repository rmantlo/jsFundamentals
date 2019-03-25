/* What is a variable?  Variables are named containers for storing data values. 
  We name the variables so that we can refer to this data again.
*/

let a = 2; 
let A = 3;
//a and A are different variables
   let    b    =    1;
/* 1      2    3    4
*1 keyword
*2 variable name
*3 assignment opperator
*4 variable value
*/

var c = 2; //var is old school, using let is more common practice and have more specialties
/**********************************************************************************
 * Declarations
********************************************************************************/
/**declarations are the left side of a variable
 * it is simply the let or var x
 * it is on the left side of the assignment operator (=)
 * 
 * Initializations are the right side of the ariabel
 * It sets the value of the variable
 * it incorporates the variable name (x), the assignment aperator (=), and the value (10) =>
 */
let x;
console.log('declaration:' , x); //x is undefined, but not an error

x=10; //i the log above it is still undefined
console.log('Initialization:',x);

// let bananas;
// console.log(bananas);
// bananas = "This shit";
// console.log(bananas);

x=33;
console.log(x); //changed x to 33, first initialization is still the previous value

let today = "Great";
const elevenFifty ="Wonderful!"; //allows us to keep a value the same, wont let us/like us to reassign it
console.log(today, elevenFifty);

//elevenFifty = "Super";
//console.log(today, elevenFifty); 
//printout got mad, printed great wonderful! and then an error message