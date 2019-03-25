//6 different ypes of data types for js, this will cover 5 of them

/**
 * Booleans
 * booleans can represent: true/false, yes/no, on,off
 */
let i = true;
let j = false;
//keyword for booleans- no quotation marks needed

let on = true;
console.log(on); //true
let off = false
console.log(off); // off

/**
 * NULL
 * Null= empty value ( not 0, not undefined)
 * it is like an empty container, nothing is in it, but it still exists
 */
let empty = null;
console.log(empty); //null

/**
 * Undefined
 * means no value has been assignment (not even an empty container)
 * undefined is not an error
 */
let undef = undefined; //dont do this
console.log(undef);

let grass; //undefined, easier to fine without the setting of undefinition
console.log(grass);

/*
Null vs. Undefined 
******************
Null is like a container with nothing in it
Undefined is when a variable has never been set, or hasnt been created yet. 
*/

/**
 * Numbers
 * numbers are exactly what they sound like, numbers. in JS, you dont need anything special to write them.
 */
let degrees = 90;
console.log(degrees);
let precise = 999999999999999 //15 9's
console.log(precise); //really freakin long

let rounded = 9999999999999999; //16 9's
console.log(rounded); //it rounds up after it reaches over 15 numbers

let notQuite = 0.2 + 0.1; //js has limit on its decimals as well
console.log(notQuite); //js is not the best for intricate maths and longer numbers

let a = '123' //acts like text, not a number, called a string
let b = Number(a); //this will switch it to a number, called a method
console.log(b);

/**
 * Strings
 * Strins are datatypes used to represent text and are wrapped in either a single or double quote
 * Strings are primative datatype. This also includes numbers, booleans, null, undefined, and other.
 */
let stringOne = "double quotes";
let stringTwo = 'single quotes'; //both quotes work, just gotta keepem straight.
console.log(stringOne, stringTwo); //must have a comma, it gives a space

let first = 1050 + 100; //makes first 1150, can do math whenever
let second = '1050' + '100'; //doesnt do math, just prints both the numbers, without a space between them
console.log(first);
console.log(second);

let firstName = 'Becky';
let lastName = "Mantlo";
console.log(firstName + lastName); //this will print with no space
console.log(firstName + ' ' + lastName); //this will have a space in it, spaces are also treated as a 'text' i guess? you can also create a space by putting on in the variables themselves, but this may not be ideal
//you can also just use a comma
console.log(firstName,lastName); //niceeee

/**
 * Objects
 * this that have mutliple values/datatypes
 */
let car1 = {
    color: 'red',
    tires: 4,
    Extras: 'A/C and Radio',
    cool: true, //lol
} // use , not ;
console.log(car1); //returns everything, including the curly brackets
console.log(car1.color); //this calls more specific things within the object
console.log(typeof car1); //tells us what it is, prints 'object'

/**
 * Arrays
 * arrays are containers that hold lists of items
 */
    let list = [ 'item1', 'item2', 'item3', 'item4'];
//        1    2    3
//1-name of the array, or list
//2-the array is inside square brackets
//3- each item, regardless of type

//values are separated by comma
let burritos=['large', 4, true];
console.log(burritos); //prints the whole array
console.log(typeof burritos); //counts as an object
/*********************************************** 
*Addition vs. Concatenation
*********************************************************/
let x = 10;
let y = 15;
console.log(x + y); // does math automatically

let third = 1050 + '100';
console.log(third); //concatenate its, not math, prints together ish
console.log(typeof third);//counts as a string, because a string cannot be a number, and the number can be a string. i guess, converts the number to be a string to print

//challenge
let fName = "Becky";
let lName = 'Mantlo';
let houseNumber = 7325;
let street = 'East County Road '+ 800 + ' North';
let city= "Brownsburg";
let state = "Indiana";
let zipcode = 46112; 
console.log(fName,lName +', ' + 7325, street + ', '+ city +', ' +state, zipcode + '.');

/**
 * Strings - Properties
 * properties are qualities associated with a datatype
 * strings have properties, or qualities associated with that string
 * the length of a string is a property
 */
let myName = 'becky mantlo';
console.log(myName.length);//prints the number 12, there are 12 characters in the string, spaces count

/**
 * Methods
 * Methods are like tools that can helps us manipulate our data.
 * .property and .methods() *no parenthesis for properties
 */
let myNameIs = 'becky';
console.log(myNameIs.toUpperCase()); //print all caps
//different datatypes can have different methods

let home = 'my home is in brownsburg';
console.log(home.includes('brownsburg')); //if this string has the included, ie brownsburg, then it prints true or false

let thisIs= "This is a string of many words";
let firstSplit = thisIs.split(" ");
console.log(firstSplit); //splits the string into an array (in square brackets), depending on the split locations, such as (" "). removes every space and separates the rest.

let thisIs2= "This is a string of many words";
let firstSplit2 = thisIs2.split("s");
console.log(firstSplit2); //replaced the space with the letter s, removes s and splits at where the s was.
